import PlaylistHeader from "../../components/PlaylistHeader";
import PlaylistItem from "../../components/PlaylistItem";
import { headerInfo, tracks } from "../../services/Api";
import "./style.css";

export default function Players() {
  return (
    <div className="player-container">
      <PlaylistHeader {...headerInfo} />
      {tracks.map((track, index) => (
        <PlaylistItem key={index} {...track} />
      ))}
    </div>
  );
}
