import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Footer from "@/components/ui-component/Footer/Footer";

const Items = [
  {
    id: 1,
    title: "How to Choose the Right Study Abroad Program",
    description:
      "Studying abroad is a life-changing experience, and it is important to choose the right program for you. Here are some tips to help you choose the right study abroad program.",
    image:
      "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/10/23/104790550-Radcliffe_Camera.1910x1000.jpg",
  },
  {
    id: 2,
    title: "Exploring Cultural Diversity",
    description:
      "Experience diverse cultures, languages, and traditions while studying abroad. Expand your horizons and enrich your global perspective.",
    image:
      "https://www.goabroad.com/section_cloudinary/gaplabs/image/upload/images2/program_content/top-colleges-in-england-for-american-study-abroad-students-4-1509618160.png",
  },
  {
    id: 3,
    title: "Language Immersion Programs",
    description:
      "Immerse yourself in a new language by participating in language-focused study abroad programs. Enhance your language skills and cultural understanding.",
    image:
      "https://d3hk6w1rfu80ox.cloudfront.net/media/uploads/blogs/top-10-schools-and-universities-overseas/iStock_000018974535_Small.jpg",
  },
  {
    id: 4,
    title: "Internship Opportunities Abroad",
    description:
      "Gain valuable work experience through international internship programs. Develop professional skills and expand your global network.",
    image:
      "https://www.kilroy.net/media/10882/edu-new-zealand-uni-building-otago.jpg",
  },
];

export default function Home() {
  return (
    <div className="mt-8">
      <div className="text-4xl font-bold text-center">
        Welcome to How to Abroad: Your Ultimate Guide to Studying Abroad
      </div>
      <div className="flex justify-center items-center mt-8">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-4xl"
        >
          <CarouselContent>
            {Items.map((item) => (
              <CarouselItem key={item.id} className="md:w-1/2 lg:w-1/3">
                <div className="p-4">
                  <Card>
                    <CardContent>
                      <img
                        src={item.image}
                        alt="image"
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-white absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-70 transition duration-300 ease-in-out" />
          <CarouselNext className="text-white absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full cursor-pointer hover:bg-opacity-70 transition duration-300 ease-in-out" />
        </Carousel>
      </div>

    </div>
  );
}
