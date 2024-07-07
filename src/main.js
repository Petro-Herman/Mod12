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

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

axios.get('/users').then().catch();
axios.get('/posts').then().catch();
// axios.get('/images').then().catch();

// додавання апі-ключа
const myApiKey = 'secret-api-key-for-every-request';

axios.defaults.headers.common['header-name'] = myApiKey;

// додавання параметрів запиту через об'єкт
axios.get('https://jsonplaceholder.typicode.com/users', {
    params: {
        _limit: 7,
        _sort: "name"
    }
});

// оголошення асинхронних функцій:
async function fetchData() {
        console.log(
          'Для оголошення асинхронної функції перед ключовим словом function додається async.'
        );
}

const fetchDataj = async function () {
    console.log(
      'У функціональному виразі також перед ключовим словом function додається async.'
    );
}

const fetchDataNew = async () => {
    console.log(
      'Для оголошення асинхронної стрілкової функції перед списком параметрів додається ключове слово async.'
    );
}

const user = {
    async getUsername() {
        console.log(
            "Для оголошення асинхронного методу об'єкта async додається перед іменем методу."
        );
    },
};

class User {
    async getUsername() {
        console.log(
          'Для оголошення асинхронного методу класу також використовується async перед іменем методу.'
        );
    }
}


//Оператор await

const foo = async () => {
	console.log("Before await");

	const promiseValue = await new Promise(resolve => {
		setTimeout(() => resolve(5), 2000)
	});	

	console.log("After await", promiseValue);
};

foo(); // через 2 секунди виведеться в консоль  "After await" 5


//HTTP-запити

const fetchUsers = async () => {
    const response = await
    axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        console.log(response.data);
    });
};

fetchUsers().then(users => console.log(users));


// Конструкція try…catch

console.log('Before try...catch');

try {
  const result = 10 / 0;
  console.log(result); // Цей рядок не виконається через помилку
} catch (error) {
  // Обробимо помилку
  console.error(error.message);
}

console.log('After try...catch');




// console.log("HEllo!");
