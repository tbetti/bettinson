import React, {useState} from 'react';
// import Components from './components/...';
import Header from './components/js/Header';
import Footer from './components/js/Footer';
import AboutMe from './components/js/pages/AboutMe';

export default function App(){
    // const [clicked, setClicked] = useState(false);
    // clicked={clicked} setClicked={setClicked}
    return(
        <div>
            <Header />
            <AboutMe />
            <Footer />
        </div>
    )
}