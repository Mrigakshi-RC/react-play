import PlayHeader from 'common/playlists/PlayHeader';
import styles from './styles.module.css';
import rock from './images/rock.jpg';
import Player from './components/Player';

// WARNING: Do not change the entry componenet name
function RockPaperScissors(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className={styles.opponent}>
            <h2>Opponent</h2>
            <img alt="Rock" src={rock} />
          </div>
          <Player />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default RockPaperScissors;
