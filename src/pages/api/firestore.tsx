import { app, storage, database } from "@/firebaseConfig";
import { NextApiRequest, NextApiResponse } from "next";

const firestore = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: 'Hello Word!' });
};

export default firestore;