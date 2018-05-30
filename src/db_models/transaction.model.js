const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema(
  {
    _id: String,
    status: String,
    total_items: Number,
    processed_items: Number,
    error_items: Number,
    success_items: Number,
    createdAt: Date
  },
  {
    timestamps: true,
    collection : 'transactions' 
  }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
