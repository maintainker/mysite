import React from "react";
// Components
import Header from "../Header";
import Aside from "../Aside";


const Layoutv1 = ({children})=>{
    return (
    <div className="wrap">
        <Header />
        <main>
            <Aside />
            <section className="content">
                {children}
            </section>
        </main>
    </div>);
}

export default Layoutv1;
