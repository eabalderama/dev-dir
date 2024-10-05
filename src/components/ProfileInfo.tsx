import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { Button } from "./ui/button";

type ProfileInfoProps = {
  user: User;
};
export default function ProfileInfo({ user }: ProfileInfoProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <div className="flex items-center gap-4">
        <Image
          src={`${user.user_metadata.avatar_url}`}
          alt="Profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h1 className="text-2xl font-bold">{`${user.user_metadata.full_name}`}</h1>
          <p className="text-gray-500">Full Stack Developer</p>
        </div>
      </div>
      <Button>Edit Profile</Button>
    </div>
  );
}
