import React, { useState } from "react";

import "./Participants.css";
import participants from "../../data/participants";

const Card = (props) => {
  const { id, name, avatarImg, biscuit, biscuitsImg, biscuitsLink, isAlive } =
    props.participant;

  const imgA = avatarImg ? avatarImg : require("../../images/avatar.png");

  const imgB = biscuitsImg ? biscuitsImg : require("../../images/galletti.jpg");

  const [img, setImg] = useState(imgB);

  const onMouseEnterHandler = () => {
    setImg(imgA);
  };

  const onMouseLeaveHandler = () => {
    setImg(imgB);
  };

  return (
    <div className="part-card">
      <div
        className="part-card-media"
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <img className="part-card-media-img" src={img} />
      </div>
      <div className="part-card-header">
        <h2 className={!isAlive ? "lost" : "alive"}>{name}</h2>
      </div>
      <div className="part-card-content">
        <p>
          <a href={biscuitsLink} target="_blank">
            {biscuit}
          </a>
        </p>
      </div>
    </div>
  );
};

const Participants = () => {
  return (
    <>
      <div className="main">
        <div className="main-participants">
          {participants.map((p) => {
            return <Card participant={p} key={p.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Participants;
