import React from "react";
import { CheckCircle2, Rocket, Target, Cpu, Code2, GraduationCap } from "lucide-react";

function About() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-8">
        
        {/* Header Section */}
        <section className="max-w-3xl space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              About Us
            </h1>
            <div className="h-1.5 w-24 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"></div>
          </div>
          
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-400">
            Welcome to <span className="font-semibold text-slate-900 dark:text-white">SARAL KART</span>! 
            This project is a practice-based online shopping platform built using modern web technologies 
            and powered by the Fake Store API.
          </p>
        </section>

        {/* Content Grid */}
        <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          
          {/* What We Offer */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Rocket className="h-6 w-6 text-emerald-500" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wider">What We Offer</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Browse a wide range of products",
                "View detailed product information",
                "Explore categories like electronics and fashion",
                "Fast and responsive user experience",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Tech Stack */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <Code2 className="h-6 w-6 text-emerald-500" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wider">Tech Stack</h2>
            </div>
            <ul className="space-y-4">
              {[
                "React & Vite for ultra-fast builds",
                "Tailwind CSS for utility-first styling",
                "React Router for seamless navigation",
                "Radix UI for accessible components",
                "Fake Store API for dynamic data"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Purpose */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/10">
                <GraduationCap className="h-6 w-6 text-emerald-500" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wider">Purpose</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Mastering modern React patterns",
                "Implementing complex API integrations",
                "Practicing responsive UI/UX design",
                "Building scalable frontend architectures",
                "Showcasing professional dev skills"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        </div>

              </div>
    </main>
  );
}

export default About;