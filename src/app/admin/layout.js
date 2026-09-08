import { Sidebar } from "./_components/sidebar";

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-full w-full bg-[#F4F4F5]">
      <Sidebar />
      {children}
    </div>
  );
}
