import React, { useEffect, useState } from "react";
import { ShoppingCart, Heart, Star, Truck, Shield, RefreshCw, Check } from "lucide-react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const{id}=useParams()
  const [data, setData] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => setData(product))
      .catch((err) => console.error(err));
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-12 w-12 mx-auto border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-6 lg:py-10">
        <div className="grid gap-12 lg:grid-cols-2">
          
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="aspect-square p-12 flex items-center justify-center">
                <img 
                  src={data.image} 
                  alt={data.title}
                  className="h-full w-full object-contain transition-transform hover:scale-105 duration-500"
                />
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
                {data.category}
              </span>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < Math.floor(data.rating?.rate || 0)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300 dark:text-slate-600'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-slate-600 dark:text-slate-400">
                  ({data.rating?.count || 0})
                </span>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-2">
              <h1 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                {data.title}
              </h1>
              <div className="h-1 w-20 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">
                ${data.price}
              </span>
              <span className="text-lg text-slate-500 line-through">
                ${(data.price * 1.3).toFixed(2)}
              </span>
              <span className="inline-flex items-center rounded-full bg-red-100 dark:bg-red-900/30 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-400">
                Save 30%
              </span>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Description
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {data.description}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                Quantity
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  −
                </button>
                <span className="flex h-10 w-16 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all bg-gradient-to-r from-emerald-600 to-teal-600 text-white h-12 px-6 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
              <button className="flex h-12 w-12 items-center justify-center rounded-md border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid gap-4 pt-6 border-t border-slate-200 dark:border-slate-800">
              {[
                { Icon: Truck, text: 'Free shipping on orders over $50' },
                { Icon: Shield, text: '2-year warranty included' },
                { Icon: RefreshCw, text: '30-day return policy' },
                { Icon: Check, text: 'Secure checkout guaranteed' }
              ].map(({ Icon, text }, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                    <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;