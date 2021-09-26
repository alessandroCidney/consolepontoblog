// Next.js
import type { NextApiRequest, NextApiResponse } from 'next';

// Services
import { firebaseDatabase } from '../../../services/firebase';

// Types
type Data = {
  name: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const database = firebaseDatabase.getDatabase();

  const dbRef = firebaseDatabase.ref(database);
  const snapshot = await firebaseDatabase.get(firebaseDatabase.child(dbRef, 'posts'));

  const postData = snapshot.exists() ? snapshot.val() : undefined;

  console.log(postData)

  if(!!postData) {
    res.status(200).json(postData);
  } else {
    res.status(404).json({ error: "post not found" });
  }
  
};