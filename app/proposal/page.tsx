"use client";

// components/ForumPage.tsx
import React, { useState } from "react";
import Link from 'next/link';
import Layout from "../components/layout";
import { proposals, comments } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';

// Comment Component
interface CommentProps {
  comment: {
    id: number;
    proposalId: number;
    body: string;
  };
}

// Proposal Component
interface ProposalProps {
  id: number;
  title: string;
  content: string;
  votes: number;
}

const Proposal: React.FC<{ proposal: ProposalProps }> = ({ proposal }) => {
  const [votes, setVotes] = useState(proposal.votes);

  const handleUpvote = () => setVotes(votes + 1);
  const handleDownvote = () => setVotes(votes - 1);

  const commentCount = comments.filter(comment => comment.postId === proposal.id).length;

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
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {proposals.map((proposal) => (
          <Proposal key={proposal.id} proposal={proposal} />
        ))}
      </div>
    </Layout>
  );
}

export default ForumPage;
