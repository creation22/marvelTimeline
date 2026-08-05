import { CONTACT_EMAIL, CONTACT_X_HANDLE, CONTACT_X_URL } from "@/lib/site";

function BannerChunk({ extra }: { extra?: string }) {
  return (
    <>
      <span className="font-bold">Hire me as a developer</span>
      <span aria-hidden className="mx-1 opacity-50">
        {" "}
        ///{" "}
      </span>
      <a
        href={CONTACT_X_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="underline decoration-2 underline-offset-2 hover:bg-[var(--pt-ink)] hover:text-[var(--pt-lime)]"
      >
        @{CONTACT_X_HANDLE}
      </a>
      <span aria-hidden className="mx-1 opacity-50">
        {" "}
        ///{" "}
      </span>
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="underline decoration-2 underline-offset-2 hover:bg-[var(--pt-ink)] hover:text-[var(--pt-lime)]"
      >
        {CONTACT_EMAIL}
      </a>
      {extra ? (
        <>
          <span aria-hidden className="mx-1 opacity-50">
            {" "}
            ///{" "}
          </span>
          <span>{extra}</span>
        </>
      ) : null}
      <span aria-hidden className="mx-1 opacity-50">
        {" "}
        ///{" "}
      </span>
    </>
  );
}

/** Lime top ticker — hire CTA + X + email (and optional page line). */
export function TopHireBanner({ extra }: { extra?: string }) {
  return (
    <div className="pt-marquee" role="banner" aria-label="Hire me">
      <div className="pt-marquee-track">
        <span className="inline-flex items-center">
          <BannerChunk extra={extra} />
          <BannerChunk extra={extra} />
        </span>
        <span className="inline-flex items-center" aria-hidden>
          <BannerChunk extra={extra} />
          <BannerChunk extra={extra} />
        </span>
      </div>
    </div>
  );
}
