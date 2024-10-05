"use client";

import { signOutAction } from "~/app/actions/supabase";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOutAction();
  };
  return (
    <Button
      variant="ghost"
      className="w-full flex items-center justify-start p-0 m-0 h-auto gap-2"
      onClick={handleSignOut}
    >
      <LogOut className="w-4 h-4" />
      <p>Logout</p>
    </Button>
  );
}
