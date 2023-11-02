import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/app/libs/api-libs";

const Page = async ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);
  const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <>
      {/* anime terpopuler */}
      <section>
        <Header title={`Pencarian Untuk ${decodedKeyword} ...`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  );
};

export default Page;
