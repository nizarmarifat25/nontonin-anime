import Link from "next/link"

const Navbar = () => {
    return (
        <header className="bg-red-700 p-4 lg:px-20">
            <div className="flex md:flex-row flex-col justify-between ">
                <Link href="/" className="font-bold text-white text-2xl">NONTONIN ANIME</Link>
                <input placeholder="cari anime....."></input>
            </div>
        </header>
    )
}

export default Navbar