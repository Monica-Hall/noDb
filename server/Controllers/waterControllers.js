const water = require("../../db.json")
let num = 4
let daysOfWeek = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"]
let index = 0

module.exports = {
    getWater: (req, res, next) => {
        res.status(200).send(water)
    }, 

    addWater: (req, res, next) => {
        const newWater = {
            id: num, 
            goal: 64, 
            day: daysOfWeek[index], 
            actual: req.body.actual
        }
        water.push(newWater)
        num++
        index++
        if(daysOfWeek[index] > 6) {
            daysOfWeek[0]
        }
        res.status(200).send(water)
    }, 

    updateWater: (req, res, next) => {
        const i = water.findIndex((elem) => {
            return elem.id == req.params.id
        })
        water[i].actual = req.body.actual
        res.status(200).send(water)
    }, 

    deleteWater: (req, res, next) => {
        const i = water.findIndex((elem) => {
            return elem.id == req.params.id
        })
        water.splice(i, 1)
        res.status(200).send(water)
    }
}