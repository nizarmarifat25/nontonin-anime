import { FileSearch } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const Page = () => {
  return (
    <div className='min-h-screen max-w-xl flex justify-center mx-auto items-center'>
      <div className="flex justify-center items-center gap-4 text-white flex-col">
        <FileSearch size={32} />
        <h3 className="font-bold">404 | NOT FOUND</h3>
        <Link href='/' className="hover:text-red-500 transition-all underline">
        Kembali
        </Link>
      </div>
    </div>
  )
}

export default Page