// import Image from "next/image";

// import { Card, CardContent } from "./ui/card";
// import { Star } from "lucide-react";

// const Moviecard = ({ rating, moviename, image }) => {
//   return (
//     <Card className=" w-[230px] ">
//       <CardContent className="flex flex-col ">
//         <Image src={image} alt="movie-image" width={230} height={340} />
//         <div className="flex flex-col  p-2 ">
//           <p className="flex gap-2">
//             <Star fill="yellow " stroke="yellow" />
//             <span>{rating}/10</span>
//           </p>
//           <span className=" flex items-center w-full h-[56px]">
//             {moviename}
//           </span>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };
// export default Moviecard;

import Image, { StaticImageData } from "next/image";

import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

type MoviecardProps = {
  image: string | StaticImageData;
  rating: number | string;
  moviename: string;
};

const Moviecard = ({ rating, moviename, image }: MoviecardProps) => {
  return (
    <Card className="w-[230px]">
      <CardContent className="flex flex-col">
        <Image src={image} alt="movie-image" width={230} height={340} />

        <div className="flex flex-col p-3 ">
          <p className="flex gap-1 items-center">
            <Star fill="yellow" stroke="yellow" size={16} />
            <span className="text-black ">{rating}/10</span>
          </p>
          <span className="flex  items-center w-full h-[56px]">
            {moviename}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Moviecard;
