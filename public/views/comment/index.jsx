import React from 'react';

let comment = React.createClass({
	render() {
		console.log(this.props.comment);
		return (
			<li>
				<p>From {this.props.comment.name}</p>
				<p>{this.props.comment.comment}</p>
			</li>
		)
	}
});

export default comment;