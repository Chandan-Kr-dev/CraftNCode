import React from 'react';
import Logo from '../assets/images/logo1.png'
import { Facebook, Instagram, Twitter, Github, Youtube } from 'lucide-react';

const Footer = () => {
  const navigation = {
    solutions: [
      { name: 'Start Free Trial', href: '#' },
      { name: 'Testanomials', href: '#' },
      { name: 'Workflow', href: '#' },
      { name: 'Pricing', href: '#' },

    ],
    support: [
      { name: 'Phone', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Mail Us', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],

  };

  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Mission Statement */}
          <div className="md:col-span-1">
            <div className='footer-logo-section'>
              <a href=''>TrueMix</a>
              <img src={Logo} alt='No Image Found'></img>
            </div>
            <p className="text-sm leading-6">
              Multilingual Fact-Checking for a Globalized Information Age
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-gray-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-300">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8 ml-32">
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                About Us
              </h3>
              <ul className="space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm hover:text-white text-gray-500">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Support
              </h3>
              <ul className="space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm hover:text-white text-gray-500">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                Company
              </h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm hover:text-white text-gray-500">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='footer-moto'>
              <h1>Our Moto </h1>
              <p className="text-sm leading-6">
              One Truth, Many Languages. Fact-Check with Confidence.
              </p>

            </div>


          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400">
            © 2024 TrueMix, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;