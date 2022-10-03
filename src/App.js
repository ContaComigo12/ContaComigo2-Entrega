import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from "react";

const NavBar = lazy(() => import('./components/navbar'))
const Footer = lazy(() => import('./components/footer'))
const Home = lazy(() => import('./views/home'))
const ComoMeSinto = lazy(() => import('./views/comoMeSinto'))
const Desbravador = lazy(() => import('./views/desbravador'))
const SobreNos = lazy(() => import('./views/sobreNos'))
const CadastrarHistoria = lazy(() => import('./views/cadastrarHistoria'))

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<p>"Carregando...</p>}>
          <NavBar />
        </Suspense>
        <Routes>
          <Route path={"/"} element={
            <Suspense fallback={<p>"Carregando...</p>}>
              <Home />
            </Suspense>}
          />
          <Route path={"/comomesinto"} element={
            <Suspense fallback={<p>"Carregando...</p>}>
              <ComoMeSinto />
            </Suspense>}
          />
          <Route path={"/desbravador"} element={
            <Suspense fallback={<p>"Carregando...</p>}>
              <Desbravador />
            </Suspense>}
          />
          <Route path={"sobrenos"} element={
            <Suspense fallback={<p>"Carregando...</p>}>
              <SobreNos />
            </Suspense>}
          />
          <Route path={"cadastrarHistoria"} element={
            <Suspense fallback={<p>"Carregando...</p>}>
              <CadastrarHistoria />
            </Suspense>}
          />
        </Routes>
        <Suspense fallback={<p>"Carregando...</p>}>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
