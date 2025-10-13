import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#0095d4] to-[#59c7b5] text-white pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div 
            className="absolute top-0 left-0 right-0 h-full bg-cover bg-center opacity-5"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByaW50ZXJ8ZW58MHx8MHx8fDA%3D')",
            }}
          ></div>
        </div>
        
        <div className="max-w-1360 mx-auto px-6 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Welcome to EzTech-Printer-Solutions</h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
            At EzTech-Printer-Solutions, we specialize in new printers that meet the highest standards of quality and performance.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-1360 mx-auto px-6 py-16">
        {/* Intro Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-slate-200">
            <p className="text-xl text-slate-700 mb-6 leading-relaxed">
              Each device is carefully inspected, tested, and certified to ensure it works like new. Our goal is to deliver affordable, eco-friendly printing solutions without compromising on reliability.
            </p>
            <div className="h-2 w-24 bg-gradient-to-r from-[#0095d4] to-[#59c7b5] my-8 rounded-full"></div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center">
                <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] p-3 rounded-2xl mr-4 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-8 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                Who We Are
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                We are an independent IT solutions and printer services provider committed to making technology simple and affordable. By offering certified new printers and professional setup assistance, we help individuals and businesses save money while reducing e-waste.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW0lMjBvZiUyMHRlY2huaWNpYW5zfGVufDB8fDB8fHww"
                alt="Our team"
                className="rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-10 md:p-14 border border-slate-200 shadow-lg">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center">
              <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] p-3 rounded-2xl mr-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              Our Mission
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our mission is to provide sustainable and cost-effective printing solutions for homes and businesses. We reduce electronic waste and promote environmentally conscious practices — helping our customers and the planet at the same time.
            </p>
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-slate-800 mb-16 text-center">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 transform hover:-translate-y-2 duration-300 hover:shadow-2xl group">
              <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">High-Quality New Printers</h3>
              <p className="text-slate-600 leading-relaxed">Each printer undergoes rigorous testing and certification for dependable performance.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 transform hover:-translate-y-2 duration-300 hover:shadow-2xl group">
              <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Affordable Solutions</h3>
              <p className="text-slate-600 leading-relaxed">Save significantly compared to buying new devices, without compromising quality.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 transform hover:-translate-y-2 duration-300 hover:shadow-2xl group">
              <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Eco-Friendly Options</h3>
              <p className="text-slate-600 leading-relaxed">Reduce electronic waste by choosing new products.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 transform hover:-translate-y-2 duration-300 hover:shadow-2xl group">
              <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Warranty Coverage</h3>
              <p className="text-slate-600 leading-relaxed">All new printers include warranty protection for peace of mind.</p>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200 transform hover:-translate-y-2 duration-300 hover:shadow-2xl group">
              <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-4">Customer Assistance</h3>
              <p className="text-slate-600 leading-relaxed">Our dedicated support team is available to help with setup and general product inquiries.</p>
            </div>
          </div>
        </section>

        {/* Quality Commitment Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-10 md:p-14 border border-slate-200 shadow-lg">
            <h2 className="text-4xl font-bold text-slate-800 mb-8">Our Quality Commitment</h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              We stand behind the quality of every new printer we sell. Our goal is to provide customers with products that are not only cost-effective but also reliable and backed by confidence.
            </p>
            
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center">
                <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] p-2 rounded-xl mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                Warranty Coverage
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-slate-700">All new printers come with a 6-month limited warranty covering defects in materials and workmanship under normal use.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-slate-700">Warranty service includes replacement, repair (where applicable), or refund, at our discretion, if a product is found to be defective within the coverage period.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <span className="text-slate-700">Extended warranty options may be available with select purchases or service plans.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Return Policy Section */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-xl p-10 md:p-14 border border-slate-200">
            <h2 className="text-4xl font-bold text-slate-800 mb-8 flex items-center">
              <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] p-3 rounded-2xl mr-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              Return Policy
            </h2>
            
            <ul className="space-y-5 mb-8">
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-slate-700">We offer a 7-day return policy for all new printers purchased directly from us, provided the product is returned in its original condition.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-slate-700">Refunds are processed within 7–10 business days after the returned product is inspected and approved.</span>
              </li>
              <li className="flex items-start">
                <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-6 h-6 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="text-slate-700">Customers are responsible for return shipping unless the printer arrives damaged, defective, or incorrect.</span>
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">Customer Responsibilities</h3>
              <p className="text-slate-700 mb-6 leading-relaxed">To ensure eligibility for warranty or returns, customers should:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-5 h-5 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <span className="text-slate-700">Retain proof of purchase (invoice or receipt).</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-5 h-5 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <span className="text-slate-700">Use the product under normal conditions as described in the warranty terms.</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] w-5 h-5 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-xs font-bold">•</span>
                  </div>
                  <span className="text-slate-700">Contact our support team immediately if an issue arises, so we can resolve it quickly.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-[#0095d4] to-[#59c7b5] rounded-3xl p-12 text-white text-center shadow-2xl">
            <h2 className="text-4xl font-bold mb-8">Our Commitment</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
              We are more than just a printer supplier — we are your partners in providing affordable, eco-friendly printing solutions. Our commitment to quality, transparency, and sustainability drives everything we do. By choosing EzTech-Printer-Solutions, you not only receive reliable technology but also contribute to reducing e-waste and supporting a greener planet.
            </p>
            <p className="text-xl font-semibold leading-relaxed">
              Thank you for choosing EzTech-Printer-Solutions. We look forward to serving you with reliable products, clear policies, and complete peace of mind.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;