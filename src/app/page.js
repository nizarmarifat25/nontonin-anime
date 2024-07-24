import AnimeList from "@/components/AnimeList/index.jsx"
import Header from "@/components/AnimeList/Header.jsx"

const Page = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}top/anime?limit=12`)
  const topAnime = await response.json()

  return (
    <>
      <section>
        <Header title="Paling Populer" linkHref="/populer" />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title="Paling Baru" linkHref="/new" />
        <AnimeList api={topAnime} />
      </section>
    </>
  )
}

export default Page