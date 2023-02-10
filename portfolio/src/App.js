import { Helmet } from 'react-helmet';
import './App.css';

function App() {
  return (
    <div className="App">
           <Helmet>
        <title>Ameen's Portfolio</title>
        <meta name="description" content="App Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <h1>
        Hello world!
      </h1>
    </div>
  );
}

export default App;
