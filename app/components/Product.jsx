import { useParams } from 'react-router-dom';
import prd from '../datas/images.json';
 

function Product() {
    const { id } = useParams()
    const prod = prd.find((prod) => prod.id === id)
    return (

        <div id={`product-component-${id}`}></div>

    )
}

export default Product