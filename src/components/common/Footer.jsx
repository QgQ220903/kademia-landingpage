import { FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-darkblue border-t border-gray-700 text-center text-sm text-gray-400 py-6">
      <div className="flex justify-center space-x-6 mb-3">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaFacebookF size={18} />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaLinkedinIn size={18} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaTwitter size={18} />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
          <FaGithub size={18} />
        </a>
      </div>
      <div>
        © {new Date().getFullYear()} MyBrand. Crafted with passion. All rights reserved.
      </div>
    </footer>
  );
}
