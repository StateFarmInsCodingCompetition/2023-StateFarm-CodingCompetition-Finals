/* eslint-disable @next/next/no-img-element */
'use client';
import { Inter } from 'next/font/google'
import '../globals.css'
import { apiFetchJson } from '@/utils/apiFetch'
import useSWR, { SWRConfig } from 'swr'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

function Nav({ name, href }: { name: string; href: string; }) {
    const path = usePathname();
    return (
        <Link href={href} className={`text-gray-900 font-medium text-sm ${path.includes(href) ? 'text-red-500' : ''}`} >{name}</Link>
    )

}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const { data: user } = useSWR(`/auth/user`)
    if (user?.success == false) {
        router.push('/auth')
    }

    return (
        <html lang="en">
            <SWRConfig
                value={{
                    fetcher: apiFetchJson,
                    revalidateIfStale: false,
                    revalidateOnFocus: false,
                    revalidateOnReconnect: false,
                }}
            >
                <body className={`${inter.className} bg-white min-h-screen h-screen flex flex-col`}>
                    <nav className='flex flex-row w-full bg-red-200 py-2 px-4 justify-between shadow-lg rounded border-b border-red-400'>
                        <img src="/state-farm-logo-4.svg" alt="Statefarm Logo" className='max-w-sm' />
                        <div className='flex flex-row gap-2 justify-center self-center ml-4'>
                            <Nav href="/dashboard/agents" name="Agents" />
                            <Nav href="/dashboard/claims" name="Claims" />
                            <Nav href="/dashboard/disasters" name="Disasters" />
                            <Nav href="/dashboard/claim-handlers" name="Claim Handlers" />
                        </div>
                        <div className='flex flex-row self-center'>
                            <p className='font-medium text-sm'>Hello {user?.name}</p>
                        </div>
                    </nav>
                    <div className='mx-8 my-4'>
                        {children}
                    </div>
                </body>
            </SWRConfig>
        </html>
    )
}
