import {Link as RoutesLink} from "react-router-dom";
 import logo from './express.png'
import {
    Box,
    Flex,
    Button,
    Stack,
    useColorModeValue,
    Image,
  } from '@chakra-ui/react';

 
 
  export default function  Navbar() {
    // const { isOpen, onToggle } = useDisclosure();
 
    return (
      <Box>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
             <RoutesLink to="/">
            <Flex justifyContent={'space-between'}>
              <Image src={logo} w={120}/>
            </Flex>
            </RoutesLink>
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
       
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            {/* <RoutesLink to="/men">
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              MEN
            </Text>
            </RoutesLink> */}
            <RoutesLink to="/men">
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
               MEN
            </Flex>
            </RoutesLink>
            <RoutesLink to="/women">
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
               WOMEN
            </Flex>
            </RoutesLink>
            <RoutesLink to="/kids">
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
               KIDS
            </Flex>
            </RoutesLink>
          </Flex>
 
         
        
         <RoutesLink to="/login">
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              // variant={'link'}
              variant={"outline"}
              href={'#'}>
              SIGN IN
            </Button>
            </RoutesLink>
          

            <Flex justifyContent={'space-around'}>
            <RoutesLink to="/register">
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}>
             SIGN UP
            </Button>
            </RoutesLink>
            </Flex>
          </Stack>
 
        </Flex>
      </Box>
    );
  }
