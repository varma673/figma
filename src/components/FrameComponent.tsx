import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.verticalParent}>
        <div className={styles.vertical} />
        <div className={styles.navigationButtons}>
          <div className={styles.buttonIcons}>
            <div className={styles.fullscreenCompareIcons}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/icon.svg"
              />
              <div className={styles.fullscreen}>Fullscreen</div>
            </div>
          </div>
          <div className={styles.buttonIcons1}>
            <div className={styles.iconParent}>
              <img className={styles.icon} alt="" src="/icon-1.svg" />
              <a className={styles.compare}>Compare</a>
            </div>
          </div>
          <div className={styles.dateOptions}>
            <div className={styles.dateShortcuts}>
              <div className={styles.d}>1d</div>
            </div>
            <div className={styles.buttonIcons}>
              <div className={styles.d1}>3d</div>
            </div>
            <button className={styles.backgroundParent}>
              <div className={styles.background} />
              <div className={styles.w}>1w</div>
            </button>
            <div className={styles.buttonIcons}>
              <div className={styles.m}>1m</div>
            </div>
          </div>
          <div className={styles.mWrapper}>
            <div className={styles.m1}>6m</div>
          </div>
          <div className={styles.yearSettingsWrapper}>
            <div className={styles.yearSettings}>
              <div className={styles.y}>1y</div>
              <div className={styles.maxParent}>
                <div className={styles.max}>max</div>
                <div className={styles.frameContainer}>
                  <div className={styles.horizontalSeparatorContainerParent}>
                    <div className={styles.horizontalSeparatorContainer}>
                      <div className={styles.horizontal} />
                      <div className={styles.label}>
                        <div className={styles.background1} />
                        <div className={styles.horizontalLabel}>64,850.35</div>
                      </div>
                    </div>
                    <div className={styles.horizontalSeparatorContainer}>
                      <img className={styles.lineIcon} alt="" src="/line.svg" />
                      <div className={styles.label1}>
                        <div className={styles.background2} />
                        <div className={styles.div}>63,179.71</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
