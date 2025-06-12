// components/LogoutButton.tsx
"use client";

import { logout } from "@/lib/actions/auth.action";
import { signOut } from "firebase/auth";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase/client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth); 
      await logout();   
      toast.success("Signed out successfully.");
      router.push("/sign-in");
    } catch (error) {
      console.error(error);
      toast.error("Logout failed. Try again.");
    }
  };

  return (
    <Button onClick={handleLogout} className="btn-secondary">
      Logout
    </Button>
  );
};

export default LogoutButton;
