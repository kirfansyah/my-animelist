import Image from "next/image";
import AnimeList from "@/components/AnimeList";
import Link from "next/link";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const anime = await response.json();

  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">PALING POPULER</h1>
        <Link
          href="/populer"
          className="md:text-xl text-md underline hover:text-indigo-500 transition-all"
        >
          Lihat Semua
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 px-4">
        {anime.data.map((anime) => {
          return (
            <div className="shadow-xl">
              <AnimeList
                key={anime.mal_id}
                title={anime.title}
                images={anime.images.webp.image_url}
                id={anime.mal_id}
              />
            </div>
          );
        })}
      </div>
      {/* <AnimeList /> */}
    </>
  );
};

export default Home;
