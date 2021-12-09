import {  Outlet} from "remix";  
import stylesUrl from "~/styles/demos/danishtest.css";

 
export let links = () =>{
  return [{rel:"stylesheet",href:stylesUrl}]
}

export default function Index() {
  return (
    <div>
      <h1 > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus impedit soluta veritatis adipisci rem necessitatibus minima, distinctio, dolorum ducimus asperiores ad porro suscipit, vero odio natus. Doloremque vitae aperiam ullam! !</h1>;
<Outlet/>
    </div>
  )
}
