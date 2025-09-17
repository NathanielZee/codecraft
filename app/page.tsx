"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BookOpen, Users, Star, Download, Shield, Zap, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"

// Currency conversion rates (base: NGN)
const currencyRates = {
  NGN: { rate: 1, symbol: "₦" },
  USD: { rate: 0.0012, symbol: "$" },
  EUR: { rate: 0.0011, symbol: "€" },
  GBP: { rate: 0.00095, symbol: "£" },
  CAD: { rate: 0.0016, symbol: "C$" },
  AUD: { rate: 0.0018, symbol: "A$" },
}

function PricingCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [currency, setCurrency] = useState<keyof typeof currencyRates>("NGN")

  // Detect user's country and set currency
  useEffect(() => {
    const detectCurrency = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/")
        const data = await response.json()
        const countryCode: keyof typeof currencyMap = data.country_code as keyof typeof currencyMap

        const currencyMap: { [key: string]: keyof typeof currencyRates } = {
          US: "USD",
          CA: "CAD",
          GB: "GBP",
          AU: "AUD",
          DE: "EUR",
          FR: "EUR",
          IT: "EUR",
          ES: "EUR",
          NL: "EUR",
        }

        setCurrency(currencyMap[countryCode] || "NGN")
      } catch (error) {
        setCurrency("NGN") // Default to NGN if detection fails
      }
    }

    detectCurrency()
  }, [])

  const formatPrice = (priceInNGN: number) => {
    const rate = currencyRates[currency as keyof typeof currencyRates]
    const convertedPrice = Math.round(priceInNGN * rate.rate)
    return `${rate.symbol}${convertedPrice.toLocaleString()}`
  }

  const packages = [
    {
      title: "Online Mastery Program",
      originalPrice: 15000,
      price: 7500,
      badge: "Early Bird Special",
      features: [
        "7 comprehensive modules",
        "Step-by-step business blueprints",
        "Real income-generating project templates",
        "Lifetime access to all updates",
        "30-day transformation guarantee",
      ],
    },
    {
      title: "Complete Physical Package",
      price: 20000,
      badge: "Everything you need delivered to you",
      features: [
        "Full digital course access",
        "Printed materials and workbooks",
        "Bonus templates and checklists",
        "Direct support from Efezino's team",
        "Free delivery across Nigeria",
        "Save 5% when ordering 3+ copies",
      ],
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % packages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + packages.length) % packages.length)
  }

  return (
    <div className="relative">
      {/* Currency Selector */}
      <div className="flex justify-center mb-6">
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as keyof typeof currencyRates)}
          className="px-3 py-2 border border-border rounded-lg bg-background text-foreground"
        >
          {Object.entries(currencyRates).map(([code, data]) => (
            <option key={code} value={code}>
              {code} ({data.symbol})
            </option>
          ))}
        </select>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className={`border-2 ${index === 0 ? "border-primary/20" : "border-border/50"} bg-card relative overflow-hidden`}
          >
            {index === 0 && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-b-lg">
                Best Value
              </div>
            )}
            <CardContent className="p-8 pt-12">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.title}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-foreground">{formatPrice(pkg.price)}</span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">{formatPrice(pkg.originalPrice)}</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mt-2">{pkg.badge}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full"></div>
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/auth/sign-up" className="block">
                <Button size="lg" className="w-full text-base font-semibold">
                  Get Instant Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden">
        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-6">
          {packages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {packages.map((pkg, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card
                  className={`border-2 ${index === 0 ? "border-primary/20" : "border-border/50"} bg-card relative overflow-hidden`}
                >
                  {index === 0 && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-b-lg">
                      Best Value
                    </div>
                  )}
                  <CardContent className="p-6 pt-10">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold text-foreground mb-2">{pkg.title}</h3>
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold text-foreground">{formatPrice(pkg.price)}</span>
                        {pkg.originalPrice && (
                          <span className="text-base text-muted-foreground line-through">
                            {formatPrice(pkg.originalPrice)}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">{pkg.badge}</p>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-4 h-4 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                            <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full"></div>
                          </div>
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/auth/sign-up" className="block">
                      <Button size="lg" className="w-full text-sm font-semibold">
                        Get Instant Access
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <Button variant="outline" size="sm" onClick={prevSlide} className="w-10 h-10 p-0 bg-transparent">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={nextSlide} className="w-10 h-10 p-0 bg-transparent">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}


export default function Page() {
  const [visible, setVisible] = useState(false)
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <div
      ref={pageRef}
      className={`min-h-screen bg-background transition-opacity duration-700 ease-out ${visible ? "opacity-100" : "opacity-0"}`}
    >
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap h-auto min-h-[4rem] items-center justify-between py-2 sm:py-0">
            {/* Logo and Brand */}
            <div className="flex items-center gap-2 sm:gap-3">
              <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">CodeCraft</span>
            </div>
            {/* Navbar links - hidden on mobile, visible on md+ */}
            <nav className="hidden md:flex items-center gap-4 sm:gap-6">
              <a
                href="#features"
                className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded"
              >
                Success Stories
              </a>
              <a
                href="#pricing"
                className="text-xs sm:text-sm md:text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded"
              >
                Pricing
              </a>
            </nav>
            {/* Responsive buttons */}
            <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0">
              <Link href="/auth/login">
                <Button variant="ghost" size="sm" className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-2">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button size="sm" className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-2">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm sm:text-base font-medium">
              🚀 New Release Available
            </Badge>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground text-balance leading-tight sm:leading-tight md:leading-tight lg:leading-tight mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Code Your Way to Financial Freedom
              </span>{" "}
              <span className="block text-lg sm:text-3xl md:text-4xl lg:text-5xl mt-2 sm:mt-4">in 90 Days</span>
            </h1>
            <p className="mt-6 sm:mt-8 text-sm sm:text-lg md:text-xl lg:text-2xl leading-relaxed sm:leading-8 text-muted-foreground max-w-2xl mx-auto text-pretty px-2 sm:px-0">
              90 days to financial freedom through code. Learn with AI, build profitable applications, and turn your new skills into a thriving business.
            </p>
            <div className="mt-8 sm:mt-12 flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <Link href="/auth/sign-up">
                <Button size="lg" className="px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-semibold">
                  Start Reading Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="px-6 sm:px-10 py-3 sm:py-4 text-sm sm:text-lg font-semibold bg-transparent">
                <Download className="mr-2 h-5 w-5" />
                <span className="flex-1 text-center"> 
                  <Link href="/reader-sample" className="block w-full h-full">Preview Sample</Link>
                </span>
              </Button>
            </div>
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-6 sm:gap-10 text-sm sm:text-base text-muted-foreground">
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 w-full">
                <div className="flex items-center gap-2 px-2 py-1">
                  <Users className="h-4 w-4" />
                  <span className="text-xs sm:text-sm md:text-base">10,000+ developers</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs sm:text-sm md:text-base">4.9/5 rating</span>
                </div>
                <div className="flex items-center gap-2 px-2 py-1">
                  <Shield className="h-4 w-4" />
                  <span className="text-xs sm:text-sm md:text-base">30-day guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-2 sm:mb-4">
              Everything you need to build your business empire
            </h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl text-muted-foreground text-pretty px-2 sm:px-0">
              The complete system to transform from developer to successful business owner in 90 days
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-border/50 bg-card/50 backdrop-blur rounded-xl sm:rounded-2xl shadow-sm">
              <CardContent className="p-5 sm:p-8 md:p-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Zap className="h-5 sm:h-6 md:h-7 w-5 sm:w-6 md:w-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-foreground">Vibe Coding Mastery</h3>
                </div>
                <p className="text-xs sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                  Master AI-enhanced development using ChatGPT, Claude, and modern tools to build applications 3x faster than traditional methods. Learn to work WITH AI, not against it.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur rounded-xl sm:rounded-2xl shadow-sm">
              <CardContent className="p-5 sm:p-8 md:p-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <BookOpen className="h-5 sm:h-6 md:h-7 w-5 sm:w-6 md:w-7 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-foreground">Real Income-Generating Projects</h3>
                </div>
                <p className="text-xs sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                  Build actual businesses like Alora (hotel booking platform) and HeroX (streaming platform) that generate passive income. No toy projects - only applications that pay you.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border/50 bg-card/50 backdrop-blur rounded-xl sm:rounded-2xl shadow-sm">
              <CardContent className="p-5 sm:p-8 md:p-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <Users className="h-5 sm:h-6 md:h-7 w-5 sm:w-6 md:w-7 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-foreground">Business Owner Mindset</h3>
                </div>
                <p className="text-xs sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-2 sm:mb-3">
                  Transform from job-seeker to opportunity-creator. Learn to package your skills as services, create digital products, and build systems that work without you - just like Efezino did at 19.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}

      {/* About This Course Section */}
  <section id="about-course" className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl mb-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 mb-4">
              {/* Video Side (left on desktop) */}
              <div className="w-full md:w-1/2 flex justify-center order-2 md:order-1">
                <div className="w-full flex justify-center">
                  <div className="aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                    <video
                      src="/Untitled-design.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-2xl shadow-2xl w-full h-full object-cover"
                      poster="/placeholder.jpg"
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
              {/* Text Side (right on desktop) */}
              <div className="w-full md:w-1/2 order-1 md:order-2 flex flex-col justify-center">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-primary mb-6 text-center md:text-left">About This Course</h2>
                <div className="text-muted-foreground px-2 sm:px-0">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed break-words">
                    Website Builder to Business Owner teaches you to build profitable online businesses through <span className="font-bold">"Vibe Coding"</span> - using AI tools like ChatGPT and GitHub Copilot to create professional applications fast. You'll master <span className="font-bold">Next.js, React, and Stripe</span> while building real income-generating projects like e-commerce stores and SaaS platforms. Perfect for beginners ready to learn modern development that leads to financial independence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-2 sm:mb-4">
              Success Stories
            </h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl text-muted-foreground text-pretty px-2 sm:px-0">
              Real results from students who transformed their lives
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="border-border/50 rounded-xl sm:rounded-2xl shadow-sm">
              <CardContent className="p-5 sm:p-8 md:p-10">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  "From unemployed to earning ₦500,000/month in 4 months. The mindset shift alone was worth the entire course price. Efezino doesn't just teach code - he teaches how to think like a business owner."
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                    AO
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xs sm:text-base">Adaora Okafor</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Freelance Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 rounded-xl sm:rounded-2xl shadow-sm">
              <CardContent className="p-5 sm:p-8 md:p-10">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  "I used to think you needed years of experience to compete. Wrong! The AI-enhanced development techniques helped me deliver professional results from day one. My hotel booking app is now generating steady income."
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                    DM
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xs sm:text-base">David Martinez</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">App Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/50 rounded-xl sm:rounded-2xl shadow-sm">
              <CardContent className="p-5 sm:p-8 md:p-10">
                <div className="flex items-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                  "This course is pure gold for anyone tired of the traditional 'learn to code, get a job' path. I now have multiple income streams and work on my own terms. Life-changing!"
                </p>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                    SC
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-xs sm:text-base">Sandra Chen</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Digital Entrepreneur</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance mb-2 sm:mb-4">
              Choose Your Path to Success
            </h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-lg md:text-xl text-muted-foreground text-pretty px-2 sm:px-0">
              Get lifetime access to all content and future updates
            </p>
          </div>
          {/* Responsive grid for pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Render pricing cards directly for desktop view */}
            {[
              {
                title: "Online Mastery Program",
                originalPrice: 15000,
                price: 7500,
                badge: "Early Bird Special",
                features: [
                  "7 comprehensive modules",
                  "Step-by-step business blueprints",
                  "Real income-generating project templates",
                  "Lifetime access to all updates",
                  "30-day transformation guarantee",
                ],
              },
              {
                title: "Complete Physical Package",
                price: 20000,
                badge: "Everything you need delivered to you",
                features: [
                  "Full digital course access",
                  "Printed materials and workbooks",
                  "Bonus templates and checklists",
                  "Direct support from Efezino's team",
                  "Free delivery across Nigeria",
                  "Save 5% when ordering 3+ copies",
                ],
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className={`border-2 ${index === 0 ? "border-primary/20" : "border-border/50"} bg-card relative overflow-hidden`}
              >
                {index === 0 && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 text-sm font-medium rounded-b-lg">
                    Best Value
                  </div>
                )}
                <CardContent className="p-6 sm:p-8 md:p-12 pt-10 sm:pt-12">
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground mb-2">{pkg.title}</h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-3xl sm:text-5xl font-bold text-foreground">₦{pkg.price.toLocaleString()}</span>
                      {pkg.originalPrice && (
                        <span className="text-base sm:text-lg text-muted-foreground line-through">₦{pkg.originalPrice.toLocaleString()}</span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2">{pkg.badge}</p>
                  </div>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 sm:gap-3">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-600 dark:bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-xs sm:text-base text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/auth/sign-up" className="block">
                    <Button size="lg" className="w-full text-sm sm:text-base font-semibold">
                      Get Instant Access
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">CodeCraft</span>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              © 2024 CodeCraft. All rights reserved. Transform your coding journey today.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
