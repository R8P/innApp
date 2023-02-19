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
export async function createUser(
  name: string,
  lastName: string,
  email: string,
  avatar: string,
) {
  return new Promise((resolve, reject) => {
    const config: any = {
      header: 'Content-Type: application/json',
    };
    let body = {
      name: name,
      lastName: lastName,
      email: email,
      avatar: avatar,
    };
    axios
      .post(`${BASE_URL}/users`, body, config)
      .then(val => {
        resolve(val);
        console.log('CREATE_USER:', val);
      })
      .catch(error => {
        console.log(error);
        reject(error);
      });
  });
}
