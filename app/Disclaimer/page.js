import React from 'react';
import { 
  Security, 
  Warning, 
  Description, 
  Policy, 
  ContactSupport, 
  Gavel,
  Link as LinkIcon,
  Build,
  Assignment,
  Update,
  ThumbUp
} from '@mui/icons-material';
import { Link } from 'lucide-react';

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 py-16">
      {/* Header Section */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-[#59c7b5] to-[#0095d4] text-white px-6 py-3 rounded-full mb-6">
            <Security className="mr-2" />
            <span className="font-semibold">Legal Disclaimer</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">
            Website <span className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] bg-clip-text text-transparent">Disclaimer</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Important legal information regarding the use of our website and services
          </p>
        </div>
      </div>

      {/* Disclaimer Content */}
      <div className="max-w-[1360px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-2xl p-6 sticky top-8 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <Description className="text-[#59c7b5] mr-3" />
                Sections
              </h3>
              <nav className="space-y-3">
                {disclaimerContent.map((section, index) => (
                  <Link
                    key={index}
                    href={`#section-${index}`}
                    className="block text-gray-600 hover:text-[#0095d4] font-medium py-2 px-4 rounded-xl hover:bg-[#59c7b5]/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-[#59c7b5] rounded-full mr-3 group-hover:scale-150 transition-transform duration-300"></div>
                      {section.sectionTitle}
                    </div>
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="space-y-8">
              {disclaimerContent.map((section, index) => (
                <section 
                  key={index}
                  id={`section-${index}`}
                  className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 transform hover:shadow-3xl transition-all duration-500 group"
                >
                  {/* Section Header */}
                  <div className="flex items-start mb-8">
                    <div className="bg-gradient-to-r from-[#59c7b5] to-[#0095d4] p-4 rounded-2xl mr-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {getSectionIcon(section.sectionTitle)}
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight">
                        {section.sectionTitle}
                      </h2>
                      <div className="w-20 h-1 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-full"></div>
                    </div>
                  </div>

                  {/* Section Content */}
                  <div className="space-y-4">
                    {section.content.map((paragraph, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start group/p"
                      >
                        <div className="bg-[#59c7b5]/10 w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0 group-hover/p:scale-110 transition-transform duration-300">
                          <div className="w-2 h-2 bg-[#59c7b5] rounded-full"></div>
                        </div>
                        <p className="text-gray-700 text-lg leading-8 group-hover/p:text-gray-900 transition-colors duration-300">
                          {paragraph}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gradient-to-r from-[#59c7b5] to-[#0095d4] rounded-3xl p-10 text-center text-white shadow-2xl">
              <div className="max-w-2xl mx-auto">
                <ThumbUp className="text-6xl mb-6 mx-auto opacity-90" />
                <h3 className="text-3xl font-bold mb-4">Thank You for Your Understanding</h3>
                <p className="text-xl opacity-90 mb-8">
                  We appreciate you taking the time to read our disclaimer. Your trust is important to us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-[#0095d4] font-bold py-4 px-8 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                    Contact Support
                  </button>
                  <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to get appropriate icons for each section
const getSectionIcon = (sectionTitle) => {
  const icons = {
    'Disclaimer for EzTech-Printer-Solutions': <Security className="text-white text-2xl" />,
    'General Information': <Description className="text-white text-2xl" />,
    'Product Condition and Availability': <Build className="text-white text-2xl" />,
    'Warranty and Returns': <Assignment className="text-white text-2xl" />,
    'Limitation of Liability': <Warning className="text-white text-2xl" />,
    'External Links': <LinkIcon className="text-white text-2xl" />,
    'Legal Compliance': <Gavel className="text-white text-2xl" />,
    'Governing Law': <Policy className="text-white text-2xl" />,
    'Modifications': <Update className="text-white text-2xl" />,
    'Contact Information': <ContactSupport className="text-white text-2xl" />,
    'Agreement': <ThumbUp className="text-white text-2xl" />
  };
  
  return icons[sectionTitle] || <Description className="text-white text-2xl" />;
};

export default Disclaimer;

const disclaimerContent = [
  {
    sectionTitle: 'Disclaimer for EzTech-Printer-Solutions',
    content: [
      'If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us by email at support@eztechprintersolutions.com.',
    ],
  },
  {
    sectionTitle: 'General Information',
    content: [
      'The information provided by EzTech-Printer-Solutions on this website is for general informational purposes only. While we strive to ensure the accuracy and reliability of our new printers, we do not make any warranties or guarantees about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.',
    ],
  },
  {
    sectionTitle: 'Product Condition and Availability',
    content: [
      'All new printers sold by EzTech-Printer-Solutions have been thoroughly inspected, tested, and certified by our skilled technicians. However, as these are pre-owned items, they may show minor signs of previous use. We ensure that all functionality meets our rigorous standards, but physical imperfections may exist. Availability of specific models may vary, and we cannot guarantee the availability of any particular product.',
    ],
  },
  {
    sectionTitle: 'Warranty and Returns',
    content: [
      'EzTech-Printer-Solutions offers a six-month warranty on all new printers. The terms and conditions of the warranty, including the duration and coverage, are outlined in the warranty documentation provided with each product. The warranty covers defects in materials and workmanship under normal use during the warranty period. We also provide a return policy, the details of which can be found on our Returns page. Customers are encouraged to review the warranty and return policy details before making a purchase. Any claims under the warranty must be made in accordance with the procedures outlined in the warranty documentation.',
    ],
  },
  {
    sectionTitle: 'Limitation of Liability',
    content: [
      'In no event will EzTech-Printer-Solutions be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits, arising out of or in connection with the use of this website or the purchase and use of our products.',
    ],
  },
  {
    sectionTitle: 'External Links',
    content: [
      'Through this website, you may be able to link to other websites which are not under the control of EzTech-Printer-Solutions. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.',
    ],
  },
  {
    sectionTitle: 'Legal Compliance',
    content: [
      'EzTech-Printer-Solutions operates in compliance with all applicable laws and regulations of the United States. It is the responsibility of the customer to ensure that their use of our products complies with any applicable local, state, or federal laws.',
    ],
  },
  {
    sectionTitle: 'Governing Law',
    content: [
      'This disclaimer and any disputes arising out of or in connection with the use of this website or the purchase of our products shall be governed by and construed in accordance with the laws of the United States.',
    ],
  },
  {
    sectionTitle: 'Modifications',
    content: [
      'EzTech-Printer-Solutions reserves the right to modify this disclaimer at any time. Any changes will be posted on this page, and it is your responsibility to review this page periodically for updates.',
    ],
  },
  {
    sectionTitle: 'Contact Information',
    content: [
      'If you have any questions or concerns about this disclaimer, please contact our customer service team at:',
      'Email: support@eztechprintersolutions.com',
    ],
  },
  {
    sectionTitle: 'Agreement',
    content: [
      'By using our website and purchasing our products, you agree to this disclaimer in full. If you do not agree with any part of this disclaimer, you must not use our website or purchase our products. Thank you for choosing EzTech-Printer-Solutions.',
    ],
  },
];