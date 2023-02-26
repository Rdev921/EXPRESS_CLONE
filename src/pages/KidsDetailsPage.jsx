import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Grid, GridItem, } from '@chakra-ui/react';
import SinglePage from '../components/SinglePage';
 


const KidsDetailsPage = () => {
  const [data, setData] = useState({ });
  let {id}=useParams();
  console.log(id);              
    const getData= async (id)=>{
        return axios({
            method : "get" ,
            url : `http://localhost:8080/kids/${id}`
        }).then((res)=> {
            console.log(res.data)
            setData(res.data)
        });
    }


    useEffect(() => {
      getData(id);
    }, [id])
   




  return (
    <div>
        <Grid>
            <GridItem>
                 <SinglePage  
                  key={data.id}
                  {...data}
                 />
            </GridItem>
        </Grid>
    </div>
  )
}


export default KidsDetailsPage;
