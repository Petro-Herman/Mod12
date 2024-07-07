import axios from 'axios';

axios({
  method: 'get',
  url: 'https://jsonplaceholder.typicode.com/users',
})
    .then(response => console.log(response))
	.catch(error => console.log(error));

axios  // скорочений варіант
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => console.log(response))
  .catch(error => console.log(error));



axios
  .get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  })
  .catch(error => {
    console.log(error);
  });



// console.log("HEllo!");
