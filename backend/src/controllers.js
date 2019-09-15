/* eslint-disable no-underscore-dangle */
/* eslint-disable one-var */
const { UserInputError } = require('apollo-server');
const { Event, Ticket, Topic, User } = require('./models');

const EventController = {
  async createEvent(root, { name }) {
    return (await Event.findOne({ name })) || new Event({ name }).save();
  },
};

const UserController = {};

const TopicController = {
  async createTopic(name) {
    return (await Topic.findOne({ name })) || new Topic({ name }).save();
  },
};

const TicketController = {
  async createTicket(root, { authorId, eventId, location, topics, name }) {
    // Verify event and author exist
    let event, author;
    try {
      event = await Event.findById(eventId);
      author = await User.findById(authorId);
    } catch (err) {
      throw new UserInputError('Ticket args invalid', {
        invalidArgs: [authorId, eventId],
      });
    }
    // Let's go create the topics
    const topicIds = topics.map(TopicController.createTopic).map(t => t._id);

    // Create a new ticket
    const ticket = new Ticket({
      author: author._id,
      name: author.name || name,
      event: event._id,
      location,
      topics: topicIds,
    });

    return ticket;
  },
};

module.exports = {
  EventController,
  UserController,
  TicketController,
  TopicController,
};
