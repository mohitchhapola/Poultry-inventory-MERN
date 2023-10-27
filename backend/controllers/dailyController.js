const asyncHandler = require("express-async-handler");
const DailyAct = require("../models/dailyActModel")

//create data
const createData = asyncHandler(async(req,res)=>{
    const {customID , production, rate, feed } = req.body;

    if(!customID || !production || !rate || !feed){
        res.status(400)
        throw new Error("Please Fill All Fields")
    }
    
    const dataExist = await DailyAct.findOne({customID});
    if(dataExist){
        res.status(400)
        throw new Error('Data Already Exist')
    }

    const data = await DailyAct.create({
        customID,
        production,
        rate,
        feed
    })

    if(data){
        res.status(201).json({message: "Successfully Created", data})
    }
})

//get all employee
const getAllData = asyncHandler(async(req,res)=>{
    const data = await Emp.find({});
    res.status(200).json(data);
  })

//get data by id

const dataById = asyncHandler(async(req,res)=>{
  const {customID} = req.params;
  const data = await DailyAct.findOne({customID})

  if(!data){
    res.status(400)
    throw new Error("Data Not Found")
  }
  res.status(200).json(data)
})

 //delete data by id

 const deleteData = asyncHandler(async (req, res) => {
    const { customID } = req.params;
    const emp = await DailyAct.findOneAndDelete({ customID });
  
    if (!customID) {
      res.status(400);
      throw new Error("Invalid customID");
    }
    if (!emp) {
      res.status(404);
      throw new Error("Data Not Found");
    }
    res.status(200).json({ message: "Data deleted" });
  });

  //update data
  const updateData = asyncHandler(async (req, res) => {
    const { customID } = req.params;
    const data = await DailyAct.findOne({ customID });
    if (data) {
      const { production, rate, feed } = req.body;
      data.production = production || data.production;
      data.rate = rate || data.rate;
      data.feed = feed || data.feed;
  
      const updatedData = await data.save();
      res.status(200).json(updatedData);
    } else {
      res.status(404);
      throw new Error("Data Not Found");
    }
  });
  

module.exports= {
    createData,
    dataById,
    deleteData,
    getAllData,
    updateData
}