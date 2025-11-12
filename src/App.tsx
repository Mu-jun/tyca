import { BrowserRouter, Routes, Route } from 'react-router';

import Layout from './routes/Layout';

function App() {
  return (
    <>
      <BrowserRouter basename="tyca">
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
