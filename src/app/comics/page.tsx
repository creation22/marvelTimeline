import { ComicsHub } from "@/components/showcase/ComicsHub";
import { getComicReadingOrders } from "@/data/comic-reading-orders";

export const metadata = {
  title: "MCU Comics — Reading Orders | Marvel Timeline",
  description:
    "Curated Marvel comic reading orders with official Marvel Unlimited links — companion to Marvel Timeline.",
};

export default function ComicsPage() {
  const orders = getComicReadingOrders();
  return <ComicsHub orders={orders} />;
}
