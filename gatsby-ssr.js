import React from 'react';
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      id='cookieyes'
      type='text/javascript'
      src='https://cdn-cookieyes.com/client_data/d80f9cec632b20d257e5a646/script.js'
    ></script>,
  ]);
}
