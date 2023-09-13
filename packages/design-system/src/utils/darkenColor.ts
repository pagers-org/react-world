export const darkenColor = (hex: string, amount = 24): string => {
  // HEX를 RGB로 변환
  const r = Number.parseInt(hex.slice(1, 3), 16);
  const g = Number.parseInt(hex.slice(3, 5), 16);
  const b = Number.parseInt(hex.slice(5, 7), 16);

  // 색상을 어둡게 함 (0보다 작은 값을 방지하기 위해 Math.max 사용)
  const newR = Math.max(0, r - amount)
    .toString(16)
    .padStart(2, "0");
  const newG = Math.max(0, g - amount)
    .toString(16)
    .padStart(2, "0");
  const newB = Math.max(0, b - amount)
    .toString(16)
    .padStart(2, "0");

  return `#${newR}${newG}${newB}`;
};
