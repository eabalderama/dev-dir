import Link from "next/link";
import { Button } from "~/components/ui/button";
import PortfolioCard from "~/components/PortfolioCard";
import Footer from "~/components/Footer";
import NavigationBar from "~/components/NavigationBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
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
                <Button asChild variant="outline">
                  <Link href="/sign-in">Submit Your Portfolio</Link>
                </Button>
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
                <PortfolioCard key={i} name={"John"} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
