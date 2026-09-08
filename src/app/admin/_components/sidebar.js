import { LayoutDashboard } from "lucide-react";
import { Truck } from "lucide-react";
import { NomnomLogo } from "@/app/_icons/nomnomLogo";
export const Sidebar = () => {
  return (
    <div className="h-screen w-51.25 flex flex-col gap-10 py-9 px-5 bg-[#FFFFFF]">
      <div className="w-41.25 h-11 flex gap-2">
        <NomnomLogo />
        <div className="flex flex-col w-20.25 h-11">
          <p className="font-inter font-semibold text-[18px] text-[#09090B] leading-7">
            NomNom
          </p>
          <p className="font-inter font-normal text-[12px] text-[#71717A] leading-4">
            Swift delivery
          </p>
        </div>
      </div>
      <div className="w-41.25 h-26 flex flex-col gap-6">
        <div className="w-41.25 h-10 flex gap-2  items-center px-6 rounded-full bg-[#18181B]">
          <LayoutDashboard className="w-5.5 h-5.5 text-[#FFFFFF]" />
          <p className="font-inter font-medium text-[14px] text-[#FAFAFA] leading-5">
            Food menu
          </p>
        </div>
        <div className="w-41.25 h-10 flex gap-2  items-center px-6 rounded-full bg-[#FFFFFF]">
          <Truck className="w-5.5 h-5.5" />
          <p className="font-inter font-medium text-[14px] text-[#09090B] leading-5">
            Orders
          </p>
        </div>
      </div>
    </div>
  );
};
