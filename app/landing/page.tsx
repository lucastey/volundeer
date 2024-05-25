// pages/index.tsx
import React from 'react';
import Head from 'next/head';

const events = [
  // Dummy data for events
  { id: 1, name: 'Assistant Honorary Secretary (prefer social work background)', organization: 'SingYouth Hub', spots: '3 spots left', image: '/images/event1.jpg' },
  { id: 2, name: 'Stock-taking of Donations', organization: 'The Volunteer Switchboard Pte Ltd', spots: 'No spot left', image: '/images/event2.jpg' },
  { id: 3, name: 'Volunteers for National Family Festival @ Punggol One', organization: 'Centre for Fathering Ltd', spots: '10 spots left', image: '/images/event3.jpg' },
  // Add more events here
];

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-200">
      <Head>
        <title>Volundeer</title>
        <meta name="description" content="Volundeer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <a href="/" className="text-lg font-bold">Volundeer</a>
          <div>
            <a href="/about" className="mr-4">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto flex-1 p-4">
        <div className="text-center my-8">
          <h1 className="text-4xl font-bold text-black">Be a volunteer</h1>
          <p className="text-lg text-gray-600" font-semi-bold>Create positive impact by volunteering for causes you resonate with.</p>
          <div className="mt-4">
            <input 
              type="text" 
              placeholder="Search by opportunity or organisation name" 
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" 
            />
          </div>
          <div className="flex justify-center items-center mt-4 text-black">
            <span className="mr-2">Filter by:</span>
            <button className="px-4 py-2 mr-2 bg-white text-blue-800 border border-blue-800 rounded-full">Under-served</button>
            <button className="px-4 py-2 mr-2 bg-white text-blue-800 border border-blue-800 rounded-full">Environmental</button>
            <button className="px-4 py-2 mr-2 bg-white text-blue-800 border border-blue-800 rounded-full">Elderly</button>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-black">Explore <span className="text-teal-500 underline-offset-1">517 opportunities</span></h2>
          <div className="flex justify-end mb-4">
            <label htmlFor="results-per-page" className="mr-2">Results per page</label>
            <select id="results-per-page" className="border-gray-300 rounded-md">
              <option>30</option>
              <option>50</option>
              <option>100</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-semibold">{event.name}</h3>
                  <span className={`px-2 py-1 text-sm rounded-full ${event.spots === 'No spot left' ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'}`}>{event.spots}</span>
                </div>
                <p className="text-gray-600">{event.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
