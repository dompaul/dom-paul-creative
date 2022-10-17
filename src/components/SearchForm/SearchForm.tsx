import React from 'react';
import styles from './SearchForm.module.scss';

interface SearchFormProps {
  onSubmit: Function;
  placeholder?: string;
}

export const SearchForm: React.FC<SearchFormProps> = ({
  onSubmit,
  placeholder = 'Search...',
}) => {
  const [searchValue, setSearchValue] = React.useState<string>('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit(searchValue);
  };

  const handleChangeEvent = (event: React.FormEvent<HTMLInputElement>) =>
    setSearchValue(event.currentTarget.value);

  return (
    <form className={styles['search-form']} onSubmit={handleSubmit}>
      <input
        className={styles['search-form__input']}
        type="search"
        placeholder={placeholder}
        onChange={handleChangeEvent}
      />
      <button className={styles['search-form__submit']}>
        <svg
          viewBox="0 0 24 24"
          width="1em"
          height="1em"
          className="bDFSd d Vb ymbyq"
        >
          <path d="M22 20.514l-5.517-5.519a8.023 8.023 0 001.674-4.904c0-4.455-3.624-8.079-8.079-8.079C5.624 2.012 2 5.636 2 10.091s3.624 8.079 8.079 8.079a8.03 8.03 0 004.933-1.695l5.512 5.514L22 20.514zm-11.921-4.431c-3.305 0-5.993-2.688-5.993-5.992s2.688-5.992 5.993-5.992a6 6 0 015.992 5.992 6 6 0 01-5.992 5.992z"></path>
        </svg>
      </button>
    </form>
  );
};
