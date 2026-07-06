function CTA() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">

      <div className="mx-auto max-w-4xl text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Ready to Supercharge Your Productivity?
        </h2>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl text-base text-blue-100 sm:text-lg lg:text-xl">
          Join thousands of creators using NeuroDesk AI and experience faster,
          smarter, and more productive workflows.
        </p>

        {/* Button */}
        <button
          className="
            mt-8
            w-full
            rounded-xl
            bg-white
            px-8
            py-4
            font-bold
            text-blue-700
            shadow-lg
            transition
            hover:scale-105
            hover:bg-slate-100
            sm:mt-10
            sm:w-auto
            sm:px-10
          "
        >
          Start Free
        </button>

      </div>

    </section>
  );
}

export default CTA;