export const convertISOToEngFormat = (date: string) => {
  const day = new Date(date);
  return day.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
