type SectionTitleProps = {
  title: string;
  description?: string;
  className?: string;
};

export function SectionTitle({
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={`
        mx-auto mb-12 flex max-w-3xl flex-col items-center text-center
        md:mb-14
        ${className ?? ""}
      `}
    >
      <h2
        className="
          text-3xl font-black uppercase tracking-[0.12em]
          text-orange-400
          md:text-4xl
        "
      >
        {title}
      </h2>

      <div
        aria-hidden="true"
        className="
          my-5 h-px w-32
          bg-gradient-to-r from-transparent via-orange-400 to-transparent
          shadow-[0_0_18px_rgba(251,146,60,0.45)]
        "
      />

      {description && (
        <p className="text-base leading-8 text-slate-300">{description}</p>
      )}
    </div>
  );
}
