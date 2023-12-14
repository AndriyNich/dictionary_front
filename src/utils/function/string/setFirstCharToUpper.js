export default function setFirstCharToUpper(str) {
  return str.replace(/^[^a-zа-яё]*([a-zа-яё])/i, function (m) {
    return m.toUpperCase();
  });
}
