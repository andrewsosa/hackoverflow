import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const EventList = () => (
  <div id="EventList" className="box content">
    <Query
      query={gql`
        {
          events {
            name
          }
        }
      `}
    >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return data.events.map(ev => (
          <article className="post">
            <h4>{ev.name}</h4>
            <div className="media">
              <div className="media-left">
                <p className="image is-32x32">
                  <img src="http://bulma.io/images/placeholders/128x128.png" />
                </p>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <a href="#">@jsmith</a> replied 34 minutes ago &nbsp;
                    <span className="tag">Question</span>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <span className="has-text-grey-light">
                  <i className="fa fa-comments" /> 1
                </span>
              </div>
            </div>
          </article>
        ));
      }}
    </Query>
  </div>
);

export default EventList;
