export const addPost = (newPost) => {
  return {
    type: "ADD_ARTICLE",
    payload: newPost,
  };
};
