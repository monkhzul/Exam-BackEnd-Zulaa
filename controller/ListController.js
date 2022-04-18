const express = require("express");
const { validationResult } = require("express-validator");
const List = require("../model/List");

const lists = async (req, res) => {
  List.find({}, function(err, data) {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  })
};

const createList = (req, res, next) => {
  const data = req.body;
  List.create(data, (err, data) => {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  });
};


const deleteList = (req, res) => {
  const id = req.params.id;
  List.findOneAndDelete({_id: id}, (err, data) => {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  });
}


const updateList = (req, res) => {
  const id = req.params.id;
  const data = req.body;
  List.findByIdAndUpdate({_id: id}, data, (err, data) => {
    if(err)
    res.json({
      success: false,
      data: err
    })
    else
    res.json({
      success: true,
      data: data
    })
  });
}


module.exports = {
    lists,
    createList,
    updateList,
    deleteList
};