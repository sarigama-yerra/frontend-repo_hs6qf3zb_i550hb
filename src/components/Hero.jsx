import { Sparkles, Star, Trophy } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      <div className="absolute -top-56 -left-56 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-56 -right-56 h-[32rem] w-[32rem] rounded-full bg-indigo-500/20 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-black/5 text-xs text-gray-700 shadow-sm">
              <Sparkles size={14} className="text-fuchsia-600" />
              Live Quiz Contest • Win rewards
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Battle your friends in real-time quizzes
            </h1>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Join thousands of players, climb the leaderboard, and earn badges
              for your knowledge. Fast rounds, smart hints, instant results.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="px-5 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white font-semibold shadow hover:shadow-lg transition-shadow">
                Start a free match
              </a>
              <a href="#features" className="px-5 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 font-semibold hover:bg-gray-50">
                See features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-5 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Trophy size={16} className="text-yellow-500" />
                Weekly prizes
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-fuchsia-600" />
                4.9/5 player rating
              </div>
            </div>
          </div>
          <div>
            <div className="relative">
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-fuchsia-500/30 to-indigo-500/30 rounded-3xl blur-2xl" />
              <div className="rounded-3xl border border-black/5 bg-white shadow-xl overflow-hidden">
                <img
                  alt="Quiz preview"
                  className="w-full h-auto"
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1600&auto=format&fit=crop"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
