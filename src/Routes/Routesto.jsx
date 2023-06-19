import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../Main';
import Projects from '../Projects';
import Contacts from '../Contacts';
import Services from '../Services';
import ProjectPage from '../ProjectsPage';
import ErrorPage from '../ErrorPage';

function Header() {

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/projects/1" element={<ProjectPage/>} />
                    <Route path="*" element={<ErrorPage/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Header;