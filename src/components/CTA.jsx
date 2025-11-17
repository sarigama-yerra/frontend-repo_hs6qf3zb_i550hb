import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-fuchsia-600 via-purple-600 to-indigo-600 p-8 sm:p-12 text-white shadow-xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Ready to claim the top spot?
            </h3>
            <p className="mt-2 text-white/90 max-w-xl">
              Create your first room in seconds. Invite your friends and start
              your streak today.
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100"
              >
                Create a room <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
