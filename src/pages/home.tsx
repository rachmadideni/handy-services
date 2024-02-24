import { useEffect, useContext } from "react";
import { useDebounceValue } from "usehooks-ts";

import { useNavigate } from "react-router-dom";

import { ServicesContext, type ServiceContextType } from "@/provider/services";

import Card from "@/components/card";

import GlassIcon from "@/components/icons/glass";

import TimeslotIcon from "@/components/icons/timeslot";
import EuroIcon from "@/components/icons/euro";
import MemberCreditIcon from "@/components/icons/member-credit";
import CloseIcon from "@/components/icons/close";

import { POPULAR_SERVICES } from "@/constants/popular-services";
import { paths } from "@/router";

import MainTitle from "@/components/main-title";
import PopularServices from "@/components/popular-services";

const HomePage = () => {
  const { selectService, filterServices, filteredServices } = useContext(
    ServicesContext
  ) as ServiceContextType;

  const navigate = useNavigate();
  const [query, setQuery] = useDebounceValue("", 100);

  useEffect(() => {
    filterServices(query);
  }, [query]);

  return (
    <div className="flex flex-col w-full">
      {/* outlet */}
      <main className="bg-aqua sm:py-[66px] px-8 py-8 space-y-8 flex flex-col w-full justify-center">
        <MainTitle />
        <div className="flex w-full justify-center">
          <div className="relative flex w-full sm:max-w-lg pl-[21px] pr-4 outline-none rounded-xl py-[13px] items-center bg-white gap-0 ring-2 ring-offset-0 ring-paleTeal ring-inset">
            <GlassIcon />
            <input
              role="textbox"
              className="min-w-[90%] w-full px-2 outline-none appearance-none font-circular"
              placeholder="What do you need help with?"
              type="text"
              value={query}
              onChange={(val) => setQuery(val.target.value)}
            />
            <div className="flex items-center justify-center w-4 h-4">
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    filterServices("");
                  }}
                >
                  <CloseIcon className="w-4 h-4" />
                </button>
              )}
            </div>
            {filteredServices.length > 0 && (
              <div
                className="absolute z-10 flex flex-col top-14 w-full -left-0 max-h-[300px] overflow-y-scroll bg-white rounded-xl px-4 py-4 border border-paleTeal ring-1 ring-inset ring-paleTeal                
                scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-100 scrollbar-thumb-rounded scrollbar-track-rounded"
              >
                {filteredServices?.map((item, i) => {
                  return (
                    <a
                      key={i}
                      className="flex flex-col min-w-full py-2 border-b-2 hover:cursor-pointer"
                      onClick={(evt) => {
                        evt.preventDefault();
                        selectService(item);
                        filterServices("");
                        navigate(paths.services);
                      }}
                    >
                      {item}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <PopularServices
          mainTitle="popular services"
          items={POPULAR_SERVICES}
        />
      </main>

      <div className="flex flex-col items-center bg-white  gap-10 p-10">
        <div className="gap-2">
          <p className="font-koulen text-ebonyClay text-[28px]">
            get £300 in credits to use for 10 different services!
          </p>
          <p className="font-circular font-thin text-base text-ebonyClay opacity-70">
            Join 30,000+ Fantastic Club members and access premium benefits for
            only £89/year.
          </p>
        </div>
        <div
          id="cards"
          className="flex flex-col sm:flex-row sm:space-x-5 gap-4"
        >
          <Card
            iconName={<TimeslotIcon />}
            text="Select a service and your desired timeslot"
          />

          <Card
            iconName={<EuroIcon />}
            text="Pick the “Handy services” price (adds £89 to your total)"
          />

          <Card
            iconName={<MemberCreditIcon />}
            text="Enjoy £300 in credits and member- only rates"
          />
        </div>
      </div>
      {/* end outlet */}
    </div>
  );
};

export default HomePage;
