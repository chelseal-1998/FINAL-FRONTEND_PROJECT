//get data from url
const params = new URLSearchParams(window.location.search);

// get elemts to change
const blogPost = document.getElementById("dance");

if (params.has("blogID")) {
  fetch(
    `https://infinite-sierra-94687.herokuapp.com/show-blog-item/${params.get(
      "blogID"
    )}`
  )
    .then((response) => response.json())
    .then((blog) => {
      console.log(blog);
      blogPost.innerHTML = `

      <iframe class="video landing-image" width="100vw" height="50vh" src="${blog.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <h1 class="b-title">${blog.title} </h1>
            
     <p class="b-para">${blog.description}</p>
      <h2 class="b-head">${blog.header}</h2>
      <p class="b-body">${blog.body1}</p>
      <p class="b-body">${blog.body2}</p>
      <p class="b-body">${blog.body3}</p>
      <p class="b-body">${blog.body4}</p>
      <p class="b-body">${blog.body5}</p>
      

      
      
      `;
    });
} else {
  window.location.href = "./404.html";
}
