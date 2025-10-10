// components/Footer.jsx
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-8 pb-5 px-0 font-sans text-base select-none">
      <div className="max-w-[1390px] mx-auto w-full px-6">
        {/* Top Row: Country/Region Selector */}
        <div className="flex items-center" style={{ minHeight: 40 }}>
          <span className="text-white font-semibold">Country/Region:</span>
          <span className="flex items-center ml-2">
            <span
              className="inline-block w-[24px] h-[18px] rounded-sm border border-gray-300 mr-2"
              style={{ background: "url('https://flagcdn.com/in.svg') center/cover" }}
            ></span>
            <span className="text-yellow-300 font-semibold">India</span>
          </span>
        </div>
        <hr className="my-4 border-gray-600" />
        {/* Columns */}
        <div className="flex flex-wrap md:flex-nowrap text-[17px]">
          {/* About */}
          <div className="min-w-[180px] flex-1 mb-6">
            <div className="text-[18px] mb-2 font-normal">About Us</div>
            <ul className="space-y-2 text-white/[0.92]">
              <li className="cursor-pointer hover:underline">Contact HP</li>
              <li className="cursor-pointer hover:underline">Careers</li>
              <li className="cursor-pointer hover:underline">Investor relations</li>
              <li className="cursor-pointer hover:underline">Sustainable impact</li>
              <li className="cursor-pointer hover:underline">Newsroom</li>
              <li className="cursor-pointer hover:underline">Tech Takes</li>
            </ul>
          </div>
          {/* Ways to buy */}
          <div className="min-w-[210px] flex-1 mb-6">
            <div className="text-[18px] mb-2 font-normal">Ways to buy</div>
            <ul className="space-y-2 text-white/[0.92]">
              <li className="cursor-pointer hover:underline">Shop online</li>
              <li className="cursor-pointer hover:underline">HP World: Brand exclusive stores</li>
              <li className="cursor-pointer hover:underline">Call an HP rep</li>
              <li className="cursor-pointer hover:underline">Find a reseller</li>
              <li className="cursor-pointer hover:underline">HP Promotions</li>
            </ul>
          </div>
          {/* Support */}
          <div className="min-w-[270px] flex-1 mb-6">
            <div className="text-[18px] mb-2 font-normal">Support</div>
            <ul className="space-y-2 text-white/[0.92]">
              <li className="cursor-pointer hover:underline">Download drivers</li>
              <li className="cursor-pointer hover:underline">Support & troubleshooting</li>
              <li className="cursor-pointer hover:underline">Community</li>
              <li className="cursor-pointer hover:underline">Authorized service providers</li>
              <li className="cursor-pointer hover:underline">Check repair status</li>
              <li className="cursor-pointer hover:underline">Featured links</li>
            </ul>
          </div>
          {/* Partners / Social */}
          <div className="min-w-[200px] flex-1 mb-6 md:pl-8">
            <div className="text-[18px] mb-2 font-normal">HP Partners</div>
            <ul className="space-y-2 text-white/[0.92]">
              <li className="cursor-pointer hover:underline">HP Amplify Partner Program</li>
              <li className="cursor-pointer hover:underline">HP Partner Portal</li>
              <li className="cursor-pointer hover:underline">Developers</li>
            </ul>
            <div className="mt-4">
              <div className="text-[18px] mb-2 font-normal">Stay connected</div>
              <div className="flex space-x-7 text-[30px] mt-0.5">
                <a><FaFacebookF className="hover:text-sky-400" /></a>
                <a><FaInstagram className="hover:text-rose-400" /></a>
                <a><FaXTwitter className="hover:text-gray-400" /></a>
                <a><FaYoutube className="hover:text-red-600" /></a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4 border-gray-600" />
        {/* Links Row */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-gray-300 text-[16px] mb-2">
          <span className="cursor-pointer hover:underline">Recalls</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Product recycling</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Accessibility</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">India CSR Policy</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">India Entity Annual Return</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Privacy</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Terms of use</span>
          <span>|</span>
          <span className="cursor-pointer hover:underline">Cookie Preferences</span>
        </div>
        <div className="text-gray-400 text-[15px] mt-1">
          ©2025 HP Development Company, L.P. The information contained herein is subject to change without notice.
        </div>
      </div>
    </footer>
  );
}