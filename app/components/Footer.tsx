export default function Footer() {
    return (
        <footer className="border-t border-white/10 py-12 bg-black/20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-2xl font-bold tracking-tighter">
                    <span className="text-gradient">SEO</span>Master
                </div>

                <div className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} SEO Master. All rights reserved.
                </div>

                <div className="flex gap-6 text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                </div>
            </div>
        </footer>
    );
}
