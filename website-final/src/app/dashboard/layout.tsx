/* eslint-disable @next/next/no-img-element */
'use client';
import { Inter } from 'next/font/google'
import '../globals.css'
import { apiFetchJson } from '@/utils/apiFetch'
import useSWR, { SWRConfig } from 'swr'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

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
                    <nav className='flex flex-row w-full bg-red-100 py-2 px-4 justify-between'>
                        <img src="/state-farm-logo-4.svg" alt="Statefarm Logo" className='max-w-sm' />
                        <div className='flex flex-row gap-2 justify-center self-center ml-4'>
                            <Link href="/dashboard/agents" className='text-gray-900 font-medium text-sm' >Agents</Link>
                            <Link href="/dashboard/claims" className='text-gray-900 font-medium text-sm' >Claims</Link>
                            <Link href="/dashboard/disasters" className='text-gray-900 font-medium text-sm' >Disasters</Link>
                            <Link href="/dashboard/claim-handlers" className='text-gray-900 font-medium text-sm' >Claim Handlers</Link>
                        </div>
                        <div>
                            <p>{user?.name}</p>
                        </div>
                    </nav>
                    {children}
                </body>
            </SWRConfig>
        </html>
    )
}
