import * as React from "react"
import { useSelector } from "react-redux";

export default function PuppyPals({pageturn}){

    const currentPage = useSelector((state)=>state.pageNumber.value);

return (
    <section className={`z-20 flex scrollbar-hide text-center w-screen justify-center overflow-scroll duration-[1s] ${pageturn(currentPage,"6")}`}>
        <article className="w-[1500px] self-center">
            
        </article>
    </section>
)
};