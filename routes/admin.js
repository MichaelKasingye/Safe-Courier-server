const express = require("express");
const router = express.Router();
const parcel = require("../models/parcel");
const auth = require("../middleware/auth")
const {UserModel} = require("../models/user");
const mongoose  = require("mongoose");


//@route  Get api/v1/admin/parcel
//@desc   Get All parcel
//@access Public
router.get("/admin/parcel", (req, res) => {
   parcel.find()
  // .select("User name _id")
  .sort({ date: -1 })
  // .populate('user')
  // .exec()
    .then((parcels) => res.json(parcels))
    .catch(error=>{
      console.log(error)
      res.status(500).json({
        error:error
      })
    });
});



//@route  Put api/v1/parcel
//@desc   Create a parcel
//@access Public
router.put("/parcel/:parcelId/status", (req, res) => {
  const id = req.params.parcelId;
  
  parcel.updateOne({ _id: id }, {
    status: req.body.status,
    })
  .then(() => {
   parcel.findOne({_id: id })
   .then(result =>res.send(result))
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err,
      message:`server error`
    });
  });
});

//@route  Put api/v1/parcel
//@desc   Create a parcel
//@access Public
router.put("/parcel/:parcelId/presentLocation", (req, res) => {
    const id = req.params.parcelId;
    
    parcel.updateOne({ _id: id }, {
        pickUp: req.body.pickUp,
      })
    .then(() => {
     parcel.findOne({_id: id })
     .then(result =>res.send(result))
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err,
        message:`server error`
      });
    });
  });

//@route  Delete api/parcel
//@desc   Delete an parcel
//@access Public
router.delete("/parcel/:id", (req, res) => {
  parcel.findById(req.params.id)
    .then((parcel) => parcel
    .remove()
    .then(() => res.json({
       Success: true,
       message:`information deleted`
       })))
    .catch((err) => res.status(404).json({ Success: false }));
});
module.exports = router;