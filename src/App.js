import React, { useState } from 'react';
import Dialog from './Dialog.jsx';

export default function App(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>App Component</h1>
      <hr />
      <Dialog
        render={() => {
          return (
            <React.Fragment>
              <h3>Dynamic header {counter}</h3>
              <p>Dynamic paragraph...</p>
              <button onClick={() => setCounter(counter + 1)}>
                Click Here!
              </button>
            </React.Fragment>
          );
        }}
      />
    </div>
  );
}
