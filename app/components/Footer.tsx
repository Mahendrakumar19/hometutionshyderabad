import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Home Tutions Hyderabad</h3>
            <p className="text-gray-300 text-sm">
              Connecting expert tutors with students for personalized learning and academic excellence in Hyderabad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📱</span>
                <a href="tel:7498246765" className="text-gray-300 hover:text-white transition">
                  7498246765
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📧</span>
                <a href="mailto:hometutionsh@gmail.com" className="text-gray-300 hover:text-white transition">
                  hometutionsh@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span className="text-gray-300">Hyderabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-blue-800 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/home.tutions_hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-amber-500 transition text-2xl"
              title="Instagram"
            >
              📷
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61593750491604"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition text-2xl"
              title="Facebook"
            >
              f
            </a>
            <a
              href="https://wa.me/917498246765?text=Hi%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-green-400 transition text-2xl"
              title="WhatsApp"
            >
              💬
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2025 Home Tutions Hyderabad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
