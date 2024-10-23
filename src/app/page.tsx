import { SignInButton, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

export default async function Home() {
    const user = await currentUser()
    return (
        <main className="flex min-h-screen flex-col items-center justify-center">
            {user ? <UserButton /> : <SignInButton />}
        </main>
    )
}

