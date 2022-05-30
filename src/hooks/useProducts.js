import axios from "axios";
import { useEffect, useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios.get('http://localhost:5000/product');
                setProducts(data);
            }
            catch (err) {
                getData();
            }
        }
        getData();

    }, []);

    return [products, setProducts]
};

export default useProducts;