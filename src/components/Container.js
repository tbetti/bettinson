import React, {useState} from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function Container(){
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage= ()=>{
        if(currentPage === 'About Me'){
            return <AboutMe />
        }
        if(currentPage === 'Portfolio'){
            return <Portfolio />
        }
        if(currentPage === 'Contact'){
            return <Contact />
        }
        if(currentPage === 'Resume'){
            return <Resume />
        }
    }
    
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}
