"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Link from "next/link"
import React, { useRef, useState } from "react"

export default function SampleReaderPage() {
  // Collect all text to read aloud
  const readerText = `From Last Place to Financial Freedom: The Real Story
Listen, I need to be honest with you about something. There was a time when I was just another person with big dreams and zero skills to back them up. Today, I'm running multiple online businesses that generate passive income while I sleep. And I'm about to show you exactly how I did it - and more importantly, how you can avoid all the mistakes I made and do it in just 3 months.
My name is Efezino Ogaga, and this is the story of how I coded my way to freedom - and your blueprint to do the same.
The Kid Everyone Counted Out
Picture this: You're sitting in class, and your classmates are playing this game where they go around saying 'I got my one star, I got my two star...' When it gets to your turn for 'seven star,' before you can even speak, someone just says 'You don't even have a star.' Everyone bursts out laughing. You're humiliated, embarrassed, crushed.
That was me. I was always last or second-to-last in class. My teachers thought I was slow. My classmates thought I was stupid. But here's what they didn't understand - I wasn't slow, I was thorough. When I finally grasped something, I didn't just memorize it, I truly understood it. I could break it down and explain it so simply that even the slowest learner would get it immediately.
Take reading, for example. I struggled with it for years until I discovered that letters have individual sounds. Once I understood that 'apple' is 'A-PP-LE,' everything clicked. This became my pattern - I'd struggle initially, but once I understood something, I'd master it completely.
The Turning Point
After finishing school, my father employed me as a manager in his company, paying me 20,000 naira monthly. It wasn't much, but it was my first real money. I was put in charge of auditing the shop girls, and I quickly discovered they were stealing. When I reported it with clear evidence, my father didn't handle it properly. One girl kept denying her theft even when caught red-handed.
The frustration of being right but not believed, of having solid evidence dismissed, made me realize something crucial: I never wanted to work under someone else again. I wanted steady income without trading time for money. I wanted the freedom to make my own decisions. I wanted control over my financial future.
That's when I made the decision that changed everything - I told my father I wanted to stop working for him to try something different.
The Search for a Skill That Pays
I stayed home for weeks, thinking about business ideas. I knew most billionaires got rich by offering value to people, but I had no technical or physical skills. School had never taught me how to make money - only how to get good grades and maybe find a job.
After researching various options, I chose coding. Why? Because every business needs websites and apps, you don't need expensive equipment or degrees, you can work with clients worldwide, and the income is scalable. I started with frontend development, learned HTML, CSS, and JavaScript. I built websites using tools like Figma and Framer, dove into Web3 and blockchain, learned Solidity for smart contracts.
But I hit a roadblock. I was learning slowly, struggling with complex concepts, spending hours debugging simple errors. Time was not on my side. I needed something faster, something that would give me professional-level skills without years of traditional learning.
The Discovery That Changed Everything
Then I discovered something that revolutionized my entire approach: Vibe Coding - using AI as my coding partner and accelerator. This wasn't about AI doing all the work; it was about working smarter, not harder.
Instead of spending months memorizing syntax and fighting with documentation, I started using ChatGPT and Claude as my 24/7 coding mentors. I could get instant explanations of complex concepts, debug errors in minutes instead of hours, and generate professional-quality code while actually understanding how it worked.
With tools like V0 by Vercel, I could describe a component and watch it come to life. Lovable helped me build entire applications from simple prompts. Bolt created full-stack solutions with deployment ready. And when I needed to write code myself, GitHub Copilot and Cursor became my intelligent coding companions.
This approach changed my life. I went from intermediate developer to building professional applications in record time. I created an hotel booking website called Alora and an anime streaming platform - both generating money with minimal ongoing effort.
The Real Results
Here's what happened when I stopped fighting against AI and started working with it:
I built my first professional portfolio website in days, not weeks. I created a complete task management SaaS application with user authentication, real-time collaboration, and Stripe payment integration. I developed an e-commerce platform with shopping carts, inventory management, and order processing.
But more importantly, I learned to think like a business owner, not just a code monkey. While others spent years learning to become employees, I spent months learning to become an entrepreneur.
The applications I built weren't just learning projects - they became income sources. The hotel booking site processes real reservations. The anime streaming platform has paying subscribers. These aren't just portfolio pieces; they're business assets working for me 24/7.
Why This Changes Everything
Most people think AI will replace developers. The truth is, AI supercharges developers who know how to work with it. Traditional coding education is broken - it teaches you to memorize syntax the way it was done 20 years ago, makes you struggle with documentation for hours, and graduates you without business skills to compete with millions of other job seekers.
The modern approach is different. You use AI to handle the syntax while you focus on understanding logic and building real solutions. You create applications that solve actual problems and generate income. You build your own opportunities instead of competing for someone else's jobs.
What You'll Actually Learn
This isn't theory or toy projects. You'll build real applications using the exact same tech stack that powers companies like Netflix, Airbnb, and Stripe:
Next.js and React for modern frontend development
Supabase for database and authentication
Stripe for payment processing
Vercel for deployment and hosting
You'll master the art of Vibe Coding - collaborating with AI tools to build professional applications faster than traditional methods. You'll understand when to use ChatGPT for explanations, Claude for complex analysis, V0 for rapid prototyping, and Copilot for intelligent code completion.
Most importantly, you'll learn to think like a business owner from day one. Every project you build will be designed not just to showcase skills, but to generate income.
The 90-Day Transformation
This is your roadmap to avoid all the struggles I went through. While it took me much longer to figure everything out through trial and error, I'm going to compress my entire learning journey into 90 days for you. You'll learn from my mistakes so you don't have to make them yourself.
In three months, you'll go from complete beginner to having multiple professional applications in your portfolio. You'll have the skills to build any web application idea, an AI-powered development workflow that makes you incredibly efficient, and real applications generating passive income.
But here's the real transformation - you'll stop thinking like someone looking for a job and start thinking like someone who creates jobs. You'll have the confidence to charge premium rates because you deliver real value, not just code.
This is your chance to skip years of traditional learning and jump straight to what actually works in 2025 and beyond. While others are still memorizing JavaScript methods, you'll be building the future with AI as your partner.
The question isn't whether you can learn to code - anyone can. The question is whether you can learn to build a business that gives you the freedom you deserve.
That's exactly what I'm going to teach you.`;

  const [isPlaying, setIsPlaying] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Play/pause handler with better voice selection
  const handlePlayPause = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support text-to-speech.");
      return;
    }
    if (!isPlaying) {
      const synth = window.speechSynthesis;
      const utterance = new window.SpeechSynthesisUtterance(readerText);
      // Try to select a more natural voice
      const voices = synth.getVoices();
      const preferredVoices = voices.filter(v => v.lang.startsWith("en") && v.name.toLowerCase().includes("natural"));
      utterance.voice = preferredVoices[0] || voices.find(v => v.lang.startsWith("en")) || null;
      utterance.rate = 1.05;
      utterance.pitch = 1;
      utterance.lang = "en-US";
      utterance.onend = () => setIsPlaying(false);
      utteranceRef.current = utterance;
      synth.cancel();
      synth.speak(utterance);
      setIsPlaying(true);
    } else {
      window.speechSynthesis.cancel();
      setIsPlaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar for back navigation and centered title */}
      <div className="w-full sticky top-0 z-[201] bg-background/90 border-b border-border flex items-center justify-between px-2 sm:px-4 py-2 sm:py-3">
        <Link href="/home">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 text-xs sm:text-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 16L7.5 10L12.5 4" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Button>
        </Link>
        <span className="mx-auto text-base sm:text-lg md:text-xl font-bold text-foreground text-center">From Last Place to Financial Freedom</span>
        <span className="w-16"></span> {/* Spacer for layout symmetry */}
      </div>
      <div className="flex-1 flex justify-center items-center px-2 sm:px-4 lg:px-8 py-4 sm:py-8">
        <div className="w-full max-w-2xl mx-auto bg-muted/40 rounded-lg shadow-lg p-0 sm:p-2 md:p-4 lg:p-6">
          <div className="px-2 sm:px-4 py-4 sm:py-6">
            <div className="mb-4 text-muted-foreground text-balance text-center">
              <span className="block text-sm sm:text-base md:text-lg lg:text-xl font-medium mb-1">90 days to financial freedom through code.</span>
              <span className="block text-xs sm:text-sm md:text-base lg:text-lg">Learn with AI, build profitable applications,<br className="hidden sm:inline" />and turn your new skills into a thriving business.</span>
            </div>
            <div className="reader-content text-foreground text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed space-y-4">
              <h1 className="w-full flex justify-center items-center text-center mx-auto font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary mb-6 mt-2" style={{ lineHeight: 1.15 }}>
                From Last Place to Financial Freedom: <br className="hidden sm:inline" />The Real Story
              </h1>
              <p className="mb-5">Listen, I need to be honest with you about something. There was a time when I was just another person with big dreams and zero skills to back them up. Today, I'm running multiple online businesses that generate passive income while I sleep. And I'm about to show you exactly how I did it - and more importantly, how you can avoid all the mistakes I made and do it in just 3 months.</p>
              <p className="mb-7">My name is Efezino Ogaga, and this is the story of how I coded my way to freedom - and your blueprint to do the same.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 mt-8">The Kid Everyone Counted Out</h2>
              <p className="mb-4">Picture this: You're sitting in class, and your classmates are playing this game where they go around saying "I got my one star, I got my two star..." When it gets to your turn for "seven star," before you can even speak, someone just says "You don't even have a star." Everyone bursts out laughing. You're humiliated, embarrassed, crushed.</p>
              <p className="mb-4">That was me. I was always last or second-to-last in class. My teachers thought I was slow. My classmates thought I was stupid. But here's what they didn't understand - I wasn't slow, I was thorough. When I finally grasped something, I didn't just memorize it, I truly understood it. I could break it down and explain it so simply that even the slowest learner would get it immediately.</p>
              <p className="mb-4">Take reading, for example. I struggled with it for years until I discovered that letters have individual sounds. Once I understood that "apple" is "A-PP-LE," everything clicked. This became my pattern - I'd struggle initially, but once I understood something, I'd master it completely.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 mt-8">The Turning Point</h2>
              <p className="mb-4">After finishing school, my father employed me as a manager in his company, paying me 20,000 naira monthly. It wasn't much, but it was my first real money. I was put in charge of auditing the shop girls, and I quickly discovered they were stealing. When I reported it with clear evidence, my father didn't handle it properly. One girl kept denying her theft even when caught red-handed.</p>
              <p className="mb-4">The frustration of being right but not believed, of having solid evidence dismissed, made me realize something crucial: I never wanted to work under someone else again. I wanted steady income without trading time for money. I wanted the freedom to make my own decisions. I wanted control over my financial future.</p>
              <p className="mb-4">That's when I made the decision that changed everything - I told my father I wanted to stop working for him to try something different.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 mt-8">The Search for a Skill That Pays</h2>
              <p className="mb-4">I stayed home for weeks, thinking about business ideas. I knew most billionaires got rich by offering value to people, but I had no technical or physical skills. School had never taught me how to make money - only how to get good grades and maybe find a job.</p>
              <p className="mb-4">After researching various options, I chose coding. Why? Because every business needs websites and apps, you don't need expensive equipment or degrees, you can work with clients worldwide, and the income is scalable. I started with frontend development, learned HTML, CSS, and JavaScript. I built websites using tools like Figma and Framer, dove into Web3 and blockchain, learned Solidity for smart contracts.</p>
              <p className="mb-4">But I hit a roadblock. I was learning slowly, struggling with complex concepts, spending hours debugging simple errors. Time was not on my side. I needed something faster, something that would give me professional-level skills without years of traditional learning.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 mt-8">The Discovery That Changed Everything</h2>
              <p className="mb-4">Then I discovered something that revolutionized my entire approach: Vibe Coding - using AI as my coding partner and accelerator. This wasn't about AI doing all the work; it was about working smarter, not harder.</p>
              <p className="mb-4">Instead of spending months memorizing syntax and fighting with documentation, I started using ChatGPT and Claude as my 24/7 coding mentors. I could get instant explanations of complex concepts, debug errors in minutes instead of hours, and generate professional-quality code while actually understanding how it worked.</p>
              <p className="mb-4">With tools like V0 by Vercel, I could describe a component and watch it come to life. Lovable helped me build entire applications from simple prompts. Bolt created full-stack solutions with deployment ready. And when I needed to write code myself, GitHub Copilot and Cursor became my intelligent coding companions.</p>
              <p className="mb-4">This approach changed my life. I went from intermediate developer to building professional applications in record time. I created an hotel booking website called Alora and an anime streaming platform - both generating money with minimal ongoing effort.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 mt-8">The Real Results</h2>
              <p className="mb-4">Here's what happened when I stopped fighting against AI and started working with it:</p>
              <p className="mb-4">I built my first professional portfolio website in days, not weeks. I created a complete task management SaaS application with user authentication, real-time collaboration, and Stripe payment integration. I developed an e-commerce platform with shopping carts, inventory management, and order processing.</p>
              <p className="mb-4">But more importantly, I learned to think like a business owner, not just a code monkey. While others spent years learning to become employees, I spent months learning to become an entrepreneur.</p>
              <p className="mb-4">The applications I built weren't just learning projects - they became income sources. The hotel booking site processes real reservations. The anime streaming platform has paying subscribers. These aren't just portfolio pieces; they're business assets working for me 24/7.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 mt-8">Why This Changes Everything</h2>
              <p className="mb-4">Most people think AI will replace developers. The truth is, AI supercharges developers who know how to work with it. Traditional coding education is broken - it teaches you to memorize syntax the way it was done 20 years ago, makes you struggle with documentation for hours, and graduates you without business skills to compete with millions of other job seekers.</p>
              <p className="mb-4">The modern approach is different. You use AI to handle the syntax while you focus on understanding logic and building real solutions. You create applications that solve actual problems and generate income. You build your own opportunities instead of competing for someone else's jobs.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 mt-8">What You'll Actually Learn</h2>
              <p className="mb-4">This isn't theory or toy projects. You'll build real applications using the exact same tech stack that powers companies like Netflix, Airbnb, and Stripe:</p>
              <ul className="pl-4 mb-4 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl space-y-2">
                <li>Next.js and React for modern frontend development</li>
                <li>Supabase for database and authentication</li>
                <li>Stripe for payment processing</li>
                <li>Vercel for deployment and hosting</li>
              </ul>
              <p className="mb-4">You'll master the art of Vibe Coding - collaborating with AI tools to build professional applications faster than traditional methods. You'll understand when to use ChatGPT for explanations, Claude for complex analysis, V0 for rapid prototyping, and Copilot for intelligent code completion.</p>
              <p className="mb-4">Most importantly, you'll learn to think like a business owner from day one. Every project you build will be designed not just to showcase skills, but to generate income.</p>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 mt-8">The 90-Day Transformation</h2>
              <p className="mb-4">This is your roadmap to avoid all the struggles I went through. While it took me much longer to figure everything out through trial and error, I'm going to compress my entire learning journey into 90 days for you. You'll learn from my mistakes so you don't have to make them yourself.</p>
              <p className="mb-4">In three months, you'll go from complete beginner to having multiple professional applications in your portfolio. You'll have the skills to build any web application idea, an AI-powered development workflow that makes you incredibly efficient, and real applications generating passive income.</p>
              <p className="mb-4">But here's the real transformation - you'll stop thinking like someone looking for a job and start thinking like someone who creates jobs. You'll have the confidence to charge premium rates because you deliver real value, not just code.</p>
              <p className="mb-4">This is your chance to skip years of traditional learning and jump straight to what actually works in 2025 and beyond. While others are still memorizing JavaScript methods, you'll be building the future with AI as your partner.</p>
              <p className="mb-4">The question isn't whether you can learn to code - anyone can. The question is whether you can learn to build a business that gives you the freedom you deserve. </p>
              <p className="mb-4">That's exactly what I'm going to teach you.</p>
            </div>
            {/* Play/Pause button fixed at bottom right, fully rounded */}
            <button
              onClick={handlePlayPause}
              className={`fixed bottom-6 right-6 z-[300] w-14 h-14 flex items-center justify-center rounded-full bg-primary text-background hover:bg-primary/80 transition text-lg font-bold shadow-lg ${isPlaying ? "opacity-80" : ""}`}
              aria-label={isPlaying ? "Pause reading" : "Play reading"}
              style={{ boxShadow: "0 4px 16px rgba(0,0,0,0.12)" }}
            >
              {isPlaying ? (
                <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="4" height="10" rx="1" fill="currentColor" />
                  <rect x="10" y="4" width="4" height="10" rx="1" fill="currentColor" />
                </svg>
              ) : (
                <svg width="28" height="28" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7V11H6L10 15V3L6 7H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
