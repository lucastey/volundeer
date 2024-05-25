// pages/index.tsx
import React from 'react';
import Head from 'next/head';

const events = [
  // Dummy data for events
  { id: 1, name: 'Beach Cleanup', date: '2023-05-25' },
  { id: 2, name: 'Food Drive', date: '2023-06-10' },
  // Add more events here
];

const HomePage = () => {
  return ( 
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Volunteer Platform</title>
        <meta name="description" content="Volunteer Platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <a href="/" className="text-lg font-bold">Volunteer Platform</a>
          <div>
            <a href="/about" className="mr-4">About</a>
            <a href="/contact">Contact</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Volunteer Events</h1>
        
        <div className="mb-4">
          <label htmlFor="filter" className="block text-sm font-medium text-gray-700">Filter by date:</label>
          <input 
            type="date" 
            id="filter" 
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md" 
          />
        </div>

        <ul>
          {events.map(event => (
            <li key={event.id} className="mb-4 p-4 border rounded-md shadow-sm">
              <h2 className="text-lg font-semibold">{event.name}</h2>
              <p className="text-gray-600">Date: {event.date}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default HomePage;
