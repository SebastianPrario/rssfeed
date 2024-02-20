const climaInfo = require ("../controlers/getClimaControlers")

const getClima =  async (req,res) => {
    try {
        const clima = req.query
        const info = await climaInfo(clima)
        res.status(200).json(info)
    } catch (error) {res.status(400).json({error: error.message})}
    
}

module.exports = getClima
