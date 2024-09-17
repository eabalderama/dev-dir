import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Placeholder from "~/assets/placeholder.svg";

type PortfolioCardProps = {
  name: string;
};

export default function PortfolioCard({ name }: PortfolioCardProps) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-950">
      <Image
        alt={`${name}'s Portfolio`}
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
          <Link href="#" className="text-blue-500 hover:text-blue-600">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-blue-500 hover:text-blue-600">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-blue-500 hover:text-blue-600">
            <Twitter className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
