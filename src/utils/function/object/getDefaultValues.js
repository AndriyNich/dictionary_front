export default function getDefaultValues(obj, defaultValue = '') {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key,
      value.default || defaultValue,
    ])
  );
}
