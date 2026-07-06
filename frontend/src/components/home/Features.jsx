import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    id: "ai-chat",
    title: "AI Chat",
    description: "Ask anything and get intelligent responses instantly.",
    icon: "🤖",
    color: "blue",
    path: "/chat",
    details: "Experience the power of advanced AI conversations. Get instant, intelligent responses to any query."
  },
  {
    id: "resume-analyzer",
    title: "Resume Analyzer",
    description: "Improve your resume with AI suggestions.",
    icon: "📄",
    color: "green",
    path: "/resume-builder",
    details: "Get AI-powered resume analysis and improvement suggestions to land your dream job."
  },
  {
    id: "email-generator",
    title: "Email Generator",
    description: "Generate professional emails in seconds.",
    icon: "✉️",
    color: "purple",
    path: "/cover-letter",
    details: "Create professional, personalized emails and cover letters in seconds with AI."
  },
  {
    id: "pdf-summarizer",
    title: "PDF Summarizer",
    description: "Convert long PDFs into short summaries.",
    icon: "📚",
    color: "orange",
    path: "/dashboard",
    details: "Quickly extract key information from long PDF documents using AI-powered summarization."
  },
  {
    id: "blog-writer",
    title: "Blog Writer",
    description: "Generate SEO friendly blogs.",
    icon: "✍️",
    color: "pink",
    path: "/chat",
    details: "Create SEO-optimized blog posts that rank high and engage readers."
  },
  {
    id: "image-generator",
    title: "Image Generator",
    description: "Create AI images using prompts.",
    icon: "🎨",
    color: "yellow",
    path: "/image-generator",
    details: "Generate stunning, unique images from text prompts using state-of-the-art AI."
  },
];

function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleFeatureClick = (feature) => {
    navigate(feature.path);
  };

  // ✅ Go to Home Function
  const goToHome = () => {
    navigate("/");
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: "border-blue-500/30 hover:border-blue-500 hover:shadow-blue-500/20",
      green: "border-green-500/30 hover:border-green-500 hover:shadow-green-500/20",
      purple: "border-purple-500/30 hover:border-purple-500 hover:shadow-purple-500/20",
      orange: "border-orange-500/30 hover:border-orange-500 hover:shadow-orange-500/20",
      pink: "border-pink-500/30 hover:border-pink-500 hover:shadow-pink-500/20",
      yellow: "border-yellow-500/30 hover:border-yellow-500 hover:shadow-yellow-500/20",
    };
    return colors[color] || colors.blue;
  };

  const getIconColor = (color) => {
    const colors = {
      blue: "text-blue-400",
      green: "text-green-400",
      purple: "text-purple-400",
      orange: "text-orange-400",
      pink: "text-pink-400",
      yellow: "text-yellow-400",
    };
    return colors[color] || colors.blue;
  };

  const getGradientColor = (color) => {
    const colors = {
      blue: "from-blue-500 to-cyan-500",
      green: "from-green-500 to-emerald-500",
      purple: "from-purple-500 to-pink-500",
      orange: "from-orange-500 to-red-500",
      pink: "from-pink-500 to-rose-500",
      yellow: "from-yellow-500 to-orange-500",
    };
    return colors[color] || colors.blue;
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-slate-950 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        
        {/* Heading */}
        <div className="text-center">
          <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-sm text-blue-400 border border-blue-500/20">
            ✨ AI-Powered Features
          </span>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Powerful AI Features
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400 sm:text-lg">
            Click on any feature to explore its capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              onClick={() => handleFeatureClick(feature)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative cursor-pointer rounded-2xl border bg-slate-900/50 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:p-8 ${
                getColorClasses(feature.color)
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${getGradientColor(feature.color)} opacity-0 blur transition-opacity duration-500 group-hover:opacity-20`}></div>
              
              {/* Content */}
              <div className="relative">
                {/* Icon */}
                <div className={`mb-4 text-5xl transition-transform duration-300 group-hover:scale-110 ${getIconColor(feature.color)}`}>
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {feature.description}
                </p>

                {/* Click to explore */}
                <div className={`mt-4 flex items-center gap-2 text-sm font-medium text-cyan-400 transition-all duration-300 ${
                  hoveredIndex === index ? "opacity-100 gap-3" : "opacity-0"
                }`}>
                  <span>Click to Explore</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>

                {/* Bottom Border Animation */}
                <div className={`absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r ${getGradientColor(feature.color)} transition-all duration-500 group-hover:w-full`} 
                  style={{ width: hoveredIndex === index ? '100%' : '0%' }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* ==================== CTA SECTION ==================== */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/50 p-8 text-center backdrop-blur-sm sm:mt-20 sm:p-12 lg:mt-24">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to get started?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-gray-400">
            Join thousands of users already using NeuroDesk AI.
          </p>
          
          {/* Start Free Trial Button */}
          <button 
            onClick={() => navigate("/register")}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <span>Start Free Trial</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
          
          {/* ✅ Back to Home Button - Just below Start Free Trial */}
          <div className="mt-6">
            <button
              onClick={goToHome}
              className="inline-flex items-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:text-white hover:gap-3"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              <span>Back to Home</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Features;