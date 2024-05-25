import React from "react";
import Head from "next/head";
import Layout from "../components/profileLayout";

const ProfilePage: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>
      <div className="bg-white shadow-md rounded-lg p-6 m-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="bg-green-500 text-white rounded-full h-20 w-20 flex items-center justify-center text-4xl font-bold">
              L
            </div>
            <div className="ml-4">
              <h1 className="text-2xl font-bold text-black">Lucas Tay</h1>
              <p className="text-gray-600">
                LEVEL 4{" "}
                <span className="ml-2 text-xs">Last Check-In: Today at 03:08PM</span>
              </p>
              <p className="text-yellow-500 text-3xl font-bold mt-2">
                85 Total Points
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-green-500 text-4xl font-bold">20<span className="text-gray-500 text-sm">/365</span></p>
            <p className="text-gray-500">Rank</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">
              VIEW LEADERBOARD
            </button>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <p className="text-yellow-500 text-xl font-semibold">
              45% Completed
            </p>
            <p className="text-gray-500">Rank Up!</p>
          </div>
          <div className="w-full bg-gray-200 h-4 rounded-full mt-2">
            <div
              className="bg-blue-500 h-4 rounded-full"
              style={{ width: "45%" }}
            ></div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2 text-black">Badges</h2>
          <div className="flex space-x-4">
            <div className="bg-gray-200 p-2 rounded-full h-20 w-20 flex items-center justify-center overflow-hidden">
              <img
                src="/images/badge1.png"
                alt="Global Volunteer Badge"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="bg-gray-200 p-2 rounded-full h-20 w-20 flex items-center justify-center overflow-hidden">
              <img
                src="/images/badge2.png"
                alt="Eco Warrior Badge"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2 text-black">Volunteering History</h2>
          <div className="bg-gray-100 p-4 rounded-lg mb-2">
            <div className="flex justify-between items-center text-black">
              <p>Beach Clean-Up - Changi Beach July</p>
              <p>12/04/2024</p>
              <p>20 Points</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Go to event 
              </button>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between items-center text-black">
              <p>Volunteer @ Club Heal Loyang</p>
              <p>27/05/2024</p>
              <p>65 Points</p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Go to event
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
