import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-red-700 p-4 lg:px-20">
            <div className="flex md:flex-row flex-col justify-between items-center">
                <Link href="/" className="font-bold text-white text-2xl">NONTONIN ANIME</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar