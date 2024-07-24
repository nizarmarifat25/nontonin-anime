import AnimeList from "@/components/AnimeList/index.jsx"

const Page = async ({ params }) => {
    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}anime?q=${keyword}`)
    const topAnime = await response.json()

    return (
        <>
            <section>
                <h1 className="text-white text-2xl py-4">Pencarian untuk "{decodeKeyword}"</h1>
                <AnimeList api={topAnime} />
            </section>
        </>
    )
}

export default Page