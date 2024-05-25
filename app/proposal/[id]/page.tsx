"use client";

import React from "react";
import { usePathname } from 'next/navigation';
import Layout from '../../components/layout';

export const posts = [
  {
    id: 1,
    title: 'First Post',
    body: 'This is the body of the first post.',
  },
  {
    id: 2,
    title: 'Second Post',
    body: 'This is the body of the second post.',
  },
];

const ForumPost = () => {
  const pathname = usePathname();
  const id = pathname.split('/').pop();
  const post = posts.find(e => e.id.toString() === id);

  // Handle cases where id is not yet available
  if (!id) {
    return <div>Post not found</div>;
  }

  return (
    <Layout>
      <div className="text-black">
        {id}
      </div>
    </Layout>
  );
};

export default ForumPost;
