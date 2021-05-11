import ProductList from '../../components/ProductList';

const ProductsPage = ({addToCart}) => {
    return (
        <ProductList addToCart={addToCart} />
    )
}

export default ProductsPage;
