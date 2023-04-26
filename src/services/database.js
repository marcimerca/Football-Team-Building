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

import { app } from "./firebase";
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
      return snapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data(),
      }));
    },
    getById: async (id) => {
      const snapshot = await getDoc(doc(db, "players", id));
      return { firebaseId: snapshot.id, ...snapshot.data() };
    },
    add: async (data) => {
      const res = await addDoc(collection(db, "players"), data);
      return res.id;
    },
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
      return snapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data(),
      }));
    },
    getById: async (id) => {
      const snapshot = await getDoc(doc(db, "teams", id));
      return { firebaseId: snapshot.id, ...snapshot.data() };
    },
    add: async (data) => {
      const res = await addDoc(collection(db, "teams"), data);
      return res.id;
    },
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
      return snapshot.docs.map((doc) => ({
        firebaseId: doc.id,
        ...doc.data(),
      }));
    },
    getById: async (id) => {
      const snapshot = await getDoc(doc(db, "users", id));
      return { firebaseId: snapshot.id, ...snapshot.data() };
    },
    add: async (data) => {
      const res = await addDoc(collection(db, "users"), data);
      return res.id;
    },
    bulkAdd: async (data) =>
      await Promise.all(
        data.map((user) => addDoc(collection(db, "users"), user))
      ),
    update: async (id, data) =>
      await setDoc(doc(db, "users", id), data, { merge: true }),
    delete: async (id) => await deleteDoc(doc(db, "users", id)),
  },
};
