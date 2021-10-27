import React, {useState} from "react";
import NavTabs from "./NavTabs";
import AboutMe from "./pages/AboutMe";

export default function Container(){
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage= ()=>{
        if(currentPage === 'About Me'){
            return <AboutMe />
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
