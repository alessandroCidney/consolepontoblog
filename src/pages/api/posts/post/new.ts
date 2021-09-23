// Node.js
import fs from 'fs';

// Formidable
import formidable from 'formidable';

// Next.js
import type { NextApiRequest, NextApiResponse } from 'next';

// Services
import { firebaseStorage } from '../../../../services/firebase';

export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
  const form = new formidable.IncomingForm();
  
  form.uploadDir = "./";
  
  form.keepExtensions = true;
  
  form.parse(req, (err, fields, files) => {

    if(!err) {
      const postContent = fields.post_content;
      const postThumbnail = files.post_thumbnail;

      if(!postThumbnail) {
        console.log("Error: without image");
        return;
      }

      if(!postContent) {
        console.log("Error: without content");
        return;
      }

      

      try {
        fs.unlinkSync(`./${postThumbnail.path}`);
      } catch (err) {
        console.log("Err during file removing", err);
        return;
      }
    }
  });

  res.status(200).json({});
  
};