import { Footer } from "./_features/footer";
import { Header } from "./_features/header";
import { Hero } from "./_features/hero";
export default function Main() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
