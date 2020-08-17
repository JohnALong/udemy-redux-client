import React from "react";

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_AUTH_ID;

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: GOOGLE_CLIENT_ID,
        scope: "email",
      });
    });
  }

  render() {
    return <div>google auth</div>;
  }
}

export default GoogleAuth;
