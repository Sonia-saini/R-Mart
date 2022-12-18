import React from 'react'
import {
    Box,
    Flex,
    Avatar,
    
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import { AppContest } from './authContext/AuthContextProvider';
  import { Link } from 'react-router-dom';

const AdminNavbar = () => {

    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const {authState,logoutUser}=React.useContext(AppContest);

  return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'} fontSize={{base:"5px",lg:"15px",md:"10px"}}
        >
        <Link to="/mobiles">
          <Box>Mobiles</Box>
            </Link>
          
          <Link to="/Makeup">
          <Box>Makeup</Box>
            </Link>
          <Link to="/iron">
          <Box>Iron</Box>
            </Link>
          <Link to="/juicers">
          <Box>Juicers</Box>
            </Link>
          <Link to="/computers">
          <Box>Computers</Box>
        </Link>
          <Link to="/camaras">
          <Box>Camaras</Box>
          </Link>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://ca.slack-edge.com/T049JC010P9-U04ANG3QWJ2-62ad89db213e-512'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://ca.slack-edge.com/T049JC010P9-U04ANG3QWJ2-62ad89db213e-512'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p style={{fontSize:"15px"}}>Token : {authState.token}</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>All Products</MenuItem>
                  <Link to="/userdetails">
                  <MenuItem>User Details</MenuItem>
                  </Link>
                  <Link to="/admin">
                  <MenuItem onClick={logoutUser}>Logout</MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
  )
}

export default AdminNavbar
