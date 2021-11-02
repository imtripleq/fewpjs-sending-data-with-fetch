// Add your code here

// const { FetchError } = require("node-fetch");

function submitData(user, address) {
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: user,
      email: address,
    }),
  })
    .then((resp) => resp.json())
    .then((data) => {
      document.body.innerHTML = data.name;
      document.body.innerHTML = data.email;
      document.body.innerHTML = data.id;
    })
    .catch((err) => {
      document.body.innerHTML = err.message;
      document.body.innerHTML = "Unauthorized Access";
      throw new FetchError("Unauthorized Access");
    });
}
