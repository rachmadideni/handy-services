import GardeningToolsetIcon from "../components/icons/gardening-toolset";
import MobileStorageIcon from "../components/icons/mobile-storage";
import StorageIcon from "../components/icons/storage";
import HandymanIcon from "../components/icons/handyman";
import CleanerToolsetIcon from "@/components/icons/cleaner-toolset";

const POPULAR_SERVICES = [
  {
    text: "Domestic cleaning",
    iconName: CleanerToolsetIcon,
  },
  {
    text: "Gardening",
    iconName: GardeningToolsetIcon,
  },
  {
    text: "Mobile storage",
    iconName: MobileStorageIcon,
  },
  {
    text: "Storage",
    iconName: StorageIcon,
  },
  {
    text: "Handyman",
    iconName: HandymanIcon,
  },
];

const SERVICES = {
  categories: [
    {
      category: "CLEANING",
      services: [
        "End of Tenancy Cleaning",
        "Domestic Cleaning",
        "Oven/BBQ Cleaning",
        "Upholstery Cleaning",
        "Window Cleaning",
        "Carpet/Rug Cleaning",
        "Antiviral Sanitisation",
        "Pressure Washing",
        "Gutter Cleaning",
        "Ironing",
        "After Builders Cleaning",
        "Holiday Rental Cleaning",
        "Vehicle Sanitisation",
        "Hard Floor Cleaning",
        "Curtains and Blinds Cleaning",
      ],
    },
    {
      category: "GARDENING & LANDSCAPING",
      services: [
        "Garden Maintenance",
        "Garden Clearance",
        "Lawn Mowing",
        "Pressure Washing",
        "Landscaping Survey",
        "Tree Surgery",
      ],
    },
    {
      category: "REMOVALS",
      services: [
        "Removals",
        "Moving To Storage",
        "Man & Van",
        "Boxes Delivery",
        "Packing Service",
        "Furniture Assembly",
        "Office Removals Survey",
      ],
    },
    {
      category: "WASTE REMOVAL",
      services: [
        "Household Waste",
        "Green Waste Removal",
        "Builders Waste",
        "Office Clearance",
        "Loft/Cellar Clearance",
        "Christmas Tree Recycle",
        "Appliance Disposal",
      ],
    },
  ],
};

export { POPULAR_SERVICES, SERVICES };
