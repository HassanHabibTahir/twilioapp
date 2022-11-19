import React from 'react';
import { styled, Theme } from '@material-ui/core/styles';

import MenuBar from './components/MenuBar/MenuBar';
import MobileTopMenuBar from './components/MobileTopMenuBar/MobileTopMenuBar';
import PreJoinScreens from './components/PreJoinScreens/PreJoinScreens';
import ReconnectingNotification from './components/ReconnectingNotification/ReconnectingNotification';
import RecordingNotifications from './components/RecordingNotifications/RecordingNotifications';
import Room from './components/Room/Room';

import useHeight from './hooks/useHeight/useHeight';
import useRoomState from './hooks/useRoomState/useRoomState';

const Container = styled('div')({
  display: 'grid',
  gridTemplateRows: '1fr auto',
});

const Main = styled('main')(({ theme }: { theme: Theme }) => ({
  overflow: 'hidden',
  paddingBottom: `${theme.footerHeight}px`, // Leave some space for the footer
  background: 'black',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: `${theme.mobileFooterHeight + theme.mobileTopBarHeight}px`, // Leave some space for the mobile header and footer
  },
}));

export default function App() {
  const roomState = useRoomState();

  // Here we would like the height of the main container to be the height of the viewport.
  // On some mobile browsers, 'height: 100vh' sets the height equal to that of the screen,
  // not the viewport. This looks bad when the mobile browsers location bar is open.
  // We will dynamically set the height with 'window.innerHeight', which means that this
  // will look good on mobile browsers even after the location bar opens or closes.
  const height = useHeight();

  return (
    <Container style={{ height }}>
      {roomState === 'disconnected' ? (
        <PreJoinScreens />
      ) : (
        <Main>
          <ReconnectingNotification />
          <RecordingNotifications />
          <MobileTopMenuBar />
          <Room />
          <MenuBar />
        </Main>
      )}
    </Container>
  );
}

// Created API Key SK986e10487d8badbbe28c3e2cd85f0c9e and stored the secret in Config. See: https://www.twilio.com/console/runtime/api-keys/SK986e10487d8badbbe28c3e2cd85f0c9e
// twilio-cli configuration saved to "C:\Users\DELL\.twilio-cli\config.json"
// Saved hassanhabibtahir.
//  » You don't have any active profile set, run "twilio profiles:use" to set a profile as active
// --------------------------------------------------

// Created API Key SKf54c189d54bf2621806e27629d903180 and stored the secret in Config. See: https://www.twilio.com/console/runtime/api-keys/SKf54c189d54bf2621806e27629d903180
// twilio-cli configuration saved to "C:\Users\DELL\.twilio-cli\config.json"
// Saved hassanhabibtahir.
//  » You don't have any active profile set, run "twilio profiles:use" to set a profile as active
