export default function FAQ() {
  const faqs = [
    {
      q: "How do I join a quiz?",
      a: "Click 'Create a room' or get an invite link from a friend. You can also join public rooms from the lobby.",
    },
    {
      q: "Is it free to play?",
      a: "Yes. You can play unlimited public quizzes for free. Premium tournaments with prizes are optional.",
    },
    {
      q: "Can I host my own contest?",
      a: "Absolutely. Set round counts, categories, and difficulty. Share the link and you're good to go.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h3 className="text-3xl font-extrabold tracking-tight text-gray-900 text-center">
          Frequently asked questions
        </h3>
        <div className="mt-10 divide-y divide-gray-100 rounded-2xl border border-black/5 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-medium text-gray-900">{f.q}</span>
                <span className="text-gray-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-2 text-gray-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
