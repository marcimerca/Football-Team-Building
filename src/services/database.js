import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
  deleteDoc,
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

/**
 * Database service
 *
 * Has 3 collection, one for each entity:
 * - Players
 * - Teams
 * - Users
 *
 * For each collection, we have 6 methods:
 * - get: get all documents
 * - getById: get a document by id
 * - add: add a document
 * - bulkAdd: add multiple documents
 * - update: update a document
 * - delete: delete a document
 *
 * Every method returns a promise => async response => need to await to get the data => async/await syntax or .then()
 */
export const Database = {
  Players: {
    collection: "players",
    get: async () => {
      const snapshot = await getDocs(collection(db, "players"));
      return snapshot.docs.map((doc) => doc.data());
    },
    getById: async (id) => {
      const snapshot = await getDoc(doc(db, "players", id));
      return snapshot.data();
    },
    add: async (data) => await addDoc(collection(db, "players"), data),
    bulkAdd: async (data) =>
      await Promise.all(
        data.map((player) => addDoc(collection(db, "players"), player))
      ),
    update: async (id, data) =>
      await setDoc(doc(db, "players", id), data, { merge: true }),
    delete: async (id) => await deleteDoc(doc(db, "players", id)),
  },
  Teams: {
    collection: "teams",
    get: async () => {
      const snapshot = await getDocs(collection(db, "teams"));
      return snapshot.docs.map((doc) => doc.data());
    },
    getById: async (id) => {
      const snapshot = await getDoc(doc(db, "teams", id));
      return snapshot.data();
    },
    add: async (data) => await addDoc(collection(db, "teams"), data),
    bulkAdd: async (data) =>
      await Promise.all(
        data.map((team) => addDoc(collection(db, "teams"), team))
      ),
    update: async (id, data) =>
      await setDoc(doc(db, "teams", id), data, { merge: true }),
    delete: async (id) => await deleteDoc(doc(db, "teams", id)),
  },
  Users: {
    collection: "users",
    get: async () => {
      const snapshot = await getDocs(collection(db, "users"));
      return snapshot.docs.map((doc) => doc.data());
    },
    getById: async (id) => {
      const snapshot = await getDoc(doc(db, "users", id));
      return snapshot.data();
    },
    add: async (data) => await addDoc(collection(db, "users"), data),
    bulkAdd: async (data) =>
      await Promise.all(
        data.map((user) => addDoc(collection(db, "users"), user))
      ),
    update: async (id, data) =>
      await setDoc(doc(db, "users", id), data, { merge: true }),
    delete: async (id) => await deleteDoc(doc(db, "users", id)),
  },
};
