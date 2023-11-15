
import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';


export function AplicationRoutes () {

        return ( 
        <HashRouter>
            <Routes>
                    <Route exact path='/' element={ <Home/>}/>
                </Routes>
        </HashRouter>
            
    )
}

export default AplicationRoutes;
