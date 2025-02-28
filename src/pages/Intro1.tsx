"use client"
import { useRouter } from "next/navigation";
import Button from "../components/button";
import BackGround from '../../public/assets/background.png'
import {v4 as uuidv4} from "uuid";
import AnimatedText from "@/components/AnimatedText";


export default function Intro1()  {
    const rotuer = useRouter()
const handleAbout = () => {
    rotuer.push('/about')
  }

const texts =[
  { id: uuidv4(), text: "새로운 파장으로 초대합니다."},
  { id : uuidv4(), text: "지금 바로 도전하세요"},
]  

return (
<div className=" min-[475px] lg:min-[1440px] relative flex flex-col gap-8 items-center justify-center min-h-screen p-8 bg-cover bg-center"
style={{ backgroundImage: `url(${BackGround.src})` }}>

<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 ">
  <main className="flex flex-col gap-8 row-start-2 items-center justify-center sm:items-start h-full w-full">
  <AnimatedText texts = {texts}/>
    <div className="flex gap-4 items-center justify-center flex-col sm:flex-row w-full">

    <Button type="button" classes="bg-primary text-white transition-colors duration-500 ease-in-out hover:text-black hover:bg-[#fce6e6] hover:border-transparent" onClick={handleAbout}>go to </Button>
    </div>
  </main>
  <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  </footer>
</div>
</div>
)
}