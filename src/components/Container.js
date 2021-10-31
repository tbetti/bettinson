import React, {useState} from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

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
        // Do the same for all the pages
    }
    
    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}
