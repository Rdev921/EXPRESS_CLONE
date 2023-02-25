import {Link as RoutesLink} from "react-router-dom";
 import logo from './express.png'
import {
    Box,
    Flex,
    Button,
    Stack,
    useColorModeValue,
    Image,
  Text
  } from '@chakra-ui/react';

 
 
  export default function  Navbar() {
    // const { isOpen, onToggle } = useDisclosure();
 
    return (
      <Box>
      <Flex
           bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.500', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Text fontWeight={300} fontSize={13}>Free Shipping on Orders $50+</Text>
             <RoutesLink to="/">
              <Image src={logo} w={150} marginLeft={'350px'}/>
            </RoutesLink>
      </Flex>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('balck.500', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          justifyContent={'space-around'}>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
       
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }} align={'center'}>
            <RoutesLink to="/men">
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} fontWeight={600} _hover={{textDecoration:'underline'}}>
          MEN
            </Flex>
            </RoutesLink>
            <RoutesLink to="/women">
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} fontWeight={600} _hover={{textDecoration:'underline'}}>
            WOMEN
            </Flex>
            </RoutesLink>
            <RoutesLink to="/kids">
            <Flex display={{ base: 'none', md: 'flex' }} ml={10} fontWeight={600} _hover={{textDecoration:'underline'}}>
           KIDS
            </Flex>
            </RoutesLink>
          </Flex>
          <Flex justifyContent={'flex-end'}>
          <RoutesLink to="/login">
            <Text
              as={'a'}
              fontSize={'sm'}
              fontWeight={700}
            marginRight={8}
               w={2000}
              href={'#'}
              _hover={{
                textDecoration:'underline'
              }}>
             LOGIN
            </Text>
            </RoutesLink>
          
            <RoutesLink to="/register">
            <Text
              display={{ base: 'none', md: 'inline-flex'  }}
              fontSize={'sm'}  
              fontWeight={700}
              w={200}
              color={'black'}
              href={'#'}
              _hover_after={{
                textDecoration:'underline',
                transition: 'all .3s ease',
                  content: '""',
                  w: 'full',
                  h: 'full',
                  backgroundColor: '#0087ca',
                  pos: 'absolute',
                  top: 5,
                  left: 0,  
                  filter: 'blur(15px)',
                  zIndex: -1,
              }}
            //   _after={{
            //   transition: 'all .3s ease',
            //   content: '""',
            //   w: 'full',
            //   h: 'full',
            //   pos: 'absolute',
            //   top: 5,
            //   left: 0,  
            //   filter: 'blur(15px)',
            //   zIndex: -1,
            // }}
              >
            REGISTER
            </Text>
            </RoutesLink>
          </Flex>
          </Stack>
        </Flex>
      </Box>
    );
  }
