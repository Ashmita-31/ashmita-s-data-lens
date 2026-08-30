import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Renders a real project screenshot when one is configured.
 * When `src` is empty, a clean neutral container is shown instead —
 * never a stock or generated image.
 */
export function ProjectImage({
  src,
  alt,
  className,
  ratio = "aspect-[16/10]",
}: {
  src: string;
  alt: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary p-2",
        ratio,
        className,
      )}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full rounded-lg object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <ImageIcon className="h-7 w-7" aria-hidden="true" />
          <span className="text-xs font-medium">Screenshot coming soon</span>
        </div>
      )}
    </div>
  );
}
