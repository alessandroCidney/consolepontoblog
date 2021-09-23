// Next.js
import type { NextApiRequest, NextApiResponse } from 'next';

// Services
import { firebaseDatabase } from '../../../../services/firebase';

// Types
type Data = {
  name: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const { id } = req.query;

  const dbRef = firebaseDatabase.ref(database);
  const snapshot = await firebaseDatabase.get(child(dbRef, `posts/${id}`));

  const { post_content } = snapshot.exists() ? snapshot.val() : undefined;

  console.log('content', content)

  if(!!content) {
    res.status(200).json(content);
  } else {
    res.status(404).json({ error: "post not found" });
  }
  
};