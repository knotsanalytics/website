import styles from "./Burger.module.scss";
import cn from "classnames";

type Props = {
  active: boolean;
  onClick: () => void;
};
export default function Burger({ active, onClick }: Props) {
  return (
    <div
      className={cn(styles.container, { [styles.active]: active })}
      onClick={onClick}
    >
      <div className={cn(styles.meat, styles.meat1)} />
      <div className={cn(styles.meat, styles.meat2)} />
      <div className={cn(styles.meat, styles.meat3)} />
    </div>
  );
}
