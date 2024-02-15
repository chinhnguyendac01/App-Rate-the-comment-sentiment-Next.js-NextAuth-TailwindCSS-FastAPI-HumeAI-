"use client";
import { useState } from "react";
import Image from "next/image";
import Appbar from "./components/AppBar";
export default function Home() {
  const [videoUrl, setVideoUrl] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
  }
  
  return (
    <main className="bg-main-grey flex flex-col min-h-screen text-black">
      <Appbar />
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-main-grey min-h-screen">
          <p className="m-4 text-[4rem] font-bold font-mono"> YVCSE </p>
          <p className="ml-4 text-[1.5rem] font-normal font-mono">
            Youtube Video Comment Sentiment Explorer
          </p>
          <p className="ml-4 mt-2 font-bold"> By: Daniel Truong </p>
          <form onSubmit={handleSubmit()}>
            <p className="ml-4 mt-12 text-[1.25rem]">Paste Youtube Video URL</p>
            <input
              className="m-4 p-2 rounded-lg border-2 border-black"
              type="text"
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              value={videoUrl}
            />
           <button
                className="m-4 p-2 rounded-lg border-2 border-black"
                type="submit"
              >
                Let's go
              </button>
          </form>
        </div>
      </div>
    </main>
  );
}
