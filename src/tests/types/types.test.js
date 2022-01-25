import { types } from "../../types/types";

describe("Testing the types file", () => {
  test("should contain all the action types needed", () => {
    const typesCopy = {
      login: "[Auth] Login",
      logout: "[Auth] Logout",

      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",

      uiStartLoading: "[UI] Start Loading",
      uiFinishLoading: "[UI] Finish Loading",

      notesAddNew: "[Notes] New Note",
      notesActive: "[Notes] Set active note",
      notesLoad: "[Notes] Load notes",
      notesUpdated: "[Notes] Update note",
      notesFileUrl: "[Notes] Updated image url",
      notesDelete: "[Notes] Deleted note",
      notesLogoutCleaning: "[Notes] Logout Cleaning",
    };
    expect(types).toEqual(typesCopy);
  });
});
