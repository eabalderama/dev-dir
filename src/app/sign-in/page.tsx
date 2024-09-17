import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Code2, Github } from "lucide-react";
import Link from "next/link";
import NavigationBar from "~/components/NavigationBar";
import SignInCard from "~/components/SignInCard";
import Footer from "~/components/Footer";

export default function SignIn() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <main className="flex-1 flex items-center justify-center">
        <SignInCard />
      </main>
      <Footer />
    </div>
  );
}
