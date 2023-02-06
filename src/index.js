//Call all functions inside services and log updated value/s
import { getCommentById, getCommentsByPostId, updateCommentBody, getAllComments, deleteCommentById, addComment } from "./services/comments";
import { updateUser, getAllUsers, addUser, User } from "./services/users";
import { users as data } from "./data/users";
import { getPosts, getPostsByUser, getPostById, addPost, updatePostTitle, updatePostBody, updatePost, deletePostBy, deletePostsByUserId } from "./services/posts";

//USERS
updateUser(1, { email: "roger@77.com" });
console.log(getAllUsers());
const userInfo = new User(data.length + 1, "New User", "New Username", "newuseremail@gmail.com", {street: "New Street", suite: "New Suite", city: "New City", zip: 3000});
addUser(userInfo);
console.log(getAllUsers());

//COMMENTS
console.log(getCommentById(1)); // Print comments with the ID of 1
console.log(getCommentsByPostId(1)); // Print comment with PostId of 1
updateCommentBody(1, { body: "This is the updated body"});// To updated te body
console.log(getAllComments()); // to print alll comments and see the changes
console.log(deleteCommentById(2)); // deleted the comment with the id of 2
addComment();
console.log(getAllComments()); // to print all comments and see the the additional comments

//POST
console.log(getPosts()); // to print all posts
console.log(getPostsByUser(1));
console.log(getPostById(2));
addPost();
console.log(getPosts());
updatePostTitle(1, { title:"This is Updated Post Title"});
console.log(getPosts());
updatePostBody(3, "This is update Post Body");
console.log(getPosts());
updatePost(1, {title: "This is an update post"});
console.log(deletePostBy(5));
console.log(deletePostsByUserId(6));

