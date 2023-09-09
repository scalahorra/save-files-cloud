import { database } from "@/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

let files = collection(database, 'files');

export const addFiles = (imageLink: string, imageName: string, parentId: string) => {
  try {
    addDoc(files, {
      imageLink,
      imageName,
      isFolder: false,
      parentId
    });

  } catch (error) {
    console.error(error);
  }
}

export const addFolder = (payload: {
  folderName: string,
  isFolder: boolean,
  fileList: object,
  parentId: string
}) => {
  try {
    addDoc(files, {
      folderName : payload.folderName,
      isFolder: payload.isFolder,
      fileList: payload.fileList,
      parentId: payload.parentId
    });

  } catch (error) {
    console.error(error);
  }
}