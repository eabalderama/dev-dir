"use client";

import { signOutAction } from "~/app/actions/supabase";
import { Button } from "./ui/button";

export default function SignOutButton() {
  const handleSignOut = async () => {
    await signOutAction();
  };
  return (
    <Button variant="ghost" onClick={handleSignOut}>
      Logout
    </Button>
  );
}
