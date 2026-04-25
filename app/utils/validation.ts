const YUP_EMAIL_REGEX =
  // eslint-disable-next-line no-control-regex
  /^((([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
const NO_WHITESPACE_REGEX = /\S+.*/;
const PHONE_REGEX = /^[+]?[\d\s.\-()]{7,20}$/im;
const UUID_REGEX = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
const USERNAME_REGEX = /^(?=[a-zA-Z0-9_\-–]{4,32}$)(?!.*[_\-–]{2})[^_\-–].*[^_\-–]$/;

const validation = {
  isRequired:
    (
      config: { message: string } = { message: 'Field is required' }
    ): ((value: string) => string | null) =>
    (value: string): string | null => {
      return value === '' ? config?.message : null;
    },

  isMinLength:
    (
      config: { message: string; length: number } = {
        message: 'Minimum length is 3 characters',
        length: 3,
      }
    ): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return value.length < config.length ? config.message : null;
    },

  isMaxLength:
    (
      config: { message: string; length: number } = {
        message: 'Maximum length is 3 characters',
        length: 3,
      }
    ): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return value.length > config.length ? config.message : null;
    },

  isLength:
    (
      config: { message: string; length: number } = {
        message: 'Must only be 2 characters',
        length: 2,
      }
    ): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return value.length !== config.length ? config.message : null;
    },

  isEmail:
    (
      config: { message: string } = { message: 'Must use valid email address' }
    ): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return !YUP_EMAIL_REGEX.test(value) ? config.message : null;
    },

  isPhone:
    (
      config: { message: string } = { message: 'Must use valid phone number' }
    ): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return !PHONE_REGEX.test(value) ? config.message : null;
    },

  isNumber:
    (config: { message: string }): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') {
        return null;
      }
      return isNaN(+value) ? config.message : null;
    },

  isNaN:
    (config: { message: string }): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') {
        return null;
      }
      return isNaN(+value) ? null : config.message;
    },

  isEmpty: (value: string) => {
    return !NO_WHITESPACE_REGEX.test(value);
  },

  isPositiveNumber:
    (config: { message: string }): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return parseInt(value) < 0 ? config.message : null;
    },

  isNotZero:
    (config: { message: string }): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return parseInt(value) === 0 ? config.message : null;
    },

  isUUID:
    (config: { message: string }): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return !UUID_REGEX.test(value) ? config.message : null;
    },

  isUsername:
    (config: { message: string }): ((value: string) => string | null) =>
    (value: string): string | null => {
      if (value === '') return null;
      return !USERNAME_REGEX.test(value) ? config.message : null;
    },
};

export default validation;
