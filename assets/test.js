function createCom() {
  let form = document.getElementById("creating_comment");
  const inputs = form.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/add-com/", {
    method: "POST",
    body: JSON.stringify({
      fname: inputs[0].value,
      email: inputs[1].value,
      comment: inputs[2].value,
    }),
    headers: {
      "Content-type": "application/json; chartset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("Comment Has Been Added");
      console.log(json);
      form.reset();
    });
}

function getComment() {
  fetch(`http://127.0.0.1:5000/show-com/`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((comment) => showcomment(comment));
    });
}

function showcomment(comment) {
  const commentacc = `<tr data-id=${comment.id}>
            <td>${comment.fname}</td>
            <td>${comment.comment}</td>
            <td><button class="delete_btn" onclick="delete_items(${comment.id})">Delete</button></td>
            </tr>`;
  let list = document.getElementById("comment_table");
  console.log("blah blah");
  list.innerHTML += commentacc;
}
getComment();

function delete_items(id) {
  if (confirm("Comment will be deleted")) {
    fetch(`http://127.0.0.1:5000/delete-account/${id}/`, {
      method: "DELETE",
    });
    console.log(id);
  } else {
    alert("cancel");
    console.log("not saved to database");
  }
}
