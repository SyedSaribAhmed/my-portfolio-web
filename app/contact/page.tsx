import ContactForm from '../../components/ContactForm';
import { socialLinks } from '../../lib/data';

export default function ContactPage() {
  return (
    <section className="px-6 py-14 sm:px-8">
      <div className="mx-auto max-w-5xl space-y-10">
        <div className="rounded-3xl border border-white/10 bg-[#111827]/90 p-10 shadow-neon">
          <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Contact</p>
          <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let's build something.</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Reach out for freelance automation projects, AI engineering roles, or collaboration on intelligent systems.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />
          <div className="space-y-8 rounded-3xl border border-white/10 bg-[#0f172a]/90 p-8 shadow-strong">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Social</p>
              <div className="mt-6 grid gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-slate-200 transition hover:border-neonpurple hover:bg-white/10 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <span className="text-neonpurple">→</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[#111827]/90 p-6 text-sm text-slate-300">
              <p className="text-sm uppercase tracking-[0.35em] text-violet/70">Availability</p>
              <p className="mt-4 leading-7">
                Available for freelance and full-time opportunities. I deliver AI automation systems, intelligent workflows, and production-ready prompt engineering solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
