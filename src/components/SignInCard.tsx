"use client";

import { Github } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Link from "next/link";
import { signInAction } from "~/app/actions/supabase";

export default function SignInCard() {
  const handleSignIn = async () => {
    await signInAction();
  };
  return (
    <Card className="w-full max-w-md dark:bg-gray-800 ">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold dark:text-stone-50">
          Sign in to DevDir
        </CardTitle>
        <CardDescription className="dark:text-white">
          Use your GitHub account to sign in and manage your developer profile
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button
          className="w-full dark:text-stone-50"
          variant="outline"
          type="button"
          onClick={handleSignIn}
        >
          <Github className="mr-2 h-5 w-5" />
          Sign in with GitHub
        </Button>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-center gap-2">
        <div className="text-sm text-muted-foreground text-center dark:text-stone-50">
          By signing in, you agree to our
          <Link className="underline hover:text-primary mx-1" href="#">
            Terms of Service
          </Link>
          and
          <Link className="underline hover:text-primary mx-1" href="#">
            Privacy Policy
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
