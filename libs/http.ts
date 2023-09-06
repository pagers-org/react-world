import Axios from 'axios';
const axios = Axios.create();

export const http = {
  get: function get<Response = unknown>(url: string) {
    return axios.get<Response>(url).then(res => res.data);
  },
  post: function post<Response = unknown, Request = any>(url: string, body?: Request) {
    console.log(body);

    return axios
      .post<Response>(url, body)
      .then(res => {
        console.log('성공');

        return res.data;
      })
      .catch(err => {
        console.log('에러 발생');
      });
  },
  put: function put<Response = unknown, Request = any>(url: string, body?: Request) {
    return axios.put<Response>(url, body).then(res => res.data);
  },
  delete: function remove<Response = unknown>(url: string) {
    return axios.delete<Response>(url).then(res => res.data);
  },
};
