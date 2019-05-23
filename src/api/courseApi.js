import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";
const baseUrl = "http:localhost:3001" + "/courses/";

export function getCourses() {
  console.log(baseUrl)
  return axios.get("http://localhost:3001/courses")
    // .then(handleResponse)
    // .catch(handleError);
}

export function saveCourse(course) {
  console.log("server")
  console.log(course);

  return axios.get("http://localhost:3001/courses"), {
    method: course.id ? "PUT" : "POST", 
    headers: { "content-type": "application/json",
    "Accept": "application/json"
   },
    body: JSON.stringify(course)
  }
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return axios.get("http://localhost:3001" + courseId, {method: "DELETE"})
  // return fetch(baseUrl + courseId, { method: "DELETE" })
    // .then(handleResponse)
    // .catch(handleError);
}
