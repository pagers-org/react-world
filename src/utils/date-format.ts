export function formatDate(date: string) {
  const convertDate = new Date(date);

  return `${convertDate.getFullYear()}년 ${convertDate.getMonth() + 1}월 ${convertDate.getDate()}일`;
}
