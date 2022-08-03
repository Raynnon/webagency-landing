import Emergence from "../animations/Emergence"
import { Parallax } from 'react-parallax';
import { JsxElement } from "typescript";
import background from "../../images/gray-bg.jpg"

type Props = {
    children: JsxElement;
    title: string[];
    background?: "light" | "primary" | "parallax";
  };

export default function Button({ children, title, background = "light" }: Props) {
    const content = <section id="our-team">
                        <> 
                        <Emergence>
                        <h2>
                            {title[0]} <span>{title[1]}</span>
                        </h2>
                        </Emergence>
                        {children}
                        </>
                    </section>
  return (
/*     {
        background === "parallax" ? 
            <div>
                {content}
            </div>
            :  */{content}
  /*   } */
    
      
    
  );
}
