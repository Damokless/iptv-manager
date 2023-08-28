"use client";
import { useState, useEffect } from "react";
export default function Navbar() {
  const [tab, setTab] = useState('')

  useEffect(() => {
    setTab(window.location.href.split(/\S+\//gm)[1])
  }, [])
  return (
    <header className="bg-white border-b border-blue-700/60 shadow-lg">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-end md:justify-center">
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 font-medium">
                <li>
                  <a className={tab === "playlist-manager" ? " text-blue-700 ransition hover:text-blue-700/75" : "transition hover:text-black/75"} href="/playlist-manager">
                    Playlist manager
                  </a>
                </li>
                <li>
                  <a className={tab === "playlist-checker" ? " text-blue-700 ransition hover:text-blue-700/75" : "transition hover:text-black/75"}href="/playlist-checker">
                    Playlist checker
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
