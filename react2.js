import React, { useState } from 'react';

function ToggleText() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Text
      </button>
      {visible && <p>This is some toggled text!</p>}
    </div>
  );
}

export default ToggleText;
