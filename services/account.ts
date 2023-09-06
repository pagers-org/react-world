import { http } from '@/libs/http';

// // 로그인
// const login = async (formData: FormData) => {
//   const email = formData.get('email');
//   const password = formData.get('password');

//   return await http.post('https://api.realworld.io/api/users/login', { user: { email, password } });
// };

// 유저 정보 조회
const fetchUser = () => {
  return http.get('https://api.realworld.io/api/user');
};

// 유저 정보 수정
const updateUser = () => {
  return http.put('https://api.realworld.io/api/user');
};

export { fetchUser, updateUser };
