type SectionTitleProps = {
  children: React.ReactNode;
  eyebrow?: string;
};

export function SectionTitle({ children, eyebrow }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
      {eyebrow && (
        <span className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-orange-400">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {children}
      </h2>

      <div
        aria-hidden="true"
        className="mt-5 h-px w-24 bg-gradient-to-r from-transparent via-sky-400 to-transparent"
      />
    </div>
  );
}
