const TransactionModel = require("../../db_models/transaction.model.js");
const mongoose = require("mongoose");

function createTransaction(parent, args, context, info) {
  const transaction = {
    _id: new mongoose.Types.ObjectId(),
    status: "InProgress",
    total_items: args.movies_list.length,
    processed_items: 0,
    error_items: 0,
    success_items: 0
  };
  return TransactionModel.create(transaction);
}

module.exports = {
  createTransaction
};
