import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Simple Shimmer/Skeleton Loader Component
const ProductSkeleton = () => (
  <div className="pl-2 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
    <Card className="h-100 animate-pulse bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-800">
      <CardContent className="p-6 flex flex-col gap-4">
        <div className="h-48 bg-slate-200 dark:bg-slate-700 rounded-xl w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mt-4" />
        <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
      </CardContent>
    </Card>
  </div>
);

const Item = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => setData(products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full bg-transparent py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header matching Footer Brand Style */}
        <header className="flex flex-col items-center mb-12 space-y-3">
          <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            FEATURED PRODUCTS
          </h2>
          <div className="h-1.5 w-20 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
        </header>

        <div className="w-full px-4 sm:px-10">
          <Carousel opts={{ align: "start" }} className="relative w-full">
            <CarouselContent className="-ml-4">
              {!data
                ? Array.from({ length: 4 }).map((_, i) => (
                    <ProductSkeleton key={i} />
                  ))
                : data.slice(0, 8).map((item) => (
                    <CarouselItem
                      key={item.id}
                      className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <Link to={`/product/${item.id}`} className="group block">
                        <Card className="h-100 overflow-hidden border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2">
                          <CardContent className="p-0 flex flex-col h-full">
                            {/* Image Container */}
                            <div className="h-52 w-full flex items-center justify-center overflow-hidden bg-white p-6">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="h-full object-contain transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            
                            {/* Content Area */}
                            <div className="flex flex-col grow p-6 space-y-4">
                              <div className="space-y-2">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                                  {item.category}
                                </span>
                                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200 line-clamp-2 leading-snug">
                                  {item.title}
                                </h3>
                              </div>

                              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                                <p className="text-xl font-bold text-slate-900 dark:text-white">
                                  ₹{(item.price * 80).toLocaleString("en-IN")}
                                </p>
                                <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                  View Details →
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </CarouselItem>
                  ))}
            </CarouselContent>

            {/* Navigation Buttons Styled like Social Icons */}
            <CarouselPrevious className="hidden md:flex -left-12 h-11 w-11 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-500 hover:text-white transition-all" />
            <CarouselNext className="hidden md:flex -right-12 h-11 w-11 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-emerald-500 hover:text-white transition-all" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Item;