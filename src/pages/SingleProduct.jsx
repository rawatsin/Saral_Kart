import React, { useEffect, useState } from "react";
import { ShoppingCart, Heart, Star, Truck, Shield, RefreshCw, Check, Minus, Plus } from "lucide-react";
import { useParams } from "react-router-dom";

const SingleProductSkeleton = () => (
  <div className="mx-auto max-w-6xl px-6 py-6 animate-pulse">
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="aspect-square rounded-xl bg-slate-200 dark:bg-slate-800"></div>
      <div className="space-y-4">
        <div className="h-6 w-24 bg-slate-200 dark:bg-slate-800 rounded-full"></div>
        <div className="h-10 w-full bg-slate-200 dark:bg-slate-800 rounded-md"></div>
        <div className="h-24 w-full bg-slate-200 dark:bg-slate-800 rounded-md"></div>
        <div className="h-12 w-full bg-slate-200 dark:bg-slate-800 rounded-md"></div>
      </div>
    </div>
  </div>
);

const SingleProduct = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((product) => {
        setData(product);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <main className="min-h-screen bg-white dark:bg-slate-950"><SingleProductSkeleton /></main>;

  return (
    <main className="min-h-screen bg-slate-50/50 dark:bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-4 lg:py-8">
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          
          {/* Left: Product Image */}
          <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
            <div className="aspect-4/3 flex items-center justify-center">
              <img 
                src={data.image} 
                alt={data.title}
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="flex flex-col space-y-5">
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                {data.category}
              </span>
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{data.rating?.rate}</span>
                <span className="text-xs text-slate-400">({data.rating?.count})</span>
              </div>
            </div>

            {/* Title & Price */}
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                {data.title}
              </h1>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-3xl font-bold text-slate-900 dark:text-white">₹{(data.price * 80).toLocaleString("en-IN")}</span>
                <span className="text-sm text-slate-400 line-through">₹{(data.price * 90).toLocaleString("en-IN")}</span>
                <span className="text-[11px] font-bold text-red-500 bg-red-50 dark:bg-red-950 px-1.5 py-0.5 rounded">-30%</span>
              </div>
            </div>

            {/* Full Description - Header removed to save space */}
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {data.description}
            </p>

            {/* Action Row: Quantity + Add to Cart */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2.5 hover:text-emerald-500 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2.5 hover:text-emerald-500 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <button className="flex-1 flex items-center justify-center gap-2 bg-slate-900 dark:bg-emerald-600 text-white h-11 px-6 rounded-lg font-medium hover:opacity-90 transition-all">
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </button>
              
              <button className="h-11 w-11 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-red-50 dark:hover:bg-red-950 hover:text-red-500 transition-all">
                <Heart className="h-5 w-5" />
              </button>
            </div>

            {/* Trust Badges: Grid Layout */}
            <div className="grid grid-cols-2 gap-y-3 gap-x-8 pt-6 border-t border-slate-100 dark:border-slate-800">
              {[
                { Icon: Truck, text: 'Free Delivery' },
                { Icon: Shield, text: '2Yr Warranty' },
                { Icon: RefreshCw, text: '30-Day Return' },
                { Icon: Check, text: 'Verified' }
              ].map(({ Icon, text }, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Icon className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{text}</span>
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