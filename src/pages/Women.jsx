import React, {useReducer,useEffect,useContext } from 'react'
import ProductReducer from '../reducer/ProductReducer';
import axios from 'axios';
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Grid,GridItem
} from '@chakra-ui/react';
import {Link as RouterLink } from "react-router-dom";
import { ProductContext } from '../context/ProductContextProvider';


 function ProductCard(props) {
  const {category,id,image,price,discountPrice,discount,brand}=props
   
  return (
      <Center py={12}>
        <RouterLink to={`/products/${id}`}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
           
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
           {brand}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {category}
          </Heading>
          <Stack direction={'row'} align={'center'}>
           
            <Heading fontSize={'3md'} fontFamily={'body'} fontWeight={500}>
            Price: {price}
          </Heading>
           
          </Stack>
            <Heading fontSize={'2md'} fontFamily={'body'} fontWeight={500}>
             discount:{discount}
          </Heading>
        </Stack>
      </Box>
      </RouterLink>
    </Center>
  );
}

let initState={
  products:[],
  isLoading:false,
  isErr:false
}

function Women() {
  const [state, dispatch] = useReducer(ProductReducer,initState);
  const {products,isLoading,isErr}=state;
  

  const getData = async()=>{
      dispatch({type : "FETCH_LOADING" })
      try {
        const response=await axios.get(`http://localhost:8080/products`)
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
                  //  category={e.Category}
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

export default Women