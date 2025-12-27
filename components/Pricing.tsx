import { Button } from "./ui/Button";

export default function Pricing() {
  const tiers = [
    {
      name: "Basic",
      price: "From $2,000",
      description: "Essential digital presence for startups and small businesses.",
      features: [
        "Responsive Website",
        "CMS Integration",
        "Basic SEO Setup",
        "Google Analytics",
        "2 Weeks Support"
      ],
      cta: "Start Basic",
      featured: false
    },
    {
      name: "Premium",
      price: "From $5,000",
      description: "Complete brand transformation and advanced functionality.",
      features: [
        "Custom UI/UX Design",
        "Advanced Animations",
        "E-commerce Functionality",
        "Performance Optimization",
        "1 Month Support"
      ],
      cta: "Go Premium",
      featured: true
    },
    {
      name: "Custom",
      price: "Variable",
      description: "Tailored enterprise solutions for complex requirements.",
      features: [
        "Full-Scale Application",
        "Custom Backend",
        "Third-party Integrations",
        "Dedicated Team",
        "Ongoing Maintenance"
      ],
      cta: "Contact Us",
      featured: false
    }
  ];

  return (
    <section id="pricing" className="w-full py-20 bg-[#1A1A1A] text-white border-t border-white/5">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mb-16 md:mb-24">
          <span className="block text-xs font-medium tracking-[0.2em] uppercase text-zinc-500 mb-4">
            Investment
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-tight text-white max-w-2xl">
            Simple, transparent <span className="text-zinc-500">pricing</span> for every stage.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`flex flex-col justify-between p-8 md:p-10 rounded-sm transition-all duration-300 relative ${
                tier.featured 
                  ? "bg-linear-to-b from-white/10 to-white/5 backdrop-blur-md border border-white/20 text-white overflow-hidden" 
                  : "bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 text-white"
              }`}
            >
              {tier.featured && (
                <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
              )}
              
              <div className="relative">
                <h3 className={`text-sm tracking-[0.2em] uppercase font-medium mb-4 ${
                  tier.featured ? "text-zinc-300" : "text-zinc-500"
                }`}>
                  {tier.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-light tracking-tight text-white">
                    {tier.price}
                  </span>
                </div>
                <p className={`text-base leading-relaxed font-light mb-10 ${
                  tier.featured ? "text-zinc-300" : "text-zinc-400"
                }`}>
                  {tier.description}
                </p>
                
                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature, i) => (
                    <li key={i} className={`flex items-start text-base font-light ${
                      tier.featured ? "text-zinc-200" : "text-zinc-300"
                    }`}>
                      <svg 
                        className={`w-5 h-5 mr-3 shrink-0 ${
                          tier.featured ? "text-white" : "text-zinc-500"
                        }`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                href="#contact"
                variant={tier.featured ? "primary" : "outline"}
                className="w-full relative"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
