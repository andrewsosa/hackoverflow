const { GraphQLDateTime } = require('graphql-iso-date');
// const Ticket = require('./models/ticket');
// const Topic = require('./models/topic');
const { Ticket, Topic, Event, User } = require('./models');
const { TicketController, EventController } = require('./controllers');

module.exports = {
  Date: GraphQLDateTime,
  Query: {
    tickets: async (parent, args) => {
      return Ticket.find(args);
    },
    ticket: async (parent, args) => {
      return Ticket.findOne(args);
    },
    topics: async (parent, args) => {
      return Topic.find(args);
    },
    events: async (parent, args) => {
      return Event.find(args);
    },
    // topic: async(parent, args, context, info) => {
    //   return await Tickets.find()
    // }
  },
  Mutation: {
    createEvent: EventController.createEvent,
    createTicket: TicketController.createTicket,
  },
};
