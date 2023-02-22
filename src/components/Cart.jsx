import { useEffect } from "react"
import axios from "axios";
import { useReducer } from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import ProductCard from "./ProductCard";
import ProductReducer from '../reducer/ProductReducer'

let initialState={
    products:[],
    isLoading:false,
    isErr:false
  }
  
function Cart() {
    const [state, dispatch] = useReducer(ProductReducer,initialState);
    const {products,isLoading,isErr}=state;

    

    const getData=async function getUser(){
        dispatch({type : "FETCH_LOADING" })
        try {
          const response=await axios.get("http://localhost:8080/products")
          dispatch({type : "FETCH_SUCCESS", payload : response.data})
          console.log(response.data)
        } catch (error) {
          console.log("error !")
          dispatch({type : "FETCH_FAILURE", payload : []})
        }
      }
  
  
      useEffect(()=>{
        getData();
      },[])
   
    return  isLoading  ?  <h1>Loading...</h1> :
            isErr ?   <h1>Something went Wrong ! </h1> :
        (
        <div>
             <h1>Products</h1>
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {
              products?.length>0 && products.map((e)=>{
                return  <GridItem key={e.id} w='100%'  >
                     <ProductCard
                     id={e.id}
                     category={e.category}
                     discountPrice={e.discountPrice}
                     image={e.src}
                     price={e.price}
                     discount={e.discount}
                     brand={e.brand}
                    //  rating={e.rating.rate}
                     />
                </GridItem>
              })
            }
            </Grid>
        </div>
      )
    }


export default Cart