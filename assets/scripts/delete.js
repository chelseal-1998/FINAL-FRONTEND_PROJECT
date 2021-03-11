function showData() {
  let list = document.getElementById("data-items");

  fetch("https://infinite-sierra-94687.herokuapp.com/show-data/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      json.forEach((item) => createtr(item));
    });
}

function deleteBlock(blogId) {
  fetch(`https://infinite-sierra-94687.herokuapp.com/delete-data/${blogId}/`)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      alert("Dance blog has been deleted!");
      window.location = "/delete.html";
    });
}

function createtr(blog) {
  const tableitem = `    <tr role="row">
    <td role="cell">${blog.id}</td>
    <td role="cell">${blog.header}</td>
    <td role="cell">${blog.title}</td>
    <td role="cell">${blog.description}</td>
    <td role="cell">${blog.body1}</td>
    <td role="cell">${blog.body2}</td>
    <td role="cell">${blog.body3}</td>
    <td role="cell">${blog.body4}</td>
    <td role="cell">${blog.body5}</td>
    <td role="cell">${blog.image}</td>
    <td role="cell">${blog.category}</td>
    <td role="cell">${blog.video}</td>
    <td><button onclick="event.preventDefault(); deleteBlock(${blog.id})">DELETE</button>
    </td>
    </tr>`;

  let list = document.getElementById("data-items");
  console.log("hello");
  list.innerHTML += tableitem;
}

showData();
