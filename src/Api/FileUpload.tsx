import { storage } from '@/firebaseConfig';
import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { addFiles } from './Firestore';

export const fileUpload = (file: any) => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', (snapshot) => {
    console.log('snapshot',snapshot);
    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    console.log(progress);

  }, (error) => {
    alert(error);

  }, () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      addFiles(downloadURL)
    });
  });
}