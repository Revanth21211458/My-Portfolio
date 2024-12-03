import { AiOutlineHome } from "react-icons/ai";
import { RiChat1Line, RiCodeLine, RiUserHeartLine } from "react-icons/ri";
import { MenuItem, Page } from "./types";

const menuItems: MenuItem[] = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    extra: "Home",
    url: Page.Home,
    mobileOnly: true,
  },
  {
    label: "About",
    icon: <RiUserHeartLine />,
    extra: "More of me",
    url: Page.About,
  },
  {
    label: "Projects",
    icon: <RiCodeLine />,
    extra: "My work",
    url: Page.Projects,
  },
  {
    label: "Contact",
    icon: <RiChat1Line />,
    extra: "Say Hi :)",
    url: Page.Contact,
  },
];

export { menuItems };
