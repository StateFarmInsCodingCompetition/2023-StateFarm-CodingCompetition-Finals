/* eslint-disable @next/next/no-img-element */
'use client';
import { apiFetchJson } from "@/utils/apiFetch";
import Link from "next/link";
import { useParams } from "next/navigation";
import useSWR from "swr"

export default function Home() {
  const { agentId } = useParams();
  const { data: agent } = useSWR(`/agents/${agentId}`, { fetcher: apiFetchJson })
  const { data: claimHandlers } = useSWR(`/claims/handlers`, { fetcher: apiFetchJson })

  return (
    <main>
      <div className="flex flex-row gap-2">
        <img src="/JakeSquare.png" alt="Jake" className="rounded-full w-24 h-24 cover" />
        <div className="self-center flex flex-col">
          <p className="text-2xl font-medium">{agent?.agent.first_name} {agent?.agent.last_name}</p>
          <p className="text-md font-medium">{agent?.agent.state} - {agent?.agent.primary_language}</p>
          <p className="text-md font-medium">Total Claim Amounts ${agent?.claims?.reduce((total: any, claim: any) => total + parseFloat(claim.estimate_cost || 0), 0).toLocaleString()}</p>
        </div>
      </div>
      <table className="mt-4 min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Name
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Claim Handler
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Loss Info
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">

            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {agent?.claims?.map((disaster: any) => {
            //@ts-expect-error
            const claimHandler = claimHandlers?.find(handler => handler.id?.toString() == disaster?.claim_handler_assigned_id?.toString());
            return (
              <tr key={disaster._id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  <Link href={`/dashboard/disasters/${disaster?.disaster_id}`} className="text-blue-700 hover:text-blue-500">Disaster: {disaster?.disaster_id}</Link> {disaster?.type}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{claimHandler?.first_name} {claimHandler?.last_name}</td>

                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-0">
                  ${disaster?.estimate_cost} - {disaster?.severity_rating} severity {disaster?.loss_of_life ? '- Loss of life' : ''} {disaster?.total_loss ? ' - Total Loss' : ''}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </main>
  )
}
