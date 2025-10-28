// components/DisclaimerPage.jsx
"use client";
import { Shield, AlertTriangle, FileText, Lock, Globe, CheckCircle } from "lucide-react";

export default function DisclaimerPage() {
  const disclaimerPoints = [
    {
      icon: Globe,
      title: "Independent Service Provider",
      content: "We are not directly affiliated with, endorsed by, or representing any hardware manufacturer, software developer, or brand mentioned on this website."
    },
    {
      icon: FileText,
      title: "Trademark Usage",
      content: "All product names, logos, trademarks, and registered marks are the property of their respective owners and are used on this site only for identification and educational purposes."
    },
    {
      icon: Shield,
      title: "Service Scope",
      content: "The services offered by EZ Tech Printer Solutions LLC are independent and provided by our in-house or contracted technicians."
    },
    {
      icon: Lock,
      title: "Software Policy",
      content: "We do not sell, license, or distribute any proprietary or third-party software products. We use only legitimate, customer-owned copies or guide users to official vendor websites."
    },
    {
      icon: AlertTriangle,
      title: "Content Disclaimer",
      content: "All content, tutorials, and guides are intended for informational purposes only. We make no warranties or guarantees of completeness, reliability, or results."
    },
    {
      icon: CheckCircle,
      title: "Remote Access",
      content: "Technical assistance may involve remote-access sessions conducted only with the customer's permission. Customers maintain full control and can terminate access at any time."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Header Section */}
      <section className="relative py-16 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-4 rounded-2xl shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ⚖️ Legal Disclaimer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Important information about our services and your responsibilities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            {/* Introduction */}
            <div className="mb-12 text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>EZ Tech Printer Solutions LLC</strong> ("we," "our," or "the company") is an independent provider of technical support and informational content for computers, printers, and internet-connected devices.
              </p>
            </div>

            {/* Disclaimer Points Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {disclaimerPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-[#59c7b5]/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-3 rounded-xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                        <Icon className="text-white w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">{point.content}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Liability Section */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-bold text-gray-900">Important Notice</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <strong>EZ Tech Printer Solutions LLC will not be liable for any direct, indirect, or incidental loss or damage resulting from the use of our website, our content, or our services.</strong>
              </p>
            </div>

            {/* Agreement Section */}
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-900">Your Agreement</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                By using this website or engaging with our support team, you acknowledge and agree to this disclaimer and to our <a href="/terms" className="text-[#0095d4] hover:text-[#59c7b5] font-semibold underline">Terms of Service</a> and <a href="/privacy" className="text-[#0095d4] hover:text-[#59c7b5] font-semibold underline">Privacy Policy</a>.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-12 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-gray-500">
                ⸻
              </div>
            </div>

            {/* Footer Information */}
            <div className="text-center">
              <div className="space-y-4 text-gray-600">
                <p className="text-lg font-semibold">Last Updated: October 2025</p>
                <p className="text-xl">© 2025 EZ Tech Printer Solutions LLC | All Rights Reserved</p>
              </div>
              
              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200">
                <a href="/terms" className="text-[#0095d4] hover:text-[#59c7b5] font-medium transition-colors duration-300">
                  Terms of Service
                </a>
                <a href="/privacy" className="text-[#0095d4] hover:text-[#59c7b5] font-medium transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="/contact" className="text-[#0095d4] hover:text-[#59c7b5] font-medium transition-colors duration-300">
                  Contact Us
                </a>
                <a href="/about" className="text-[#0095d4] hover:text-[#59c7b5] font-medium transition-colors duration-300">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#59c7b5] to-[#0095d4]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Technical Support?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to help you with printer setup, computer optimization, and IT support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0095d4] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-2xl">
              Get Support Now
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}