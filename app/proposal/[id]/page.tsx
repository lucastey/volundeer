"use client";

// components/ForumPage.tsx
import React, { useState } from "react";
import Link from 'next/link';
import Layout from "../../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';

// Sample Data
const sampleProposals = [
  {
    id: 1,
    title: "Proposal for Urban Green Spaces",
    content: "A proposal to increase urban green spaces in the city to improve air quality and provide recreational areas for residents.",
    votes: 45,
  },
  {
    id: 2,
    title: "Community Education Initiative",
    content: "An initiative to provide free educational workshops on various topics such as finance, health, and technology for community members.",
    votes: 30,
  },
  {
    id: 3,
    title: "Local Farmers Market Support",
    content: "A proposal to support local farmers markets by providing subsidies and marketing assistance to boost local agriculture.",
    votes: 22,
  },
];

const sampleComments = [
  { id: 1, proposalId: 1, body: "This is a great idea! More green spaces are definitely needed." },
  { id: 2, proposalId: 1, body: "I support this proposal. It will improve our quality of life." },
  { id: 3, proposalId: 2, body: "Educational workshops are a wonderful way to empower our community." },
  { id: 4, proposalId: 3, body: "Supporting local farmers is crucial for our economy." },
  { id: 5, proposalId: 3, body: "Great proposal! Local markets need more visibility." },
];

// Proposal Component
interface ProposalProps {
  id: number;
  title: string;
  content: string;
  votes: number; // Ensure the votes property is included
}

const Proposal: React.FC<{ proposal: ProposalProps }> = ({ proposal }) => {
  const [votes, setVotes] = useState(proposal.votes);

  const handleUpvote = () => setVotes(votes + 1);
  const handleDownvote = () => setVotes(votes - 1);

  const commentCount = sampleComments.filter(comment => comment.proposalId === proposal.id).length;

  return (
    <Link href={`/proposal/${proposal.id}`} className="block border p-4 mb-4 no-underline hover:bg-gray-100 text-black">
      <h2 className="text-2xl font-bold mb-2">{proposal.title}</h2>
      <p className="text-black">{proposal.content}</p>
      <div className="flex items-center mt-2">
        <FontAwesomeIcon icon={faThumbsUp} className="cursor-pointer mr-2 text-green-500" onClick={(e) => { e.preventDefault(); handleUpvote(); }} />
        <span className="mr-2">{votes}</span>
        <FontAwesomeIcon icon={faThumbsDown} className="cursor-pointer text-red-500" onClick={(e) => { e.preventDefault(); handleDownvote(); }} />
        <FontAwesomeIcon icon={faComment} className="ml-4 text-blue-500" />
        <span className="ml-1">{commentCount}</span>
      </div>
    </Link>
  );
};

// ForumPage Component
const ForumPage = () => {
  return (
    <Layout>
      <div className="mt-16 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {sampleProposals.map((proposal) => (
          <Proposal key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </Layout>
  );
}

export default ForumPage;
