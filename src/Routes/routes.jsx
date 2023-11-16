
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import TablePricing from '../Pages/TablePricing';
import Sidebar from '../Components/Sidebar';

export function AplicationRoutes () {

        return (
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Sidebar><Home/></Sidebar>}/>
                    <Route exact path='/tabela-de-preços' element={<Sidebar><TablePricing/></Sidebar>}/>
                </Routes>
            </HashRouter>
    )
}

export default AplicationRoutes;
