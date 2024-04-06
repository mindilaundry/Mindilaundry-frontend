// import { IconType } from 'react-icons';
import { MdDoNotDisturb } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { PiShirtFolded } from "react-icons/pi";
import { GiSwapBag } from "react-icons/gi";
import { CgOptions } from "react-icons/cg";
import { ReactNode } from "react";

interface Service {
  title: string;
  description?: string;
  icon: ReactNode;
}

interface Option {
  type: string;
  description: string;
}

interface ServiceWithOption extends Service {
  options?: Array<Option>;
}

interface ServiceList extends Array<Service | ServiceWithOption> {}

interface AllServices {
  [key: string]: ServiceList;
}

const washServices: ServiceList = [
  {
    title: "service overview",
    description:
      "Your items are machine washed at 90°F and tumble dried. 110°F can be requested. No ironing is included.",
    icon: <BsFillInfoCircleFill />,
  },
  {
    title: "Service options",
    options: [
      {
        type: "Mixed wash",
        description:
          "We will wash & tumble dry your laundry as you send it, all colours together.",
      },
      {
        type: "Separate wash",
        description:
          "We will separate your laundry into 2 loads, lights and dark-coloured, and wash each load separately to minimize the risk of a colour run.",
      },
    ],
    icon: <CgOptions />,
  },
  {
    title: "Suitable for",
    description:
      "Everyday laundry that can be machine washed and tumble dried. Some popular items typically included are t-shirts, trousers, bedsheets and undergarments.",
    icon: <GiCheckMark />,
  },
  {
    title: "Do not include",
    description: ` Laundry that is not suitable for machine washing and/or tumble drying \n
                   Dry-clean only items \n
                   Bath mats  \n
                   Duvets and bulky items  \n
                   Any type of shoes  \n
                   Pet beds/items `,
    icon: <MdDoNotDisturb />,
  },
  {
    title: "How to prepare for collection",
    description:
      "If you are booking multiple services, please prepare all items for the Wash service in a separate bag. Your driver will tag the bag with the required service.",
    icon: <FaTruck />,
  },
  {
    title: "How you'll receive the items back",
    description: "We will return your clean laundry neatly packed, in a bag.",
    icon: <GiSwapBag />,
  },
];

const washAndIronServices: ServiceList = [
  {
    title: "service overview",
    description:
      "Your items are machine washed at 90°F, tumble dried and ironed.",
    icon: <BsFillInfoCircleFill />,
  },
  {
    title: "Suitable for",
    description:
      "All laundry that can be machine washed, tumble dried and ironed. Some of the popular items that are typically included are shirts, t-shirts, trousers and bedsheets.",
    icon: <GiCheckMark />,
  },
  {
    title: "Do not include",
    description:
      "Laundry that is not suitable for machine washing and/or tumble drying and/or ironing.",
    icon: <MdDoNotDisturb />,
  },
  {
    title: "How to prepare for collection",
    description:
      "If you are booking more services, please prepare all items for the Wash & Iron service in a separate bag. Your driver will tag the bag with the required service.",
    icon: <FaTruck />,
  },
  {
    title: "How you'll receive the items back",
    description:
      "We will return your clean items on hangers or folded depending on the type of request.",
    icon: <PiShirtFolded />,
  },
];

const dryCleaningServices: ServiceList = [
  {
    title: "service overview",
    description: "Your items are dry-cleaned and ironed.",
    icon: <BsFillInfoCircleFill />,
  },
  {
    title: "Suitable for",
    description:
      "All items that can be dry-cleaned and ironed. Some of the popular items that are typically included are suits, shirts, dresses and coats.",
    icon: <GiCheckMark />,
  },
  {
    title: "Do not include",
    description:
      "Laundry that is not suitable for machine washing and/or tumble drying and/or ironing.",
    icon: <MdDoNotDisturb />,
  },
  {
    title: "How to prepare for collection",
    description:
      "If you are booking multiple services, please prepare all items for the Dry cleaning service in a separate bag. No need to list all items, we'll take care of that.",
    icon: <FaTruck />,
  },
  {
    title: "How you'll receive the items back",
    description:
      "We will return your clean items on hangers or folded depending on the type of request.",
    icon: <PiShirtFolded />,
  },
];

const duvetAndBulkyItems: ServiceList = [
  {
    title: "service overview",
    description:
      "The cleaning process varies depending on each item's requirement. Some items will need 72 hours to process.",
    icon: <BsFillInfoCircleFill />,
  },
  {
    title: "Suitable for",
    description:
      "Large items that cannot be cleaned in a regular wash and require special care. Some of the popular items that are typically included are duvets, pillows and blankets.",
    icon: <GiCheckMark />,
  },
  {
    title: "Do not include",
    description:
      "Sheets, duvet covers, pillow cases and towels. You can select a Wash service for these.",
    icon: <MdDoNotDisturb />,
  },
  {
    title: "How to prepare for collection",
    description:
      "If you are booking multiple services, please prepare all items for the Duvets & Bulky service in a separate bag. No need to list all items, we'll take care of that.",
    icon: <FaTruck />,
  },
  {
    title: "How you'll receive the items back",
    description: "We will return your clean items in a bag",
    icon: <GiSwapBag />,
  },
];

export const AllServices: AllServices = {
  wash: washServices,
  "wash-and-iron": washAndIronServices,
  "dry-cleaning": dryCleaningServices,
  "duvets-and-bulky-items": duvetAndBulkyItems,
};
