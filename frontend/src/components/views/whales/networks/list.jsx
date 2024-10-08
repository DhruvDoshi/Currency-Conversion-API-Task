import {useState} from "react";
import {useMutation, useQuery} from "@tanstack/react-query";

import Button from "../../../common/buttons/clipButton.jsx";
import NetworkItem from "./item.jsx";
import NetworkForm from "./form.jsx";

const ApiURL = import.meta.env.API_URL || 'http://localhost:5001';

// TODO: Include token in headers when auth middleware is activated.
function useWhalesNetworks() {
    const networksQuery = useQuery({
        queryKey: ['whales', 'networks'], queryFn: async () => {
            const response = await fetch(`${ApiURL}/api/whales/networks`);
            return response.json();
        }
    });

    const create = useMutation({
        mutationKey: ['whales', 'networks', 'create'],
        mutationFn: async (network) => {
            const response = await fetch(`${ApiURL}/api/whales/networks`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(network)
            });
            return response.json();
        },
        onSuccess: () => networksQuery.refetch()
    })

    const update = useMutation({
        mutationKey: ['whales', 'networks', 'update'],
        mutationFn: async (network) => {
            const response = await fetch(`${ApiURL}/api/whales/networks/${network.networkId}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(network)
            });
            return response.json();
        },
        onSuccess: () => networksQuery.refetch()
    });

    const remove = useMutation({
        mutationKey: ['whales', 'networks', 'remove'],
        mutationFn: async (networkId) => {
            const response = await fetch(`${ApiURL}/api/whales/networks/${networkId}`, {
                method: 'DELETE',
            });
            return response.json();
        },
        onSuccess: () => networksQuery.refetch()
    });

    return {
        query: networksQuery, networks: networksQuery.data,
        create,
        update,
        remove
    };
}

function Networks() {
    const {networks, create, update, remove} = useWhalesNetworks();
    const [network, setNetwork] = useState(null);
    const [loading, setLoading] = useState(false);

    async function submit(payload, _delete) {
        if (!payload) return setNetwork(null);
        setLoading(true);

        if (!payload._id) await create.mutateAsync(payload);
        else if (_delete) await remove.mutateAsync(payload.networkId);
        else await update.mutateAsync(payload);

        setLoading(false);
        setNetwork(null);
    }

    return (
        <div className="px-4 py-8 flex flex-col h-full">
            <h1 className="text-4xl text-white">Networks</h1>
            {network ?
                loading ? <p className="p-16 text-2xl text-white">Loading...</p> :
                    <NetworkForm initialValue={network} onChange={submit}/>
                : <>
                    <div className="flex-1 pb-4 z-50">
                        {!networks?.length ? <p className="text-white">No networks found</p> :
                            <div className="grid grid-cols-1 gap-4 mt-4 overflow-x-auto">
                                {networks.map((network, index) => (
                                    <NetworkItem
                                        key={index}
                                        network={network}
                                        onEdit={setNetwork}/>
                                ))}
                            </div>
                        }
                    </div>
                    <Button detail={{value: "Add Network"}} onClick={() => setNetwork({})}/>
                </>
            }
        </div>
    )
}

export default Networks;