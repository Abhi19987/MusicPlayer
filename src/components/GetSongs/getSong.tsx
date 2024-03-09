export const GetSongs = async (query: string) => {
  const queryParam = `?q=${query.trim()}&type=track`;
  const url =
    "https://v1.nocodeapi.com/demon_king/spotify/HFsgGJegpIQycwcb/search";

  try {
    let data = await fetch(url + queryParam);
    const convertedData = await data.json();
    return convertedData.tracks.items;
  } catch (error) {
    return error;
  }
};
