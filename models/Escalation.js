const mongoose = require("mongoose");

const escalationSchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    doctorName: {
      type: String,
      required: true,
      trim: true
    },
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    },
    patientName: {
      type: String,
      required: true,
      trim: true
    },
    message: {
      type: String,
      required: true,
      trim: true
    },
    status: {
      type: String,
      enum: ["Open", "Resolved"],
      default: "Open"
    },
    resolvedAt: {
      type: Date,
      default: null
    },
    resolvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Escalation", escalationSchema);
