import { handleResponse, handleError } from "./apiUtils";
import axios from "axios";
const baseUrl = "http:localhost:3001" + "/courses/";

export function getCourses() {
  console.log(baseUrl)
  // let data;
  return axios.get("http://localhost:3001/courses")
  // return fetch(baseUrl)
  //   .then(handleResponse)
  //   .catch(handleError);
}

export function saveCourse(course) {
  console.log("server")
  return fetch(baseUrl + (course.id || ""), {
    method: course.id ? "PUT" : "POST", 
    headers: { "content-type": "application/json",
    "Accept": "application/json"
   },
    body: JSON.stringify(course)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
