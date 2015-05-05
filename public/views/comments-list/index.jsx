import React from 'react';
import Comment from '../comment/index.jsx';

let commentsList = React.createClass({
	render () {
		return (
			<div id="comments-list">
				<h2>Latest comments...</h2>
				<ul>
					{this.props.comments.map((comment, i) =>
                		<Comment key={i} comment={comment}/>
            		)}
				</ul>
			</div>
		)
	}
});

export default commentsList;