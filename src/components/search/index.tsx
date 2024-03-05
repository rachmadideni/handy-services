import { useState, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ServicesContext, type ServiceContextType } from "@/provider/services";
import { paths } from "@/router";
import Scrollbar from "@/components/scrollbar";
import GlassIcon from "@/components/icons/glass";

import {
  SearchBarWrapper,
  Wrapper,
  Input,
  SearchResultContainer,
  ListResult,
  ListCategory,
} from "./index.styled";

export type SearchBarWrapperProps = {
  $isFocus: boolean;
  children: React.ReactNode;
};

type filteredServicesProps = {
  service: string;
  category: string;
};

type availableCategoriesProps = {
  category: string;
  services: string[];
};

const Search = () => {
  const navigate = useNavigate();
  const searchWrapperRef = useRef<HTMLElement>(null);

  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const setToFocused = () => setFocused(true);
  const setToUnfocused = () => setFocused(false);

  const [filteredServices, setFilteredServices] = useState<
    filteredServicesProps[]
  >([]);

  const { selectService, availableServices } = useContext(
    ServicesContext
  ) as ServiceContextType;

  const filterServices = (searchTerm: string) => {
    const matchedServices: any = [];

    if (availableServices) {
      availableServices?.categories?.forEach(
        (category: availableCategoriesProps) => {
          const matchedCategoryServices = category?.services.filter(
            (service: string) =>
              service.toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (matchedCategoryServices.length > 0) {
            matchedCategoryServices.forEach((service: string) => {
              matchedServices.push({ service, category: category.category });
            });
          }
        }
      );
      setFilteredServices(matchedServices);
    }
  };

  const onSelectItem = (item: string) => {
    selectService(item);
    navigate(paths.services);
  };

  useEffect(() => {
    filterServices(query);
  }, [query, focused]);

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      searchWrapperRef.current &&
      !searchWrapperRef.current.contains(e.target as Node)
    ) {
      setToUnfocused();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <SearchBarWrapper ref={searchWrapperRef} $isFocus={focused ? true : false}>
      <Wrapper>
        <GlassIcon />
        <Input
          placeholder="What do you need help with?"
          type="text"
          value={query}
          onChange={(val) => setQuery(val.target.value)}
          onFocus={setToFocused}
        />
        {filteredServices.length > 0 && focused && (
          <SearchResultContainer>
            <Scrollbar>
              {filteredServices.map((item, i) => {
                return (
                  <ListResult
                    key={i}
                    onClick={() => onSelectItem(item.service)}
                  >
                    {i === 0 ||
                    item.category !== filteredServices[i - 1].category ? (
                      <ListCategory>{item.category}</ListCategory>
                    ) : null}
                    {item.service}
                  </ListResult>
                );
              })}
            </Scrollbar>
          </SearchResultContainer>
        )}
      </Wrapper>
    </SearchBarWrapper>
  );
};

export default Search;
