import {Link as RoutesLink} from "react-router-dom";
 import logo from './express.png'
 
import {
    Box,
    Flex,
    Icon,
    chakra,
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
      {/* <Flex
  bg="#edf3f8"
  _dark={{
    bg: "#3e3e3e",
  }}
  p={20}
  w="full"
  justifyContent="center"
  alignItems="center"
>
  <chakra.span pos="relative" display="inline-block">
    <Icon
      boxSize={6}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
    </Icon>
    <chakra.span
      pos="absolute"
      top="-1px"
      right="-1px"
      px={2}
      py={1}
      fontSize="xs"
      fontWeight="bold"
      lineHeight="none"
      color="red.100"
      transform="translate(50%,-50%)"
      bg="red.600"
      rounded="full"
    >
      99
    </chakra.span>
  </chakra.span>

  <chakra.span pos="relative" display="inline-block" ml={8}>
    <Icon
      boxSize={6}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
        clipRule="evenodd"
        fillRule="evenodd"
      ></path>
    </Icon>
    <chakra.span
      pos="absolute"
      top="-1px"
      right="-1px"
      px={2}
      py={1}
      fontSize="xs"
      fontWeight="bold"
      lineHeight="none"
      color="red.100"
      transform="translate(50%,-50%)"
      bg="red.600"
      rounded="full"
    >
      99
    </chakra.span>
  </chakra.span>
</Flex>; */}
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
            
              >
            REGISTER
            </Text>
            </RoutesLink>

            <RoutesLink to="/admin">
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
            
              >
            ADMIN
            </Text>
            </RoutesLink>
          </Flex>
          </Stack>
        </Flex>
      </Box>

      
    );
  }
