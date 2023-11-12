/* eslint-disable @next/next/no-img-element */
'use client';
import { apiFetchJson } from "@/utils/apiFetch";
import { useParams } from "next/navigation";
import useSWR from "swr"

export default function Home() {
  const { disasterId } = useParams();
  const { data: disaster } = useSWR(`/disasters/id/${disasterId}`, { fetcher: apiFetchJson })
  const { data: agents } = useSWR(`/agents`, { fetcher: apiFetchJson })
  const { data: claimHandlers } = useSWR(`/claims/handlers`, { fetcher: apiFetchJson })

  return (
    <main>
      <div className="flex flex-col gap-2">
        <div className="self-center flex flex-col">
          <p className="text-2xl font-medium">{disaster?.disaster?.name}</p>
          <p className="text-sm font-medium">{disaster?.disaster?.description}</p>
          <p className="text-sm font-medium">{disaster?.disaster?.state} - {new Date(disaster?.disaster?.declared_date).toLocaleString()}</p>
        </div>
        <h1>Disaster Pictures</h1>
        <div className="flex flex-row gap-2 justify-between">
          <div className="min-w-[240px] min-h-[120px] bg-gray-500 rounded-lg" />
          <div className="min-w-[240px] min-h-[120px] bg-gray-500 rounded-lg" />
          <div className="min-w-[240px] min-h-[120px] bg-gray-500 rounded-lg" />
          <div className="min-w-[240px] min-h-[120px] bg-gray-500 rounded-lg" />
          <div className="min-w-[240px] min-h-[120px] bg-gray-500 rounded-lg" />
          <div className="min-w-[240px] min-h-[120px] bg-gray-500 rounded-lg" />
          <div className="min-w-[240px] min-h-[120px] bg-gray-500 rounded-lg" />
          <div className="min-w-[240px] min-h-[120px] bg-gray-500 rounded-lg" />
        </div>
      </div>
      <table className="mt-4 min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
              Status
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Total Loss
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Loss Of Life
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Type
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Severity Rating
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Estimate Cost
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Agent
            </th>
            <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
              Claim Handler
            </th>
            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">

            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {disaster?.claims?.map((disaster: any) => {
            //@ts-expect-error
            const claimHandler = claimHandlers?.find(handler => handler.id?.toString() == disaster?.claim_handler_assigned_id?.toString());
            //@ts-expect-error
            const agent = agents?.find(agent => agent.id?.toString() == disaster?.agent_assigned_id?.toString());
            return (
              <tr key={disaster?._id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                  {disaster?.status}
                </td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{disaster?.total_loss ? 'Yes' : ' No'}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{disaster?.loss_of_life ? 'Yes' : ' No'}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{disaster?.type}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{disaster?.severity_rating}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{disaster?.estimate_cost}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{agent?.first_name} {agent?.last_name}</td>
                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{claimHandler?.first_name} {claimHandler?.last_name}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </main >
  )
}
