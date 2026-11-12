import { CheckCircle2, MousePointer2 } from "lucide-react";

const steps = [
  ["Create your workspace", "Set up a project and add the tasks your team needs to finish."],
  ["Invite your teammates", "Give everyone a clear role and let them know what to work on."],
  ["Track the progress", "Check what is done, what is next and where your team needs help."]
];

const teams = [
  ["Design", 85, "12 tasks"],
  ["Development", 62, "18 tasks"],
  ["Content", 94, "8 tasks"]
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">How it works</p>
          <h2 className="mt-3 max-w-lg text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">From scattered tasks to a clear plan.</h2>
          <p className="mt-5 max-w-lg leading-7 text-slate-600">Getting started with Flowdesk is simple. Bring your work together, invite your team and keep an eye on progress.</p>
          <div className="mt-9 space-y-7">
            {steps.map((step, index) => (
              <div key={step[0]} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 font-bold text-white">{index + 1}</span>
                <div><h3 className="font-bold text-slate-900">{step[0]}</h3><p className="mt-1 leading-6 text-slate-600">{step[1]}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-[#eaf7ef] p-6 sm:p-10">
          <div className="rounded-2xl bg-white p-6 shadow-xl shadow-emerald-900/5">
            <div className="flex items-center justify-between">
              <div><p className="text-sm text-slate-500">Team overview</p><h3 className="mt-1 text-xl font-bold">This week's focus</h3></div>
              <span className="rounded-lg bg-emerald-50 p-2 text-emerald-700"><MousePointer2 size={20} /></span>
            </div>
            <div className="mt-7 space-y-5">
              {teams.map((team) => (
                <div key={team[0]}>
                  <div className="mb-2 flex justify-between text-sm"><span className="font-semibold text-slate-700">{team[0]}</span><span className="text-slate-500">{team[2]}</span></div>
                  <div className="h-2.5 rounded-full bg-slate-100"><div className="h-2.5 rounded-full bg-emerald-500" style={{ width: `${team[1]}%` }} /></div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-3 rounded-xl bg-slate-50 p-4">
              <div className="rounded-full bg-white p-2 text-emerald-700"><CheckCircle2 size={20} /></div>
              <div><p className="text-sm font-semibold text-slate-800">You're moving forward</p><p className="text-xs text-slate-500">Your team has completed 32 tasks this week.</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
