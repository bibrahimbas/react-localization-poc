var getUser = () => {
  var userId = localStorage.getItem("UserId");
  console.log("userid: " + userId);
  if (!userId) {
    userId = Math.random().toString(36);
    persistUserToLocalStorage(userId);
  }
  return userId;
};

var persistUserToLocalStorage = (userId) => {
  localStorage.setItem("UserId", userId);
};

export default getUser;
