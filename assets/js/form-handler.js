function submitForm(event) {
  event.preventDefault();

  // document.getElementById("success-message").style.display = "none";
  const test = document.getElementById("success-message");
  console.log(test);

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const payload = {
    name: name,
    email: email,
    message: message,
  };

  fetch("https://api.byteplex.info/api/test/contact/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(function (response) {
      if (response.ok) {
        console.log("Form submitted successfully");
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        document.getElementById("success-message").style.display = "block";
        
      } else {
        console.log("Form submission failed");
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}