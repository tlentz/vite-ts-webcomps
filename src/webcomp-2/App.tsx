import { useState } from 'react';

interface AppProps {
  initialString: string;
}

function App({ initialString }: AppProps) {
  const [s, setS] = useState(initialString);

  return (
    <>
      <h1>Web Component 2</h1>
      <div className="card">
        <input value={s} onChange={(e) => setS(e.target.value)} />
        <p>
          Edit <code>src/webcomp-2/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  );
}

export default App;
