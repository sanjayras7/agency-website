export default function ToolShowcase() {
    return (
        <section id="tool" className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="glass-panel rounded-3xl p-8 md:p-16 border border-white/10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-6 border border-blue-500/20">
                                Proprietary Technology
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                Meet My <span className="text-gradient-secondary">AI SEO Assistant</span>
                            </h2>
                            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                I don't just use tools; I build them. My custom AI agent analyzes your website in real-time, identifying GEO opportunities and technical SEO fixes that traditional tools miss.
                            </p>

                            <ul className="space-y-4 mb-8">
                                {[
                                    "Real-time Content Optimization",
                                    "Generative Engine Readiness Score",
                                    "Automated Schema Markup Generation",
                                    "Competitor AI Gap Analysis"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 text-xs">✓</div>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
                                Request a Demo
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />
                            <div className="relative bg-[#0f0f13] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
                                {/* Mock Interface */}
                                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                    <div className="ml-4 text-xs text-gray-500 font-mono">ai-seo-tool.exe</div>
                                </div>
                                <div className="p-6 font-mono text-sm">
                                    <div className="text-green-400 mb-2">$ initializing_scan...</div>
                                    <div className="text-gray-400 mb-2">{">"} target: client-website.com</div>
                                    <div className="text-gray-400 mb-2">{">"} analyzing_structure... <span className="text-green-500">DONE</span></div>
                                    <div className="text-gray-400 mb-4">{">"} checking_geo_readiness... <span className="text-yellow-500">WARNING</span></div>

                                    <div className="p-4 bg-white/5 rounded border border-white/10 mb-4">
                                        <div className="text-blue-300 mb-1">Insight #1: Missing Contextual Entities</div>
                                        <div className="text-gray-500 text-xs">
                                            Your content lacks semantic entities required for Google SGE to fully understand the context. Recommendation: Add structured data for "Service" and "Offer".
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="h-2 w-2 bg-green-500 animate-pulse rounded-full" />
                                        <div className="text-gray-500 text-xs">Generating fix...</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
