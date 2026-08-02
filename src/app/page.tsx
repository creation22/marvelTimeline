import { AnimatedTimelineShowcase } from "@/components/showcase/AnimatedTimeline";
import { getTimelineItems } from "@/lib/data";

export default function Home() {
  const items = getTimelineItems();
  return <AnimatedTimelineShowcase items={items} />;
}
