"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Download, Bookmark, Search, Settings, ChevronRight, BookmarkCheck, X, Type, Minus, Plus } from "lucide-react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

// Course content structure
const courseContent = {
  modules: [
    {
      id: 1,
      title: "Module 1: The Beginning - My Story & Your Mindset",
      pdfUrl: "/pdfs/module-1.pdf",
      chapters: [
        {
          id: 1,
          title: "Welcome to Website Builder to Business Owner",
          content: `
            <p class="text-lg text-muted-foreground mb-6">
              My name is Efezino Ogaga. I'm 19 years old, and I'm a full-stack developer who has built multiple profitable online businesses—including a hotel booking platform that generates thousands of dollars monthly and an anime streaming website serving thousands of users. But just a few years ago, I was the kid finishing last in class, struggling to read, being laughed at by classmates who said I didn't even have "one star."
            </p>

            <p class="mb-4">
              This isn't one of those success stories where someone with money, connections, or natural genius builds a business. This is the story of an average kid from Lagos, Nigeria, who refused to let his circumstances define his future. And in the next 3 months, I'm going to show you exactly how you can do the same—regardless of your background, grades, or current situation.
            </p>

            <p class="mb-4">
              But first, you need to understand my journey. Not because my story is special, but because it proves that if someone like me can do this, absolutely anyone can.
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">What You'll Learn in This Course</h3>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• How to become a full-stack developer using AI-enhanced "vibe coding"</li>
              <li>• Building real applications that generate passive income</li>
              <li>• Turning coding skills into a profitable business (not just getting a job)</li>
              <li>• My exact journey from struggling student to successful entrepreneur</li>
              <li>• How to launch and scale without any money investment</li>
              <li>• The mindset shifts that separate successful entrepreneurs from struggling coders</li>
              <li>• Real project examples: hotel booking platform (Alora) & anime streaming website (HeroX)</li>
            </ul>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-8 mb-8">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Course Promise</h4>
              <p class="text-blue-700 dark:text-blue-300 text-sm">
                In 3 months, if you follow this course and do the work, you will be able to build professional websites and web applications, generate income from either client work or digital products, and think like a business owner instead of just an employee seeking a job.
              </p>
            </div>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">Why This Course Is Different</h3>
            <p class="mb-4">
              Most coding courses teach you to compete for jobs with millions of other developers. This course teaches you to create your own opportunities. Most courses focus on perfect code and theory. This course focuses on building real, profitable projects using AI to work smarter, not harder.
            </p>

            <p class="mb-4">
              This isn't just about learning to code—it's about learning to build the life you deserve. It's about proving that your background, your grades, your struggles don't define your potential. They prepare you for success.
            </p>
          `
        },
        {
          id: 2,
          title: "Chapter 1: The Kid Who Couldn't Read",
          content: `
            <h3 class="text-xl font-semibold text-foreground mb-4">The Classroom Humiliation</h3>
            
            <p class="mb-4">
              I need to be honest with you from the start: I wasn't born gifted. I wasn't the smart kid that teachers praised or the student who understood everything instantly. In fact, I was quite the opposite.
            </p>

            <p class="mb-4">
              Throughout my early school years, I was consistently finishing last or second-to-last in my class. While my classmates grasped concepts quickly, I needed time—lots of time—to process information. My teachers looked at me with that mixture of pity and frustration. My classmates? They just saw me as the slow one.
            </p>

            <p class="mb-4">
              The moment that changed everything happened during what should have been an innocent classroom game. My classmates were going around saying "I got my one star, I got my two stars," counting up as they went from desk to desk. It was just a silly game, the kind kids play without thinking.
            </p>

            <p class="mb-4">
              When they reached my desk, I was supposed to say "I got my seven stars."
            </p>

            <p class="mb-4">
              But before I could open my mouth, one of my classmates looked at me and said loudly, <span class="font-semibold">"You? You don't even have one star."</span>
            </p>

            <p class="mb-4">
              The classroom erupted in laughter.
            </p>

            <p class="mb-4">
              I sat there, frozen, as the laughter echoed around me. The boy who said it didn't even pause—he just skipped me entirely and moved to the next person like I didn't exist. Like I wasn't worth counting.
            </p>

            <p class="mb-4">
              That moment burned itself into my memory. Not just the words, but the feeling—the humiliation, the anger, the deep sense of injustice. Because here's what nobody in that classroom knew: I wasn't stupid. I just learned differently.
            </p>

            <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mt-8 mb-8">
              <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">🔥 The Turning Point</h4>
              <p class="text-amber-700 dark:text-amber-300 text-sm">
                In that moment, sitting in that desk while everyone laughed, I made myself a promise: I would become successful. I would prove every single one of them wrong. I would have my revenge—not through anger or bitterness, but through undeniable success.
              </p>
            </div>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">The Reading Struggle</h3>
            
            <p class="mb-4">
              My problems in school went deeper than just being slow to understand concepts. I had a fundamental challenge that made everything harder: I couldn't read properly.
            </p>

            <p class="mb-4">
              You might think that's strange—how can someone go to school and not know how to read? But it wasn't that I couldn't recognize letters or words. It was that reading was painfully slow and difficult for me. While other kids could read a paragraph in seconds, I struggled through each word, often losing the meaning by the time I reached the end of a sentence.
            </p>

            <p class="mb-4">
              This made everything in school exponentially harder. How do you learn history when reading the textbook takes forever? How do you excel in any subject when the very act of reading is a constant battle?
            </p>

            <p class="mb-4">
              The other kids could spell effortlessly. They could read aloud confidently. Meanwhile, I was struggling with basic words, always anxious about being called on to read in class, knowing the stumbling and stuttering that would follow.
            </p>

            <p class="mb-4">
              But here's where my story takes a different turn than you might expect.
            </p>
          `
        },
        {
          id: 3,
          title: "The Breakthrough: Understanding How I Learn",
          content: `
            <p class="mb-4">
              Because I struggled so much with reading and understanding concepts quickly, I was forced to think deeply about <em>why</em> I was struggling. While my classmates could memorize and move on, I had to figure out the fundamental principles behind everything.
            </p>

            <p class="mb-4">
              This is when I discovered something crucial about myself: <strong>I wasn't slow—I was thorough.</strong>
            </p>

            <p class="mb-4">
              When I finally understood why letters made certain sounds, when I figured out that reading wasn't about memorizing words but understanding that each letter has individual sounds that combine together—everything changed.
            </p>

            <p class="mb-4">
              Think about it: "APPLE" isn't a random collection of letters you memorize. It's <strong>A-PP-LE</strong>—individual sounds working together. Once I understood this fundamental principle, my reading improved dramatically. Not because I became "smarter," but because I had figured out the <em>system</em> behind reading.
            </p>

            <p class="mb-4">
              This pattern would repeat itself throughout my life and become my greatest strength in business: <strong>I don't just learn <em>what</em> to do—I understand <em>why</em> it works, which means I can teach it to others and find better ways to do it.</strong>
            </p>

            <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-8 mb-8">
              <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">✨ Key Lesson</h4>
              <p class="text-green-700 dark:text-green-300 text-sm">
                While my classmates who picked things up quickly often couldn't explain what they knew, I could break down complex concepts into simple steps that anyone could follow. This "weakness" of learning slowly became my superpower—I could find the "hack" or core principle behind any subject and explain it in a way that even the slowest learners could understand immediately.
              </p>
            </div>

            <p class="mb-4">
              <strong>This is crucial for you to understand because the same principle applies to learning code and building a business: You don't need to be naturally gifted. You need to understand the fundamental principles, which often comes from struggling and figuring things out the hard way.</strong>
            </p>
          `
        }
      ]
    },
    {
      id: 2,
      title: "Module 2: Vibe Coding Revolution - Learn Smarter, Not Harder",
      pdfUrl: "/pdfs/module-2.pdf",
      chapters: [
        {
          id: 1,
          title: "The Discovery That Changed Everything",
          content: `
            <p class="text-lg text-muted-foreground mb-6">
              You might think it's impossible to become a professional developer quickly because "AI does all the work." But here's the truth: AI doesn't replace developers – it supercharges them. The developers who learn to work WITH AI will dominate the future, while those who don't will struggle.
            </p>

            <p class="mb-4">
              When I discovered Vibe Coding, everything changed. I went from being an intermediate developer struggling with complex projects to building professional applications in record time. This isn't about cheating – it's about evolution.
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">Why Traditional Coding Education is Broken</h3>

            <p class="mb-4">
              <strong>Traditional Learning:</strong>
            </p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Spend 2-4 years in college or bootcamps</li>
              <li>• Memorize syntax without understanding purpose</li>
              <li>• Build toy projects that don't solve real problems</li>
              <li>• Graduate without practical business skills</li>
              <li>• Compete with millions for entry-level jobs</li>
            </ul>

            <p class="mb-4">
              <strong>Vibe Coding Approach:</strong>
            </p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Learn fundamentals while building real projects</li>
              <li>• Understand the "why" behind every line of code</li>
              <li>• Use AI to handle syntax while you focus on logic</li>
              <li>• Build profitable projects from day one</li>
              <li>• Create your own opportunities</li>
            </ul>

            <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mt-8 mb-8">
              <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">🚀 Reality Check</h4>
              <p class="text-purple-700 dark:text-purple-300 text-sm">
                Companies don't care if you can recite JavaScript methods from memory. They care if you can solve their business problems, build applications that work, deliver projects on time, adapt to new technologies quickly, and think like an entrepreneur.
              </p>
            </div>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">What is Vibe Coding?</h3>

            <p class="mb-4">
              Vibe Coding is my term for development that flows naturally using AI as your:
            </p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• <strong>Coding tutor</strong> - Explains concepts instantly</li>
              <li>• <strong>Error detective</strong> - Helps debug problems faster</li>
              <li>• <strong>Code generator</strong> - Writes boilerplate and repetitive code</li>
              <li>• <strong>Best practice advisor</strong> - Suggests optimal solutions</li>
              <li>• <strong>Project mentor</strong> - Guides you through complex builds</li>
            </ul>

            <p class="mb-4">
              Think of it like this: A carpenter doesn't forge his own nails. He uses pre-made nails and focuses on building beautiful furniture. Similarly, you don't need to write every line of code from scratch. You use AI-generated code and focus on building amazing applications.
            </p>
          `
        },
        {
          id: 2,
          title: "Your AI Development Arsenal",
          content: `
            <h3 class="text-xl font-semibold text-foreground mb-4">Primary AI Assistants</h3>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">ChatGPT (OpenAI)</h4>
            <p class="mb-4"><strong>Best for:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Explaining complex programming concepts</li>
              <li>• Code debugging and optimization</li>
              <li>• Planning project architecture</li>
              <li>• Learning new technologies</li>
              <li>• Problem-solving discussions</li>
            </ul>

            <div class="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-6 font-mono text-sm">
              <p class="text-slate-600 dark:text-slate-400 mb-2">Example prompt:</p>
              <p class="text-slate-900 dark:text-slate-100">
                "I'm building a hotel booking website. Explain how user authentication should work, including the database structure, security considerations, and the step-by-step user flow."
              </p>
            </div>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Claude.ai (Anthropic)</h4>
            <p class="mb-4"><strong>Best for:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Detailed code analysis</li>
              <li>• Large codebase reviews</li>
              <li>• Documentation writing</li>
              <li>• Complex problem breakdown</li>
              <li>• Technical writing and planning</li>
            </ul>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">Visual Development Tools</h3>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">V0 by Vercel</h4>
            <p class="mb-4">
              <strong>What it does:</strong> Generates React components from text descriptions<br/>
              <strong>Perfect for:</strong> Creating UI components quickly<br/>
              <strong>Example usage:</strong> "Create a modern pricing table with 3 tiers for a SaaS product"
            </p>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Lovable</h4>
            <p class="mb-4">
              <strong>What it does:</strong> Builds complete web applications from prompts<br/>
              <strong>Perfect for:</strong> Rapid prototyping and MVP development<br/>
              <strong>Example usage:</strong> "Build a task management app with user authentication and real-time updates"
            </p>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Bolt</h4>
            <p class="mb-4">
              <strong>What it does:</strong> Creates full-stack applications with deployment<br/>
              <strong>Perfect for:</strong> End-to-end project development<br/>
              <strong>Example usage:</strong> "Create an e-commerce store with payment integration and inventory management"
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">Advanced Development Tools</h3>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">GitHub Copilot (VS Code)</h4>
            <p class="mb-4"><strong>Best for:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Code completion while typing</li>
              <li>• Generating functions and classes</li>
              <li>• Writing tests and documentation</li>
              <li>• Refactoring existing code</li>
            </ul>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Cursor AI</h4>
            <p class="mb-4"><strong>Best for:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Intelligent code editing</li>
              <li>• Natural language code generation</li>
              <li>• Codebase understanding and navigation</li>
              <li>• Collaborative AI programming</li>
            </ul>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-8">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Pro Tip</h4>
              <p class="text-blue-700 dark:text-blue-300 text-sm">
                Start with the free versions of these tools to learn. Once you start earning money from your projects, invest in the premium versions. ChatGPT Plus ($20/month) and Claude Pro ($20/month) are worth every penny once you're generating income.
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: 3,
      title: "Module 3: Becoming Full-Stack Fast - Building Real Applications",
      pdfUrl: "/pdfs/module-3.pdf",
      chapters: [
        {
          id: 1,
          title: "The Full-Stack Mindset",
          content: `
            <p class="text-lg text-muted-foreground mb-6">
              A full-stack developer is like a digital architect who can design the blueprint (frontend), build the foundation (backend), and connect all the systems (database, APIs, hosting). But in the modern era with AI assistance, you can master these skills faster than ever before.
            </p>

            <p class="mb-4">
              In this module, we'll transform you from a beginner into a capable full-stack developer by building real applications that solve actual problems and can generate income.
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">Understanding the Full-Stack Landscape</h3>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Frontend: The User Experience Layer</h4>
            <p class="mb-4"><strong>What users see and interact with:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Web interfaces (React, Vue, Angular)</li>
              <li>• Mobile apps (React Native, Flutter)</li>
              <li>• User experience and design</li>
              <li>• Performance and accessibility</li>
            </ul>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Backend: The Business Logic Layer</h4>
            <p class="mb-4"><strong>What powers everything behind the scenes:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Server logic and APIs (Node.js, Python, Go)</li>
              <li>• Authentication and security</li>
              <li>• Data processing and validation</li>
              <li>• Third-party service integration</li>
            </ul>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Database: The Information Storage Layer</h4>
            <p class="mb-4"><strong>Where all data lives and is organized:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Relational databases (PostgreSQL, MySQL)</li>
              <li>• NoSQL databases (MongoDB, Firebase)</li>
              <li>• Cloud databases (Supabase, PlanetScale)</li>
              <li>• Caching and optimization</li>
            </ul>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">DevOps: The Deployment and Scaling Layer</h4>
            <p class="mb-4"><strong>How applications reach users:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Hosting platforms (Vercel, Netlify, Railway)</li>
              <li>• Domain management and SSL</li>
              <li>• Performance monitoring</li>
              <li>• Scaling and maintenance</li>
            </ul>

            <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-8">
              <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">🎯 The Modern Stack</h4>
              <p class="text-green-700 dark:text-green-300 text-sm mb-2">
                <strong>Recommended Stack for Beginners:</strong>
              </p>
              <p class="text-green-700 dark:text-green-300 text-sm">
                Frontend: Next.js + React | Backend: Next.js API Routes | Database: Supabase | Hosting: Vercel
              </p>
              <p class="text-green-700 dark:text-green-300 text-sm mt-2">
                This stack can handle e-commerce stores, SaaS applications, booking systems, social platforms, and much more!
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: 4,
      title: "Module 4: From Developer to Business Owner - Monetizing Your Skills",
      pdfUrl: "/pdfs/module-4.pdf",
      chapters: [
        {
          id: 1,
          title: "The Truth About the Developer Job Market",
          content: `
            <p class="text-lg text-muted-foreground mb-6">
              Here's what nobody wants to tell you: there are millions of developers competing for the same jobs. Even skilled developers face mass layoffs, outsourcing, AI replacing routine tasks, and limited income ceilings as employees.
            </p>

            <p class="mb-4">
              But when you think like a business owner, everything changes. Instead of competing with millions for jobs, you create your own opportunities. Instead of trading time for money, you build assets that work for you.
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">The Business Owner Mindset Shift</h3>

            <p class="mb-4"><strong>Employee Mindset:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• "I need to find a job"</li>
              <li>• "I'll work 40+ hours for someone else"</li>
              <li>• "My income is limited by my salary"</li>
              <li>• "Job security depends on my employer"</li>
            </ul>

            <p class="mb-4"><strong>Business Owner Mindset:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• "I'll create my own opportunities"</li>
              <li>• "I'll build systems that work without me"</li>
              <li>• "My income potential is unlimited"</li>
              <li>• "I control my own security"</li>
            </ul>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">My Personal Transition Story</h3>

            <p class="mb-4">
              Remember my experience working for my father's company? I was doing good work, catching thieves, improving the business, but I realized something crucial: I was building someone else's dream, not my own.
            </p>

            <p class="mb-4">
              When that shop girl kept denying her theft and my father questioned my auditing, I knew I needed to be in control. I needed to build something where my work directly benefited me, my decisions shaped the outcome, and my success wasn't limited by someone else's vision.
            </p>

            <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mt-8">
              <h4 class="font-semibold text-amber-800 dark:text-amber-200 mb-2">💪 My Real Success Stories</h4>
              <p class="text-amber-700 dark:text-amber-300 text-sm mb-2">
                <strong>Alora Hotel Booking Platform:</strong> Generates commission on every booking, works 24/7 without my direct involvement, provides ongoing passive income.
              </p>
              <p class="text-amber-700 dark:text-amber-300 text-sm">
                <strong>HeroX Anime/Manga Platform:</strong> Ad revenue from high traffic, premium subscriptions, affiliate marketing—serving thousands of users globally.
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: 5,
      title: "Module 5: Launch Without Money - Bootstrap Your Way to Success",
      pdfUrl: "/pdfs/module-5.pdf",
      chapters: [
        {
          id: 1,
          title: "The Zero-Investment Reality",
          content: `
            <p class="text-lg text-muted-foreground mb-6">
              One of the biggest lies about starting a business is that you need money to begin. That's what keeps most people trapped in the employee mindset. The truth? In today's digital world, you can start a profitable business with nothing but your skills, a computer, and internet connection.
            </p>

            <p class="mb-4">
              I started my journey with zero investment. No business loans, no investors, no family money. Just determination, AI tools, and the willingness to work smart. If a 19-year-old from Lagos with an average background can do it, so can you.
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">The Bootstrap Mindset</h3>

            <p class="mb-4">
              Bootstrapping means building your business using only your existing skills and time, free or very low-cost tools, revenue from early customers to fund growth, creative solutions instead of expensive ones, and sweat equity instead of financial investment.
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">Why Bootstrapping is Actually Better</h3>

            <p class="mb-4"><strong>Advantages of Starting with No Money:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• <strong>Forces creativity</strong> - You find innovative solutions</li>
              <li>• <strong>Keeps you lean</strong> - No waste on unnecessary expenses</li>
              <li>• <strong>Maintains control</strong> - You own 100% of your business</li>
              <li>• <strong>Builds discipline</strong> - Every expense must be justified</li>
              <li>• <strong>Creates urgency</strong> - You must generate income quickly</li>
            </ul>

            <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mt-8">
              <h4 class="font-semibold text-blue-800 dark:text-blue-200 mb-2">🚀 My Bootstrap Story</h4>
              <p class="text-blue-700 dark:text-blue-300 text-sm">
                When I left my father's company, I had savings of about ₦50,000 (roughly $120 USD). Instead of seeing this as limiting, I viewed it as motivating. I knew I had to make money quickly, which forced me to focus on high-impact activities only, use free tools, deliver results fast, and reinvest every naira back into growth.
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: 6,
      title: "Module 6: Scaling & Freedom - Building Systems That Work Without You",
      pdfUrl: "/pdfs/module-6.pdf",
      chapters: [
        {
          id: 1,
          title: "The Freedom Paradox",
          content: `
            <p class="text-lg text-muted-foreground mb-6">
              Most people start a business to gain freedom, but end up creating a job that's more demanding than employment. They become slaves to their own success, working 80-hour weeks, unable to take vacations, and constantly firefighting problems.
            </p>

            <p class="mb-4">
              True freedom comes from building systems that work without you. When your business can operate, serve customers, and generate income while you sleep, travel, or pursue other interests—that's when you've achieved real success.
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">From Operator to Owner</h3>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Stage 1: The Operator (Where Most People Get Stuck)</h4>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• You do all the work personally</li>
              <li>• Income stops when you stop working</li>
              <li>• Every decision requires your input</li>
              <li>• Client emergencies become your emergencies</li>
              <li>• Growth is limited by your personal capacity</li>
            </ul>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Stage 3: The Owner (True Freedom)</h4>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Systems and people handle operations</li>
              <li>• Business runs without your daily input</li>
              <li>• You focus on strategy and growth</li>
              <li>• Income continues even when you're absent</li>
              <li>• Time freedom and location independence</li>
            </ul>

            <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-6 mt-8">
              <h4 class="font-semibold text-purple-800 dark:text-purple-200 mb-2">💡 My Personal Journey</h4>
              <p class="text-purple-700 dark:text-purple-300 text-sm">
                When I first started getting clients, I fell into the operator trap—personally coding every website, answering every email immediately, working nights and weekends. Then I started building systems and focusing on products that could scale without my direct involvement, like Alora and HeroX. These platforms generate income whether I'm working on them or not.
              </p>
            </div>
          `
        }
      ]
    },
    {
      id: 7,
      title: "Module 7: Real Talk & Success Manifesto - The Truth About Entrepreneurial Success",
      pdfUrl: "/pdfs/module-7.pdf",
      chapters: [
        {
          id: 1,
          title: "The Unfiltered Truth",
          content: `
            <p class="text-lg text-muted-foreground mb-6">
              We've covered the strategies, tools, and systems for building a successful development business. But now it's time for real talk—the stuff nobody puts in the marketing materials or success stories. The struggles that will test your resolve, the mindset battles you'll fight, and the hard truths about entrepreneurial life.
            </p>

            <p class="mb-4">
              I'm 19 years old and have already experienced more business challenges than many people face in a lifetime. From being humiliated in class to receiving unfair punishment, from working for family drama to building my own success—every struggle taught me something crucial about what it really takes to succeed.
            </p>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">The Struggles Nobody Talks About</h3>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">The Emotional Rollercoaster</h4>

            <p class="mb-4"><strong>The Highs:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Landing your first big client</li>
              <li>• Seeing your product get its first paying users</li>
              <li>• Having more money than you've ever made</li>
              <li>• People recognizing you as successful</li>
              <li>• The freedom to make your own decisions</li>
            </ul>

            <p class="mb-4"><strong>The Lows:</strong></p>
            <ul class="space-y-2 text-muted-foreground mb-6">
              <li>• Clients who don't pay or disappear</li>
              <li>• Products that nobody wants to buy</li>
              <li>• Months where income drops to zero</li>
              <li>• Friends and family who don't understand your choice</li>
              <li>• The weight of responsibility for everything</li>
            </ul>

            <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mt-8">
              <h4 class="font-semibold text-red-800 dark:text-red-200 mb-2">⚠️ My Personal Low Point</h4>
              <p class="text-red-700 dark:text-red-300 text-sm">
                There was a period about 6 months into my journey where I had completed a major project but the client was delaying payment. My savings were running low, my family was questioning my decision, and I was starting to doubt myself. I remember sitting in my room at 2 AM, wondering if I was just being foolish. But then I remembered that classroom moment—the promise I made to myself. I sent follow-up emails to three potential clients, started working on a new product idea, and recommitted to my vision.
              </p>
            </div>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">Your Success Manifesto</h3>

            <p class="mb-4">
              Now it's time to create your own success manifesto—a personal declaration of your values, goals, and commitment to your entrepreneurial journey. This isn't for me—it's for you, for when things get hard and you need to remember why you started.
            </p>

            <h4 class="text-lg font-semibold text-foreground mt-6 mb-3">Complete These Statements:</h4>

            <div class="bg-slate-100 dark:bg-slate-800 rounded-lg p-6 mb-6">
              <p class="mb-4"><strong>I'm taking this course because:</strong></p>
              <p class="text-muted-foreground mb-4">_____________________________________________</p>
              
              <p class="mb-4"><strong>Success to me means:</strong></p>
              <p class="text-muted-foreground mb-4">_____________________________________________</p>
              
              <p class="mb-4"><strong>In 3 months, I will:</strong></p>
              <p class="text-muted-foreground mb-4">_____________________________________________</p>
              
              <p class="mb-4"><strong>When I want to quit, I'll remember:</strong></p>
              <p class="text-muted-foreground">_____________________________________________</p>
            </div>

            <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 mt-8">
              <h4 class="font-semibold text-green-800 dark:text-green-200 mb-2">🎯 My Challenge to You</h4>
              <p class="text-green-700 dark:text-green-300 text-sm">
                I challenge you to prove me right. To show that someone from any background, with determination and the right approach, can build a successful business. I challenge you to document your journey, share your struggles and victories, and inspire the next person who feels like an outsider. Most importantly, I challenge you to start today. Not next week, not when you feel ready, not when conditions are perfect. Today.
              </p>
            </div>

            <h3 class="text-xl font-semibold text-foreground mt-8 mb-4">Closing Thoughts</h3>

            <p class="mb-4">
              Every expert was once a beginner. Every successful entrepreneur started with more questions than answers. Every business empire began with a single decision to start.
            </p>

            <p class="mb-4">
              You have everything you need: the knowledge from this course, the power of AI tools, and most importantly, the desire to change your life.
            </p>

            <p class="mb-4">
              The only question left is: Will you start your journey today, or will you let another day pass wondering "what if"?
            </p>

            <p class="mb-4 font-semibold text-lg">
              Your time is now. Your opportunity is here. Your success story starts with the next action you take.
            </p>

            <p class="mb-4">
              Don't let yourself down. Don't let the kid who was underestimated, overlooked, or dismissed down.
            </p>

            <p class="mb-4 font-semibold">
              Code your way to success. Build your business. Change your life.
            </p>

            <p class="mb-4">
              I'm rooting for you.
            </p>

            <p class="mt-8 font-semibold">
              <strong>Efezino Ogaga</strong><br/>
              <span class="text-muted-foreground text-sm">Full-Stack Developer, Entrepreneur, and Your Guide to Success</span>
            </p>
          `
        }
      ]
    }
  ]
}

export default function ReaderPage() {
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0)
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [textSize, setTextSize] = useState(16)
  const [bookmarkedChapters, setBookmarkedChapters] = useState<string[]>([])

  // Load bookmarks and text size from localStorage
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('courseBookmarks')
    if (savedBookmarks) {
      setBookmarkedChapters(JSON.parse(savedBookmarks))
    }
    const savedTextSize = localStorage.getItem('textSize')
    if (savedTextSize) {
      setTextSize(parseInt(savedTextSize))
    }
  }, [])

  // Save bookmarks to localStorage
  useEffect(() => {
    localStorage.setItem('courseBookmarks', JSON.stringify(bookmarkedChapters))
  }, [bookmarkedChapters])

  // Save text size to localStorage
  useEffect(() => {
    localStorage.setItem('textSize', textSize.toString())
  }, [textSize])

  const currentModule = courseContent.modules[currentModuleIndex]
  const currentChapter = currentModule.chapters[currentChapterIndex]
  const currentBookmarkId = `${currentModuleIndex}-${currentChapterIndex}`
  const isBookmarked = bookmarkedChapters.includes(currentBookmarkId)

  const totalChapters = courseContent.modules.reduce((acc, module) => acc + module.chapters.length, 0)
  const currentChapterNumber = courseContent.modules
    .slice(0, currentModuleIndex)
    .reduce((acc, module) => acc + module.chapters.length, 0) + currentChapterIndex + 1

  // Highlight search results in content
  const getHighlightedContent = () => {
    if (!searchQuery.trim()) {
      return currentChapter.content
    }
    const regex = new RegExp(`(${searchQuery})`, 'gi')
    return currentChapter.content.replace(regex, '<mark class="bg-blue-300 dark:bg-blue-600 px-1 rounded">$1</mark>')
  }

  // Toggle bookmark
  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarkedChapters(bookmarkedChapters.filter(id => id !== currentBookmarkId))
    } else {
      setBookmarkedChapters([...bookmarkedChapters, currentBookmarkId])
    }
  }

  // Download current module PDF
  const downloadModulePdf = () => {
    const link = document.createElement('a')
    link.href = currentModule.pdfUrl
    link.download = `${currentModule.title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const goToNextChapter = () => {
    if (currentChapterIndex < currentModule.chapters.length - 1) {
      setCurrentChapterIndex(currentChapterIndex + 1)
    } else if (currentModuleIndex < courseContent.modules.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1)
      setCurrentChapterIndex(0)
    }
  }

  const goToPreviousChapter = () => {
    if (currentChapterIndex > 0) {
      setCurrentChapterIndex(currentChapterIndex - 1)
    } else if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1)
      setCurrentChapterIndex(courseContent.modules[currentModuleIndex - 1].chapters.length - 1)
    }
  }

  const goToChapter = (moduleIndex: number, chapterIndex: number) => {
    setCurrentModuleIndex(moduleIndex)
    setCurrentChapterIndex(chapterIndex)
  }

  const isFirstChapter = currentModuleIndex === 0 && currentChapterIndex === 0
  const isLastChapter = 
    currentModuleIndex === courseContent.modules.length - 1 && 
    currentChapterIndex === currentModule.chapters.length - 1

  return (
    <div className="min-h-screen bg-background">
      {/* Reader Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/home">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div className="hidden md:block text-sm text-muted-foreground">
                Chapter {currentChapterNumber} of {totalChapters}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => setSearchOpen(true)}>
                <Search className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={toggleBookmark}
                className={isBookmarked ? "text-primary" : ""}
              >
                {isBookmarked ? <BookmarkCheck className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" onClick={downloadModulePdf}>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setSettingsOpen(true)}>
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Table of Contents Sidebar */}
        <aside className="hidden md:block w-80 border-r border-border/40 bg-muted/30 overflow-y-auto">
          <div className="p-6">
            <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
            <nav className="space-y-4">
              {courseContent.modules.map((module, moduleIndex) => (
                <div key={module.id} className="space-y-1">
                  <div className="font-medium text-sm text-foreground mb-2">
                    {module.title}
                  </div>
                  {module.chapters.map((chapter, chapterIndex) => (
                    <button
                      key={chapter.id}
                      onClick={() => goToChapter(moduleIndex, chapterIndex)}
                      className={`w-full text-left p-2 text-sm rounded-md transition-colors ${
                        currentModuleIndex === moduleIndex && currentChapterIndex === chapterIndex
                          ? "text-primary bg-primary/10 font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <ChevronRight className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span className="line-clamp-2">{chapter.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-4 sm:p-8">
            <Card className="border-border/50">
              <CardHeader>
                <div className="text-sm text-muted-foreground mb-2">
                  {currentModule.title}
                </div>
                <CardTitle className="text-2xl">{currentChapter.title}</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <div 
                  className="space-y-6 text-foreground leading-relaxed"
                  style={{ fontSize: `${textSize}px` }}
                  dangerouslySetInnerHTML={{ __html: getHighlightedContent() }}
                />

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-8 mt-8 border-t border-border/40">
                  <div>
                    {!isFirstChapter && (
                      <Button 
                        variant="outline" 
                        onClick={goToPreviousChapter}
                      >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous
                      </Button>
                    )}
                  </div>
                  <div>
                    {!isLastChapter ? (
                      <Button onClick={goToNextChapter}>
                        Next Chapter
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    ) : (
                      <Button variant="default">
                        Course Complete! 🎉
                      </Button>
                    )}
                  </div>
                </div>
                <div className="w-full flex justify-center mt-4">
                  <span className="text-sm text-muted-foreground">Chapter {currentChapterNumber} of {totalChapters}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Search in Current Chapter</DialogTitle>
            <DialogDescription>
              Search for specific words or phrases in the current chapter
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="flex gap-2">
              <Input
                placeholder="Enter search term..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1"
              />
              <Button onClick={() => setSearchOpen(false)}>
                Search
              </Button>
            </div>
            {searchQuery && (
              <p className="text-sm text-muted-foreground">
                Search results will be highlighted in blue throughout the chapter
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>

      {/* Settings Dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Reading Settings</DialogTitle>
            <DialogDescription>
              Customize your reading experience
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="text-size" className="flex items-center gap-2">
                  <Type className="h-4 w-4" />
                  Text Size
                </Label>
                <span className="text-sm text-muted-foreground">{textSize}px</span>
              </div>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTextSize(Math.max(12, textSize - 2))}
                  disabled={textSize <= 12}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Slider
                  id="text-size"
                  min={12}
                  max={24}
                  step={2}
                  value={[textSize]}
                  onValueChange={(value) => setTextSize(value[0])}
                  className="flex-1"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTextSize(Math.min(24, textSize + 2))}
                  disabled={textSize >= 24}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Adjust the text size for comfortable reading
              </p>
            </div>

            <div className="space-y-2">
              <Label>Preview</Label>
              <div 
                className="p-4 bg-muted/50 rounded-lg"
                style={{ fontSize: `${textSize}px` }}
              >
                <p>This is how your text will look at {textSize}px.</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}