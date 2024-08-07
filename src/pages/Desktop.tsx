import FrameComponent from "../components/FrameComponent";
import styles from "./Desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <section className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <header className={styles.parent}>
              <div className={styles.div}>63,179.71</div>
              <div className={styles.usdWrapper}>
                <a className={styles.usd}>USD</a>
              </div>
            </header>
            <div className={styles.div1}>+ 2,161.42 (3.54%)</div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.settingTitleWrapper}>
            <div className={styles.settingTitle}>
              <a className={styles.summary}>Summary</a>
              <div className={styles.chart}>Chart</div>
              <a className={styles.statistics}>Statistics</a>
              <div className={styles.analysis}>Analysis</div>
              <a className={styles.settings}>Settings</a>
            </div>
          </div>
          <div className={styles.separatorParent}>
            <div className={styles.separator} />
            <div className={styles.border} />
          </div>
        </div>
        <FrameComponent />
      </section>
      <div className={styles.background} />
      <div className={styles.background1} />
      <div className={styles.background2} />
      <div className={styles.background3} />
      <div className={styles.background4} />
      <div className={styles.background5} />
      <div className={styles.border1} />
      <div className={styles.border1} />
      <div className={styles.border3} />
      <div className={styles.border4} />
      <div className={styles.volumeContentWrapper}>
        <div className={styles.volumeContent}>
          <img
            className={styles.volumeIcon}
            loading="lazy"
            alt=""
            src="/volume.svg"
          />
          <div className={styles.gridParent}>
            <img className={styles.gridIcon} alt="" src="/grid.svg" />
            <img className={styles.fillIcon} alt="" src="/fill.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
