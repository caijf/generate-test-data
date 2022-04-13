const cache = new Map<File, string>();

function getImageUrl(file: File) {
  if (cache.has(file)) {
    return cache.get(file);
  }
  for (const [key, value] of cache) {
    URL.revokeObjectURL(value);
    cache.delete(key);
  }
  cache.set(file, URL.createObjectURL(file));
  return cache.get(file);
}

export default getImageUrl;
