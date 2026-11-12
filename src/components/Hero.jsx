import { ArrowRight, Check, Command, Sparkles, Zap } from "lucide-react";

function Hero() {
  return (
    <section id="home" className="relative">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
            <Sparkles size={14} /> A simpler way to work together
          </div>
          <h1 className="max-w-xl text-5xl font-bold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl">
            Make work flow. <span className="text-emerald-600">Not pile up.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Flowdesk helps your team plan projects, manage everyday tasks and stay in sync, all from one simple workspace.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="rounded-full bg-emerald-600 px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700">
              Request a free demo <ArrowRight className="ml-2 inline" size={17} />
            </a>
            <a href="#how-it-works" className="rounded-full border border-slate-200 bg-white px-7 py-3.5 text-center font-semibold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-700">
              See how it works
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
            <div className="flex -space-x-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-orange-200 text-xs font-bold text-orange-800">A</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-sky-200 text-xs font-bold text-sky-800">R</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-violet-200 text-xs font-bold text-violet-800">S</span>
            </div>
            <span>Made for teams that like to keep things simple</span>
          </div>
        </div>

        {/* A small dashboard preview made with regular HTML and Tailwind. */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-100 blur-3xl" />
          <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70 sm:p-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div><p className="text-xs font-medium text-slate-400">WORKSPACE</p><h3 className="mt-1 font-bold text-slate-800">Website redesign</h3></div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">On track</span>
            </div>
            <div className="grid grid-cols-3 gap-3 py-5">
              <div className="rounded-2xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Tasks</p><p className="mt-1 text-2xl font-bold">24</p></div>
              <div className="rounded-2xl bg-slate-50 p-3"><p className="text-xs text-slate-500">Done</p><p className="mt-1 text-2xl font-bold text-emerald-600">16</p></div>
              <div className="rounded-2xl bg-slate-50 p-3"><p className="text-xs text-slate-500">People</p><p className="mt-1 text-2xl font-bold">04</p></div>
            </div>
            <div className="flex items-center justify-between text-sm"><span className="font-semibold text-slate-700">Project progress</span><span className="font-bold text-emerald-700">68%</span></div>
            <div className="mt-3 h-2.5 rounded-full bg-slate-100"><div className="h-2.5 w-[68%] rounded-full bg-emerald-500" /></div>
            <div className="mt-6 space-y-3">
              {[
                ["Create homepage wireframe", "Completed", true],
                ["Review design with team", "In progress", false],
                ["Prepare launch checklist", "To do", false]
              ].map((task) => (
                <div key={task[0]} className="flex items-center gap-3 rounded-xl border border-slate-100 p-3">
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full ${task[2] ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-400"}`}>
                    {task[2] ? <Check size={14} /> : <div className="h-2 w-2 rounded-full bg-current" />}
                  </span>
                  <span className="flex-1 text-sm font-medium text-slate-700">{task[0]}</span>
                  <span className={`text-xs ${task[2] ? "text-emerald-700" : "text-slate-400"}`}>{task[1]}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              <span className="flex items-center gap-2 font-medium"><Zap size={16} /> Your team is making progress</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
