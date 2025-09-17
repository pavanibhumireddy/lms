import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company info */}
        <div>
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 rounded-full p-2 mr-2">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span className="font-bold text-xl">Edemy</span>
          </div>
          <p className="text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* Company links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
          <p className="text-sm text-gray-400 mb-4">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow rounded px-3 py-2 text-gray-900"
            />
            <button
              type="submit"
              className="bg-blue-600 px-5 py-2 rounded text-white font-semibold hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* ✅ Copyright section */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} GreatStack. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
