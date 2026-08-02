import { redirect } from "next/navigation";

/** Canonical timeline lives at `/` — keep this route for old bookmarks. */
export default function TimelinePage() {
  redirect("/");
}
