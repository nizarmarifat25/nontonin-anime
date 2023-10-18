import AnimeList from "@/app/components/AnimeList"
import Link from "next/link"

const Home = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}top/anime?limit=12`)
  const anime = await response.json()

  return (
    <>
      <div className="flex justify-between items-center py-5">
        <h1 className="text-2xl">Paling Populer</h1>
        <Link href="/populer" className="hover:text-red-700 transition">Lihat Semua</Link>
      </div>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
          {anime.data.map((data) => {
            return (
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home