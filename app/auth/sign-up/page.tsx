"use client"

import type React from "react"

import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SignUpPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long")
      setIsLoading(false)
      return
    }

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL || `${window.location.origin}/home`,
          data: {
            full_name: fullName,
          },
        },
      })
      if (error) throw error
      router.push("/auth/sign-up-success")
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4 sm:p-6">
      <div className="w-full max-w-sm sm:max-w-md">
        <div className="flex flex-col gap-6">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
            <BookOpen className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
            <span className="text-lg sm:text-2xl md:text-3xl font-bold text-foreground">CodeCraft</span>
          </div>

          <Card className="border-border/50">
            <CardHeader className="text-center">
              <CardTitle className="text-lg sm:text-2xl md:text-3xl font-bold">Create your account</CardTitle>
              <CardDescription className="text-xs sm:text-base md:text-lg">Start your journey to mastering modern development</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignUp}>
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="grid gap-1 sm:gap-2">
                    <Label htmlFor="fullName" className="text-xs sm:text-sm">Full Name</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-background text-xs sm:text-sm"
                    />
                  </div>
                  <div className="grid gap-1 sm:gap-2">
                    <Label htmlFor="email" className="text-xs sm:text-sm">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-background text-xs sm:text-sm"
                    />
                  </div>
                  <div className="grid gap-1 sm:gap-2">
                    <Label htmlFor="password" className="text-xs sm:text-sm">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Create a password (min. 6 characters)"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-background text-xs sm:text-sm"
                    />
                  </div>
                  <div className="grid gap-1 sm:gap-2">
                    <Label htmlFor="confirmPassword" className="text-xs sm:text-sm">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-background text-xs sm:text-sm"
                    />
                  </div>
                  {error && (
                    <div className="p-2 sm:p-3 text-xs sm:text-sm text-red-600 bg-red-50 dark:bg-red-900/20 dark:text-red-400 rounded-md border border-red-200 dark:border-red-800">
                      {error}
                    </div>
                  )}
                  <Button type="submit" className="w-full text-xs sm:text-sm md:text-base py-2 sm:py-3" disabled={isLoading}>
                    {isLoading ? "Creating account..." : "Create Account"}
                  </Button>
                </div>
                <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm">
                  <span className="text-muted-foreground">Already have an account? </span>
                  <Link href="/auth/login" className="font-medium text-primary hover:underline">
                    Sign in
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="text-center mt-2">
            <Link href="/" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors">
              0 Back to homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
