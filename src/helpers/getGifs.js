export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=doxXqkCtjXNfAKNa7kSaJCnic2kL6S2N&q=${category}&limit=10&offset=0&rating=g&lang=es`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return gifs;
};
