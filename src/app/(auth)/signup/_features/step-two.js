import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
export const StepTwo = () => {
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
            Create a strong password
          </p>
          <p className="font-inter font-normal text-[16px] leading-8 text-[#71717A]">
            Create a strong password with letters, numbers.
          </p>
        </div>

        <Input
          id="input-field-email"
          type="text"
          placeholder="Password"
          className="shadow-none rounded-md font-inter font-normal text-[14px] text-[#71717A] leading-5 border-[#E4E4E7] w-104 h-9"
        />
        <Input
          id="input-field-password"
          type="text"
          placeholder="Confirm"
          className="shadow-none rounded-md font-inter font-normal text-[14px] text-[#71717A] leading-5 border-[#E4E4E7] w-104 h-9"
        />

        <div className="w-32.25 h-4 flex gap-2 items-center">
          <Checkbox
            id="terms"
            className="w-4 h-4 rounded-sm border border-solid border-[#09090B80] bg-[#FFFFFF] cursor-pointer"
          />
          <Label
            htmlFor="email"
            className="font-inter font-normal text-[14px] leading-3.5 text-[#71717A]"
          >
            Show password
          </Label>
        </div>

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
