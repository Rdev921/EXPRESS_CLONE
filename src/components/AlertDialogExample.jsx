import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure
  } from '@chakra-ui/react'
 import React from 'react'
 import { Link as RouterLink } from 'react-router-dom'
export default function AlertDialogExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  
    return (
      <>
        <Button colorScheme='green' onClick={onOpen} width="100%">
           Proceed to Payment
        </Button>
  
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Order Placed SuccessFully !
              </AlertDialogHeader>
  
              <AlertDialogBody>
                 Continue Shopping...
              </AlertDialogBody>
  
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                Continue Shopping
                </Button>
                <RouterLink to="/">
                <Button colorScheme='green' onClick={onClose} ml={3}>
                   Thank you !
                </Button>
                </RouterLink>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </>
    )
  }