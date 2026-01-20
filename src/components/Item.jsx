import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { useEffect, useState } from "react"

const Item = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(e=>console.log(e))
    .then(product=>setData(product))
  },[])
  return (
    <div className="w-full px-12 my-12">
      <Carousel
        opts={{ align: "start" }}
        className="relative w-full"
      >
        <CarouselContent className="-ml-2">
          {Array.from({ length: 7 }).map((data) => (
            <CarouselItem
              // key={data.id}
              className="pl-2 basis-1/4"
            >
              <Card className="h-59 flex items-center justify-center">
                <CardContent className="p-0">
                  <span className="text-3xl font-semibold">
                    {/* {data.image} */}
                  </span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="-left-10" />
        <CarouselNext className="-right-10" />
      </Carousel>
    </div>
  )
}

export default Item
