import { useEffect, useState } from "react";
import { server } from "@/app/_api/api";
import { Plus } from "lucide-react";
import { X } from "lucide-react";
const  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="kenshi_is_beast"
export const DishGrid = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);
  const [plus, setPlus] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  // const dishesGet = async () => {
  //   try {
  //     const response = await server.get("/dishes/get");
  //     setData(response.data.dishes);
  //   } catch (err) {
  //     console.log(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
 
  const foodCategoryGet = async () => {
    try {
      const response = await server.get("/foodCategory/get");
      setCategory(response.data.category);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const takeFoodName = (e) => {
    const result = e.target.value;
    setFoodName(result);
  };
  const takePrice = (e) => {
    const result = e.target.value;
    setPrice(result);
  };
  const takeImage = (e) => {
    const result = e.target.value;
    setImage(result);
  };
  const takeIngredients = (e) => {
    const result = e.target.value;
    setIngredients(result);
  };
  // const dishesPost = async () => {
  //   try {
  //     await server.post("/dishes/post", {
  //       foodName: foodName ,
  //       price : price,
  //       image : image,
  //       ingredients : ingredients,
  //       category : cat._id ,
  //     });
  //     await foodCategoryGet();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  useEffect(() => {
    foodCategoryGet();
  }, []);
  // useEffect(() => {
  //   dishesGet();
  // }, []);
  console.log(category, "data");
  const plusHandler = () => {
    setPlus(true);
  };
  const plusCloser = () => {
    setPlus(false);
  };
  if (loading) {
    return <div className="p-6">Loading Dishes...</div>;
  }
  return (
    <div className="w-full h-full flex flex-col shrink-0 gap-4">
      {category.map((cat) => {
        return (
          <div
            key={cat._id}
            className="w-full flex flex-col rounded-xl p-5 gap-4 bg-[#FFFFFF]"
          >
            <p className="font-inter font-semibold text-[20px] text-[#09090B] leading-7">
              {cat.categoryName}
            </p>
            <div className="grid-cols-4 gap-4">
              <div className="w-67.5 h-60.25 flex flex-col gap-6 justify-center items-center border-dashed border border-[#EF4444] [stroke-dasharray:12_12] rounded-[20px] ">
                <div
                  className="w-9 h-9 rounded-full bg-[#EF4444] flex items-center justify-center cursor-pointer"
                  onClick={plusHandler}
                >
                  <Plus className="w-4 h-4 text-[white]" />
                </div>
                <p className="font-inter font-medium text-[#18181B] text-[14px] leading-5">
                  Add new Dish to Appetizers{" "}
                </p>
              </div>
              {/* {
                  data.map((dishes)=> {
                    <div key={dishes._id} className="w-67.5 h-60.25 flex flex-col gap-5 p-4 justify-center items-center border-solid border border-[#E4E4E7] rounded-[20px]">
                        
                    </div>
                  })
                } */}
              {plus && (
                <div className="w-115 h-148 flex flex-col rounded-xl bg-[#FFFFFF] p-6 gap-6 fixed inset-0 m-auto z-100">
                  <div className="h-13 w-103 flex pb-4 justify-between bg-[#FFFFFF]">
                    <p className="font-inter font-semibold text-[#09090B] text-[18px] leading-7">
                      Add new Dish to Appetizers
                    </p>
                    <div
                      className="w-9 h-9 rounded-full bg-[#F4F4F5] flex justify-center items-center cursor-pointer"
                      onClick={plusCloser}
                    >
                      <X className="w-4 h-4 text-[#18181B]" />
                    </div>
                  </div>
                  <div className="w-103 h-15 flex gap-6">
                    <div className="w-48.5 h-15 flex flex-col gap-2">
                      <p className="font-inter font-medium text-[#09090B] text-[14px] leading-3.5">
                        Food name
                      </p>
                      <input
                        type="text"
                        placeholder="Type food name"
                        className="w-full h-9.5 border border-[#E4E4E7] border-solid rounded-md py-2 px-3 text-[#71717A] text-[14px] leading-5 font-inter font-normal"
                      ></input>
                    </div>
                    <div className="w-48.5 h-15 flex flex-col gap-2">
                      <p className="font-inter font-medium text-[#09090B] text-[14px] leading-3.5">
                        Food price
                      </p>
                      <input
                        type="text"
                        placeholder="Enter price..."
                        className="w-full h-9.5 border border-[#E4E4E7] border-solid rounded-md py-2 px-3 text-[#71717A] text-[14px] leading-5 font-inter font-normal"
                      ></input>
                    </div>
                  </div>
                  <div className="w-103 h-28 flex flex-col gap-2 ">
                    <p className="font-inter font-medium text-[#09090B] text-[14px] leading-3.5">
                      Ingredients
                    </p>
                    <textarea
                      type="text"
                      placeholder="List ingredients..."
                      className="w-full h-22.5 border border-[#E4E4E7] border-solid rounded-md py-2 px-3 text-[#71717A] text-[14px] leading-5 font-inter font-normal flex items-start"
                    ></textarea>
                  </div>
                  <div className="w-103 h-40 flex flex-col gap-2">
                    <p className="font-inter font-medium text-[#09090B] text-[14px] leading-3.5">
                      Food image
                    </p>
                    <input
                      type="file"
                      accept="image/*"
                      placeholder="List ingredients..."
                      className="w-full h-34.5 border border-[#E4E4E7] border-solid rounded-md py-2 px-3 text-[#71717A] text-[14px] leading-5 font-inter font-normal"
                    ></input>
                  </div>
                  <div className="flex items-end justify-end w-103 h-16">
                    <button
                      type="button"
                      // onClick={handleSubmitCategory}
                      className="w-30.75 h-10 bg-[#18181B] rounded-md flex justify-center items-center font-inter font-medium text-[14px] leading-5 text-[#FAFAFA] cursor-pointer hover:bg-black transition-colors"
                    >
                      Add Dish
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
