// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBT9YECv2M4w-L3wMP7JYWbCHxTS1W30W8",
  authDomain: "save-files-cloud-c6452.firebaseapp.com",
  projectId: "save-files-cloud-c6452",
  storageBucket: "save-files-cloud-c6452.appspot.com",
  messagingSenderId: "264603171130",
  appId: "1:264603171130:web:02483a2301df72c92b7803",
  measurementId: "G-YFFYEXR343"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);