import { useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { database } from "@/firebaseConfig";

let files = collection(database, 'files');

export const fetchFiles = () => {
  const [fileList, setFileList] = useState<ArrayType>([{}]);

  useEffect(() => {
    return onSnapshot(files, (response) => {
      setFileList(response.docs.map((item) => {
        return {...item.data(), id: item.id};
      }));
    });
  });

  return { fileList };
}