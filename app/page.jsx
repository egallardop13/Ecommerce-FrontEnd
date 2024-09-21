import Products from "@/components/Products";
import Recommended from "@/components/Recommended";

export default function Home() {
  return (
    <div className="flex flex-col ">
      <Recommended />
      <Products />
    </div>
  );
}
