import { useState } from 'react';
import { Modal, Button, Group  } from '@mantine/core';
import { newSession, removeSession } from '../store/slices/login/loginSlice';

var idTimer = null;
const maxSecondsAlertSession = 30;
var countdown = maxSecondsAlertSession;

export const AlertSessionModal = () => {
  const [opened, setOpened] = useState(false);

  const mostrarModal = () => {
    setOpened(true);
    clearInterval(idTimer);
    idTimer = setInterval(function(){
      if(countdown <= 0){
        cerrar();
      } else {
          document.getElementById("countdown").innerHTML = `La sesión expirara en ${countdown}s, ¿Deseas mantener la sesión actual?`;
      }
      countdown -= 1;
    }, 1000)
  }

  const resetTimer = () => {
    clearInterval(idTimer);
    countdown = maxSecondsAlertSession;
  }

  const aceptar = () => {
    resetTimer();
    newSession();
    setOpened(false);
  }

  const cerrar = () => {
    resetTimer();
    removeSession();
    window.location.reload();
  }

  return (
    <>
      <Modal
        closeOnClickOutside={false}
        opened={opened}
      >

        <h4 id='countdown'>La sesión expirara en {countdown}s, ¿Deseas mantener la sesión actual?</h4>
        <br/>
        <Group position="apart" spacing="xl" grow>
          <Button onClick={aceptar}>Aceptar</Button>
          <Button color="red" onClick={cerrar} float='right'>Cerrar</Button>
        </Group>
      </Modal>
      <button id='alertSessionModalButton' onClick={() => mostrarModal()}></button>
    </>
  );
}