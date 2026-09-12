  import { Search } from "lucide-react";
  import styles from "./FAQSearch.module.css";

  interface InputType {
    input: string;
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    ref?: React.RefObject<HTMLInputElement | null>;
  }

  export default function FAQSearch({ input, onChangeInput, ref }: InputType) {
    return (
      <div className={styles.searchWrapper}>
        <Search className={styles.searchIcon} aria-hidden="true" size={18} />
        <input
          type="search"
          className={styles.searchInput}
          placeholder="Search"
          aria-label="Search FAQs"
          value={input}
          onChange={onChangeInput}
          ref={ref}
        />
      </div>
    );
  }
