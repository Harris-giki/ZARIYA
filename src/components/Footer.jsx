import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Left side - Brand and tagline */}
          <div>
            <h3 className="text-xl font-light text-white">ZARIYA</h3>
            <p className="text-xs text-gray-400 mt-1">
              Nourishing Dreams, One Meal at a Time.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              A Non-Profit Initiative by BSCS Batch 33 @ GIKI
            </p>
          </div>

          {/* Right side - Contact links and copyright */}
          <div className="flex flex-col items-start md:items-end space-y-2">
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="https://www.linkedin.com/company/107045450"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm">Connect</span>
              </a>

              <div className="w-px h-4 bg-gray-700"></div>

              <a
                href="mailto:harris.giki@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm">Contact</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-600">© 2025 ZARIYA.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
