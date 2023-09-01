"use client";
import Navbar from "@/components/navbar/Navbar";
import Image from "next/image";
import { useState } from "react";
interface Channel {
  url: string;
  tvgLogo: string;
  tvgId: string;
  name: string;
  id: number;
}

export default function PlaylistManager() {
  const [channels, setChannels] = useState([]);
  async function handleFile(file: any) {
    if (file) {
      const dataText = await file[0].text();
      const channelsList = await fetch(`http://localhost:4000/playlistToJson`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: dataText })}).then(res => res.json()).then(data => {return data});
      setChannels(channelsList);
    }
  }
  function deleteChannel(id: number) {
    setChannels(channels.filter((channel : Channel) => channel.id !== id))
  }
  console.log(channels)
  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:items-center">
          <div className="mx-auto text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Playlist manager
            </h1>
          </div>
        </div>
      </section>
      <div className="flex mx-auto max-w-screen-xl items-center justify-center">
        <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue-700 cursor-pointer hover:bg-blue-700 hover:text-white">
          <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
          </svg>
          <span className="mt-2 text-base leading-normal">Select a file</span>
          <input type="file" className="hidden" accept=".m3u,.m3u8" onChange={(e) => handleFile(e.target.files)} />
        </label>
      </div>
      {channels.length > 0 && (
      <>
        <div className="grid grid-cols-4 gap-4 bg-gray-100">
          {channels.map((channel: Channel) => (
            <div className="max-w-lg mx-auto my-10 w-4/5	 bg-gray-50 border border-blue-700 rounded-lg shadow-lg p-5" key={channel.url}>
              {channel.tvgLogo ? <Image className="w-32 h-32  mx-auto" width={128} height={128} src={channel.tvgLogo} alt="Tv logo" /> : <div className="w-32 h-32"></div>}
              <h2 className="text-center text-1xl font-semibold mt-3">{channel.tvgId}</h2>
              <p className="text-center text-gray-600 mt-1">{channel.name}</p>
              <div className="flex justify-center mt-5">
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <button onClick={() => deleteChannel(channel.id)} className="block w-full rounded bg-white border border-red-700 shadow-lg px-12 py-3 text-sm font-medium text-black hover:bg-red-500 hover:text-white focus:outline-none focus:ring-none sm:w-auto">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-wrap justify-center gap-4 bg-gray-100">
          <a className="block w-full rounded bg-white border border-green-700 shadow-lg px-12 py-3 text-sm font-medium text-black hover:bg-green-500 hover:text-white focus:outline-none focus:ring-none sm:w-auto" href="/playlist-manager">
            Save playlist
          </a>
        </div>
      </>
      )}
    </div>
  );
}
