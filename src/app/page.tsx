import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Moviecard from "@/components/Moviecard";
import Contentimage from "@/components/Content";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto w-full flex flex-col relative">
      <Carousel className="  relative group ">
        <CarouselContent>
          {Array.from({ length: 3 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="relative flex w-full h-auto overflow-hidden">
                  <Contentimage
                    contentimage="/Feature.png"
                    playing="Now playing :"
                    contentname="Wicked"
                    rating={6.9}
                    contenttext="Elphaba, a misunderstood young woman because of her green skin, and Glinda, a popular girl, become friends at Shiz University in the Land of Oz. After an encounter with the Wonderful Wizard of Oz, their friendship reaches a crossroads. "
                  />
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className=" absolute  left-12
        w-4 py-5 px-5
    top-1/2
    -translate-y-1/2
    z-10
    opacity-0
    group-hover:opacity-100
    transition "
        />
        <CarouselNext
          className=" absolute   right-11
          w-4 py-5 px-5
    top-1/2
    -translate-y-1/2
    z-10
    opacity-0
    group-hover:opacity-100
    transition "
        />
      </Carousel>
      <div className="px-20">
        <div className="flex max-w-[1440px] w-full  justify-between items-center py-8  ">
          <p className="flex justify-start w-[120px] h-[36px] items-center text-2xl font-bold">
            Upcoming
          </p>
          <span className="flex justify-center w-[120px] h-[36px] gap-2 items-center">
            See more
            <Image src="/arrow-right.png" alt="arrow" width={16} height={16} />
          </span>
        </div>
        <div className="flex flex-wrap   justify-center gap-8">
          <Moviecard
            image={"/card-image.png"}
            rating={"6.9"}
            moviename={"Dear Santa"}
          />
          <Moviecard
            image={"/card-image1.png"}
            rating={"6.9"}
            moviename={"How To Train Your Dragon Live Action"}
          />
          <Moviecard
            image={"/card-image2.png"}
            rating={"6.9"}
            moviename={"Alien Romulus"}
          />
          <Moviecard
            image={"/card-image3.png"}
            rating={"6.9"}
            moviename={"From the Ashes"}
          />
          <Moviecard
            image={"/card-image4.png"}
            rating={"6.9"}
            moviename={"Space Dogg"}
          />
          <Moviecard
            image={"/card-image-5.png"}
            rating={"6.9"}
            moviename={"The Order"}
          />
          <Moviecard
            image={"/card-image6.png"}
            rating={"6.9"}
            moviename={"Y2K"}
          />
          <Moviecard
            image={"/card-image-7.png"}
            rating={"6.9"}
            moviename={"Solo Leveling: ReAwakening"}
          />
          <Moviecard
            image={"/card-image8.png"}
            rating={"6.9"}
            moviename={"Get Away"}
          />
          <Moviecard
            image={"/card-image9.png"}
            rating={"6.9"}
            moviename={"Sonic the Hedgehog 3"}
          />
        </div>
      </div>
      <div className="px-20">
        <div className="flex max-w-[1440px] w-full  justify-between items-center py-8  ">
          <p className="flex justify-start w-[120px] h-[36px] items-center text-2xl font-bold">
            Popular
          </p>
          <span className="flex justify-center w-[120px] h-[36px] gap-2 items-center">
            See more
            <Image src="/arrow-right.png" alt="arrow" width={16} height={16} />
          </span>
        </div>
        <div className="flex flex-wrap   justify-center gap-8">
          <Moviecard
            image={"/popularimage.png"}
            rating={"6.9"}
            moviename={"The Shawshank Redemption"}
          />
          <Moviecard
            image={"/popularimage1.png"}
            rating={"6.9"}
            moviename={"The Godfather"}
          />
          <Moviecard
            image={"/popularimage2.png"}
            rating={"6.9"}
            moviename={"The Dark Knight"}
          />
          <Moviecard
            image={"/popularimage3.png"}
            rating={"6.9"}
            moviename={"The Dark Knight"}
          />
          <Moviecard
            image={"/popularimage4.png"}
            rating={"6.9"}
            moviename={"The Lord of the Rings: The  Return of the King"}
          />
          <Moviecard
            image={"/popularimage5.png"}
            rating={"6.9"}
            moviename={"Internstellar"}
          />
          <Moviecard
            image={"/popularimage6.png"}
            rating={"6.9"}
            moviename={"Se7en"}
          />
          <Moviecard
            image={"/popularimage7.png"}
            rating={"6.9"}
            moviename={"It’s a Wonderful life"}
          />
          <Moviecard
            image={"/popularimage8.png"}
            rating={"6.9"}
            moviename={"Seven samurai"}
          />
          <Moviecard
            image={"/popularimage9.png"}
            rating={"6.9"}
            moviename={"The Silence of the Lambs"}
          />
        </div>
      </div>
      <div className="px-20">
        <div className="flex max-w-[1440px] w-full  justify-between items-center py-8  ">
          <p className="flex justify-start w-[120px] h-[36px] items-center text-2xl font-bold">
            Top Rated
          </p>
          <span className="flex justify-center w-[120px] h-[36px] gap-2 items-center">
            See more
            <Image src="/arrow-right.png" alt="arrow" width={16} height={16} />
          </span>
        </div>
        <div className="flex flex-wrap   justify-center gap-8">
          <Moviecard
            image={"/top-image.png"}
            rating={"6.9"}
            moviename={"Pulp Fiction"}
          />
          <Moviecard
            image={"/top-image1.png"}
            rating={"6.9"}
            moviename={"The Lord of the Rings: Fellowship of the Kings"}
          />
          <Moviecard
            image={"/top-image2.png"}
            rating={"6.9"}
            moviename={"The Good, the Bad and the Ugly"}
          />
          <Moviecard
            image={"/top-image3.png"}
            rating={"6.9"}
            moviename={"Forrest Gump"}
          />
          <Moviecard
            image={"/top-image4.png"}
            rating={"6.9"}
            moviename={"Fight Club"}
          />
          <Moviecard
            image={"/top-image5.png"}
            rating={"6.9"}
            moviename={"Saving Private Ryan"}
          />
          <Moviecard
            image={"/top-image6.png"}
            rating={"6.9"}
            moviename={"City of God"}
          />
          <Moviecard
            image={"/top-image7.png"}
            rating={"6.9"}
            moviename={"The Green Mile"}
          />
          <Moviecard
            image={"/top-image8.png"}
            rating={"6.9"}
            moviename={"Life is Beautiful"}
          />
          <Moviecard
            image={"/top-image9.png"}
            rating={"6.9"}
            moviename={"Terminator 2: Judgement Day"}
          />
        </div>
      </div>
    </div>
  );
}
