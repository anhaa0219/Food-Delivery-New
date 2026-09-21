"use client";
import { HeaderLogo } from "../../_icons/HeaderLogo";
import { LocationLogo } from "../../_icons/LocationLogo";
import { ChevronRightLogo } from "../../_icons/ChevronRightLogo";
import { ShopCartLogo } from "../../_icons/ShopCartLogo";
import { UserLogo } from "../../_icons/UserLogo";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export const Header = () => {
  const router = useRouter();
  const jumpToLogin = () => router.push("/login");
  const [adress, setAdress] = useState(false);
  const [adressSave, setAdressSave] = useState("");
  const adressHandler = () => {
    setAdress(true);
  };
  const adressHandlerCloser = () => {
    setAdress(false);
  };

  const adressSubmit = () => {
    localStorage.setItem("Location", adressSave);
    setAdress(false);
  };
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
          <p className="font-inter font-normal text-[##71717A] text-[12px] leading-4 cursor-pointer">
            Add Location
          </p>
          {adress && (
            <div className="w-125.5 h-72 flex flex-col rounded-[20px] px-6 py-8 gap-6 bg-[#FFFFFF] shadow-lg fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <div className="w-113.5 h-10 flex gap-7">
                <p className="font-inter font-semibold text-[20px] text-[#09090B] leading-8">
                  Please write your delivery address!
                </p>
                <div
                  onClick={adressHandlerCloser}
                  className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F4F4F5] cursor-pointer"
                >
                  <X className="w-4 h-4 text-[#18181B]" />
                </div>
              </div>
              <textarea
                value={adressSave}
                onChange={(e) => setAdressSave(e.target.value)}
                placeholder="Please share your complete address"
                className="py-2 px-3 w-113.5 h-20 font-inter font-normal text-[#71717A] text-[14px] leading-5 rounded-md border border-solid border-[#E4E4E7]"
              ></textarea>
              <div className="w-113.5 h-16 flex gap-4 justify-end items-end">
                <Button
                  onClick={adressHandlerCloser}
                  className="w-19.75 h-10 border-[#E4E4E7] bg-[#FFFFFF] font-inter font-medium text-[#18181B] text-[14px] leading-5 rounded-md"
                >
                  Cancel
                </Button>
                <Button
                  onClick={adressSubmit}
                  className="w-28.75 h-10 bg-[#18181B] font-inter font-medium text-[#FAFAFA] text-[14px] leading-5 rounded-md"
                >
                  Deliver Here
                </Button>
              </div>
            </div>
          )}
          <ChevronRightLogo
            className="cursor-pointer"
            onClick={adressHandler}
          />
        </div>
        <div className="w-9 h-9 flex rounded-full bg-[#F4F4F5] justify-center items-center cursor-pointer">
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
