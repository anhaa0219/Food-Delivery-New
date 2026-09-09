import { CategorySideBar } from "./_features/category-sidebar";
import { DishGrid } from "./_features/dish-grid";

export default function Dishes() {
  return (
    <div className="py-6 px-6 bg-gray w-full flex flex-col gap-6">
      <CategorySideBar />
      <DishGrid />
    </div>
  );
}
