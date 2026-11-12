import { Command } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white"><Command size={16} /></span>
          <span className="font-bold text-slate-900">flowdesk<span className="text-emerald-600">.</span></span>
        </a>
        <p className="text-sm text-slate-500">© 2026 Flowdesk. Made for better teamwork.</p>
        <div className="flex gap-5 text-sm text-slate-500">
          <a href="#features" className="hover:text-emerald-700">Features</a>
          <a href="#pricing" className="hover:text-emerald-700">Pricing</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
