import { Poppins } from "next/font/google"

import { LoginButton } from "@/components/auth/login-button"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md", font.className)}>
          🔐Auth
        </h1>
        <p  className="text-white text-lg">
          An advanced authentication Toolkit
        </p>
        <div>
          <LoginButton mode="modal" asChild>
            <Button variant="secondary" size='lg'>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}