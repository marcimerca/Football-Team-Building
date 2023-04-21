import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { app } from "./firebase";
import { useUserStore } from "../store/user";
import { setIsLoading } from "./utils";
import router from "../router";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const login = async () => {
  const userStore = useUserStore();
  return signInWithPopup(auth, provider).then(({ user }) =>
    userStore.setUser(user)
  );
};

export const logout = async () => {
  const userStore = useUserStore();
  return auth.signOut().then(() => {
    userStore.setUser(null);
    router.push({ name: "login" });
    return true;
  });
};

export const checkUserIsLoggedIn = () => {
  return new Promise((resolve, reject) => {
    setIsLoading(true);
    onAuthStateChanged(
      auth,
      async (user) => {
        setIsLoading(false);
        if (user) {
          useUserStore().setUser(user);
          resolve(user);
        } else {
          useUserStore().setUser(null);
          router.push({ name: "login" });
          setIsLoading(false);
          reject(false);
        }
      },
      (err) => {
        useUserStore().setUser(null);
        router.push({ name: "login" });
        setIsLoading(false);
        reject(err);
      }
    );
  });
};
