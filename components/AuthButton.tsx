import { ChevronDownIcon } from "@heroicons/react/24/solid"
import { useSession, signIn, signOut } from "next-auth/react"

export default function AuthButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div onClick={() => signOut()}>
        {session?.user?.name} 
      </div>
    )
  }
  return (
    <div onClick={() => signIn()}>
      Sign In using Github
    </div>
  )
}