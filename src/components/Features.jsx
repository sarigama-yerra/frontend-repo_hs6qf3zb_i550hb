import { Timer, ShieldCheck, Users, Zap } from "lucide-react";

export default function Features() {
  const items = [
    {
      icon: <Zap className="text-fuchsia-600" size={22} />,
      title: "Fast rounds",
      desc: "Quick-fire questions with instant feedback and live scoring.",
    },
    {
      icon: <Users className="text-indigo-600" size={22} />,
      title: "Play with friends",
      desc: "Create private rooms or join public tournaments in seconds.",
    },
    {
      icon: <Timer className="text-emerald-600" size={22} />,
      title: "Smart hints",
      desc: "Use time-based hints to boost accuracy without losing pace.",
    },
    {
      icon: <ShieldCheck className="text-amber-600" size={22} />,
      title: "Anti-cheat",
      desc: "Camera and tab focus detection to keep contests fair.",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Built for thrilling competitions
          </h2>
          <p className="mt-3 text-gray-600">
            Everything you need to host or join engaging quiz battles.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((f, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gray-50 mb-4">
                {f.icon}
              </div>
              <h3 className="font-semibold text-gray-900">{f.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
