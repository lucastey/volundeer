"use client";

// components/ForumPage.tsx
import React, { useState } from "react";
import Link from 'next/link';
import Layout from "../components/layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';
import { proposals, comments } from './data';

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

  const commentCount = comments.filter(comment => comment.proposalId === proposal.id).length;

  return (
    <Link href={`/proposal/${proposal.id}`} className="block border rounded shadow p-4 mb-4 no-underline hover:bg-gray-100 text-black">
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
  const [sortOption, setSortOption] = useState("votes");

  const sortedProposals = [...proposals].sort((a, b) => {
    if (sortOption === "votes") {
      return b.votes - a.votes;
    } else if (sortOption === "comments") {
      const aCommentCount = comments.filter(comment => comment.proposalId === a.id).length;
      const bCommentCount = comments.filter(comment => comment.proposalId === b.id).length;
      return bCommentCount - aCommentCount;
    }
    return 0;
  });

  return (
    <Layout>
      <div className="mt-16 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-black">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Community Proposals</h1>
          <div className="flex items-center">
            <label htmlFor="sort" className="mr-2">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1"
            >
              <option value="votes">Votes</option>
              <option value="comments">Comments</option>
            </select>
          </div>
        </div>
        {sortedProposals.map((proposal) => (
          <Proposal key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </Layout>
  );
}

export default ForumPage;
