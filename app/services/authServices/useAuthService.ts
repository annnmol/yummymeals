import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./Firebase";

const useAuthService = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAppReady, setIsAppReady] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
        setIsAppReady(true);
      }
    );

    return () => {
      unsubscribeFromAuthStateChanged();
    };
  }, [auth]);

  const logIn = async (email: string, password: string) => {
    return await signInWithEmailAndPassword(auth, email, password)
      .then((response: UserCredential) => {
        // console.log("login user", response?.user);
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        console.log("error", error);
        return Promise.reject(error);
      });
  };

  const register = async (email: string, password: string) => {
    return await createUserWithEmailAndPassword(auth, email, password)
      .then((response: UserCredential) => {
        // console.log("register user", response?.user);
        return Promise.resolve(response);
      })
      .catch((error: any) => {
        console.log("error", error);
        return Promise.reject(error);
      });
  };

  const logOut = async () => {
    const user = await signOut(auth);
    return Promise.resolve(user);
  };

  return { logIn, logOut, register, user, isAppReady };
};

export default useAuthService;
