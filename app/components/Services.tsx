export default function Services() {
    const services = [
        {
            title: "Custom Web Development",
            description: "I build fast, responsive, and visually stunning websites tailored to your brand. Specializing in Next.js, React, and modern UI/UX design.",
            icon: "💻",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "SEO & GEO Strategy",
            description: "Don't just rank on Google. I optimize your content for AI engines like ChatGPT and Perplexity (GEO) to future-proof your traffic.",
            icon: "🚀",
            color: "from-purple-500 to-indigo-500"
        },
        {
            title: "AI Tool Development",
            description: "Need a custom AI agent or automation? I develop bespoke AI solutions to streamline your workflows and engage your users.",
            icon: "🤖",
            color: "from-pink-500 to-rose-500"
        },
        {
            title: "Full-Service Freelancing",
            description: "Your dedicated technical partner. I handle everything from domain setup to deployment and ongoing maintenance.",
            icon: "⚡",
            color: "from-emerald-500 to-teal-500"
        }
    ];

    return (
        <section id="services" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">My <span className="text-gradient">Expertise</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I offer a comprehensive suite of digital services to help businesses thrive in the modern web landscape.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="group p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-purple-500/50 transition-all duration-300">
                            <div className="bg-[#0a0a0a] p-8 rounded-xl h-full border border-white/5 relative overflow-hidden group-hover:translate-y-[-5px] transition-transform">
                                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-full group-hover:opacity-20 transition-opacity`} />

                                <div className="text-4xl mb-6">{service.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
