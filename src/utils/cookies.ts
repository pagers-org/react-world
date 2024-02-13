export function getCookieValue(name: string): string {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return parts[1]
  }
  