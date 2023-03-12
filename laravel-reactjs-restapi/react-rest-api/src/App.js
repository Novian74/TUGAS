import { Routes, Route, Link } from 'react-router-dom';
import { SkillProvider } from './Context/SkillContext';
import { Home } from './components/Home';
import { SkillIndex } from './components/skill/SkillIndex';
import { SkillCreate } from './components/skill/SkillCreate';
import { SkillEdit } from './components/skill/SkillEdit';
import { PelangganIndex } from './components/pelanggan/PelangganIndex';
import { PelangganCreate } from './components/pelanggan/PelangganCreate';
import { PelangganEdit } from './components/pelanggan/PelangganEdit';
import { ProdukIndex } from './components/produk/ProdukIndex';
import { ProdukCreate } from './components/produk/ProdukCreate.';
import { ProdukEdit } from './components/produk/ProdukEdit';
import { KeranjangIndex } from './components/keranjang/KeranjangIndex';


function App() {
  return (
    <SkillProvider>
      <div className="bg-slate-200">
        <div className='max-w-5xl mx-auto min-h-screen'>
          <nav>
            <ul className='flex'>
              <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                <Link to="/">Home</Link>
              </li>
              <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                <Link to="/skills">Skills</Link>
              </li>
              <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                <Link to="/pelanggan">Pelanggan</Link>
              </li>
              <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                <Link to="/produk">Produk</Link>
              </li>
              <li className='m-2 p-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md'>
                <Link to="/keranjang">Keranjang</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />

            <Route path='/skills' element={<SkillIndex />} />
            <Route path='/skills/create' element={<SkillCreate />} />
            <Route path='/skills/:id/edit' element={<SkillEdit />} />

            <Route path='/pelanggan' element={<PelangganIndex />} />
            <Route path='/pelanggan/create' element={<PelangganCreate />} />
            <Route path='/pelanggan/:id/edit' element={<PelangganEdit />} />

            <Route path='/produk' element={<ProdukIndex />} />
            <Route path='/produk/create' element={<ProdukCreate />} />
            <Route path='/produk/:id/edit' element={<ProdukEdit />} />

            <Route path='/keranjang' element={<KeranjangIndex />} />
          </Routes>
        </div>
      </div>
    </SkillProvider>
  );
}

export default App;
