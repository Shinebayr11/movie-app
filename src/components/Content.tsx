import { Star } from "lucide-react";
import { CardContent } from "./ui/card";

import Image from "next/image";
type ContentImageProps = {
  playing: string;
  contentname: string;
  contentimage: string;
  rating: number;
  contenttext: string;
};

const Contentimage = ({
  playing,
  contentname,
  contentimage,
  rating,
  contenttext,
}: ContentImageProps) => {
  return (
    <CardContent className="flex w-full h-[600px] relative ">
      <Image
        src={contentimage}
        alt="movie-image"
        priority
        fill
        className="object-cover"

        // style={{
        //   width: "100%",
        //   height: "auto",
        //   display: "block",
        // }}
      />
      <div className="absolute flex flex-col gap-2 w-[404px] h-[204px] left-[140px] bottom-[158px]">
        <h3 className="text-xl font-bold text-white">{playing}</h3>
        <h1 className="text-5xl font-bold text-white">{contentname}</h1>
        <span className="flex items-center gap-2">
          <Star fill="yellow" stroke="yellow" size={30} />
          <p className="text-white">{rating}/10</p>
        </span>
        <p className="text-white">{contenttext}</p>
        <div className="flex bg-white p-3 w-[145px] rounded-md gap-2">
          <Image src={"/play.png"} alt="trailer" width={16} height={16} />
          <p>Watch Trailer</p>
        </div>
      </div>
    </CardContent>
  );
};
export default Contentimage;
