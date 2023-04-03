import React from "react";
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/a447e2ace360d915f11ba5dd/script.js"
    ></script>,
  ]);
}
