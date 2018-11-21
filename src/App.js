import React from "react";
import faker from 'faker';

import ComentDetail from './CommentDetail';
import ApprovalCard from './CommentDetail';

const App = () => (
  
    <div className="ui container comments">
    <ApprovalCard>
      <ComentDetail author="Sam" timeAgo="Today at 4:45PM" contnet="Bem nice!" avatar={faker.image.avatar()} />
    </ApprovalCard>

    <ApprovalCard>
      <ComentDetail author="Sam" timeAgo="Today at 4:45PM" contnet="Bem nice!" avatar={faker.image.avatar()} />
    </ApprovalCard>

    <ApprovalCard>
    <ComentDetail author="Jane" timeAgo="Now" contnet="LOL" avatar={faker.image.avatar()} />
    </ApprovalCard>
     
    </div>
);

export default App;
