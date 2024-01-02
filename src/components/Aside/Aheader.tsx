import { Atom, Moon, SunMoon } from "lucide-react";
import { Menubar, MenubarMenu } from "../ui/menubar";
import {
  MenubarContent,
  MenubarItem,
  MenubarTrigger,
} from "@radix-ui/react-menubar";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

type Props = {
  onThemeSwitch: () => void;
  theme: string;
};

export default function Aheader({ theme, onThemeSwitch }: Props) {
  return (
    <header className="flex w-full justify-between md:justify-normal">
      <div className="flex gap-2 items-center">
        <Atom />
        <a href="/">
          <h1 className="font-bold text-2xl">
            note<span className="text-sky-500">keeper</span>
          </h1>
        </a>
      </div>
      <Menubar className="md:hidden">
        <MenubarMenu>
          <MenubarTrigger>
            <HamburgerMenuIcon />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem className="mr-4 mt-4">
              {theme === "dark" ? (
                <SunMoon onClick={onThemeSwitch} className="cursor-pointer" />
              ) : (
                <Moon onClick={onThemeSwitch} className="cursor-pointer" />
              )}
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
}
