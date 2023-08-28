"use client";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

export default function PlaylistManager() {
  const [channels, setChannels] = useState([]);
  async function handleFile(file: any) {
    const dataText = await file[0].text();
    const channelsList = await fetch(`http://localhost:4000/playlistToJson`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ data: dataText })}).then(res => res.json()).then(data => {return data});
    setChannels(channelsList);
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
    </div>
  );
}
