import Layout from './layout.jsx';
import React from 'react';
import CommentBox from './comment-box/index.jsx';
import CommentsList from './comments-list/index.jsx';

let index = React.createClass({

  render() {
    return (
      <Layout {...this.props}>
        <div id='index'>
          <h1>My Blog comments box</h1>
          <CommentBox/>
          <CommentsList comments={this.props.comments}/>
        </div>
      </Layout>
    );
  }
});

export default index;