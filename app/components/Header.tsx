import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HeaderPage() {
  const navLinks: string[] = ["About", "Products", "Blacky Bot"];

  return (
    <header className="flex bg-white items-center fixed top-0 left-0 right-0 z-50 p-2 gap-2 border-b border-black">
      <Menu className="w-12" />
      <Image
        src="/stack-logo-sm.webp"
        width={150}
        height={31}
        alt="StackOverflow logo"
      />
      <nav className="flex">
        <ul className="flex">
          {navLinks.map((link) => {
            return (
              <li key={link}>
                <Link href="#" className="hidden md:block">{link}</Link>
              </li>
            )
          })}
        </ul>
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
