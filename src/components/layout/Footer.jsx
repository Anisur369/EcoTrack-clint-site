const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* Left: Branding */}
        <div className="text-sm md:text-base font-medium text-gray-400">
          © 2025 <span className="text-green-400 font-semibold">EcoTrack</span>
        </div>

        {/* Middle: Quick Links */}
        <nav className="flex justify-center space-x-6 text-sm md:text-base">
          <a href="/about" className="hover:text-green-400 transition-colors">
            About
          </a>
          <a href="/contact" className="hover:text-green-400 transition-colors">
            Contact
          </a>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-green-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.8h-1.9v7A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-green-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4l7.5 8.5L4.7 20h2.6l4.8-5.7 4.3 5.7H20l-7-9 6.2-7h-2.5l-4.4 5.2L8.8 4H4z" />
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-green-400">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5A2.5 2.5 0 107.48 6a2.5 2.5 0 00-2.5-2.5zM4.5 8h3v12h-3V8zm6.5 0h2.9v1.7h.1c.4-.8 1.5-1.8 3.2-1.8 3.4 0 4 2.2 4 5.1V20h-3v-5.2c0-1.2 0-2.8-1.7-2.8-1.7 0-2 1.3-2 2.7V20h-3V8z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="bg-gray-800 px-6 py-4 text-xs text-gray-400 text-center">
        Accessibility: We strive to make EcoTrack usable for everyone. Privacy:
        We respect your data.
        <a
          href="/privacy"
          className="text-green-400 underline ml-1 hover:text-green-300"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
