// import React, { useEffect, useState } from "react";

// const Product = () => {
//   const [pro, setPro] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((data) => setPro(data));
    
//   }, []);

//   const mens = pro.filter((item) => item.category == "men's clothing");
//   const women = pro.filter((item) => item.category == "women's clothing");
//   const jewl = pro.filter((item) => item.category == "jewelery");
//   const elec = pro.filter((item) => item.category == "electronics");

//   return (
//     <div>
//       <section>
//         <div>Men's Wear</div>
//         <div>{!pro ? <>loading!...</> : <>{mens.map(e=><li key={e.id}><img src={e.image} alt="" /></li>)}</>}</div>
//         <div>Women's Wear</div>
//         <div>{!pro ? <>loading!...</> : <>{women.map(e=><li key={e.id}><img src={e.image} alt="" /></li>)}</>}</div>
//         <div>Jewlerry</div>
//         <div>{!pro ? <>loading!...</> : <>{jewl.map(e=><li key={e.id}><img src={e.image} alt="" /></li>)}</>}</div>
//         <div>Electronics</div>
//         <div>{!pro ? <>loading!...</> : <>{elec.map(e=><li key={e.id}><img src={e.image} alt="" /></li>)}</>}</div>
//       </section>
//     </div>
//   );
// };

// export default Product;


import React, { useEffect, useState } from "react";
import { Star, ShoppingCart } from "lucide-react";

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
    { title: "Men's Wear", items: products.filter((p) => p.category === "men's clothing") },
    { title: "Women's Wear", items: products.filter((p) => p.category === "women's clothing") },
    { title: "Jewelry", items: products.filter((p) => p.category === "jewelery") },
    { title: "Electronics", items: products.filter((p) => p.category === "electronics") },
  ];

  if (loading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-500 border-t-transparent"></div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-16 px-6">
      <div className="mx-auto max-w-7xl">
        {categories.map((category) => (
          <section key={category.title} className="mb-20">
            {/* Category Header */}
            <div className="mb-10 space-y-2">
              <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                {category.title}
              </h2>
              <div className="h-1 w-20 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {category.items.map((item) => (
                <article
                  key={item.id}
                  className="cursor-pointer group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="aspect-square overflow-hidden bg-white p-8">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
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
                       
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default Product;
