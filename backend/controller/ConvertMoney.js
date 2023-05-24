const {ConvertMoney} = require("../service/ConvertMoney")

exports.ConvertMoney = async function(req,res)  {

    try {

       const response = await ConvertMoney(req.body)

       console.log("response: ", response)
       console.log(typeof response)

      return res.send(response)

    }catch(error){

        console.log(error)

        return res.send(error)

    }


}