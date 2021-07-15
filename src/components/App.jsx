import React from 'react';
import "../styles/index.scss";
import logoImg from '../images/logo.png'

const App = () => {
    return (
        <>
            <section className="hero">
                <img src={logoImg} alt="" />
            </section>
            <main>
                <section>
                    <h1>oh Hai, React!</h1>
                </section>
            </main>
        </>
    )
}
export default App;