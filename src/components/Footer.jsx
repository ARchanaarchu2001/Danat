import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-red-800 text-white py-8">
      <div className="flex flex-col mx-auto justify-center items-center text-center max-w-5xl space-y-4">
        {/* Title & Location */}
        <div>
          <h2 className="text-lg font-semibold">DANAT ALBAHAR BARBEQUE FISH</h2>
          <p className="text-center">UAE</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/share/1ChmHgcAA7/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Facebook"
            className="text-white hover:text-red-400 transition"
          >
            <Facebook className="w-6 h-6" />
          </a>

          <a
            href="https://www.instagram.com/danatalbaharbbqfishuae?igsh=MWdpOXUxM3JvZzIzdA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open Instagram"
            className="text-white hover:text-red-400 transition"
          >
            <Instagram className="w-6 h-6" />
          </a>

          <a
            href="https://www.tiktok.com/@danatalbaharbbqfish"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open TikTok"
            className="text-white hover:text-red-400 transition"
          >
            <FontAwesomeIcon
              icon={faTiktok}
              className="text-white"
              style={{ width: 24, height: 24 }}
            />
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-sm mt-4 text-white/70">
          Copyright &copy; {year} by DANAT ALBAHAR BARBEQUE FISH
        </p>
      </div>
    </footer>
  );
}

export default Footer;
