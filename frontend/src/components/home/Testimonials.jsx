const reviews = [
  {
    name: "Rahul",
    text: "Amazing AI platform. Saved me hours every week.",
  },
  {
    name: "Priya",
    text: "Resume Analyzer helped me crack interviews.",
  },
  {
    name: "Amit",
    text: "Beautiful UI and super fast AI responses.",
  },
];

function Testimonials() {
  return (
    <section className="bg-slate-950 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Testimonials
        </h2>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >

              <p className="text-gray-300">
                "{item.text}"
              </p>

              <h3 className="mt-8 font-bold">
                {item.name}
              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Testimonials;