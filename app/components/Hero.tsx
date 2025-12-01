import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-purple-300">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        Available for Freelance Projects
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                        Building Digital <br />
                        <span className="text-gradient">Experiences</span> That <br />
                        <span className="text-gradient-secondary">Rank & Convert</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                        I am a Full-Stack Developer & SEO Strategist. I build high-performance websites and optimize them for the AI era (GEO) to help your business grow.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="#projects" className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-full font-semibold text-white transition-all glow">
                            View My Work
                        </Link>
                        <Link href="#contact" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full font-semibold text-white transition-all">
                            Contact Me
                        </Link>
                    </div>
                </div>

                <div className="relative lg:h-[600px] flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square animate-float">
                        {/* Abstract 3D-like representation */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-3xl" />
                        <div className="relative z-10 glass-panel p-8 rounded-2xl border border-white/20 shadow-2xl">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-gray-400">Portfolio.exe</div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center text-xl">💻</div>
                                    <div>
                                        <div className="text-sm font-bold text-white">Web Development</div>
                                        <div className="text-xs text-gray-400">Next.js, React, Tailwind</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded bg-purple-500/20 flex items-center justify-center text-xl">🚀</div>
                                    <div>
                                        <div className="text-sm font-bold text-white">SEO & GEO</div>
                                        <div className="text-xs text-gray-400">Ranking #1 on Google & AI</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded bg-pink-500/20 flex items-center justify-center text-xl">🤖</div>
                                    <div>
                                        <div className="text-sm font-bold text-white">AI Solutions</div>
                                        <div className="text-xs text-gray-400">Custom Tools & Automation</div>
                                    </div>
                                </div>

                                <div className="mt-6 p-3 rounded-lg bg-green-500/20 border border-green-500/30 text-sm text-green-200 text-center">
                                    ✅ Open for new opportunities
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
