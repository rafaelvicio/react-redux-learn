import React from "react";

import ComentDetail from './CommentDetail';

const App = () => (
    <div className="ui container comments">
      <ComentDetail author="Sam" />
      <ComentDetail author="Alex" />
      <ComentDetail author="Jane" />
    </div>
);

export default App;
