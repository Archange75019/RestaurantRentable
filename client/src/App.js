import {
  Routes,
    Route,
  BrowserRouter
} from 'react-router-dom';

import Index from './pages/Index'
import Produits from './pages/Produits'
import Plats from './pages/Plats'
import Boissons from './pages/Boissons'
import Entrees from './pages/Entrees'
import Desserts from './pages/Desserts'
import Header from './components/Header'

function App() {
  return (
    <>
          
      <BrowserRouter>
         <Header />
          
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/produits" element={<Produits />} />
      <Route path="/plats" element={<Plats />} />
      <Route path="/boissons" element={<Boissons />} />
      <Route path="/entrees" element={<Entrees />} />
      <Route path="/desserts" element={<Desserts />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
