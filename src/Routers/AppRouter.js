// encargado de las rutas principales de la aplicación
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase-config";
import JournalScreen from "../components/journal/JournalScreen";
import AuthRouter from "./AuthRouter";
import { login } from "../actions/auth";
import PrivateRoute from "./PrivateRoutes";
import PublicRoute from "./PublicRoutes";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {
  // cuando la autentificación cambia, Firebase
  // observable > objeto que se puede disparar más de una vez.
  const dispatch = useDispatch();

  // si está autenticado (tiene uid) redirigir a JournalScreen, pero necesitamos la respuesta del useEffect
  // mientras sea true, no voy a mostrar nada (estamos esperando a firebase)
  const [checking, setChecking] = useState(true);
  // saber si el usuario está autenticado
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]); // como estamos usando el useDispatch (que está fuera de la función) y podría cambiar, lo ponemos como si fuera una dependencia.

  if (checking) {
    return <h1>Please wait...</h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            isLoggedIn={isLoggedIn}
            component={AuthRouter}
          />
          <PrivateRoute
            exact
            isLoggedIn={isLoggedIn}
            path="/"
            component={JournalScreen}
          />

          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
