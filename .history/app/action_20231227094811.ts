"use server";

export const fetchAnime = async (page: number) => {
  // to pass parameters use ?
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}$limit=8`
  );

  const data = await response.json();

  return data;
};
