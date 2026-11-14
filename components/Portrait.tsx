/**
 * Hero portrait — a plain rectangle with a hairline border and small crop
 * marks at the corners (an editorial/engineering detail, not a badge).
 *
 * With a photo (`/public/images/profile.*`) it shows the photo in monochrome,
 * returning to color on hover. Without one it shows the NQ mark on a quiet
 * flat field, only on large screens, so a missing photo never leaves an
 * empty block on a phone.
 */
function CropMarks() {
  const mark = "absolute h-3 w-3 border-line-strong";
  return (
    <>
      <span aria-hidden className={`${mark} -left-1.5 -top-1.5 border-l border-t`} />
      <span aria-hidden className={`${mark} -right-1.5 -top-1.5 border-r border-t`} />
      <span aria-hidden className={`${mark} -bottom-1.5 -left-1.5 border-b border-l`} />
      <span aria-hidden className={`${mark} -bottom-1.5 -right-1.5 border-b border-r`} />
    </>
  );
}

export default function Portrait({
  src,
  name,
}: {
  src?: string;
  name: string;
}) {
  return (
    <figure
      className={`group relative mx-auto w-full max-w-[20rem] lg:max-w-none ${
        src ? "" : "hidden lg:block"
      }`}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-line bg-surface">
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={name}
            className="tone zoom-img h-full w-full object-cover object-top"
          />
        ) : (
          <div
            aria-hidden
            className="absolute inset-0 flex items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-mark.png"
              alt=""
              className="logo-mark w-3/5 opacity-90"
            />
          </div>
        )}
      </div>
      <CropMarks />
    </figure>
  );
}
