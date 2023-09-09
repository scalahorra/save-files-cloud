import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { database } from "@/firebaseConfig";

let files = collection(database, 'files');

export const fetchFiles = (parentId: string) => {
  const [fileList, setFileList] = useState<Array<any>>([]);

  const getFolders = () => {
    if (!parentId) {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs.map((item) => {
            console.log(item.data())
            return { ...item.data(), id:item.id }
          }).filter((item: any) => item.parentId === '')
        );
      });

    } else {
      onSnapshot(files, (response) => {
        setFileList(
          response.docs.map((item) => {
            return { ...item.data(), id:item.id }
          }).filter((item: any) => item.parentId === parentId)
        );
      });
    }
  }
  useEffect(() => {
    getFolders();
  }, [parentId]);

  return { fileList };
}