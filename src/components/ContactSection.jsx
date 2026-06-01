import { useState } from 'react'

function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  // Build the mailto href dynamically so the browser handles it natively
  const mailtoHref = `mailto:hello@avenra.com?subject=${encodeURIComponent(
    form.subject || 'Consultation Request'
  )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`

  return (
    <section className="border-t border-[#eee3d7] px-5 py-16 lg:px-[72px] lg:py-24" id="contact">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left — copy */}
          <div className="animate-fade-up">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5820b]">
              Contact Us
            </p>
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#17130e] sm:text-3xl">
              Let&apos;s talk about the software your business needs next.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#675f55]">
              Fill in the form and click the button — your email client will open with everything pre-filled.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fff3e0] text-[#f5820b]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
              </span>
              <a href="mailto:hello@avenra.com" className="text-sm font-semibold text-[#17130e] no-underline hover:text-[#f5820b]">
                hello@avenra.com
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="animate-fade-up animate-fade-up-delay-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-[#eee3d7] bg-white p-8 shadow-[0_4px_20px_rgba(31,27,21,0.06)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#3d3730]" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className="rounded-lg border border-[#eee3d7] px-4 py-2.5 text-sm text-[#17130e] outline-none placeholder:text-[#b5aca3] focus:border-[#f5820b] focus:ring-2 focus:ring-[#f5820b]/20"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#3d3730]" htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="rounded-lg border border-[#eee3d7] px-4 py-2.5 text-sm text-[#17130e] outline-none placeholder:text-[#b5aca3] focus:border-[#f5820b] focus:ring-2 focus:ring-[#f5820b]/20"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#3d3730]" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="e.g. Custom CRM for our sales team"
                  className="rounded-lg border border-[#eee3d7] px-4 py-2.5 text-sm text-[#17130e] outline-none placeholder:text-[#b5aca3] focus:border-[#f5820b] focus:ring-2 focus:ring-[#f5820b]/20"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#3d3730]" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, and goals..."
                  className="resize-none rounded-lg border border-[#eee3d7] px-4 py-2.5 text-sm text-[#17130e] outline-none placeholder:text-[#b5aca3] focus:border-[#f5820b] focus:ring-2 focus:ring-[#f5820b]/20"
                />
              </div>

              {/* Native anchor — browser opens mail client directly, no JS blocking */}
              <a
                href={mailtoHref}
                className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#ff8a00] to-[#e46b00] px-6 text-sm font-semibold text-white no-underline shadow-[0_14px_30px_rgba(235,112,0,0.22)] transition hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
