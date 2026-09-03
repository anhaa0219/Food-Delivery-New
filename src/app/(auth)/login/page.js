"use client";
import { useRouter } from "next/navigation";
import { LoginForm } from "./_features/login-form";

export default function Login() {
  const router = useRouter();
  const toSignUp = () => {
    router.push("/signup");
  };
  return (
    <div className="w-full flex items-center justify-center">
      <LoginForm toSignUp={toSignUp} />
    </div>
  );
}
