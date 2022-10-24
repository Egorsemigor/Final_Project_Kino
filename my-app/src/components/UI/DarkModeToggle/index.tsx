import styles from "./styles.module.css";

interface IProps {
  inputChecked: boolean;
  onChange: () => void;
}

export const DarkModeToggle = ({ inputChecked, onChange }: IProps) => {
  return (
    <div className={styles.switchCheckbox}>
      <label className={styles.switch}>
        <input type="checkbox" />
        <span className={styles.slider}> </span>
      </label>
    </div>
  );
};
