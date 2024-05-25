"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [region, setRegion] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [category, setCategory] = useState('');
  const [isRegionDropdownOpen, setIsRegionDropdownOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isFlexible, setIsFlexible] = useState(false);

  const handleSearch = () => {
    // Implement search functionality here
    console.log({ region, fromDate, toDate, category, isFlexible });
  };

  const regions = ["North East", "West", "North", "South", "Central", "East"];
  const categories = ["Environmental", "Elderly", "Children"];

  return (
    <header className="bg-blue-600 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <Link href="/" className="text-4xl font-bold p-2">Volundeer</Link>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center bg-white text-black px-2 py-1 rounded-full shadow-md text-sm">
            <div className="relative flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold text-center">Region</span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select region"
                  value={region}
                  onClick={() => setIsRegionDropdownOpen(!isRegionDropdownOpen)}
                  readOnly
                  className="px-2 py-1 rounded-full focus:outline-none cursor-pointer text-center"
                />
                {isRegionDropdownOpen && (
                  <ul className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-full">
                    {regions.map((region) => (
                      <li
                        key={region}
                        onClick={() => {
                          setRegion(region);
                          setIsRegionDropdownOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center"
                      >
                        {region}
                      </li>
                    ))}
                    <li
                      onClick={() => {
                        setIsFlexible(!isFlexible);
                        setIsRegionDropdownOpen(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center"
                    >
                      I&apos;m flexible
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="border-l border-gray-300 h-10 mx-2"></div>
            <div className="flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold text-center">Start date</span>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-2 py-1 rounded-full focus:outline-none text-center"
              />
            </div>
            <div className="border-l border-gray-300 h-10 mx-2"></div>
            <div className="flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold text-center">End date</span>
              <input
                type="date"
                placeholder="dd/mm/yyyy"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="px-2 py-1 rounded-full focus:outline-none text-center"
              />
            </div>
            <div className="border-l border-gray-300 h-10 mx-2"></div>
            <div className="relative flex flex-col items-center px-2 py-1">
              <span className="text-sm font-semibold text-center">Category</span>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Select category"
                  value={category}
                  onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                  readOnly
                  className="px-2 py-1 rounded-full focus:outline-none cursor-pointer text-center"
                />
                {isCategoryDropdownOpen && (
                  <ul className="absolute mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 w-full">
                    {categories.map((category) => (
                      <li
                        key={category}
                        onClick={() => {
                          setCategory(category);
                          setIsCategoryDropdownOpen(false);
                        }}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-center"
                      >
                        {category}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="border-l border-gray-300 h-10 mx-2"></div>
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-pink-600 text-white rounded-full"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center space-x-4 items-center">
          <Link href="/create" className="text-base font-semibold">Create</Link>
          <Link href="/proposal" className="text-base font-semibold">Proposal</Link>
          <Link href="/rewards" className="text-base font-semibold">Rewards</Link>
          <Link href="/profile" className="text-base font-semibold flex items-center">
            <div className="bg-green-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
              L
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
