import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "./components/layout";

const events = [
  {
    id: 1,
    name: "Beach Cleanup Drive",
    organization: "Green Earth Initiative",
    spots: "10 spots left",
    image: "/images/event1.jpg",
    tag: "Environmental",
  },
  {
    id: 2,
    name: "Stock-taking of Donations",
    organization: "The Volunteer Switchboard Pte Ltd",
    spots: "No spot left",
    image: "/images/event2.jpg",
    tag: "Environmental",
  },
  {
    id: 3,
    name: "National Family Festival",
    organization: "Centre for Fathering Ltd",
    spots: "10 spots left",
    image: "/images/event3.jpg",
    tag: "Elderly",
  },
];

const HomePage = () => {
  return (
    <Layout>
      <Head>
        <title>Volunteer Opportunities</title>
      </Head>
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold text-black">Be a volunteer 🦌</h1>
        <p className="text-lg text-gray-600" style={{ fontWeight: "600" }}>
          Earn through volunteering for causes you resonate with.
        </p>
        <div className="flex justify-center items-center mt-4 text-black">
          <span className="mr-2">Suggested searches:</span>
          <button className="px-4 py-2 mr-2 bg-white text-blue-800 border border-blue-800 rounded-full">
            Under-served
          </button>
          <button className="px-4 py-2 mr-2 bg-white text-blue-800 border border-blue-800 rounded-full">
            Environmental
          </button>
          <button className="px-4 py-2 mr-2 bg-white text-blue-800 border border-blue-800 rounded-full">
            Elderly
          </button>
        </div>
      </div>

      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-black">
          Explore{" "}
          <span className="text-blue-500 underline">56 opportunities</span>
        </h2>
        <div className="flex justify-end mb-4 text-black">
          <label htmlFor="results-per-page" className="mr-2">
            Results per page
          </label>
          <select id="results-per-page" className="border-gray-300 rounded-md">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link key={event.id} href={`/details/${event.id}`}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-lg font-semibold text-black">{event.name}</h3>
                  <span
                    className={`px-2 py-1 text-sm rounded-full ${event.spots === "No spot left" ? "bg-red-200 text-red-800" : "bg-green-200 text-green-800"}`}
                  >
                    {event.spots}
                  </span>
                </div>
                <p className="text-gray-600">{event.organization}</p>
                <p className="inline-block px-2 py-1 text-sm rounded-full bg-green-200 text-black border border-green-500 mt-2">{event.tag}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default HomePage;
