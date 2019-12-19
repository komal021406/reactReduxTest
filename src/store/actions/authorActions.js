import * as types from "./actionTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthorsSuccess(authors) {
  return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
  return function(dispatch) {
    return authorApi
      .getAuthors()
      .then(authors => {
        console.log(authors)
        dispatch(loadAuthorsSuccess(authors.data));
      })
      .catch(error => {
        throw error;
      });
  };
}
