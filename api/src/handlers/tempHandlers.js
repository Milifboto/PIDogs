const {getAllTemps} = require("../controllers/tempControllers");

const getTempHandler = async (req, res) => {
try {
    const tempList = await getAllTemps() 
    return res.status(200).json(tempList);

} catch (error) {
    res.status(500).json({error:error.message})
}
}

module.exports = getTempHandler;