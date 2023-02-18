import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export async function getData() {
  return new Promise((resolve, reject) => {
    const config: any = {
      header: 'Content-Type: application/json',
    };
    axios
      .get(`${BASE_URL}/users/1/todos`, config)
      .then(val => {
        resolve(val);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
