import Image from "next/image";

const AnimeList = () => {
  return (
    <div className="grid grid-cols-3 gap-2 h-32">
      <div className="bg-indigo-500">
        <Image
          src="https://placehold.co/600x400/png"
          alt="..."
          width={600}
          height={600}
        />
        <h3>JUDUL ANIME DISINI</h3>
      </div>
      <div className="bg-indigo-500">KOTAK 2</div>
      <div className="bg-indigo-500">KOTAK 3</div>
      <div className="bg-indigo-500">KOTAK 4</div>
      <div className="bg-indigo-500">KOTAK 5</div>
      <div className="bg-indigo-500">KOTAK 6</div>
    </div>
  );
};

export default AnimeList;
