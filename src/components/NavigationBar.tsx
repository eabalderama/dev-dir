import { Code2, Coffee } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NavigationBar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link
        className="flex items-center justify-center text-[#ededed]"
        href="/"
      >
        <Code2 className="h-6 w-6 mr-2" />
        <span className="font-bold">DevDir</span>
      </Link>
      <nav className="ml-auto flex gap-2 sm:gap-6 items-center text-[#ededed]">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Home
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Portfolios
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="#"
        >
          Contact
        </Link>
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Coffee className="mr-2 h-4 w-4" />
          Buy Me a Coffee
        </Button>
        <Button variant="outline" size="icon" className="sm:hidden">
          <Coffee className="h-4 w-4" />
          <span className="sr-only">Buy Me a Coffee</span>
        </Button>
      </nav>
    </header>
  );
}
