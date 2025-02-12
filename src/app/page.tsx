"use client"
import { useRouter } from "next/navigation";
import Button from "../components/button";
import BackGround from '../assets/background.png'
import SiteHeader from "@/components/Header";


export default function Home() {
  const rotuer = useRouter()
  const handleAbout = () => {
    rotuer.push('/about')
  }

  return (
    <div className="relative flex flex-col gap-8 items-center justify-center min-h-screen p-8 bg-cover bg-center"
    style={{ backgroundImage: `url(${BackGround.src})` }}>
    <SiteHeader/>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 ">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start h-full w-full">
        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row w-full">
          <h1 className="text-6xl"> 당신의 상상을 커다란 파장으로 </h1>
        <Button type="button" classes="bg-primary text-white transition-colors duration-500 ease-in-out hover:text-black hover:bg-[#fce6e6] hover:border-transparent" onClick={handleAbout}>go to </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

        
      </footer>
    </div>
    </div>
  );
}
