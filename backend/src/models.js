const mongoose = require('mongoose');
const { TicketStatus, ModelNames } = require('./lib');

const { Schema } = mongoose;

const topicSchema = new Schema({
  name: { type: String, index: { unique: true, dropDups: true } },
});

const ticketSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: ModelNames.User },
  name: { type: String, required: false, trim: true },
  created: { type: Date, default: Date.now },
  location: { type: String, required: true },
  status: { type: String, default: TicketStatus.open },
  event: { type: Schema.Types.ObjectId, ref: ModelNames.Event },
  topics: {
    type: [
      {
        type: Schema.Types.ObjectId,
        ref: ModelNames.Topic,
      },
    ],
    required: true,
    default: [],
  },
});

const userSchema = new Schema({
  name: { type: String, required: true },
});

const eventSchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const models = {
  Event: mongoose.model(ModelNames.Event, eventSchema),
  Ticket: mongoose.model(ModelNames.Ticket, ticketSchema),
  Topic: mongoose.model(ModelNames.Topic, topicSchema),
  User: mongoose.model(ModelNames.User, userSchema),
};

module.exports = models;
