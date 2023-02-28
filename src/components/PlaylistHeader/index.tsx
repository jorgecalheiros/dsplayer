import "./style.css";
import playlistCover from "../../assets/images/cover/playlist.jpeg";
import { HeaderProps } from "../../types/globals";

export default function PlaylistHeader({ title, subtitle }: HeaderProps) {
  return (
    <div className="header-container">
      <div className="header-background"></div>
      <div className="header-content">
        <img
          src={playlistCover}
          alt="Capa da Playlist"
          className="header-cover"
        />
        <div className="info">
          <h3>{title}</h3>
          <h6>{subtitle}</h6>
        </div>
      </div>
    </div>
  );
}
