import { ArrowRight, CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    detail: "For individuals and small projects.",
    features: ["Up to 3 projects", "Basic task management", "Simple progress view"],
    button: "Get started"
  },
  {
    name: "Team",
    price: "₹499",
    period: "/ user / month",
    detail: "For teams that want to get more done.",
    features: ["Unlimited projects", "Team collaboration", "Priority support"],
    button: "Try Team plan",
    popular: true
  }
];

function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Simple pricing</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">A plan for the way you work.</h2>
          <p className="mt-4 text-slate-600">Start free. Upgrade when your team is ready.</p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div key={plan.name} className={`relative rounded-3xl border p-8 ${plan.popular ? "border-emerald-500 shadow-xl shadow-emerald-100" : "border-slate-200"}`}>
              {plan.popular && <span className="absolute -top-3 left-8 rounded-full bg-emerald-600 px-4 py-1 text-xs font-bold text-white">MOST POPULAR</span>}
              <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{plan.detail}</p>
              <div className="mt-7"><span className="text-4xl font-bold text-slate-900">{plan.price}</span>{plan.period && <span className="text-sm text-slate-500">{plan.period}</span>}</div>
              <a href="#contact" className={`mt-7 block w-full rounded-full px-5 py-3 text-center font-semibold transition ${plan.popular ? "bg-emerald-600 text-white hover:bg-emerald-700" : "border border-slate-300 text-slate-800 hover:border-emerald-500 hover:text-emerald-700"}`}>{plan.button} <ArrowRight className="ml-1 inline" size={16} /></a>
              <div className="mt-8 space-y-4">
                {plan.features.map((item) => <p key={item} className="flex items-center gap-3 text-sm text-slate-600"><CheckCircle2 size={17} className="text-emerald-600" />{item}</p>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
