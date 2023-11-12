'use client';
import useSWR from "swr"

export default function Home() {
    const { data: user } = useSWR(`/auth/user`)

    return (
        <main>

        </main>
    )
}
