import Link from "next/link"

const Header = ({ title, linkHref }) => {
    return (
        <div className="flex justify-between items-center py-5 text-white">
            <h1 className="text-2xl">{title}</h1>
            <Link href={linkHref} className="hover:text-red-700 transition">Lihat Semua</Link>
        </div>
    )
}

export default Header