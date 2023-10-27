import Image from "next/image";
import AnimeList from "@/app/components/AnimeList";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`
  );
  const anime = await response.json();
  console.log(anime.data);

  return (
    <>
      <h1>PALING POPULER</h1>
      <AnimeList />
    </>
  );
};

export default Home;
