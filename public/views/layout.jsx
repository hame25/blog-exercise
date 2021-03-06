import React from 'react';

let layout = React.createClass({

  render() {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          {this.props.children}
        </body>
        <script src='/bundle.js'></script>
      </html>
    );
  }
});

export default layout;
