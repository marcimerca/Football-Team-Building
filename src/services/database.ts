import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC6kMMmtjs84rKZlm3qbnOadapfbqVOPMo",
  authDomain: "football-team-building.firebaseapp.com",
  projectId: "football-team-building",
  storageBucket: "football-team-building.appspot.com",
  messagingSenderId: "664550438038",
  appId: "1:664550438038:web:6d6390e9560842bf00feb7",
  measurementId: "G-L4683S8WP6",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const Database = {
  Players: {
    collection: collection(db, "players"),
    get: async () => {
      const snapshot = await getDocs(collection(db, "players"));
      return snapshot.docs.map((doc) => doc.data());
    },
    getById: async (id: string) => {
      const snapshot = await getDoc(doc(db, "players", id));
      return snapshot.data();
    },
  },
  Teams: {
    collection: collection(db, "teams"),
    get: async () => {
      const snapshot = await getDocs(collection(db, "teams"));
      return snapshot.docs.map((doc) => doc.data());
    },
    getById: async (id: string) => {
      const snapshot = await getDoc(doc(db, "teams", id));
      return snapshot.data();
    },
  },
  Users: {
    collection: collection(db, "users"),
    get: async () => {
      const snapshot = await getDocs(collection(db, "users"));
      return snapshot.docs.map((doc) => doc.data());
    },
    getById: async (id: string) => {
      const snapshot = await getDoc(doc(db, "users", id));
      return snapshot.data();
    },
  },
};
