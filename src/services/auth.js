import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./firebase";
import { useUserStore } from "../store/user";
import { setIsLoading } from "./utils";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const login = async () => {
  return signInWithPopup(auth, provider).then(({ user }) =>
    useUserStore().setUser(user)
  );
};

export const logout = async () => {
  return signOut(auth).then(() => useUserStore().setUser(null));
};

export const checkUserIsLoggedIn = () => {
  return new Promise((resolve, reject) => {
    setIsLoading(true);
    onAuthStateChanged(
      auth,
      async (user) => {
        setIsLoading(false);
        useUserStore().setUser(user);
        resolve(user);
      },
      (err) => {
        setIsLoading(false);
        useUserStore().setUser(null);
        reject(err);
      }
    );
  });
};
