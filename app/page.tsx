'use client';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ExternalLink, Mail, Code, Layers, Server, Terminal, Sparkles } from 'lucide-react';

export default function Portfolio() {
  // Your real project data configured for display
  const project = {
    title: "JSP-Gram",
    tagline: "Full-Stack Social Media Platform",
    description: "A robust social media platform featuring user authentication, OTP verification, profile management, post interactions (likes/comments), follow networks, and Razorpay Prime membership integration.",
    frontendTech: ["React", "Vite", "JavaScript", "React Router", "Axios", "Bootstrap 5", "React Toastify"],
    backendTech: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL", "Cloudinary", "Razorpay", "Spring MVC"],
    githubFrontend: "https://github.com/SagarUlli/react-jsp-gram",
    liveFrontend: "https://react-jsp-gram.vercel.app/",
    githubBackend: "https://github.com/SagarUlli/spring-boot-jsp-gram",
    liveBackend: "https://spring-boot-jsp-gram-m5zu.onrender.com/"
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500 selection:text-white font-sans antialiased">
      {/* Background ambient glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-indigo-500/10 via-violet-500/10 to-transparent blur-3xl pointer-events-none" />

      {/* Hero Section */}
      <header className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24 flex flex-col items-start">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-indigo-400 mb-6 shadow-inner">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Full-Stack Developer & Software Engineer</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
          Hi, I&apos;m <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">Sagar Ulli</span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
          I build and ship scalable, modern web applications. Specialized in creating seamless user interfaces with React and robust backend architectures with Java & Spring Boot.
        </p>

        {/* Quick Social & Contact Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/SagarUlli"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:your-email@example.com"
            className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-200"
            aria-label="Email Contact"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </header>

      {/* Projects Section */}
      <main className="max-w-4xl mx-auto px-6 pb-24">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
            <Layers className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Featured Project</h2>
        </div>

        {/* Project Card */}
        <div className="group relative rounded-2xl bg-zinc-900/50 border border-zinc-800/80 p-6 md:p-8 hover:border-indigo-500/50 transition-all duration-300 shadow-xl backdrop-blur-sm">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-1 block">
                {project.tagline}
              </span>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            {/* Quick Action buttons (Live Demos & Repos) */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={project.liveFrontend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 text-white font-medium text-xs hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
              >
                <span>Frontend Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <a
                href={project.liveBackend}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zinc-800 border border-zinc-700 text-zinc-200 font-medium text-xs hover:bg-zinc-700 hover:text-white transition-all"
              >
                <span>Backend API</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <p className="text-zinc-300 leading-relaxed mb-6 text-sm md:text-base">
            {project.description}
          </p>

          {/* Tech Stack Breakdowns */}
          <div className="space-y-4 mb-8">
            {/* Frontend Stack */}
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-2">
                <Code className="w-3.5 h-3.5 text-indigo-400" />
                <span>Frontend Stack</span>
                <a
                  href={project.githubFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span className="underline underline-offset-4">Frontend Repo</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.frontendTech.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Stack */}
            <div>
              <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 mb-2">
                <Server className="w-3.5 h-3.5 text-violet-400" />
                <span>Backend Stack</span>
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors"
                >
                  <FaGithub className="w-3.5 h-3.5" />
                  <span className="underline underline-offset-4">Backend Repo</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.backendTech.map((tech, i) => (
                  <span key={i} className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-6 py-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
        <p>© {new Date().getFullYear()} Sagar Ulli. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Built with <span className="text-zinc-400 font-medium">Next.js</span> & Deployed on <span className="text-indigo-400 font-medium">Vercel</span>
        </p>
      </footer>
    </div>
  );
}