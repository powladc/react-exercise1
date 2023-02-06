import { getDefaultNormalizer } from "@testing-library/react";
import { comments as data } from "../data/comments";

//private
let comments = [...data];

export function getCommentById(id) {
  //get comment by id
  const coms = data.filter((d) => d.id === id);
  return coms;
}

export function getCommentsByPostId(postId) {
  //get comments by post id
  const coms = data.filter((d) => d.postId === postId);
  return coms;
}

export function getAllComments() {
  // get all users
  return [...data];
}
export function updateCommentBody(id, body) {
  //update comment body
  data.find(value => value.id == id).body = body;
}

export function deleteCommentById(id) {
  //delete comment by id
  const coms = data.filter((d) => d.id !== id);
  return coms;
  
}

class comms {
  constructor(postId, id, name, email, body ){
    this.postId = postId;
    this.id = id;
    this.name = name;
    this.email = email;
    this.body = body;
  }

}

export function addComment(comment) {
  //add comment to comments array
  // use generateId function and pass comments array as the argument to generate a unique id.
  comment = new comms (1, data.length + 1, "new comment", "newemail@getDefaultNormalizer.com", "This is new Comment" );
  data.push(comment);
}
