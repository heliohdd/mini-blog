import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgyvd74rA1_4nG8ehEdoGa5WblsIA2VNk",
  authDomain: "miniblog-83acc.firebaseapp.com",
  projectId: "miniblog-83acc",
  storageBucket: "miniblog-83acc.firebasestorage.app",
  messagingSenderId: "222875711883",
  appId: "1:222875711883:web:e4d6a6abfeb49ce66cd78e",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };