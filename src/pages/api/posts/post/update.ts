// Next.js
import type { NextApiRequest, NextApiResponse } from 'next';

// Services
import { firebaseStorage, firebaseDatabase } from '../../../../services/firebase';

// Types
type Data = {
  name: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const {
  	updates,
  	post_key
  } = req.body;

  const storage = firebaseDatabase.getDatabase();

  const postRef = firebaseDatabase.ref(storage, `posts/${post_key}`);

  await firebaseDatabase.update(postRef, updates);

  console.log("TUDO OK!")

  res.status(200).json({
  	success: "success"
  });
  
};