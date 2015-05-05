import React from 'react';

let commentBox = React.createClass({

	render () {
		return (

			<div id="comment-box-container">
				<form>
					<label htmlFor="name-field">Your name</label>
					<input type="text" id="name"/>
					<label htmlFor="comment">Your comments</label>
					<textArea id="comment"/>
					<button type="submit">Add comment</button>
				</form>
			</div>
		)
	}
});

export default commentBox;