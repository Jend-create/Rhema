import React from 'react';
import { video } from './data';
import { Card } from '@material-ui/core';

const Lobby = ({
  username,
  handleUsernameChange,
  roomName,
  handleRoomNameChange,
  handleSubmit
}) => {
  return (
    <Card className= 'facilitator'>
    <div></div>
    <br></br>
    <form onSubmit={handleSubmit}>
    <div>
    <label htmlFor="name">Please Enter Name:</label>
    <input
    type="text"
    id="field"
    value={username}
    onChange={handleUsernameChange}
    required
    />
    </div>
    <div>
    <label htmlFor="room">Enter Room name:</label>
    <input
    type="text"
    id="room"
    value={roomName}
    onChange={handleRoomNameChange}
    required
        />
      </div>
     <label>Enter Virtual Room</label> <br/>
      {video.map((videoIcon) => {
    const { id, url, icon } = videoIcon;
    return (
    <a color='primary' size='large' key={id} onChange={url} href={url}>{icon}</a>);})}
    <div></div>
    <br></br>
    <div></div>
    <br></br>
    <div></div>
    <br></br>
    <div></div>
    <br></br>
    <div></div>
    <br></br>
    <div></div>
    <br></br>
    <div></div>
    </form>
    </Card>
      );
};

export default Lobby;
