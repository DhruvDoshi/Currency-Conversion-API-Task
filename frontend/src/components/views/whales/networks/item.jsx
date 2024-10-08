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

function NetworkItem({network, onEdit}) {
    return (
        <div className="text-white px-4 flex items-center justify-between">
            <h2 className="text-2xl">{network.name}</h2>
            <div className="cornered_icon_hover" onClick={() => onEdit(network)}>
                <img src="/assets/images/icon/eye.png" className="w-8 h-8"/>
            </div>
        </div>
    );
}

export default NetworkItem;