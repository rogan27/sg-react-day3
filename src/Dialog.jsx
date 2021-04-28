import React from 'react';

const Dialog = (props) => {
  return (
    <React.Fragment>
      <h4>Dialog header</h4>
      {props.render()}
      <h4>Dialog Footer</h4>
    </React.Fragment>
  );
};

export default Dialog;
