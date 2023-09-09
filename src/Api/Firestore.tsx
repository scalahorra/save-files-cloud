import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let files = collection(database, 'files');

export const addFiles = (imageLink: string, imageName: string) => {
  try {
    addDoc(files, {
      imageLink,
      imageName
    });

  } catch (error) {
    console.error(error);
  }
}