import React from 'react';
import './TopicTemplate.css';

const TopicTemplate = props => (
  <div className="topic-template">
    <h3>{props.title}</h3>
    <p>{props.content}</p>
    <p>{props.date_created}</p>
    <p>{props.user_id}</p>
  </div>
);

export default TopicTemplate;