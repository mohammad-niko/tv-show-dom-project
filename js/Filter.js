
export function shortenTitle(title, maxLength = 20) {
  if (title.length > maxLength) {
    return title.slice(0, maxLength) + '...';
  } else {
    return title;
  }
}