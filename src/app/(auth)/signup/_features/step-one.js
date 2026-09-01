import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export const StepOne = () => {
  return (
    <div>
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
            Create your account
          </p>
          <p className="font-inter font-normal text-[16px] leading-8 text-[#71717A]">
            Sign up to explore your favorite dishes.
          </p>
        </div>

        <Input
          id="input-field-email"
          type="text"
          placeholder="Enter your email address"
          className="shadow-none rounded-md font-inter font-normal text-[14px] text-[#71717A] leading-5 border-[#E4E4E7] w-104 h-9"
        />
        <Button className="bg-[#18181B] opacity-20 rounded-md font-inter font-medium text-[14px] leading-5 text-[#FAFAFA] cursor-pointer w-104 h-9">
          Let's Go
        </Button>
        <div className="w-104 h-6 flex gap-3 items-center justify-center">
          <p className="font-inter font-normal text-[16px] text-[#71717A] leading-6">
            Already have an account?
          </p>
          <p className="font-inter font-normal text-[16px] text-[#2563EB] leading-6 cursor-pointer">
            Log in
          </p>
        </div>
      </div>
    </div>
  );
};
