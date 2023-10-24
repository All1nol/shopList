
import { useProduct } from '../providers/product';

const ProductItem =({productId})=>{
    const {productList} = useProduct() 

    const product = getProduct(productId)

 return <>product</>
}



export default ProductItem