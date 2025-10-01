"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Eye, User, LogOut, CreditCard, Clock, CheckCircle } from "lucide-react"
import UserMenu from "@/components/ui/user-menu"
import React from "react"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const modules = [
  { id: 1, title: "Module 1: The Beginning - My Story & Your Mindset", pdfUrl: "/pdfs/module-1.pdf" },
  { id: 2, title: "Module 2: Vibe Coding Revolution - Learn Smarter, Not Harder", pdfUrl: "/pdfs/module-2.pdf" },
  { id: 3, title: "Module 3: Becoming Full-Stack Fast - Building Real Applications", pdfUrl: "/pdfs/module-3.pdf" },
  { id: 4, title: "Module 4: From Developer to Business Owner - Monetizing Your Skills", pdfUrl: "/pdfs/module-4.pdf" },
  { id: 5, title: "Module 5: Launch Without Money - Bootstrap Your Way to Success", pdfUrl: "/pdfs/module-5.pdf" },
  { id: 6, title: "Module 6: Scaling & Freedom - Building Systems That Work Without You", pdfUrl: "/pdfs/module-6.pdf" },
  { id: 7, title: "Module 7: Real Talk & Success Manifesto - The Truth About Entrepreneurial Success", pdfUrl: "/pdfs/module-7.pdf" },
]

export default function HomePage() {
  const router = useRouter()
  const [profile, setProfile] = useState<{ full_name?: string } | null>(null)
  const [user, setUser] = useState<{ email?: string; id?: string } | null>(null)
  const [hasPurchased, setHasPurchased] = useState<boolean | null>(null) // null = loading
  const [happyDevelopers, setHappyDevelopers] = useState(40)
  const [purchases, setPurchases] = useState<Array<{ purchase_date?: string }> | null>(null)
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)

  useEffect(() => {
    const supabase = createClient()
    
    // Fetch all data in parallel for faster loading
    const fetchData = async () => {
      const { data: userData, error: userError } = await supabase.auth.getUser()
      
      if (userError || !userData?.user) {
        router.push("/auth/login")
        return
      }
      
      setUser({ email: userData.user.email, id: userData.user.id })

      // Fetch all data simultaneously
      const [profileResult, purchasesResult, countResult] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", userData.user.id).single(),
        supabase
          .from("purchases")
          .select("*")
          .eq("user_id", userData.user.id)
          .eq("payment_status", "completed"),
        supabase
          .from("purchases")
          .select("id", { count: "exact", head: true })
          .eq("payment_status", "completed")
      ])

      setProfile(profileResult.data)
      setPurchases(purchasesResult.data)
      setHasPurchased(!!purchasesResult.data && purchasesResult.data.length > 0)
      setHappyDevelopers(40 + (countResult.count || 0))
    }

    fetchData()
  }, [router])

  // Client-side sign out handler for both desktop and mobile
  const handleClientSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
  }

  // Download specific module PDF
  const handleDownloadModule = (pdfUrl: string, title: string) => {
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = `${title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    setDownloadModalOpen(false)
  }

  // Download all modules
  const handleDownloadAll = () => {
    modules.forEach((module, index) => {
      setTimeout(() => {
        const link = document.createElement('a')
        link.href = module.pdfUrl
        link.download = `${module.title}.pdf`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }, index * 500) // Stagger downloads by 500ms
    })
    setDownloadModalOpen(false)
  }

  // Show loading state while checking purchase status
  if (hasPurchased === null) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-[200]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-nowrap h-auto min-h-[4rem] items-center justify-between py-2 sm:py-0 overflow-x-auto">
            <div className="flex items-center gap-2 sm:gap-3">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              <span className="text-base sm:text-lg font-bold text-foreground">CodeCraft</span>
            </div>
            {/* Responsive user actions: inline on md+, menu on mobile */}
            <div className="flex items-center ml-2">
              {/* Inline user info and sign out for md+ screens */}
              <div className="hidden md:flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs sm:text-sm font-medium text-foreground truncate max-w-[120px]">{profile?.full_name ?? user?.email ?? ""}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  type="button"
                  className="text-xs sm:text-sm px-2 sm:px-3 py-1"
                  onClick={handleClientSignOut}
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  <span className="whitespace-nowrap">Sign Out</span>
                </Button>
              </div>
              {/* Mobile menu for user actions */}
              <div className="md:hidden relative">
                <UserMenu userName={profile?.full_name ?? user?.email ?? ""} onSignOut={handleClientSignOut} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
              Welcome back, {profile?.full_name ? profile.full_name.split(" ")[0] : "Developer"}!
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground">
              {hasPurchased
                ? "Continue your learning journey with full access to the ebook."
                : "You're one step away from accessing the complete ebook."}
            </p>
          </div>

          {hasPurchased ? (
            /* Premium Content - User has purchased */
            <div className="space-y-4 sm:space-y-6">
              {/* Access Status */}
              <Card className="border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg mb-2 sm:mb-0">
                      <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800 dark:text-green-200 text-sm sm:text-base">Full Access Activated</h3>
                      <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">
                        You have lifetime access to the complete ebook and all future updates.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Ebook Access */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Master Modern Development with AI-Powered Coding
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-base">Complete ebook • 300+ pages • Lifetime access</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    <Link href="/reader">
                      <Button size="lg" className="w-full text-xs sm:text-base py-2 sm:py-3">
                        <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Read Online
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full bg-transparent text-xs sm:text-base py-2 sm:py-3"
                      onClick={() => setDownloadModalOpen(true)}
                    >
                      <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                      Download PDF
                    </Button>
                  </div>
                  <div className="mt-3 sm:mt-4 p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">What's included:</h4>
                    <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                      <li>• Complete 300+ page ebook in PDF format</li>
                      <li>• Interactive online reader with bookmarks</li>
                      <li>• Source code examples and templates</li>
                      <li>• Lifetime updates and new content</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                    <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col items-center justify-center p-2 sm:p-3 bg-muted/30 rounded-lg text-center">
                      <p className="font-medium text-foreground text-xs sm:text-base mb-1">Ebook purchased</p>
                      <div className="flex flex-col items-center">
                        <span className="text-xs sm:text-sm text-muted-foreground mb-1">
                          {purchases?.[0]?.purchase_date
                            ? new Date(purchases[0].purchase_date!).toLocaleDateString()
                            : "Recently"}
                        </span>
                        <Badge variant="secondary" className="text-xs sm:text-sm mt-1">Completed</Badge>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-2 sm:p-3 bg-muted/30 rounded-lg text-center">
                      <p className="font-medium text-foreground text-xs sm:text-base mb-1">Account created</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-1">Welcome to CodeCraft!</p>
                      <Badge variant="secondary" className="text-xs sm:text-sm">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            /* Purchase Required - User hasn't purchased yet */
            <div className="space-y-4 sm:space-y-6">
              {/* Purchase Prompt */}
              <Card className="border-2 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
                    <CreditCard className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    Complete Your Purchase
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-base">Get instant access to the complete ebook and start learning today.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground text-sm sm:text-base">
                          Master Modern Development with AI-Powered Coding
                        </h4>
                        <div className="text-right mt-2 sm:mt-0">
                          <span className="text-lg sm:text-2xl font-bold text-foreground">₦7,500</span>
                          <span className="text-xs sm:text-sm text-muted-foreground line-through ml-2">₦15,000</span>
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">One-time payment • Lifetime access</p>
                    </div>
                    <div className="mt-6 sm:mt-8 space-y-2 sm:space-y-3">
                      <Link href="/checkout">
                        <Button size="lg" className="w-full text-xs sm:text-base py-2 sm:py-3">
                          <CreditCard className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          Purchase Now - ₦7,500
                        </Button>
                      </Link>
                      <p className="text-xs text-center text-muted-foreground">
                        Secure payment powered by Stripe • 30-day money-back guarantee
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preview Content */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg md:text-xl">Free Preview</CardTitle>
                  <CardDescription className="text-xs sm:text-base">90 days to financial freedom through code. Learn with AI, build profitable applications, and turn your new skills into a thriving business.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 sm:space-y-4">
                    <Link href="/reader-sample">
                      <Button variant="outline" size="lg" className="w-full bg-transparent text-xs sm:text-base py-2 sm:py-3">
                        <Eye className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                        Read Free Sample
                      </Button>
                    </Link>
                    <div className="p-3 sm:p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-1 sm:mb-2 text-sm sm:text-base">Sample includes:</h4>
                      <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                        <li>• Introduction to AI-powered development</li>
                        <li>• Setting up your development environment</li>
                        <li>• First steps with modern frameworks</li>
                        <li>• Code examples and best practices</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Purchase */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg md:text-xl">Why developers love this ebook</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    <div className="text-center p-2 sm:p-4">
                      <div className="text-lg sm:text-2xl font-bold text-primary mb-1">60+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Pages of content</div>
                    </div>
                    <div className="text-center p-2 sm:p-4">
                      <div className="text-lg sm:text-2xl font-bold text-primary mb-1">{happyDevelopers}+</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Happy developers</div>
                    </div>
                    <div className="text-center p-2 sm:p-4">
                      <div className="text-lg sm:text-2xl font-bold text-primary mb-1">4.9★</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Average rating</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>

      {/* Download Module Selection Dialog */}
      <Dialog open={downloadModalOpen} onOpenChange={setDownloadModalOpen}>
        <DialogContent className="w-[90vw] sm:w-full sm:max-w-[500px] max-h-[80vh] p-4 sm:p-6">
          <DialogHeader className="space-y-1 sm:space-y-2">
            <DialogTitle className="text-sm sm:text-base md:text-lg">Download Course Modules</DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              Select a module to download or download all at once
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-2 sm:space-y-3 overflow-y-auto max-h-[calc(80vh-120px)]">
            <Button 
              onClick={handleDownloadAll}
              className="w-full text-xs sm:text-sm h-8 sm:h-10"
            >
              <Download className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Download All Modules
            </Button>
            
            <div className="border-t pt-2 sm:pt-3">
              <p className="text-xs sm:text-sm font-medium mb-2">Individual modules:</p>
              <div className="space-y-1.5 sm:space-y-2">
                {modules.map((module) => (
                  <Button
                    key={module.id}
                    variant="outline"
                    className="w-full justify-start text-left h-auto py-1.5 sm:py-2 px-2 sm:px-3"
                    onClick={() => handleDownloadModule(module.pdfUrl, module.title)}
                  >
                    <Download className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs md:text-sm truncate">{module.title}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}