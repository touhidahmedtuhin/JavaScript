async function loadUser() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await res.json();
    console.log(user.name);
    console.log(user.email);
  } catch (err) {
    console.error("Failed to load user:", err);
  }
}
loadUser();