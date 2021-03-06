import axios from 'axios';

const backendUrl = 'http://localhost:8080/';

export function getWithoutToken(path, callback) {
  axios.get(backendUrl + path).then((res) => callback(res.data));
}

export function postWithoutToken(path, postData, callback) {
  axios.post(backendUrl + path, postData).then((res) => callback(res.data));
}
