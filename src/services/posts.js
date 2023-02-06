import { posts as data } from "../data/posts";

//private
let posts = [...data];

export function getPosts() {
  //get all posts
  return [...data];
}

export function getPostsByUser(userId) {
  //get all posts by userId
  const post = data.filter((p) => p.userId === userId);
  return post;
}

export function getPostById(id) {
  //get a single post by id
  const post = data.filter((p) => p.id === id);
  return post;
}
class post2 {
  constructor(userId, id, title, body){
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}
export function addPost(post) {
  //add new post to BEGINNING of posts array
  // use generateId function and pass posts array as the argument to generate a unique id.
  post = new post2(100, data.length + 1, "New Post", "This is the new Post");
  data.unshift(post);

}

export function updatePostTitle(id, title) {
  //update post title
  data.find(value => value.id == id).title = title;
}

export function updatePostBody(id, body) {
  //update post body
  data.find(value => value.id == id).body = body;
}

export function updatePost(id, body, title) {
  //update post title and or body (imagine a form where user is allowed to edit both title and post but may also choose to only edit one of them)
  data.find(value => value.id == id).body = body;
  data.find(value => value.id == id).title = title;
}

export function deletePostBy(id) {
  //delete post by id
  const post = data.filter((p) => p.id !== id);
  return post;
}

export function deletePostsByUserId(userId) {
  //delete all posts of a user by given userId
  const post = data.filter((p) => p.userId !== userId);
  return post;
}
