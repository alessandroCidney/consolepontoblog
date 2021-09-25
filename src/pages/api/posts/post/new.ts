// Node.js
import fs from 'fs';

// Formidable
import formidable from 'formidable';

// Next.js
import type { NextApiRequest, NextApiResponse } from 'next';

// Services
import { firebaseDatabase } from '../../../../services/firebase';

// Types
type Data = {
  name: string
};

async function savePostContentAndGetThePostKey(
  postTitle: string, 
  postContent: string,
  authorId: string,
  createdAt: string
) {
  const db = firebaseDatabase.getDatabase();

  const postData = {
    post_title: postTitle,
    post_content: postContent,
    author_id: authorId,
    created_at: createdAt
  };

  const postListRef = firebaseDatabase.ref(db, 'posts');

  const newPostRef = firebaseDatabase.push(postListRef);

  firebaseDatabase.set(newPostRef, postData);

  return newPostRef.key;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const { 
    post_title,
    post_content,
    author_id,
    created_at,
  } = req.body;

  const postKey = await savePostContentAndGetThePostKey(
    post_title,
    post_content,
    author_id,
    created_at
  );

  res.status(200).json({
    post_key: postKey
  });
  
};