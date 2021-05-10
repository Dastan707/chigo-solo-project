import React, { useReducer } from 'react';
import { JSON_API } from '../helpers/constants';
import axios from 'axios';
import { useHistory } from 'react-router';


export const productsContext = React.createContext();

const INIT_STATE = {
      productsData: [],
      productToEdit: [],
      searchData: [],
      paginationPages: 1
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case  "GET_PRODUCTS" :
            return {...state, productsData: action.payload.data, paginationPages: Math.ceil(action.payload.headers["x-total-count"] / 4)}   
        case "EDIT_PRODUCTS" :
            return {...state, productToEdit: action.payload}
        case "SEARCH" :
            return {...state, searchData: action.payload}
    default: return state
    }
}

const ProductsContextProvider = ({ children }) => {
    const  history = useHistory();
    const [state, dispatch] = useReducer(reducer, INIT_STATE);
    
    const getProducts = async(history) => {
        const search = new URLSearchParams(history.location.search)
        search.set('_limit', 6)
        history.push(`${history.location.pathname}?${search.toString()}`)
        let res = await axios.get(`${JSON_API}${window.location.search}`)
        dispatch({
            type: "GET_PRODUCTS",
            payload: res
        })
    }


    const postProduct = (product) => { // добавление товара
        axios.post(`${JSON_API}`, product)
    }

    const saveProduct = async (newEditedProduct, history) => { // сохранение товара (после редактирования)
        axios.patch(`${JSON_API}/${newEditedProduct.id}`, newEditedProduct)
        history.push('/products')
    }

    async function deleteProduct(id){ // удаление товара
        await axios.delete(`${JSON_API}/${id}`)

        let res = await axios.get(`${JSON_API}`)
        dispatch({
            type : "GET_PRODUCTS",
            payload: res
        })
    }

    async function editProduct(id){ // редактирование
        let { data } = await axios(`${JSON_API}/${id}`)
        // console.log(data);
        dispatch({
            type : "EDIT_PRODUCTS",
            payload : data
        })
    }

    async function searchProduct(value){ // поиск товара
        let  { data }  = await axios(`${JSON_API}?q=${value}`)
        // console.log(data);
        dispatch({
            type: "SEARCH",
            payload: data
        })
    }
    

    return (
        <productsContext.Provider value={{
            productsData: state.productsData,
            productToEdit: state.productToEdit,
            searchData: state.searchData,
            paginationPages: state.paginationPages,
            getProducts,
            postProduct,
            saveProduct,
            deleteProduct,
            editProduct,
            searchProduct
        }}>
            {children}
        </productsContext.Provider>
    )

}
export default ProductsContextProvider;