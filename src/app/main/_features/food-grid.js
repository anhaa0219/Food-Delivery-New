"use client";
import { useEffect, useState } from "react";
import { Minus, PlusIcon, X } from "lucide-react";
import { Pencil } from "lucide-react";
import { server } from "@/app/_api/api";
import { Plus } from "lucide-react";
import { Check } from "lucide-react";
export const FoodGrid = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notif, setNotif] = useState(false);
  const [detail, setDetail] = useState(false);
  const [selectedDish, setSelectedDish] = useState([]);
  const detailHandler = () => {
    setDetail(true);
  };

  const notification = () => {
    setNotif(true);

    setTimeout(() => {
      setNotif(false);
    }, 3000);
  };
  const detailSelectedDish = () => {};
  const foodCategoryGet = async () => {
    try {
      const response = await server.get("/foodCategory/get");
      setCategory(response.data.category);
    } catch (err) {
      console.error("Failed to load categories:", err);
    } finally {
      setLoading(false);
    }
  };
  const getAddToCart = (dish) => {
    const existingDishes = JSON.parse(localStorage.getItem("CartDishes")) || [];
    existingDishes.push(dish);
    localStorage.setItem("CartDishes", JSON.stringify(existingDishes));
  };
  const dishesGet = async () => {
    try {
      const response = await server.get("/dishes/get");
      console.log("Single dish item:", response.data.dishes[0]);
      setData(response.data.dishes);
    } catch (err) {
      console.error("Failed to load dishes:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    dishesGet();
    foodCategoryGet();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-13.5">
      {category.map((cat) => (
        <div key={cat._id} className="w-316 flex flex-col gap-9">
          <p className="font-inter font-semibold text-[#FFFFFF] text-[30px] leading-9">
            {cat.categoryName}
          </p>

          <div className="w-full flex flex-wrap gap-9">
            {data
              .filter((dish) => dish.category._id === cat._id)
              .map((dish) => (
                <div
                  key={dish._id}
                  className="w-67.5 h-60.25 rounded-[20px] p-4 flex flex-col justify-between bg-[#FFFFFF] relative"
                >
                  <img
                    onClick={detailHandler}
                    src={dish.image}
                    alt={dish.foodName}
                    className="w-full h-32.25 rounded-xl object-cover cursor-pointer"
                  />
                  <div className="w-full flex flex-col gap-2">
                    <div className="w-full flex justify-between items-center">
                      <p className="font-inter font-medium leading-5 text-[14px] text-[#EF4444] truncate">
                        {dish.foodName}
                      </p>
                      <p className="font-inter font-medium leading-4 text-[12px] text-[#09090B]">
                        ${dish.price}
                      </p>
                    </div>
                    <p className="font-inter font-normal text-[12px] text-[#09090B] leading-4 line-clamp-2">
                      {dish.ingredients}
                    </p>
                  </div>
                  <div
                    onClick={(e) => {
                      e.preventDefault();
                      notification();
                      getAddToCart(dish);
                    }}
                    className="w-9 h-9 rounded-full bg-white flex items-center justify-center cursor-pointer absolute bottom-26 right-6"
                  >
                    <Plus className="w-4 h-4 text-[#EF4444]" />
                  </div>
                  {notif && (
                    <div className="w-89.25 h-12 flex rounded-lg shadow-md border border-solid border-[#E4E4E7] bg-[#18181B] gap-2 items-center justify-center fixed top-6 left-1/2 -translate-x-1/2 z-50">
                      <Check className="w-4 h-4 text-[#FAFAFA]" />
                      <p className="font-inter font-medium text-[20px] leading-4 text-[#FAFAFA]">
                        Food is being added to the cart!
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
      {detail && (
        <div className="w-206.5 h-103 rounded-[20px] p-6 gap-6 bg-[#FFFFFF] shadow-lg">
          <img
            src={dish.image}
            alt={dish.foodName}
            className="w-94.25 h-91 rounded-xl object-cover"
          />
          <div className="w-94.25 h-91 flex flex-col">
            <div className="w-10 h-10 rounded-full flex justify-center items-center bg-[#F4F4F5] cursor-pointer">
              <X className="w-4 h-4 text-[#18181B]" />
              <div className="w-94.25 h-82 flex justify-between">
                <div className="flex flex-col gap-3">
                  <p className="font-inter font-semibold leading-9 text-[30px] text-[#EF4444]">
                    {dish.foodName}
                  </p>
                  <p className="font-inter font-normal leading-6 text-[16px] text-[#09090B]">
                    {dish.ingredients}
                  </p>
                </div>
                <div className="flex justify-between">
                  <div className="flex flex-col gap-6">
                    <p className="font-inter font-normal text-[#09090B] text-[16px] leading-6">
                      Total price
                    </p>
                    <p className="font-inter font-semibold text-[#09090B] text-[24px] leading-6">
                      {dish.price}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-11 h-11 rounded-full flex justify-center items-center border-[#E4E4E7] border border-solid">
                      <Minus className="w-4 h-4 text-[#18181B]" />
                    </div>
                    <p className="font-inter font-semibold text-[#09090B] text-[18px] leading-7">
                      1
                    </p>
                    <div className="w-11 h-11 rounded-full flex justify-center items-center border-[#E4E4E7] border border-solid">
                      <PlusIcon className="w-4 h-4 text-[#18181B]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
