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
    bodyParser: false,
  },
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
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const form = new formidable.IncomingForm();
  
  form.uploadDir = "./";
  
  form.keepExtensions = true;
  
  form.parse(req, async (err, fields, files) => {

    if(!err) {
      const postContent = fields.post_content;
      const postThumbnail = files.post_thumbnail;

      if(!postThumbnail) {
        console.log("Error: without image");
        return;
      };

      if(!postContent) {
        console.log("Error: without content");
        return;
      };

      const { postKey } = await savePostContentAndGetThePostKey(postContent);

      console.log(postKey);

      try {
        fs.unlinkSync(`./${postThumbnail.path}`);
      } catch (err) {
        console.log("Err during file removing", err);
        return;
      };
    }
  });

  res.status(200).json({});
  
};