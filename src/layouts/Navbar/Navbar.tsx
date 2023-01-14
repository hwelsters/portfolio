import { useRef, useState, useEffect } from "react";

import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import Face6Icon from "@mui/icons-material/Face6";

import pageURLs from "data/pageURLs";
import { HashLink } from "react-router-hash-link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const audioNames = ["NOEL NGU - Awesomeland", "NOEL NGU - Epic Face-off"];
  const audioLinks = ["https://audio.jukehost.co.uk/jpuo6umHTfxybvwj0zE4XfZOu4vMpAaZ", "https://audio.jukehost.co.uk/OnL08TbQGTZvLhMg5ziYdM9ROwELu851"];

  const [isPlaying, setIsPlaying] = useState<Boolean>(false);
  const [trackIndex, setTrackIndex] = useState<number>(0);

  const audioRef = useRef<any>();

  const playButton = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
  };

  const changeTrack = (index : number) => {
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
          <PlayArrowIcon className={styles.icon} />
        </span>
      </span>
    </div>
  );
}
