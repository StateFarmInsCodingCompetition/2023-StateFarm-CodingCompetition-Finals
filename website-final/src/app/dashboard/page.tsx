'use client';
import useSWR from "swr"

export default function Home() {
    const { data: user } = useSWR(`/auth/user`)

    return (
        <main>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/zx6ZJ7Fm-As?si=Wl6hXhEO8lzMdnFE&amp;controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </main>
    )
}
