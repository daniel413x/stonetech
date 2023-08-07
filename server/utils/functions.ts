import { Request } from 'express';
import { UploadedFile } from 'express-fileupload';
import path from 'path';

// eslint-disable-next-line import/prefer-default-export
export async function saveImages(req: Request) {
  const { files } = req;
  const keys = Object.keys(files);
  await Promise.all(keys.map(async (k) => {
    const file = files[k] as UploadedFile;
    const filename = file.name;
    await file.mv(path.resolve(__dirname, '..', 'static', filename));
  }));
}

export function parseBody(req: Request) {
  return JSON.parse(req.body.body);
}
