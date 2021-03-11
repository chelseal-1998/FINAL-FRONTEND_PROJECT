function createDancePost() {
  const ta = document.getElementsByTagName("textarea");
  const inputs = document.getElementsByTagName("input");

  let blogPost = {
    header: inputs[0].value,
    title: inputs[1].value,
    description: ta[0].value,
    body1: ta[1].value,
    body2: ta[2].value,
    body3: ta[3].value,
    body4: ta[4].value,
    body5: ta[5].value,
    image: ta[6].value,
    category: ta[7].value,
    video: ta[8].value,
  };

  console.log(blogPost);

  fetch("https://infinite-sierra-94687.herokuapp.com/add-data/", {
    method: "POST",
    body: JSON.stringify(blogPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json.msg);
      alert("Dance Blog has been created");
      document.getElementById("create-form").reset();
      let show = document.getElementById("show-data");
      show.innerHTML +=
        '<button ><a href="https://infinite-sierra-94687.herokuapp.com/show-data/" target="_blank" >Show data</a></button>';
    });
}
