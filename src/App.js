import React from "react";
import faker from 'faker';

import CommentDetail from './CommentDetail';

const App = () => (
  <div className="ui container comments">
    <CommentDetail
      author="Sam"
      timeAgo="Today at 4:45PM"
      content="Nice blog post"
      avatar={faker.image.avatar()}
    />

    <CommentDetail
      author="Alex"
      timeAgo="Today at 2:00AM"
      content="I like the subject"
      avatar={faker.image.avatar()}
    />
    <CommentDetail
      author="Jane"
      timeAgo="Yesterday at 5:00PM"
      content="I like the writing"
      avatar={faker.image.avatar()}
    />

  </div>



);

export default App;
