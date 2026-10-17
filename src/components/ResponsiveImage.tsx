import Image from "next/image";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
};

export function ResponsiveImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  priority,
  sizes = "(max-width: 720px) 100vw, 50vw",
  width = 1400,
  height = 1000
}: ResponsiveImageProps) {
  return (
    <Image
      className={`responsive-image ${className}`}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={(priority ?? loading === "eager") ? undefined : loading}
      preload={priority ?? loading === "eager"}
      sizes={sizes}
      style={{ width: "100%", height: "auto" }}
    />
  );
}

