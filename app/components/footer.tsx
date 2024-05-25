import React from 'react';
import { FaInstagram, FaTwitter, FaDiscord, FaReddit } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 px-4 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-md font-bold">Volundeer</h2>
          <p className="text-xs">Volundeer is a platform connecting volunteers with meaningful opportunities. Our mission is to make volunteering accessible and impactful for everyone.</p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-md font-bold">Navigate</h2>
          <a href="/" className="text-sm font-semibold">Home</a>
          <a href="/create" className="text-sm font-semibold">Create</a>
          <a href="/proposal" className="text-sm font-semibold">Proposal</a>
          <a href="/profile" className="text-sm font-semibold">Profile</a>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-md font-bold">Address</h2>
          <p className="text-xs">123 Volunteer Lane</p>
          <p className="text-xs">City, State, 12345</p>
          <p className="text-xs">Country</p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-md font-bold">Contact</h2>
          <p className="text-xs mb-2">Email: contact@volundeer.com</p>
          <div className="flex space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-xl">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-xl">
              <FaTwitter />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-xl">
              <FaDiscord />
            </a>
            <a href="https://reddit.com" target="_blank" rel="noopener noreferrer" aria-label="Reddit" className="text-xl">
              <FaReddit />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white mt-4"></div>
      <div className="text-center mt-4">
        <p className="text-xs">&copy; 2024 Volundeer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
