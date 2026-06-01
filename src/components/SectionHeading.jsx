function SectionHeading({ eyebrow, title }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5820b]">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#17130e] sm:text-3xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionHeading
