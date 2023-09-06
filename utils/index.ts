const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const formattedDate = `${monthNames[month]} ${day}, ${year}`;

  return formattedDate;
};

export { formatDate };
