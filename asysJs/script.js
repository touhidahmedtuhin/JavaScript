document
  .getElementById("loadUserBtn")
  .addEventListener("click", async function () {
    const outputDiv = document.getElementById("output");
    const userDataDiv = document.getElementById("userData");

    outputDiv.innerHTML = "<p>Loading user data...</p>";
    userDataDiv.style.display = "none";

    try {
      // Step 1: Fetch user data from the API
      outputDiv.innerHTML += "<p>Step 1: Fetching data from API...</p>";
      let res = await fetch("https://jsonplaceholder.typicode.com/users/1");

      // Step 2: Convert response to JSON
      outputDiv.innerHTML += "<p>Step 2: Converting response to JSON...</p>";
      let user = await res.json();

      // Step 3: Display the user data
      outputDiv.innerHTML += "<p>Step 3: Data loaded successfully!</p>";

      // Display user details in the card
      document.getElementById("userName").textContent = user.name;
      document.getElementById("userEmail").textContent = user.email;
      document.getElementById("userUsername").textContent = user.username;
      document.getElementById("userPhone").textContent = user.phone;
      document.getElementById("userWebsite").textContent = user.website;
      document.getElementById("userCompany").textContent = user.company.name;
      document.getElementById(
        "userAddress"
      ).textContent = `${user.address.street}, ${user.address.city}, ${user.address.zipcode}`;

      userDataDiv.style.display = "block";

      // Also log to console as in the original code
      console.log(user.name);
      console.log(user.email);
    } catch (err) {
      outputDiv.innerHTML += `<p style="color: red;">Error: ${err.message}</p>`;
      console.error("Failed to load user:", err);
    }
  });
