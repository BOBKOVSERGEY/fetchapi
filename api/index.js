document.getElementById('getText').addEventListener('click', getText);
document.getElementById('getUsers').addEventListener('click', getUsers);
document.getElementById('getPosts').addEventListener('click', getPosts);
document.getElementById('addPost').addEventListener('submit', addPost);

function getText() {
  /*fetch('sample.txt')
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      console.log(data);
    })*/
  fetch('sample.txt')
    .then((res) => res.text())
    .then((data) => {
      document.getElementById('output').innerHTML = data;
    })
    .catch((err) => console.log(err));
}

function getUsers() {
  fetch('users.json')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Users</h2>';

      data.forEach(function (user) {
        output += `
          <ul>
          <li>ID: ${user.id}</li>
          <li>Name: ${user.name}</li>
          <li>Email: ${user.email}</li>
          </ul>
        `;
        document.getElementById('output').innerHTML = output;
      })

    })
    .catch((err) => console.log(err))
}

function getPosts() {
  fetch('http://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => {
      let output = '<h2>Posts</h2>';
      data.forEach((post) => {
        output += `
          <div class="card">
            <h2 class="card-title">${post.title}</h2>
            <p class="card-body">${post.body}</p>
          </div>
        `;
       document.getElementById('output').innerHTML = output;
      })
    })

}

function addPost(e) {
  e.preventDefault();

  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;

  fetch('http://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    header: {
      'Accept': 'application/json, text/plain, */*',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      title: title,
      body: body
    })
  })
    .then((res) => res.json())
    .then((data) => console.log(data))

  
}