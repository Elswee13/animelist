"use server";

export const fetchAnime = async () => {
  // to pass parameters use ?
  const response = await fetch("https://shikimori.one/api/animes?page=1");

  const data = await response.json();

  return data;
};
