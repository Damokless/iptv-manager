"use client";
import { useState } from "react";

export default function Home() {
  const [channels, setChannels] = useState([]);
  async function handleFile(file: any) {
    const dataText = await file[0].text();
    const response = await fetch(`http://localhost:4000/playlistToJson`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data: dataText }),
    });
    const channelsList = await response.json();
    setChannels(channelsList);
  }

  return (
    <>
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center w-full h-screen">
          <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                m3u or m3u8 files
              </p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              accept=".m3u,.m3u8, .txt"
              className="hidden"
              onChange={(e) => handleFile(e.target.files)}
            />
          </label>
        </div>
      </div>
      {channels && (
        <div className="grid grid-cols-4 gap-4 px-5 pb-5">
          {channels.map((channel: any) => (
            <div
              className="mx-auto w-full max-w-sm bg-white shadow-lg"
              key={channel.name}
            >
              <div className=" inline-block w-full p-5">
                <div className="rounded-lg">
                  <div className="flex h-60 justify-center items-center overflow-hidden rounded-lg">
                    <div className="w-full">
                      <img src={channel.tvgLogo} alt="" />
                    </div>
                  </div>

                  <div>
                    <div className="mt-4">
                      <h2
                        className="line-clamp-1 text-base font-medium text-gray-800 md:text-lg"
                        title="New York"
                      >
                        {channel.name}
                      </h2>
                      <p className="mt-2 line-clamp-1 text-sm text-gray-800">
                        TVGID{channel.tvgId}
                      </p>
                      <p className="mt-2 line-clamp-1 text-sm text-gray-800">
                        groupTitle{channel.groupTitle}
                      </p>
                    </div>
                    <div className="flex justify-center items-center mt-5">
                      <button className="inline-block rounded border border-red-600 bg-red-600 px-8 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-red-600 focus:outline-none focus:ring active:text-red-500">
                        DELETE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
