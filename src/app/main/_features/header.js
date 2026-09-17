"use client";
import { HeaderLogo } from "../../_icons/HeaderLogo";
import { LocationLogo } from "../../_icons/LocationLogo";
import { ChevronRightLogo } from "../../_icons/ChevronRightLogo";
import { ShopCartLogo } from "../../_icons/ShopCartLogo";
import { UserLogo } from "../../_icons/UserLogo";
import { useRouter } from "next/navigation";
export const Header = () => {
  const router = useRouter();
  const jumpToLogin = () => router.push("/login");
  return (
    <div className="w-full h-17 flex items-center justify-between py-3 px-22 bg-[#18181B]">
      <div className="w-36.5 h-11 flex gap-3">
        <HeaderLogo />
        <div className="w-22 h-11 flex flex-col">
          <p className="font-inter font-semibold text-[20px] leading-7 text-[#FAFAFA]">
            Nom<span className="text-[#EF4444]">Nom</span>
          </p>
          <p className="font-inter font-normal text-[12px] leading-4 text-[#F4F4F5]">
            Swift delivery
          </p>
        </div>
      </div>
      <div className="w-87.5 h-9 flex justify-between">
        <div className="w-62.75 h-9 py-2 px-3 gap-1 rounded-full bg-[#FFFFFF] flex items-center">
          <LocationLogo />
          <p className="font-inter font-normal text-[#EF4444] text-[12px] leading-4">
            Delivery address:
          </p>
          <p className="font-inter font-normal text-[##71717A] text-[12px] leading-4">
            Add Location
          </p>
          <ChevronRightLogo />
        </div>
        <div className="w-9 h-9 flex rounded-full bg-[#F4F4F5] justify-center items-center">
          <ShopCartLogo />
        </div>
        <div
          className="w-9 h-9 flex rounded-full bg-[#EF4444] justify-center items-center cursor-pointer"
          onClick={jumpToLogin}
        >
          <UserLogo />
        </div>
      </div>
    </div>
  );
};
