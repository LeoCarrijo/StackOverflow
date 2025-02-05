import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Building2, House, Info, Menu, MessageCircleQuestion, MessageSquareText, Search, Tags, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import type { NavbarItem } from "@/typing";
import React from "react";

export default function HeaderPage() {
  const navLinks: NavbarItem[] = [
    {
      title: "About",
      content: [
        {
          title: "About",
          description: "About us"
        },
        {
          title: "About-2",
          description: "About us"
        },
      ]
    },
    {
      title: "Products",
      content: [
        {
          title: "Products",
          description: "All products"
        },
        {
          title: "Products-2",
          description: "All products-2"
        },
        {
          title: "Products-3",
          description: "All products-3"
        },
        {
          title: "Products-4",
          description: "All products-4"
        },
      ]
    },
    {
      title: "Blacky Bot",
      content: [
        {
          title: "Blacky Bot AI",
          description: "Blacky Bot AI"
        },
        {
          title: "Blacky Bot AI-2",
          description: "Blacky Bot AI"
        },
      ]
    },
  ]

  return (
    <header className="flex bg-white items-center fixed top-0 left-0 right-0 z-50 p-2 gap-2 border-b border-black">
      <Popover>
        <PopoverTrigger><Menu className="w-12" /></PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-col gap-popover">
            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><House className="w-popover-icons" />Home</Link>
            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><MessageCircleQuestion className="w-popover-icons" />Questions</Link>
            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><Tags className="w-popover-icons" />Tags</Link>
          </div>
          <hr className="m-popover" />
          <div className="flex flex-col gap-popover">
            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><Users className="w-popover-icons" />Users</Link>
            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><Building2 className="w-popover-icons" />Companies</Link>
          </div>
          <hr className="m-popover" />
          <div className="flex flex-col gap-popover">
            <div className="flex justify-between">
              <h3 className="text-base">LABS</h3>
              <Link href="#" className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white">
                <Info className="w-popover-icons" />
              </Link>
            </div>
            <Link className="flex gap-popover text-base hover:bg-slate-300 px-2 py-1 rounded-md duration-100 active:bg-slate-700 active:text-white" href="#"><MessageSquareText className="w-popover-icons" />Discussions</Link>
          </div>
        </PopoverContent>
      </Popover>
      <Image
        src="/stack-logo-sm.webp"
        width={150}
        height={31}
        alt="StackOverflow logo"
      />
      <nav className="flex">
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuTrigger>{link.title}</NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col gap-2 p-2">
                  {link.content.map((content, index) => (
                    <React.Fragment key={content.title}>
                      <NavigationMenuLink className="whitespace-nowrap">
                        <h4>{content.title}</h4>
                        <p>{content.description}</p>
                      </NavigationMenuLink>
                      {index !== link.content.length - 1 && <hr />}
                    </React.Fragment>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            )
            )}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="relative hidden md:block">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <Input type="text" placeholder="Pesquisar..." className="pl-10 pr-4 py-2 border rounded" />
        </div>
      </nav>
      <aside className="ml-auto flex gap-2">
        <Button className="px-4 py-1 bg-white text-black border-black" variant="outline">Log in</Button>
        <Button className="px-4 py-2 hidden md:block">Sign up</Button>
      </aside>
    </header>
  );
}
