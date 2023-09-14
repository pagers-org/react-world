import { API_BASE_URL } from '@/constants/env';

export const http = {
  request: async (url: string, method: string, body?: Request, options?: any) => {
    const defaultOptions = {
      method: method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: body ? JSON.stringify(body) : undefined,
      ...options,
    };

    try {
      const response = await fetch(`${API_BASE_URL}${url}`, defaultOptions);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Request failed');
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw new Error('Request failed');
    }
  },

  get: (url: string, options?: any) => http.request(url, 'GET', undefined, options),
  post: (url: string, body?: any, options?: any) => http.request(url, 'POST', body, options),
  put: (url: string, body?: any, options?: any) => http.request(url, 'PUT', body, options),
  delete: (url: string, options?: any) => http.request(url, 'DELETE', undefined, options),
};

// export const http = {
//   get: (url: string, options?: any) => {
//     return fetch(`${API_BASE_URL}${url}`, { ...options, method: 'GET' })
//       .then(res => {
//         if (!(res.status === 200 || res.status === 201)) {
//           throw new Error('Error!');
//         }
//         return res.json();
//       })
//       .catch(err => {
//         console.error(err);
//         throw new Error('Error!');
//       });
//   },
//   post: (url: string, body?: Request, options?: any) => {
//     return fetch(`${API_BASE_URL}${url}`, { ...options, method: 'POST', body: JSON.stringify(body) })
//       .then(res => {
//         if (!(res.status === 200 || res.status === 201)) {
//           throw new Error('Error!');
//         }
//         return res.json();
//       })
//       .catch(err => {
//         console.error(err);
//         throw new Error('Error!');
//       });
//   },
//   put: (url: string, body?: Request, options?: any) => {
//     return fetch(`${API_BASE_URL}${url}`, { ...options, method: 'PUT', body: JSON.stringify(body) })
//       .then(res => {
//         if (!(res.status === 200 || res.status === 201)) {
//           throw new Error('Error!');
//         }
//         return res.json();
//       })
//       .catch(err => {
//         console.error(err);
//         throw new Error('Error!');
//       });
//   },
//   delete: (url: string, options?: any) => {
//     return fetch(`${API_BASE_URL}${url}`, { ...options, method: 'DELETE' })
//       .then(res => {
//         if (!(res.status === 200 || res.status === 201)) {
//           throw new Error('Error!');
//         }
//         return res.json();
//       })
//       .catch(err => {
//         console.error(err);
//         throw new Error('Error!');
//       });
//   },
// };
