import { handleResponse, handleError } from "./apiUtils";
import Axios from "axios";
const baseUrl = "http:localhost:3001"  + "/authors/";

export function getAuthors() {
  return Axios.get("http://localhost:3001/authors")
  // return fetch(baseUrl)
  //   .then(handleResponse)
  //   .catch(handleError);
}
