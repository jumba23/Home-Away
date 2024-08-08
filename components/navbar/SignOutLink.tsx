"use client"; // since Toast is a hook  and it uses useAuth

import { SignOutButton } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";

const SignOutLink = () => {
  const { toast } = useToast();
  const handleSignOut = () => {
    toast({ description: "You have signed out." });
  };

  return (
    <SignOutButton>
      <button className="w-full text-left" onClick={handleSignOut}>
        Logout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
