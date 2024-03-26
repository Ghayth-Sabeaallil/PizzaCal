import "./Container.css"
import { ReactNode } from "react";

type ContainerProp = {
    PizzaImgDiv: ReactNode,

};

const Container = ({ PizzaImgDiv }: ContainerProp) => {
    return (
        <div className="container">
            {PizzaImgDiv}
        </div>
    )
}

export default Container