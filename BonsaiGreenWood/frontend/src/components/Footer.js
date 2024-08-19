import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">BonSGreen</h2>
            <p className="mt-2">We are committed to bringing freshness and sustainability to your life.</p>
          </div>
          <div className="flex justify-center md:justify-start space-x-6">
            <a href="https://www.facebook.com/BonSGreen" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/BonSGreen" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/BonSGreen" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://www.linkedin.com/company/BonSGreen" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="font-semibold mb-3">Contact</h3>
            <p>
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              An Phu Dong, Ho Chi Minh
            </p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              +123 456 789
            </p>
            <p>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              contact@bonsgreen.com
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Services</h3>
            <ul className="space-y-2">
              <li className="hover:underline"><a href="/services/plant-care">Plant Care</a></li>
              <li className="hover:underline"><a href="/services/landscaping">Garden Consulting</a></li>
              <li className="hover:underline"><a href="/services/garden-consulting">Green Living</a></li>
              <li className="hover:underline"><a href="/services/green-living">Landscaping</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Newsletter</h3>
            <p>Subscribe to receive the latest updates from us.</p>
            <form className="mt-4">
              <input 
                type="email" 
                placeholder=" Enter your email address" 
                className="w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 text-center border-t border-gray-600 pt-4">
          <p>&copy; 2024 BonSGreen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
