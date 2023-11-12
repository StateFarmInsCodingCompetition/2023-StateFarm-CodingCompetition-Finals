'use client';
import { apiFetchJson } from "@/utils/apiFetch";
import { useRouter } from "next/navigation";
import { useReducer } from "react";
import useSWR from "swr"

export default function Home() {
  const router = useRouter();
  const { data: agents } = useSWR(`/disasters`, { fetcher: apiFetchJson })

  return (
    <main>

      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Name
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Description
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Dates
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Lat/Long Radius
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">

            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {agents?.map((disaster: any, i: number) => (
            <tr key={disaster._id} className={`${i % 2 == 0 ? 'bg-blue-100' : ''} hover:bg-red-100`} onClick={() => {
              router.push(`/dashboard/disasters/${disaster.id}`)
            }}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                {disaster?.name}
              </td>
              <td className="whitespace-wrap px-3 py-4 text-sm text-gray-500">{disaster?.description}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{new Date(disaster.start_date).toLocaleString()} - {new Date(disaster.end_date).toLocaleString()}</td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{disaster.lat} {disaster.long} {disaster.radius_miles} mi</td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">

              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  )
}
