export default function Home() {
  return (
    <div className="bg-[#E8E3DA]">
      {/* Navigation */}
      <nav className="bg-[#F5F2ED] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Left Nav */}
            <div className="flex items-center gap-8">
              <a href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900">Services</a>
              <a href="#portfolio" className="text-sm font-medium text-gray-700 hover:text-gray-900">Portfolio</a>
              <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
            </div>

            {/* Center Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <h1 className="text-xl font-bold text-gray-900">Your Agency</h1>
            </div>

            {/* Right Nav */}
            <div className="flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
              <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</a>
              <button className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-light text-gray-800 mb-4">
            Websites That Rank on
          </h2>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-8">
            Google
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            We build stunning, SEO-optimized websites that drive organic traffic<br />
            and convert visitors into customers.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg">
              View Our Work →
            </button>
            <button className="px-8 py-3 bg-transparent text-gray-900 font-medium rounded-full border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-sm text-gray-600">Rank higher on search engines</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900 mb-2">Mobile Responsive</h3>
              <p className="text-sm text-gray-600">Perfect on all devices</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold text-gray-900 mb-2">Fast Loading</h3>
              <p className="text-sm text-gray-600">Optimized for speed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              What We Do
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive web solutions to help your business thrive online
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Web Development */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700 p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-white/90 leading-relaxed">
                We build lightning-fast, modern websites using Next.js and React.
                Our cutting-edge development ensures your site is scalable and performant.
              </p>
            </div>

            {/* Card 2: SEO Optimization */}
            <div className="relative rounded-3xl overflow-hidden bg-[#F5F2ED] p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">📈</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SEO Optimization</h3>
              <p className="text-gray-600 leading-relaxed">
                Dominate Google search results with our proven SEO strategies.
                We optimize every aspect of your website to improve rankings.
              </p>
            </div>

            {/* Card 3: Maintenance & Support */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-green-600 to-green-800 p-8 text-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="text-6xl mb-6">🔧</div>
              <h3 className="text-2xl font-bold mb-4">Maintenance & Support</h3>
              <p className="text-white/90 leading-relaxed">
                Keep your website running smoothly with our monthly maintenance packages.
                We handle updates, security patches, and performance optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out some of our recent projects and see what we can do for you
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project Card 1 */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Gradient Placeholder Image */}
              <div className="h-64 bg-gradient-to-br from-pink-400 via-rose-400 to-orange-400 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">📸</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 bg-white">
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

            {/* Project Card 2 */}
            <div className="group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Gradient Placeholder Image */}
              <div className="h-64 bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-6xl">✨</div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 bg-white">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Your Project Here
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ready to bring your vision to life? Let's create something amazing together.
                </p>

                {/* CTA Button */}
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg">
                  Get in Touch →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5F2ED]">
        <div className="max-w-2xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get Started
            </h2>
            <p className="text-gray-600 text-lg">
              Ready to take your online presence to the next level? Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-white rounded-3xl p-8 shadow-lg">
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400 bg-white"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400 bg-white"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all duration-200 hover:border-gray-400 resize-vertical"
                placeholder="Tell us about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 bg-black text-white font-semibold text-lg rounded-full hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Send Message →
            </button>

            {/* Privacy Note */}
            <p className="text-sm text-gray-500 text-center">
              We respect your privacy. Your information will never be shared with third parties.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Your Agency</h3>
              <p className="text-gray-400 text-sm">Building websites that rank on Google and convert visitors into customers.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Web Development</a></li>
                <li><a href="#" className="hover:text-white">SEO Optimization</a></li>
                <li><a href="#" className="hover:text-white">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Portfolio</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">GitHub</a></li>
                <li><a href="#" className="hover:text-white">Email</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>© 2025 Your Agency. All rights reserved. Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
