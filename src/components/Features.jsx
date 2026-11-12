import { Clock3, LayoutDashboard, Users } from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Everything in one place",
    text: "Keep tasks, notes and project updates together. No more searching through different tools."
  },
  {
    icon: Users,
    title: "Teamwork that feels easy",
    text: "Assign work, share progress and make sure everyone knows what needs to happen next."
  },
  {
    icon: Clock3,
    title: "Stay on top of deadlines",
    text: "See upcoming work at a glance and spend less time chasing updates."
  }
];

function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">What you get</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Less busywork. More good work.</h2>
          <p className="mt-4 leading-7 text-slate-600">The tools you need to keep projects moving, without making work feel complicated.</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="rounded-2xl border border-slate-200 bg-[#fcfdfb] p-7 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/60">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700"><Icon size={23} /></div>
                <p className="mt-7 text-sm font-semibold text-emerald-700">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{feature.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
