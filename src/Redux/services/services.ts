import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

export async function getUsers() {
  return new Promise((resolve, reject) => {
    const config: any = {
      header: 'Content-Type: application/json',
    };
    axios
      .get(`${BASE_URL}/users?page=1`, config)
      .then(val => {
        resolve(val);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}

