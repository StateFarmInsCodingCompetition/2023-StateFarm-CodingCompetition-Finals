'use client';

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  if (typeof (window) == 'object') {
    router.push('/auth')
  }

  return (
    <main>

    </main>
  )
}
