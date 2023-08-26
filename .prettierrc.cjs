/** @type {import("prettier").Config} */
module.exports = {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  singleQuote: false, // 문자열 홑따옴표 formatting
  semi: true, //코드 마지막에 세미콜론이 있게 formatting
  useTabs: false, //탭의 사용을 금하고 스페이스바 사용으로 대체하게 formatting
  tabWidth: 2, // 들여쓰기 너비 2칸
  trailingComma: "all", // 후행 쉼표
  printWidth: 120, // 코드 한줄 maximum
  arrowParens: "avoid", // 화살표 함수가 하나의 매개변수를 받을 때 괄호를 생략하게 formatting
};
