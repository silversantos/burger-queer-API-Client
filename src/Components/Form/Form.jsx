import { useState } from 'react';
import axios from 'axios';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import api from '../../api'

export function Form() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Impede o comportamento padrão do envio do formulário

    // Chama a API para enviar os dados do formulário
    api.post('/login', {
      "email": 'grace.hopper@systers.xyz',
      "password": '123456'
    })
      .then(function (response) {
        console.log(response);
        // Faça algo com a resposta, como redirecionar o usuário ou atualizar o estado do componente
      })
      .catch(function (error) {
        console.error(error);
        // Faça algo para lidar com o erro, como exibir uma mensagem de erro para o usuário
      });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <Input/>
      {/* <Input
        type="password"
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      /> */}
      <Button/>
    </form>
  );
}
