import React, { Children, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthState(auth, (currentUser) => {
//       setUser(currentUser);
//       setLoading(false);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

  const authInfo = {};
  return <AuthContext value={authInfo}>{Children}</AuthContext>;
};
export default AuthProvider;
