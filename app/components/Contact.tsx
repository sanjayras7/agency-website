export default function Contact() {
    return (
        <section id="contact" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">Let's Build Something <br /><span className="text-gradient">Extraordinary</span></h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            Ready to take your digital presence to the next level? Whether you need a website overhaul, an SEO strategy, or a custom AI tool, I'm here to help.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl">📧</div>
                                <div>
                                    <div className="text-sm text-gray-400">Email</div>
                                    <div className="font-medium">hello@freelancer.com</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl">📱</div>
                                <div>
                                    <div className="text-sm text-gray-400">Phone</div>
                                    <div className="font-medium">+1 (555) 123-4567</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-xl">📍</div>
                                <div>
                                    <div className="text-sm text-gray-400">Location</div>
                                    <div className="font-medium">Remote / Worldwide</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="glass-panel p-8 rounded-2xl border border-white/10 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Name</label>
                                <input type="text" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Email</label>
                                <input type="email" className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Service Interest</label>
                            <select className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors text-gray-300">
                                <option>SEO Optimization</option>
                                <option>GEO / AI Search Optimization</option>
                                <option>Web Development</option>
                                <option>Custom AI Tooling</option>
                                <option>Other</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm text-gray-400">Message</label>
                            <textarea className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 h-32 focus:outline-none focus:border-purple-500 transition-colors resize-none" placeholder="Tell me about your project..."></textarea>
                        </div>

                        <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-bold text-white hover:opacity-90 transition-opacity">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
