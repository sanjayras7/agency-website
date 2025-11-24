export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-purple-800 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
            Websites That Rank on{" "}
            <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Google
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            We build stunning, SEO-optimized websites that drive organic traffic and convert visitors into customers.
            Let us help your business dominate search rankings.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Solid White Button */}
            <button className="group relative px-8 py-4 bg-white text-purple-700 font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto">
              <span className="relative z-10">View Our Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            {/* Outlined White Button */}
            <button className="group relative px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-full border-2 border-white hover:bg-white hover:text-purple-700 transform hover:scale-105 transition-all duration-300 ease-out w-full sm:w-auto shadow-lg hover:shadow-2xl">
              Get Started
              <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </button>
          </div>

          {/* Optional: Decorative elements */}
          <div className="mt-16 flex justify-center gap-8 text-white/60 text-sm">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>SEO Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Mobile Responsive</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fast Loading</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            We offer comprehensive web solutions to help your business thrive online
          </p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Web Development */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We build lightning-fast, modern websites using Next.js and React.
                Our cutting-edge development ensures your site is scalable, performant,
                and delivers an exceptional user experience across all devices.
              </p>
            </div>

            {/* Card 2: SEO Optimization */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                SEO Optimization
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dominate Google search results with our proven SEO strategies.
                We optimize every aspect of your website to improve rankings,
                drive organic traffic, and increase your online visibility.
              </p>
            </div>

            {/* Card 3: Maintenance & Support */}
            <div className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-purple-300 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Maintenance & Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keep your website running smoothly with our monthly maintenance packages.
                We handle updates, security patches, performance optimization, and provide
                ongoing support to ensure your site stays secure and up-to-date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Work
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Check out some of our recent projects and see what we can do for you
          </p>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Card 1: Destination Wedding Photography */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Gradient Placeholder Image */}
              <div className="h-64 bg-gradient-to-br from-pink-400 via-rose-400 to-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">📸</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Destination Wedding Photography
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Portfolio website with gallery - Launching December 2025
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                  <span className="font-medium">Next.js</span>
                  <span>•</span>
                  <span className="font-medium">React</span>
                  <span>•</span>
                  <span className="font-medium">Tailwind CSS</span>
                </div>
              </div>
            </div>

            {/* Project Card 2: Your Project Here */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Gradient Placeholder Image */}
              <div className="h-64 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">✨</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Your Project Here
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ready to bring your vision to life? Let's create something amazing together.
                  Contact us today to discuss your project.
                </p>

                {/* CTA Button */}
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  Get in Touch
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Section Heading */}
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-4">
            Get Started
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Ready to take your online presence to the next level? Fill out the form below and we'll get back to you within 24 hours.
          </p>

          {/* Contact Form */}
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                placeholder="Your full name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Project Type Dropdown */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Type *
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400 bg-white"
              >
                <option value="">Select a project type</option>
                <option value="new-website">New Website</option>
                <option value="redesign">Redesign</option>
                <option value="seo-services">SEO Services</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Budget Dropdown */}
            <div>
              <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                Budget *
              </label>
              <select
                id="budget"
                name="budget"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400 bg-white"
              >
                <option value="">Select your budget</option>
                <option value="under-25k">Under ₹25k</option>
                <option value="25k-50k">₹25k - ₹50k</option>
                <option value="50k-1l">₹50k - ₹1L</option>
                <option value="above-1l">Above ₹1L</option>
              </select>
            </div>

            {/* Message Textarea */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400 resize-vertical"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>

            {/* Privacy Note */}
            <p className="text-sm text-gray-500 text-center">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {/* LinkedIn */}
            <a
              href="#"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="#"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-purple-600 transition-all duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:contact@yourbusiness.com"
              className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-blue-500 transition-all duration-300 transform hover:scale-110"
              aria-label="Email"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 mb-8"></div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 <span className="text-white font-semibold">[Your Business Name]</span>. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
