
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import TablePricing from '../Pages/TablePricing';
import Suplies from '../Pages/Suplies';
import Fleets from '../Pages/Fleets';
import Drivers from '../Pages/Drivers';
import Sidebar from '../Components/Sidebar';

export function AplicationRoutes () {

        return (
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Sidebar><Home/></Sidebar>}/>
                    <Route exact path='/tabela-de-preços' element={<Sidebar><TablePricing/></Sidebar>}/>
                    <Route exact path='/abastecimentos' element={<Sidebar><Suplies/></Sidebar>}/>
                    <Route exact path='/frotas' element={<Sidebar><Fleets/></Sidebar>}/>
                    <Route exact path='/motoristas' element={<Sidebar><Drivers/></Sidebar>}/>
                </Routes>
            </HashRouter>
    )
}

export default AplicationRoutes;
