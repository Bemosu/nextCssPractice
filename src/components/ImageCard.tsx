import React, { forwardRef} from 'react'
import Image from "next/image";

interface ImageCardProps {
  src : string;
  alt? : string;
  type? : "image" | "video" | "svg";
  children? : React.ReactNode;
}

const ImageCard = forwardRef<HTMLDivElement, ImageCardProps>(({src, alt = "media", type = "image", children },ref) => {
  return (
    <div ref={ref} className='w-[340px] h-[340px] bg-gray-400 relative z-0 border border-black border-solid-1px '>
      {type == "image" && <Image src={src} alt={alt} width={340} height={340} className="object-fill w-full h-full"></Image>}
      {type == "video" && (
        <video autoPlay loop muted className='w-full h-full object-cover'>
          <source src={src} type='video/mp4'></source> 
        </video>)}
      {type === "svg" && <Image src={src} alt={alt} className="w-full h-full object-contain" />}
      <div className='absolute inset-0 flex items-center justify-center z-10'>{children}</div>

    </div>

  );
}
);
ImageCard.displayName = "ImageCard";

export default ImageCard;