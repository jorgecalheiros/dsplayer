import { HeaderProps, MusicProps } from "../types/globals";

export const headerInfo: HeaderProps = {
  title: "Músicas Favoritas",
  subtitle: "Suas músicas mais tocadas",
};

export const tracks: MusicProps[] = [
  {
    id: 1,
    title: "Queen",
    albumName: "Killer Quen",
    like: true,
    cover: require("../assets/images/cover/killerquen.jpeg"),
  },
  {
    id: 2,
    title: "Queen",
    albumName: "Another One Bite The Dust",
    like: false,
    cover: require("../assets/images/cover/anotherbitethedust.jpeg"),
  },
  {
    id: 3,
    title: "Take on Me",
    albumName: "Take on Me",
    like: true,
    cover: require("../assets/images/cover/takeoneme.jpg"),
  },
  {
    id: 4,
    title: "System Of A Down",
    albumName: "Chop Suey",
    like: false,
    cover: require("../assets/images/cover/chop-suey.jpeg"),
  },
];
