import { AnimatedTimelineShowcase } from "@/components/showcase/AnimatedTimeline";
import { getTimelineItems } from "@/lib/data";

export default function TimelinePage() {
  const items = getTimelineItems();
  return <AnimatedTimelineShowcase items={items} />;
}
