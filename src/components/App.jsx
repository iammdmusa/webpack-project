import React from 'react';
import "../styles/index.scss";
import logoImg from '../images/logo.png'

export const Test = () => {
    return (
        <>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At nobis impedit distinctio optio praesentium magni suscipit, fugiat eaque id blanditiis debitis minima tempora accusantium deleniti, odio ipsum quam nam. Iusto!
            </p>
        </>
    );
}

const App = () => {
    return (
        <>
            <section className="hero">
                <img src={logoImg} alt="" />
            </section>
            <main>
                <section>
                    <h1>oh Hai, React!</h1>
                    <Test />
                </section>
            </main>
        </>
    )
}
export default App;