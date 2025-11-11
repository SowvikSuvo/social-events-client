// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaStudiovinari,
  FaTwitter,
} from "react-icons/fa";
import { LuRotate3D } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <a href="/" className="text-2xl font-bold text-white mb-4">
            <FaStudiovinari />
            <span className="text-pink-500">
              Kind<span className="text-purple-500">Earth</span>
            </span>
          </a>
          <p className="text-sm leading-relaxed">
            Empowering communities through meaningful social development events.
            Connect, collaborate, and create positive change together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className=" transition hover:text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a
                href="/upcoming-events"
                className="hover:text-pink-500 transition"
              >
                Events
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-pink-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-sky-400 transition">FAQ</a>
            </li>
            <li>
              <a className="hover:text-sky-400 transition">Privacy Policy</a>
            </li>
            <li>
              <a className="hover:text-sky-400 transition">Terms of Service</a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a className="hover:text-blue-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">
            Social Development Events Platform. All Rights reserved
          </span>{" "}
          <br />
          <span className="text-xs"> Designed & Developed By Sowvik Suvo.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
