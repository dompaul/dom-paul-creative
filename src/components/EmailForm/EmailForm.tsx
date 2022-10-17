import React from 'react';

import { Button } from 'components/Button';

import styles from './EmailForm.module.scss';

interface EmailFormProps {
  onSubmit: Function;
  placeholder?: string;
}

export const EmailForm: React.FC<EmailFormProps> = ({
  onSubmit,
  placeholder = 'Your Email Address...',
}) => {
  const [value, setValue] = React.useState<string>('');

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    onSubmit(value);
  };

  const handleChangeEvent = (event: React.FormEvent<HTMLInputElement>) =>
    setValue(event.currentTarget.value);

  return (
    <form className={styles['email-form']} onSubmit={handleSubmit}>
      <input
        className={styles['email-form__input']}
        type="text"
        placeholder={placeholder}
        onChange={handleChangeEvent}
      />
      <Button label="Sign Up" link="/" />
    </form>
  );
};
