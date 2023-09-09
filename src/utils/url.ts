export function makeSearchParams(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}
