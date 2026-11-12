import { useState } from "react";
import { CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Validate the required fields and show a success message.
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Let's talk</p>
          <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Ready to make work a little easier?</h2>
          <p className="mt-5 max-w-md leading-7 text-slate-600">Tell us a little about your team. We'll help you see how Flowdesk can fit into your day.</p>
          <div className="mt-8 space-y-4 text-sm text-slate-600">
            <p className="flex items-center gap-3"><MessageSquare size={18} className="text-emerald-700" /> hello@flowdesk.example</p>
            <p className="flex items-center gap-3"><ShieldCheck size={18} className="text-emerald-700" /> No commitment. Just a friendly conversation.</p>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8">
          {submitted ? (
            <div className="py-10 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"><CheckCircle2 size={30} /></span>
              <h3 className="mt-5 text-2xl font-bold text-slate-900">Thanks for reaching out!</h3>
              <p className="mt-2 text-slate-600">Your demo request has been submitted successfully.</p>
              <button onClick={() => setSubmitted(false)} className="mt-6 font-semibold text-emerald-700 hover:text-emerald-800">Send another request</button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold text-slate-900">Request a free demo</h3>
              <p className="mt-2 text-sm text-slate-500">Fill in the details and we'll be in touch.</p>
              <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-slate-700">Your name</label>
                  <input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Enter your name" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
                  <input id="email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@example.com" className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold text-slate-700">What would you like help with? <span className="font-normal text-slate-400">(Optional)</span></label>
                  <textarea id="message" rows="3" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your team..." className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-50" />
                </div>
                <button type="submit" className="w-full rounded-full bg-emerald-600 px-6 py-3.5 font-semibold text-white transition hover:bg-emerald-700">Submit request <ArrowRight className="ml-1 inline" size={16} /></button>
                <p className="text-center text-xs text-slate-400">This demo form is for the assignment. No data is sent to a server.</p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
