import "./ItemList.css";
import Item from "../Item/Item";
import LayOut from "../LayOut/LayOut";
import Loader from "../Loader/Loader";



export default function ItemList({ Ciudades }) {
  /* early return / retorno anticipado */
  if (Ciudades.length === 0) return <Loader />;


    return (
        <div className="ListaCiudades">
            <LayOut title={`Bienvenidos a viajar por el mundo!!`}>
                {Ciudades.map((ciud) => <Item key={ciud.id} {...ciud} />)}
            </LayOut>
        </div>
    )
}

// En REACT hay que poner un "KEY" cuando utilizamos MAP