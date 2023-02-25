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
 
 
  export default function ProductMenCard(props) {
    const {category,id,image,discountPrice,discount,price,brand}=props;
     
    return (
        <Center py={12}>
          <RouterLink to={`/men/${id}`}>
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
            height={'300px'}
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
              height={330}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'2sm'} textTransform={'uppercase'} textDecoration={'line-through'}>
             MRP:{price}
            </Text>
            <Heading fontSize={'2sm'} fontFamily={'body'} fontWeight={500}>
              {category}
            </Heading>
            <Stack direction={'row'} align={'center'}>
             
              <Heading fontSize={'2sm'} fontFamily={'body'} fontWeight={500}>
               {discountPrice}
            </Heading>
             
            </Stack>
              <Heading fontSize={'sm'} fontFamily={'body'} fontWeight={500}>
              {discount}
            </Heading>
              <Heading fontSize={'sm'} fontFamily={'body'} fontWeight={500}>
              {brand}
            </Heading>
          </Stack>
        </Box>
        </RouterLink>
      </Center>
    );
  }
