import "./style.css";
import { useState } from "react";
import cover from "../../assets/images/cover/chop-suey.jpeg";
import ControlButton from "../../components/ControlButton";
import { FaStop, FaPlay, FaPause } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";

export default function Controls() {
  const [isPaused, setIsPaused] = useState(false);
  const handlePlay = () => {
    setIsPaused(!isPaused);
  };
  return (
    <div className="control-container">
      <img src={cover} alt="Capa Álbum" className="current" />
      <div className="buttons-container">
        <ControlButton>
          <GiPreviousButton className="button-icon" size={20} />
        </ControlButton>
        <ControlButton>
          <FaStop className="button-icon" size={20} />
        </ControlButton>
        <ControlButton onClick={handlePlay}>
          {isPaused ? (
            <FaPause className="button-icon" size={20} />
          ) : (
            <FaPlay className="button-icon" size={20} />
          )}
        </ControlButton>
        <ControlButton>
          <GiNextButton className="button-icon" size={20} />
        </ControlButton>
      </div>
    </div>
  );
}
