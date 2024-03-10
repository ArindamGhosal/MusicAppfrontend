import React from "react";
import styled from "styled-components";

import mld1 from "./mld1.png";
export default function Login() {
  const handleClick = () => {
    const clientId = "5550dbfb87a041c994664108e439ab14";
    const redirectUrl = "http://localhost:3000/";
    const apiUrl = "http://accounts.spotify.com/authorize";

    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-read-playback-position",
      "user-top-read",
    ];

    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
        " "
      )}&response_type=token&show_dialog=true`;
    };
  return (
    <Container>
      {/* <img src={mld1} alt="Logo" /> */}
      {/* <div style={{ backgroundImage:`url(${mld1})` }}></div> */}

      {/* <div style={{ backgroundImage:`url(${mld1})`
    }}>
    
    </div> */}
      <img src={mld1} alt="Logo" />

      <button onClick={handleClick}>Connect Sunlo</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #4000ff;
  gap: 5rem;
  img {
    height: 50vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    border: none;
    background-color: black;
    color: #ffffff;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
