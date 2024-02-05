const parseInfo = require ('../controlers/rssControlers.js')


const getInfo =  async (req,res) => {
    try {
        const source = req.query
        const info = await parseInfo(source)
        res.status(200).json(info)
    } catch (error) {res.status(400).json({error: error.message})}
    
}

module.exports = {
    getInfo,
}