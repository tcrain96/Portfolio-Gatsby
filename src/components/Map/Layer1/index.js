import * as React from "react"
import Home from "../../MapLocations/Home"
import About from "../../MapLocations/About"
import Projects from "../../MapLocations/Projects"
import Contact from "../../MapLocations/Contact"
import { useSelector } from "react-redux"
export default function Layer1({activeLayer, pageTurn}){

  const currentLayer = useSelector((state)=>state.activeLayer.value);

return (
    <section className={`z-[3] flex py-[100px] mx-[50px] duration-500 ${activeLayer(currentLayer,1)}`}>

        <Home pageturn={pageTurn}/>
        <About pageturn={pageTurn}/>
        <Projects pageturn={pageTurn}/>
        <Contact pageturn={pageTurn}/>
        
    </section>
)
};