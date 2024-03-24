import "./Container.css"
import { ReactNode } from "react";

type ContainerProp = {
    PizzaAntalDiv: ReactNode,
    PizzaImgDiv: ReactNode,

};

const Container = ({ PizzaAntalDiv, PizzaImgDiv }: ContainerProp) => {
    return (
        <div className="container">
            {PizzaAntalDiv}
            {PizzaImgDiv}

        </div>
    )
}

export default Container