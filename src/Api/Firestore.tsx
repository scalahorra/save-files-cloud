import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let files = collection(database, 'files');

export const addFiles = (imageLink: string, imageName: string, parentId: string, userEmail: string) => {
  try {
    addDoc(files, {
      imageLink,
      imageName,
      isFolder: false,
      parentId,
      userEmail
    });

  } catch (error) {
    console.error(error);
  }
}

export const addFolder = (payload: {}) => {
  try {
    addDoc(files, { ...payload });

  } catch (error) {
    console.error(error);
  }
}