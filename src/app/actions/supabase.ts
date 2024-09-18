"use server";

import { redirect } from "next/navigation";
import { createClient } from "~/lib/supabase/server";
import { encodedRedirect } from "~/lib/utils";

export const signInAction = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: "http://localhost:3000/auth/callback",
    },
  });

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/sign-in", error.message);
  }

  if (data.url) {
    redirect(data.url); // use the redirect API for your server framework
  }

  return encodedRedirect("error", "/", "Unable to sign in");
};

export const signOutAction = async () => {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error.code + " " + error.message);
    return encodedRedirect("error", "/", error.message);
  }
};
