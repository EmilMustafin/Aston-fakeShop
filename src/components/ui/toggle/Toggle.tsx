import { useThemeContext } from '../../../hooks/useThemeContext';
import styles from './toggle.module.scss';

const Toggle = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <div>
      <label className={styles.root} htmlFor="toggler">
        <input id="toggler" type="checkbox" onClick={toggleTheme} readOnly />
        <span className={styles.slider} />
        <span className={styles.wave} />
      </label>
    </div>
  );
};

export { Toggle };
