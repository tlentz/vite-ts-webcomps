import { useState } from 'react';

interface AppProps {
  initialCount: number;
}

function App({ initialCount }: AppProps) {
  const [count, setCount] = useState(initialCount);

  return (
    <>
      <h1>Web Component 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/webcomp-1/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
