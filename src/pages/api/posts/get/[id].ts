// Next.js
import type { NextApiRequest, NextApiResponse } from 'next';

// Services
import { database, ref, child, get } from '../../../../services/firebase';

// Types
type Data = {
  name: string
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const { id } = req.query;

  const dbRef = ref(database);
  const snapshot = await get(child(dbRef, `posts/${id}`));

  const { content } = snapshot.exists() ? snapshot.val() : undefined;

  console.log('content', content)

  if(!!content) {
    res.status(200).json(content);
  } else {
    res.status(404).json({ error: "post not found" });
  }
  
};

// https://stackoverflow.com/questions/65752932/internal-api-fetch-with-getserversideprops-next-js