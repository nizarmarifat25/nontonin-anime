"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AnimeList = ({ api }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-6">
        {api.data.map((data,i) => {
          return (
            <div key={i} className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-lg">
              <Image src={data.images.webp.image_url} width={200} height={350} alt='anime-list'
                className=' h-full w-full object-cover transition-transform duration-500 group-hover:scale-125' />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[80%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                <h1 className="font-dmserif font-bold text-white">{data.title}</h1>
                <Link href={`/${data.mal_id}`}>
                  <button className="rounded-full bg-red-700 p-2 font-com text-sm capitalize text-white shadow shadow-lime-800/60">Nonton Sekarang</button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AnimeList