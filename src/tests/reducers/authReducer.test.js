import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Pruebas en el AuthReducer", () => {
  const initialState = {};

  test("debe de devolver el initial state por defecto", () => {
    const state = authReducer(initialState, {});

    expect(state).toEqual(initialState);
  });

  test("debe de hacer el sign in del usuario", () => {
    const user = {
      uid: "1salKSáosu89A7S",
      displayName: "Guillem Delás",
    };

    const action = {
      type: types.login,
      payload: user,
    };

    const state = authReducer(initialState, action);

    expect(state).not.toEqual(initialState);
    expect(state).toEqual({ uid: "1salKSáosu89A7S", name: "Guillem Delás" });
  });

  test("debe de realizar el logout de un usuario", () => {
    const user = {
      uid: "1salKSáosu89A7S",
      name: "Guillem Delás",
    };

    const action = {
      type: types.logout,
      payload: user,
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual({});
  });

  test("debe de devolver el state por defecto cuando no existe la acción", () => {
    const action = {
      type: "hello",
      payload: {
        uid: "ansjakako",
        displayName: "Antonio",
      },
    };

    const state = authReducer(initialState, action);

    expect(state).toEqual(initialState);
  });
});
