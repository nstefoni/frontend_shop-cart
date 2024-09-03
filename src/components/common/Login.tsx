import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Input, VStack, Text, Flex } from '@chakra-ui/react';
import { useAuth } from '../../contexts';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.access_token) {
          login(data.access_token);
          navigate('/');
        } else {
          setErrorMessage('no se recibió el token.');
        }
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'login error');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('network error.');
    }
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Box width="400px" p={8} borderWidth={1} borderRadius="lg" boxShadow="lg">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorMessage && <Text color="red.500">{errorMessage}</Text>}
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
