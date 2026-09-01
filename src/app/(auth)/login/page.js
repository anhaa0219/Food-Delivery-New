import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-104 gap-6 flex flex-col">
        <Button
          variant="outline"
          size="icon"
          aria-label="Submit"
          className="rounded-md border-[#E4E4E7] cursor-pointer w-9 h-9"
        >
          <ArrowLeftIcon />
        </Button>
        <div className="w-104 h-15 flex flex-col gap-1">
          <p className="font-inter font-semibold text-[24px] leading-8 text-[#09090B]">
            Log in
          </p>
          <p className="font-inter font-normal text-[16px] leading-8 text-[#71717A]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>

        <Input
          id="input-field-email"
          type="text"
          placeholder="Enter your email address"
          className="shadow-none rounded-md font-inter font-normal text-[14px] text-[#71717A] leading-5 border-[#E4E4E7] w-104 h-9"
        />
        <Input
          id="input-field-password"
          type="text"
          placeholder="Password"
          className="shadow-none rounded-md font-inter font-normal text-[14px] text-[#71717A] leading-5 border-[#E4E4E7] w-104 h-9"
        />
        <p className="font-inter font-normal text-[14px] text-[#18181B] leading-5 cursor-pointer">
          Forgot password ?
        </p>
        <Button className="bg-[#18181B] opacity-20 rounded-md font-inter font-medium text-[14px] leading-5 text-[#FAFAFA] cursor-pointer w-104 h-9">
          Let's Go
        </Button>
        <div className="w-104 h-6 flex gap-3 items-center justify-center">
          <p className="font-inter font-normal text-[16px] text-[#71717A] leading-6">
            Don’t have an account?
          </p>
          <p className="font-inter font-normal text-[16px] text-[#2563EB] leading-6 cursor-pointer">
            Sign up
          </p>
        </div>
      </div>
    </div>
  );
}
