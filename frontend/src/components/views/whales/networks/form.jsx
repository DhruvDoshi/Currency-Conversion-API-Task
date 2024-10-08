import {useState} from "react";
import _ from 'lodash';

import Button from "../../../common/buttons/clipButton.jsx";

/**
 * @model Network
 *
 * @prop networkId
 * @prop name
 * @prop rpc
 * @prop explorer
 * @prop active
 * @prop wallets
 * @prop whales
 * */

function NetworkForm({initialValue, onChange}) {
    const [network, setNetwork] = useState(initialValue);

    const handleChange = (event) => {
        setNetwork((current)=>{
            return _.set(_.cloneDeep(current), event.target.name, event.target.value);
        });
    };

    return (
        <form className="text-white p-4" onSubmit={() => {
            onChange(network);
            setNetwork(null);
        }}>
            <div className="flex items-center justify-end">
                <h2 className="text-2xl">{network._id ? "Updating" : "Creating"}</h2>
            </div>
            {!network._id && <input
                type="number"
                name="networkId"
                placeholder="Chain ID"
                value={network.networkId || ""}
                onChange={handleChange}
                required
                className="bg-gray-800 text-white p-2 rounded-lg w-full mt-4"/>
            }
            <input
                type="text"
                name="name"
                placeholder="Network Name"
                required
                value={network.name || ""}
                onChange={handleChange}
                className="bg-gray-800 text-white p-2 rounded-lg w-full mt-4"
            />
            <input
                type="url"
                name="rpc"
                placeholder="RPC URL"
                required
                value={network.rpc || ""}
                onChange={handleChange}
                className="bg-gray-800 text-white p-2 rounded-lg w-full mt-4"
            />
            <input
                type="url"
                name="explorer"
                placeholder="Explorer URL"
                required
                value={network.explorer || ""}
                onChange={handleChange}
                className="bg-gray-800 text-white p-2 rounded-lg w-full mt-4"
            />
            <input
                type="text"
                name="whales.cron"
                placeholder="Cron Job Schedule | default: 1h"
                value={network.whales?.cron || ""}
                onChange={handleChange}
                className="bg-gray-800 text-white p-2 rounded-lg w-full mt-4"
            />
            <input
                type="number"
                step={1}
                min={1}
                name="whales.amount"
                placeholder="Amount of whales to track | default: 10"
                value={network.whales?.amount || ""}
                onChange={handleChange}
                className="bg-gray-800 text-white p-2 rounded-lg w-full mt-4"
            />

            <div className="mt-8 flex justify-between">
                <div className="flex items-center gap-4">
                    <button type="reset" onClick={() => onChange(null)}>Close</button>
                    {network._id && (
                        <button
                            type="button"
                            className="text-yellow-700 hover:!text-red-700"
                            onClick={() => onChange(network, true)}>
                            Delete
                        </button>
                    )}
                </div>
                <Button detail={{value: "Save"}}/>
            </div>
        </form>
    );
}

export default NetworkForm;