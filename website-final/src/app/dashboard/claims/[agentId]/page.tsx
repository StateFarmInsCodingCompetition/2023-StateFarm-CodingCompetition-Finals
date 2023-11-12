/* eslint-disable @next/next/no-img-element */
'use client';
import { apiFetchJson } from "@/utils/apiFetch";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr"

export default function Home() {
  const { claimId } = useParams();
  const { data: claim } = useSWR(`/claims/id/${claimId}`, { fetcher: apiFetchJson })

  return (
    <main>
      <div className="flex flex-row gap-2">
        <img src="/JakeSquare.png" alt="Jake" className="rounded-full w-24 h-24 cover" />
        <div className="self-center flex flex-col">
          <p className="text-2xl font-medium">{claim?.disaster?.name}</p>
        </div>
      </div>

      {JSON.stringify(claim)}


    </main >
  )
}
