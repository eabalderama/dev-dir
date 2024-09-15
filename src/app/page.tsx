import { Code2, Coffee, Github, Linkedin, X } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import Image from "next/image";
import Placeholder from "~/assets/placeholder.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Code2 className="h-6 w-6 mr-2" />
          <span className="font-bold">DevDir</span>
        </Link>
        <nav className="ml-auto flex gap-2 sm:gap-6 items-center">
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
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover Top Developer Portfolios
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Explore a curated collection of outstanding developer
                  portfolios. Get inspired and connect with talented
                  professionals.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Browse Portfolios</Button>
                <Button variant="outline">Submit Your Portfolio</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Featured Portfolios
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-950"
                >
                  <Image
                    alt={`Portfolio ${i}`}
                    className="object-cover w-full h-48"
                    height="200"
                    src={Placeholder}
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">John Doe</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Full Stack Developer
                    </p>
                    <div className="flex space-x-4">
                      <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Link>
                      <Link
                        href="#"
                        className="text-blue-500 hover:text-blue-600"
                      >
                        <X className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 DevDir. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
