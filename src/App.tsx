import { useState } from 'react';
import addTwoNumbers from '@utils/example';

function App() {
  const [count, setCount] = useState(() => addTwoNumbers(0, 0));
  return (
    <div className="flex h-screen m-auto">
      <div className="m-auto">
        <h2>Counter</h2>
        <div className="text-6xl text-red-600">{count}</div>
        <button
          type="button"
          className='px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white"
          type="button'
          onClick={() => setCount((value) => value + 1)}
        >
          count+
        </button>
      </div>
    </div>
  );
}

export default App;
