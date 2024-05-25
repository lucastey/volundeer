"use client";

import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import Layout from '../components/layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons';

// Sample data
const posts = [
  {
    id: 1,
    title: 'First Post',
    body: 'This is the body of the first post.',
    votes: 45,
  },
  {
    id: 2,
    title: 'Second Post',
    body: 'This is the body of the second post.',
    votes: 30,
  },
];

const comments = [
  { id: 1, postId: 1, body: 'This is a comment on the first post.' },
  { id: 2, postId: 1, body: 'This is another comment on the first post.' },
  { id: 3, postId: 2, body: 'This is a comment on the second post.' },
];

const ForumPost = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const post = posts.find(e => e.id.toString() === id);
  const [postComments, setPostComments] = useState(comments.filter(comment => comment.postId.toString() === id));
  const [newComment, setNewComment] = useState("");
  const [votes, setVotes] = useState(post ? post.votes : 0);

  // Handle cases where the post is not found
  if (!post) {
    return <div>Post not found</div>;
  }

  const handleUpvote = () => setVotes(votes + 1);
  const handleDownvote = () => setVotes(votes - 1);
  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: postComments.length + 1,
        postId: post.id,
        body: newComment.trim(),
      };
      setPostComments([...postComments, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mt-16 text-black">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p className="mb-8">{post.body}</p>
        
        <div className="flex items-center mb-8">
          <FontAwesomeIcon icon={faThumbsUp} className="cursor-pointer mr-2 text-green-500" onClick={handleUpvote} />
          <span className="mr-2">{votes}</span>
          <FontAwesomeIcon icon={faThumbsDown} className="cursor-pointer text-red-500" onClick={handleDownvote} />
          <FontAwesomeIcon icon={faComment} className="ml-4 text-blue-500" />
          <span className="ml-1">{postComments.length}</span>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Comments</h2>
        <div className="space-y-4 mb-8">
          {postComments.length > 0 ? (
            postComments.map(comment => (
              <div key={comment.id} className="p-4 border rounded shadow">
                <p>{comment.body}</p>
              </div>
            ))
          ) : (
            <p>No comments yet.</p>
          )}
        </div>

        <div>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border rounded mb-4"
            placeholder="Add a comment..."
          />
          <button
            onClick={handleAddComment}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ForumPost;
