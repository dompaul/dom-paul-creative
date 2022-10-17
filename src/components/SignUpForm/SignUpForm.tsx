import React from 'react';
import axios from 'axios';
import cn from 'classnames';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import dayjs from 'dayjs';
import {
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  Radio,
  RadioGroup,
  TextField,
} from '@mui/material';
import {
  DatePicker,
  DesktopDatePicker,
  LocalizationProvider,
  TimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { toast, ToastContainer, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Label } from 'components/Label';

import { Input } from '../Input';

import styles from './SignUpForm.module.scss';

type variant = '3' | '2' | '1';

interface SignUpFormValues {
  name: string;
  companyPosition: string;
  companyName: string;
  businessEmail: string;
  businessMobile: string;
  businessPhone?: string;
  numberOfCasingInterest?: string;
  finishingInterest?: string;
  gold?: boolean;
  chrome?: boolean;
  black?: boolean;
  cream?: boolean;
  white?: boolean;
  beautyBarInterest?: string;
  virtualMeetDate?: string;
  virtualMeetTime?: string;
  message?: string;
}

interface SignUpFormProps {
  variant?: variant;
}

const TOAST_CONFIG: ToastOptions = {
  position: 'bottom-center',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const SignUpForm: React.FC<SignUpFormProps> = ({ variant = '2' }) => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dateValue, setDateValue] = React.useState<Date | null>(null);
  const [timeValue, setTimeValue] = React.useState<Date | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().required('This is a required field'),
        companyPosition: Yup.string().required('This is a required field'),
        companyName: Yup.string().required('This is a required field'),
        businessEmail: Yup.string().required('This is a required field'),
        businessMobile: Yup.string().required('This is a required field'),
        businessPhone: Yup.string(),
        numberOfCasingInterest: Yup.string(),
        finishingInterest: Yup.string(),
        chrome: Yup.boolean(),
        gold: Yup.boolean(),
        black: Yup.boolean(),
        cream: Yup.boolean(),
        white: Yup.boolean(),
        beautyBarInterest: Yup.string(),
        virtualMeetDate: Yup.date().nullable(),
        virtualMeetTime: Yup.date().nullable(),
        message: Yup.string(),
      }),
    ),
  });

  const notify = {
    success: () =>
      toast.success(
        'Enquiry successful. Thank you for your interest!',
        TOAST_CONFIG,
      ),
    error: () =>
      toast.error('Something went wrong, please try again', TOAST_CONFIG),
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      `${event.target.name}` as keyof SignUpFormValues,
      event.target.checked,
    );
  };

  const onSubmit = async (data: SignUpFormValues) => {
    try {
      setLoading(true);
      await axios.post(
        '/api/email',
        {
          name: data.name,
          companyPosition: data.companyPosition,
          companyName: data.companyName,
          businessEmail: data.businessEmail,
          businessMobile: data.businessMobile,
          businessPhone: data.businessPhone,
          numberOfCasingInterest: data.numberOfCasingInterest,
          gold: data.gold,
          chrome: data.chrome,
          black: data.black,
          cream: data.cream,
          white: data.white,
          beautyBarInterest: data.beautyBarInterest,
          ...(data.virtualMeetDate && {
            virtualMeetDate: dayjs(data.virtualMeetDate).format('DD/MM/YYYY'),
          }),
          ...(data.virtualMeetTime && {
            virtualMeetTime: dayjs(data.virtualMeetTime).format('HH:mm'),
          }),
          message: data.message,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      setLoading(false);
      notify.success();
      reset();
    } catch {
      setLoading(false);
      notify.error();
    }
  };

  return (
    <div className={styles['sign-up-form-container']}>
      <ToastContainer style={{ width: '300px', height: '60px' }} />
      <form
        className={cn(styles['sign-up-form'], {
          [styles[`sign-up-form--${variant}`]]: variant,
        })}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name="name"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Input
                label="Your name"
                id={name}
                type="text"
                required
                value={value}
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.name && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.name.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="companyPosition"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Input
                label="What is your company position?"
                id={name}
                type="text"
                required
                value={value}
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.companyPosition && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.companyPosition.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="companyName"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Input
                label="What is your company name?"
                id={name}
                type="text"
                required
                value={value}
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.companyName && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.companyName.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="businessEmail"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Input
                label="What is your business email address?"
                id={name}
                required
                value={value}
                type="text"
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.businessEmail && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.businessEmail.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="businessMobile"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Input
                label="What is your business contact mobile number?"
                id={name}
                required
                value={value}
                type="text"
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.businessMobile && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.businessMobile.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="businessPhone"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Input
                label="What is your business land line phone number?"
                id={name}
                value={value}
                type="text"
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.businessPhone && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.businessPhone.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="numberOfCasingInterest"
          control={control}
          defaultValue=""
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Label
                htmlFor={name}
                text="How many Botanical Shower Casing's would you be interested in buying?"
              />
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name={name}
                value={value}
                onChange={onChange}
              >
                <FormControlLabel
                  value="10-29 casings (£120 per casing)"
                  label="10-29 casings (£120 per casing)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="30-49 casings (£115 per casing)"
                  label="30-49 casings (£115 per casing)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="50-99 casings (£110 per casing)"
                  label="50-99 casings (£110 per casing)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="100-199 casings (£105 per casing)"
                  label="100-199 casings (£105 per casing)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="200-299 casings (£100 per casing)"
                  label="200-299 casings (£100 per casing)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="300-499 casings (95 per casing)"
                  label="300-499 casings (95 per casing)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="500+ casings (£90 per casing)"
                  label="500+ casings (£90 per casing)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
              </RadioGroup>
              {errors.numberOfCasingInterest && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.numberOfCasingInterest.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="finishingInterest"
          control={control}
          defaultValue=""
          render={({ field: { onChange, name } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Label
                htmlFor={name}
                text="What type of finishing would you be interested in buying?"
              />
              <FormGroup>
                <FormControlLabel
                  className={styles['sign-up-form__radio-label']}
                  control={
                    <Checkbox
                      onChange={(event) => handleChange(event)}
                      name="chrome"
                    />
                  }
                  label="Chrome"
                />
                <FormControlLabel
                  className={styles['sign-up-form__radio-label']}
                  control={
                    <Checkbox
                      onChange={(event) => handleChange(event)}
                      name="gold"
                    />
                  }
                  label="Gold"
                />
                <FormControlLabel
                  className={styles['sign-up-form__radio-label']}
                  control={
                    <Checkbox
                      onChange={(event) => handleChange(event)}
                      name="black"
                    />
                  }
                  label="Black"
                />
                <FormControlLabel
                  className={styles['sign-up-form__radio-label']}
                  control={
                    <Checkbox
                      onChange={(event) => handleChange(event)}
                      name="cream"
                    />
                  }
                  label="Cream"
                />
                <FormControlLabel
                  className={styles['sign-up-form__radio-label']}
                  control={
                    <Checkbox
                      onChange={(event) => handleChange(event)}
                      name="white"
                    />
                  }
                  label="White"
                />
              </FormGroup>
              {errors.finishingInterest && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.finishingInterest.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="beautyBarInterest"
          control={control}
          defaultValue=""
          render={({ field: { onChange, name, value } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Label
                htmlFor={name}
                text="Which Botanical Shower Beauty Bar, would you be interested in buying?"
              />
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue=""
                name={name}
                value={value}
                onChange={onChange}
              >
                <FormControlLabel
                  value="Rose (50-99 units £6.97), (100-199 £6.47) (200-499 £5.97) (500+ £5.47)"
                  label="Rose (50-99 units £6.97), (100-199 £6.47) (200-499 £5.97) (500+ £5.47)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="Vanilla (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  label="Vanilla (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="Carrot Tissue (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  label="Carrot Tissue (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="Calendula (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  label="Calendula (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="Gooseberry (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  label="Gooseberry (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="No Fragrance with colours (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+
                    £4.47)"
                  label="No Fragrance with colours (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+
                    £4.47)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
                <FormControlLabel
                  value="No Colour No Fragrance (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  label="No Colour No Fragrance (50-99 units £5.97) (100-199 £5.47) (200-499 £4.97) (500+ £4.47)"
                  control={<Radio />}
                  className={styles['sign-up-form__radio-label']}
                />
              </RadioGroup>
              {errors.beautyBarInterest && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.beautyBarInterest.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="virtualMeetDate"
          control={control}
          render={({ field: { onChange, name } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Label
                htmlFor={name}
                text="What is your preferred date for an initial virtual meeting or phone call? (We are available from the 31st of October)"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  inputFormat="DD/MM/YYYY"
                  value={dateValue}
                  onChange={(value) => {
                    setDateValue(value);
                    onChange(value);
                  }}
                  className={styles['sign-up-form__date-picker']}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: 'dd/mm/yyyy',
                      }}
                    />
                  )}
                />
              </LocalizationProvider>

              {errors.virtualMeetDate && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.virtualMeetDate.message}
                </span>
              )}
            </div>
          )}
        />
        <Controller
          name="virtualMeetTime"
          control={control}
          render={({ field: { onChange, name } }) => (
            <div className={cn(styles['sign-up-form__input'])}>
              <Label
                htmlFor={name}
                text="What is your preferred time for an initial virtual meeting or phone call? (We are available from the 31st of October)"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  value={timeValue}
                  inputFormat="HH:mm"
                  onChange={(value) => {
                    setTimeValue(value);
                    onChange(value);
                  }}
                  className={styles['sign-up-form__date-picker']}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        placeholder: 'hr:min',
                      }}
                    />
                  )}
                />
              </LocalizationProvider>

              {errors.virtualMeetTime && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.virtualMeetTime.message}
                </span>
              )}
            </div>
          )}
        />
        <div>
          <h3 className={styles['sign-up-form__text-header']}>
            FILLING OUT INTEREST FORM.
          </h3>

          <h3 className={styles['sign-up-form__text-header']}>Contact</h3>
          <p className={styles['sign-up-form__text']}>
            After placing your expression of interest, we will follow up with
            you by email or phone call to learn how we can best serve you.
          </p>

          <h3 className={styles['sign-up-form__text-header']}>
            Delivery times
          </h3>
          <p className={styles['sign-up-form__text']}>
            As this product is new to the market and we are in the mass
            production stage, there may be a 12-16 week waiting period for
            delivery.
          </p>

          <h3 className={styles['sign-up-form__text-header']}>
            Pre-Sale Payment Terms
          </h3>
          <p className={styles['sign-up-form__text']}>
            We are currently providing a pre-sale option, whereas you can be
            among the first to secure your casing and tablet purchases while
            receiving updates to track the estimated delivery date.
          </p>

          <h3 className={styles['sign-up-form__text-header']}>
            Incompatible Shower Apparatus
          </h3>
          <p className={styles['sign-up-form__text']}>
            Some hotel shower apparatus may not be compatitible, however your
            hotel guests do not need to miss out from the Botanical Shower
            experience. Our qualified engineer, designer and founders, would
            welcome an informal discussion with you about tweaking the product
            and allowing this to be bespoke for your hotel at an extra cost.
          </p>

          <h3 className={styles['sign-up-form__text-header']}>REFUND POLICY</h3>
          <p className={styles['sign-up-form__text']}>
            Customers are welcome to request a refund, however, all products are
            non- refundable 30 days after delivery or once the packaging seal
            has been broken.
          </p>

          <h3 className={styles['sign-up-form__text-header']}>Subscription</h3>
          <p className={styles['sign-up-form__text']}>
            Discounts added to subscriptions will vary based on subscription
            intervals and infusion combinations, to be explained in
            <a href="#subscription"> Subscription Chart</a>
          </p>
        </div>
        <Controller
          name="message"
          control={control}
          render={({ field: { onChange, name, value } }) => (
            <div
              className={cn(
                styles['sign-up-form__input'],
                styles['sign-up-form__input--textarea'],
              )}
            >
              <Input
                label="Please write any comments or feedback about your Hotel 360 expo experience at our stand below"
                id={name}
                value={value}
                textArea={true}
                type="text"
                onChange={(event) => onChange(event.target.value)}
              />
              {errors.message && (
                <span className={styles['sign-up-form__input-error']}>
                  {errors.message.message}
                </span>
              )}
            </div>
          )}
        />
        <button type="submit" className={styles['sign-up-form__submit']}>
          {loading ? <CircularProgress size="30px" /> : 'Submit'}
        </button>
      </form>
    </div>
  );
};
