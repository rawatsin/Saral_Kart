import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const Item = () => {
  return (
    <div className="w-full px-12">
      <Carousel
        opts={{ align: "start" }}
        className="relative w-full"
      >
        <CarouselContent className="-ml-2">
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-2 basis-1/4"
            >
              <Card className="h-59 flex items-center justify-center">
                <CardContent className="p-0">
                  <span className="text-3xl font-semibold">
                    {index + 1}
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
