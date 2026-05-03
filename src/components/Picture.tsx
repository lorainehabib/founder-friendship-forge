type PictureProps = {
  webp: string;
  jpg: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  decoding?: "sync" | "async" | "auto";
  fetchPriority?: "high" | "low" | "auto";
};

const Picture = ({
  webp,
  jpg,
  alt,
  className,
  loading,
  decoding = "async",
  fetchPriority,
}: PictureProps) => {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
      />
    </picture>
  );
};

export default Picture;
