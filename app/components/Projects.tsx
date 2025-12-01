export default function Projects() {
    const projects = [
        {
            title: "E-Commerce Redesign",
            category: "Web Development",
            description: "A high-performance Shopify Headless build using Next.js. Achieved a 99/100 Core Web Vitals score and increased conversion by 40%.",
            tags: ["Next.js", "Shopify", "Tailwind CSS"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "AI SEO Analyzer Tool",
            category: "SaaS Product",
            description: "My proprietary tool that analyzes websites for Generative Engine Optimization (GEO) readiness. Currently used by 50+ beta testers.",
            tags: ["React", "Python", "OpenAI API"],
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Local Business Growth",
            category: "SEO & GEO Campaign",
            description: "Comprehensive local SEO strategy for a dental chain. Ranked #1 for 'Dentist near me' in 5 cities and optimized for Voice Search.",
            tags: ["Local SEO", "Schema Markup", "GMB"],
            color: "from-green-500 to-emerald-500"
        },
        {
            title: "Real Estate Dashboard",
            category: "Web App",
            description: "A custom CRM and property management dashboard for a real estate agency, featuring automated lead scoring and map integration.",
            tags: ["Vue.js", "Firebase", "Google Maps API"],
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300 mb-4">
                        Selected Work
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl text-lg">
                        A showcase of my best work, ranging from high-performance websites to complex AI-driven applications and successful SEO campaigns.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                            {/* Image Placeholder / Gradient */}
                            <div className={`h-64 w-full bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs font-medium border border-white/10">
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 rounded-md text-xs text-gray-300 border border-white/5">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="inline-flex items-center gap-2 text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors">
                        View all projects <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}
