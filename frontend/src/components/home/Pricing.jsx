const plans = [
  {
    name: "Free",
    price: "₹0",
    features: [
      "10 AI Chats",
      "Resume Analyzer",
      "Email Generator",
    ],
  },
  {
    name: "Pro",
    price: "₹499",
    popular: true,
    features: [
      "Unlimited AI",
      "PDF Summary",
      "Blog Writer",
      "Priority Support",
    ],
  },
  {
    name: "Business",
    price: "₹999",
    features: [
      "Unlimited Everything",
      "Team Members",
      "API Access",
    ],
  },
];

function Pricing() {
  return (
    <section className="bg-slate-950 py-24 text-white">

      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-bold">
          Pricing
        </h2>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-3xl border p-8 ${
                plan.popular
                  ? "border-blue-500 bg-blue-900/20"
                  : "border-slate-800 bg-slate-900"
              }`}
            >

              {plan.popular && (
                <span className="rounded-full bg-blue-600 px-3 py-1 text-sm">
                  Most Popular
                </span>
              )}

              <h3 className="mt-6 text-3xl font-bold">
                {plan.name}
              </h3>

              <h2 className="mt-4 text-5xl font-bold">
                {plan.price}
              </h2>

              <ul className="mt-8 space-y-4">

                {plan.features.map((item, i) => (
                  <li key={i}>
                    ✅ {item}
                  </li>
                ))}

              </ul>

              <button className="mt-10 w-full rounded-xl bg-blue-600 py-3 hover:bg-blue-700">
                Choose Plan
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;