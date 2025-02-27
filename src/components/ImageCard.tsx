import React, { forwardRef} from 'react'
import Image from "next/image";

interface ImageCardProps {
  src : string;
  alt? : string;
  type? : "image" | "video" | "svg";
}

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(({src, alt = "media", type = "image"},ref) => {
  return (
    <div ref={ref} className='w-[340px] h-[340px] bg-gray-400'>
      {type == "image" && <Image src={src} alt={alt} width={340} height={340} className="object-cover w-full h-full"></Image>}
      {type == "video" && (
        <video autoPlay loop muted className='w-full h-full object-cover'>
          <source src={src} type='video/mp4'></source> 
        </video>)}
      {type === "svg" && <img src={src} alt={alt} className="w-full h-full object-contain" />}
    </div>
  );
}
);
ImageCard.displayName = "ImageCard";

export default ImageCard;