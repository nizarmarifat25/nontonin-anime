"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation";
import { useRef } from "react"

const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter();
    const handleSearch = (e) => {
        e.preventDefault();
        const keyword = searchRef.current.value
        if (keyword) {
            router.push(`/search/${keyword}`)
        }
    }
    return (
        <form className="relative">
            <input
                placeholder="cari anime....."
                className="py-2 px-5 rounded w-full focus:outline-none"
                ref={searchRef}
            />
            <button type="submit" className="absolute top-2 end-2 text-red-700 font-bold cursor-pointer" onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </form>
    )
}

export default InputSearch