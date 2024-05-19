async function getPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    console.log("Post", data);
    for (let el of data) {
        document.querySelector(".row1").innerHTML += `<div class="col-md-6 border border-dark  "><h4 class="text-danger">Post_Title</h4>
        <h3>${el.title}</h3></div><div class="col-md-6 border border-dark "><h4 class="text-danger">Post_Body</h4><p class="fs-4">${el.body}</p></div>`
    }
}

getPost()