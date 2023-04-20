import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "./firebase";
import { useUserStore } from "../store/user";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const login = async () => {
  const userStore = useUserStore();
  return signInWithPopup(auth, provider).then(
    ({ user }) => (userStore.user = user)
  );
};

export const logout = async () => {
  const userStore = useUserStore();
  return auth.signOut().then(() => {
    userStore.user = null;
    return true;
  });
};
