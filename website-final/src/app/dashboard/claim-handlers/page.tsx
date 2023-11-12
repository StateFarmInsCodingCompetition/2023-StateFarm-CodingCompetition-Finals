'use client';
import { apiFetchJson } from "@/utils/apiFetch";
import useSWR from "swr"

export default function Home() {
  const { data: agents } = useSWR(`/claims/handlers`, { fetcher: apiFetchJson })

  console.log(agents)

  return (
    <main>

      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Name
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              ID
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">

            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {agents?.map((handler: any) => (
            <tr key={handler._id}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                {handler?.first_name} {handler?.last_name}
              </td>
              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{handler?.id}</td>
              <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">

              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </main>
  )
}