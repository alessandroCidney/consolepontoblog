// Node.js
import fs from 'fs';

// Formidable
import formidable from 'formidable';

// Next.js
import type { NextApiRequest, NextApiResponse } from 'next';

// Services
import { firebaseStorage, firebaseDatabase } from '../../../../services/firebase';

export const config = {
  api: {
    bodyParser: false
  }
};

async function savePostContentAndGetThePostKey(postContent: string) {
  const db = firebaseDatabase.getDatabase();

  const postData = {
    post_content: postContent
  };

  const postListRef = firebaseDatabase.ref(db, 'posts');

  const newPostRef = firebaseDatabase.push(postListRef);

  firebaseDatabase.set(newPostRef, postData);

  return {
    postKey: newPostRef.key
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  

  res.status(200).json({});
  
};