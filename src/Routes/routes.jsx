
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Sidebar from '../Components/Sidebar';

export function AplicationRoutes () {

        return (
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Sidebar><Home/></Sidebar>}/>
                </Routes>
            </HashRouter>
    )
}

export default AplicationRoutes;
