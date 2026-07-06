const stats = [
  {
    number: "50K+",
    title: "Active Users",
  },
  {
    number: "1M+",
    title: "AI Requests",
  },
  {
    number: "99.9%",
    title: "Server Uptime",
  },
  {
    number: "150+",
    title: "Countries",
  },
];

function Stats() {
  return (
    <section className="bg-slate-950 py-20">

      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((item, index) => (

          <div
            key={index}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-8 text-center"
          >

            <h2 className="text-5xl font-bold text-blue-400">
              {item.number}
            </h2>

            <p className="mt-3 text-gray-400">
              {item.title}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;