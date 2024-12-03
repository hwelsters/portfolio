import { useRef, useState, useEffect } from "react";

import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import pageURLs from "data/pageURLs";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const audioNames = ["Awesome Cute Song", "Epic Trumpet Song"];
  const audioLinks = ["/audio/awesome-cute-song.mp3", "/audio/epic-trumpet-song.mp3"];

  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [trackIndex, setTrackIndex] = useState<number>(0);

  const audioRef = useRef<any>();

  const playButton = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
  };

  const changeTrack = (index : number) => {
    if (index < 0) index += audioLinks.length
    setTrackIndex(index % audioLinks.length);
  }

  useEffect(()=>{
    audioRef.current.pause();
    audioRef.current.load();
    if (isPlaying) audioRef.current.play();
  }, [trackIndex])

  return (
    <div className={styles.root}>
      <HashLink smooth to="#top" className={styles.section}>
        <img className={styles.logo} src="https://i.ibb.co/c3FPNch/header-image.png" alt="" tabIndex={0} />
        Noel
      </HashLink>
      <span className={styles.section}>
        <a href={pageURLs.linkedInURL}>
          <LinkedIn className={styles.icon} />
        </a>

        <a href={pageURLs.githubURL}>
          <GitHub className={styles.icon} />
        </a>

        {/* <a href={pageURLs.blog} className={styles.small_screen}>
          <LibraryBooksIcon className={styles.icon} />
        </a> */}

        <span className={styles.play} tabIndex={0}>
          <span className={styles.modal}>
            NOEL'S JUKEBOX
            <span className={`${styles.song_name} ${styles.cssmarquee}`}>
              <span>{audioNames[trackIndex]}</span>
            </span>
            <audio ref={audioRef}>
              <source src={audioLinks[trackIndex]} type="audio/mp3" />
            </audio>
            <span className={styles.control_box}>
              
              <span className={styles.control_span} onClick={()=> changeTrack(trackIndex - 1)}>
                <SkipPreviousIcon className={styles.skip_button} />
              </span>

              <span className={styles.control_span} onClick={playButton}>
                {isPlaying ? <PauseIcon className={styles.play_button} /> : <PlayArrowIcon className={styles.play_button} />}
              </span>

              <span className={styles.control_span} onClick={()=> changeTrack(trackIndex + 1)}>
                <SkipNextIcon className={styles.skip_button} />
              </span>

            </span>
          </span>
          <MusicNoteIcon className={`${styles.icon} ${styles.small_screen} hithere`} />
        </span>
      </span>
    </div>
  );
}
