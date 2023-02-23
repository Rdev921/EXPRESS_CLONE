import { useEffect } from "react"
import axios from "axios";
import { useReducer } from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import ProductReducer from '../reducer/ProductReducer'
import ProductMenCard from "../components/ProductMenCard";

let initialState={
    products:[],
    isLoading:false,
    isErr:false
  }
  
function Men() {
    const [state, dispatch] = useReducer(ProductReducer,initialState);
    const {products,isLoading,isErr}=state;

    const getData=async function getUser(){
        dispatch({type : "FETCH_LOADING" })
        try {
          const response=await axios.get("http://localhost:8080/men")
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
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {
              products?.length>0 && products.map((e)=>{
                return  <GridItem key={e.id} w='100%'  >
                     <ProductMenCard
                     id={e.id}
                     category={e.category}
                     discountPrice={e.discountPrice}
                     image={e.src}
                     price={e.MRP}
                     discount={e.discount}
                     brand={e.brand}
                     />
                </GridItem>
              })
            }
            </Grid>
        </div>
      )
    }


export default Men