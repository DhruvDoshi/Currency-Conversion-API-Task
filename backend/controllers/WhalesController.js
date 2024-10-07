const NetworkServices = require('../services/NetworkServices')

const Network = require('../models/Network')

// ----------------- Owner ------------------ //
exports.getNetworks = async (req, res) => {
    const networks = await Network.find({"active": true})
	res.status(200).json(networks)
}

exports.saveNetwork = async (req, res) => {
    const network = await NetworkServices.saveNetwork(req.headers, req.body)
    res.status(200).json(network)
}

exports.updateNetwork = async (req, res) => {
    const network = await NetworkServices.updateNetwork(req.params.id, req.body)
    res.status(200).json(network)
}

exports.deleteNetwork = async (req, res) => {
    const networks = await NetworkServices.deleteNetwork(req.params.id)
    res.status(200).json(networks)
}