// import { useState } from 'react'

function ContactSection() {
  // const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  // const handleChange = (e) => {
  //   setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  // }

  // const mailtoHref = `mailto:hello@avenra.com?subject=${encodeURIComponent(
  //   form.subject || 'Consultation Request'
  // )}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`

  const phone = '919894356749' // +91 9894356749
  const message = encodeURIComponent('Hi Avenra, I have a business enquiry.')
  const url = `https://wa.me/${phone}?text=${message}`

  return (
    <section className="border-t border-[#eee3d7] px-5 py-16 lg:px-[72px] lg:py-24" id="contact">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#f5820b]">
            Contact Us
          </p>
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-[#17130e] sm:text-3xl">
            Let&apos;s talk about the software your business needs next.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#675f55]">
            Reach out via WhatsApp or give us a call. We respond within one business day.
          </p>

          {/* Contact cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 max-w-xl mx-auto">
            {/* WhatsApp */}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#eee3d7] bg-white p-6 no-underline shadow-[0_4px_16px_rgba(31,27,21,0.05)] transition hover:-translate-y-1 hover:border-[#25d366] hover:shadow-[0_8px_24px_rgba(37,211,102,0.12)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8fdf0] text-[#25d366]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-[#25d366]">WhatsApp</p>
                <p className="mt-0.5 text-sm font-medium text-[#17130e]">+91 86809 47556</p>
                <p className="text-xs text-[#675f55]">Business enquiries only</p>
              </div>
            </a>

            {/* Phone — both numbers */}
            <div className="flex flex-col items-center gap-3 rounded-2xl border border-[#eee3d7] bg-white p-6 shadow-[0_4px_16px_rgba(31,27,21,0.05)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e0] text-[#f5820b]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.09 6.09l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-[#f5820b]">Call Us</p>
                <a href="tel:+919894356749" className="mt-0.5 block text-sm font-medium text-[#17130e] no-underline hover:text-[#f5820b]">+91 9894356749</a>
                <a href="tel:+918680947556" className="block text-sm font-medium text-[#17130e] no-underline hover:text-[#f5820b]">+91 86809 47556</a>
              </div>
            </div>
          </div>

          {/* Email card — hidden until we have a real email
          <div className="mt-4 max-w-xl mx-auto">
            <a
              href="mailto:hello@avenra.com"
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#eee3d7] bg-white p-6 no-underline shadow-[0_4px_16px_rgba(31,27,21,0.05)] transition hover:-translate-y-1 hover:border-[#f5820b]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fff3e0] text-[#f5820b]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </span>
              <div>
                <p className="text-xs font-semibold text-[#f5820b]">Email</p>
                <p className="mt-0.5 text-sm font-medium text-[#17130e]">hello@avenra.com</p>
              </div>
            </a>
          </div>
          */}
        </div>

        {/* ── Contact form — temporarily hidden, uncomment when real email is ready ──
        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="animate-fade-up animate-fade-up-delay-2">
            <div className="flex flex-col gap-4 rounded-2xl border border-[#eee3d7] bg-white p-8 shadow-[0_4px_20px_rgba(31,27,21,0.06)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#3d3730]" htmlFor="name">Your Name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Jane Smith" className="rounded-lg border border-[#eee3d7] px-4 py-2.5 text-sm text-[#17130e] outline-none placeholder:text-[#b5aca3] focus:border-[#f5820b] focus:ring-2 focus:ring-[#f5820b]/20" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#3d3730]" htmlFor="email">Your Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com" className="rounded-lg border border-[#eee3d7] px-4 py-2.5 text-sm text-[#17130e] outline-none placeholder:text-[#b5aca3] focus:border-[#f5820b] focus:ring-2 focus:ring-[#f5820b]/20" />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#3d3730]" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="e.g. Custom CRM for our sales team" className="rounded-lg border border-[#eee3d7] px-4 py-2.5 text-sm text-[#17130e] outline-none placeholder:text-[#b5aca3] focus:border-[#f5820b] focus:ring-2 focus:ring-[#f5820b]/20" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#3d3730]" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your project, timeline, and goals..." className="resize-none rounded-lg border border-[#eee3d7] px-4 py-2.5 text-sm text-[#17130e] outline-none placeholder:text-[#b5aca3] focus:border-[#f5820b] focus:ring-2 focus:ring-[#f5820b]/20" />
              </div>
              <a href={mailtoHref} className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-[#ff8a00] to-[#e46b00] px-6 text-sm font-semibold text-white no-underline shadow-[0_14px_30px_rgba(235,112,0,0.22)] transition hover:-translate-y-0.5">
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
        ── End of contact form ── */}
      </div>
    </section>
  )
}

export default ContactSection
