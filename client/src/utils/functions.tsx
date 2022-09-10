export function makeId(string: string): string {
  const id = string.toLowerCase().split(' ').join('-');
  return id;
}

export function blogDate(string: string): string {
  return new Date(string).toLocaleTimeString(navigator.language, {
    month: 'numeric',
    day: 'numeric',
  }).split(',')[0];
}
