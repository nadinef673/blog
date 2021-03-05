function regAccount() {
  let form = document.getElementById("register-acc");
  const inputs = form.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-reg/", {
    method: "POST",
    body: JSON.stringify({
      fname: inputs[0].value,
      lname: inputs[1].value,
      email: inputs[2].value,
    }),
    headers: {
      "Content-type": "application/json; chartset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("account has been created");
      console.log(json);
      form.reset();
    });
}
