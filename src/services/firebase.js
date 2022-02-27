import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyDL0X_HqoVOCSVFmD4Pqg72s3DW_Pizu8Q",
  authDomain: "tasktab-3df8c.firebaseapp.com",
  projectId: "tasktab-3df8c",
  storageBucket: "tasktab-3df8c.appspot.com",
  messagingSenderId: "1024465453677",
  appId: "1:1024465453677:web:63b259cc251bb936ed7564",
  measurementId: "G-28WWDV4S1Z",
};

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
