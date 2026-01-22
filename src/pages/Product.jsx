import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

// --- Shimmer Component ---
const ProductSkeleton = () => (
  <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 animate-pulse">
    {/* Image Placeholder */}
    <div className="aspect-square bg-slate-200 dark:bg-slate-800"></div>

    {/* Content Placeholder */}
    <div className="flex flex-1 flex-col p-6 space-y-4">
      <div className="flex justify-between">
        <div className="h-3 w-1/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
        <div className="h-3 w-10 bg-slate-200 dark:bg-slate-800 rounded"></div>
      </div>
      <div className="h-4 w-full bg-slate-200 dark:bg-slate-800 rounded"></div>
      <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
      <div className="mt-auto pt-4 flex justify-between items-center">
        <div className="h-6 w-16 bg-slate-200 dark:bg-slate-800 rounded"></div>
        <div className="h-3 w-20 bg-slate-200 dark:bg-slate-800 rounded"></div>
      </div>
    </div>
  </div>
);

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const categories = [
    {
      title: "Men's Wear",
      items: products.filter((p) => p.category === "men's clothing"),
    },
    {
      title: "Women's Wear",
      items: products.filter((p) => p.category === "women's clothing"),
    },
    {
      title: "Jewelry",
      items: products.filter((p) => p.category === "jewelery"),
    },
    {
      title: "Electronics",
      items: products.filter((p) => p.category === "electronics"),
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {/* If loading, show skeletons for each category section */}
        {loading
          ? [1, 2].map((section) => (
              <section key={section} className="mb-20">
                <div className="mb-10 space-y-2">
                  <div className="h-8 w-48 bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse"></div>
                  <div className="h-1 w-20 bg-emerald-500/20 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {[1, 2, 3, 4].map((n) => (
                    <ProductSkeleton key={n} />
                  ))}
                </div>
              </section>
            ))
          : categories.map((category) => (
              <section key={category.title} className="mb-20">
                <div className="mb-10 space-y-2">
                  <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                    {category.title}
                  </h2>
                  <div className="h-1 w-20 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {category.items.map((item) => (
                    <Link key={item.id} to={`/product/${item.id}`}>
                      <article className="cursor-pointer group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
                        <div className="aspect-square overflow-hidden bg-white p-8">
                          <img
                            src={item.image}
                            alt={item.title}
                            loading="lazy"
                            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>

                        <div className="flex flex-1 flex-col p-6">
                          <div className="mb-2 flex items-center justify-between text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
                            <span>{item.category}</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current" />
                              {item.rating.rate}
                            </div>
                          </div>

                          <h3 className="mb-2 line-clamp-2 text-sm font-semibold text-slate-900 dark:text-white">
                            {item.title}
                          </h3>

                          <div className="mt-auto pt-4">
                            <div className="flex items-center justify-between">
                              <span className="text-lg font-bold text-slate-900 dark:text-white">
                                ${item.price.toFixed(2)}
                              </span>
                              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                View Details →
                              </span>
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
      </div>
    </main>
  );
};

export default Product;
