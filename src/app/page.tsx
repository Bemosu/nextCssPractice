"use client"
import { useRouter } from "next/navigation";
import Button from "../components/button";
import Image from 'next/image'





export default function Home() {
  const rotuer = useRouter()
  const handleAbout = () => {
    rotuer.push('/about')
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 ">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start h-full w-full">
        <div className="relative w-full h-[500px] border border-black px-[10%] ">

        </div>
        <Image src="../assets/donut.svg" alt="donut" width={24} height={24}></Image>
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row w-full">
        <Button type="button" classes="bg-primary text-white transition-colors duration-500 ease-in-out hover:text-black hover:bg-[#fce6e6] hover:border-transparent" onClick={handleAbout}>go to </Button>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center  hover:bg-[#fafafa] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>

        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        
      </footer>
    </div>
  );
}
