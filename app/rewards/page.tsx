import Head from "next/head";
import Layout from "../components/layout";

const rewards = [
  { id: 1, title: "Spa day", points: 1000, image: "/images/spa.jpg" },
  {
    id: 2,
    title: "Sign up for any learning course or event",
    points: 1000,
    image: "/images/learning.jpg",
  },
  {
    id: 3,
    title: "Shadow a Director/Founder for a day",
    points: 1000,
    image: "/images/shadow.jpg",
  },
  {
    id: 4,
    title: "Pitch an idea to a Director/Founder",
    points: 400,
    image: "/images/pitch.jpg",
  },
];

export default function RewardsPage() {
  return (
    <Layout>
      <Head>
        <title>Company Rewards</title>
      </Head>
      <div className="text-black py-8 text-center">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Partner Rewards</h1>
          <p>Its a fine day to reward yourself!</p>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-4">
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Company
            </button>
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded ml-2">
              Gift Card
            </button>
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded">
            My Redemptions
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rewards.map((reward) => (
            <div key={reward.id} className="border p-4 rounded-lg text-black">
              <img
                src={reward.image}
                alt={reward.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{reward.title}</h2>
              <p className="text-gray-600 mb-4">{reward.points} points</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Redeem
              </button>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
