import { Link } from "react-router-dom";
import { Twitter, Linkedin, Mail, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand & Description */}
          <div className="space-y-6 lg:col-span-4">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                SARAL KART
              </h2>
              <div className="h-1 w-16 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              Sustainable products for a better future. Shop smart, live green,
              and make an impact with every purchase.
            </p>

            {/* Social Links (Kept as <a> for external linking) */}
            <div className="flex items-center gap-3 pt-2">
              {[
                {
                  Icon: Github,
                  href: "https://github.com/rawatsin",
                  label: "GitHub",
                },
                {
                  Icon: Mail,
                  href: "mailto:amitsinrawat76@gmail.com",
                  label: "Gmail",
                },
                {
                  Icon: Twitter,
                  href: "https://twitter.com",
                  label: "Twitter",
                },
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/in/amit-singh-rawat-9ab627229/",
                  label: "LinkedIn",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-1"
                >
                  <Icon className="h-4 w-4" />
                  <span className="sr-only">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation - Shop */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-5">
              Shop
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "All Products", path: "/shop" },
                { name: "New Arrivals", path: "/new" },
                { name: "Best Sellers", path: "/best-sellers" },
                { name: "Sale", path: "/sale" },
              ].map((item) => (
                <li key={item.name}>
                  <Link className="group inline-flex items-center text-slate-600 dark:text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                    <span className="h-px w-0 bg-emerald-600 dark:bg-emerald-400 transition-all group-hover:w-4 group-hover:mr-2"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation - Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-5">
              Company
            </h3>
            <ul className="space-y-3.5 text-sm">
              {[
                { name: "About Us", path: "/about" },
                { name: "Careers", path: "/careers" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link className="group inline-flex items-center text-slate-600 dark:text-slate-400 transition-colors hover:text-emerald-600 dark:hover:text-emerald-400">
                    <span className="h-px w-0 bg-emerald-600 dark:bg-emerald-400 transition-all group-hover:w-4 group-hover:mr-2"></span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-5 lg:col-span-4">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Get notified about new collections and exclusive offers.
              </p>
            </div>
            <form
              className="flex w-full max-w-sm flex-col gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all bg-linear-to-r from-emerald-600 to-teal-600 text-white h-10 px-4"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-slate-500">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-linear-to-r from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} SARAL KART. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <Link className="text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Privacy Policy
            </Link>
            <Link className="text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Terms of Service
            </Link>
            <Link className="text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
