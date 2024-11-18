// prettier-ignore
// eslint-disable-next-line
const YUP_EMAIL_REGEXP =/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
const NO_WHITESPACE_REGEXP = /\S+.*/;
// eslint-disable-next-line
const PHONE_REGEXP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const UUID_REGEXP = /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/;
const USERNAME_REGEXP = /^(?=[a-zA-Z0-9_\-–]{4,32}$)(?!.*[_\-–]{2})[^_\-–].*[^_\-–]$/;

const validation = {
  isRequired:
    (config: any = { message: 'Field is required' }): any =>
    (value: string): string | null => {
      return value === '' ? config?.message : null;
    },

  isMinLength:
    (config: any = { message: 'Minimum length is 3 characters', length: 3 }): any =>
    (value: string): string | null => {
      if (value === '') return null;
      return value.length < config.length ? config.message : null;
    },

  isMaxLength:
    (config: any = { message: 'Maximum length is 3 characters', length: 3 }) =>
    (value: string): string | null => {
      if (value === '') return null;
      return value.length > config.length ? config.message : null;
    },

  isLength:
    (config: any = { message: 'Must only be 2 characters', length: 2 }): any =>
    (value: string): string | null => {
      if (value === '') return null;
      return value.length !== config.length ? config.message : null;
    },

  isEmail:
    (config: any = { message: 'Must use valid email address' }): any =>
    (value: string): string | null => {
      if (value === '') return null;
      return !YUP_EMAIL_REGEXP.test(value) ? config.message : null;
    },

  isPhone:
    (config: any = { message: 'Must use valid phone number' }): any =>
    (value: string): string | null => {
      if (value === '') return null;
      return !PHONE_REGEXP.test(value) ? config.message : null;
    },

  isNumber:
    (config: any): any =>
    (value: string): string | null => {
      if (value === '') {
        return null;
      }
      return isNaN(+value) ? config.message : null;
    },

  isNaN:
    (config: any): any =>
    (value: string): string | null => {
      if (value === '') {
        return null;
      }
      return isNaN(+value) ? null : config.message;
    },

  isEmpty: (value: any) => {
    return !NO_WHITESPACE_REGEXP.test(value);
  },

  isPositiveNumber:
    (config: any): any =>
    (value: string): string | null => {
      if (value === '') return null;
      return parseInt(value) < 0 ? config.message : null;
    },

  isNotZero:
    (config: any): any =>
    (value: string): string | null => {
      if (value === '') return null;
      return parseInt(value) === 0 ? config.message : null;
    },

  isUUID:
    (config: any): any =>
    (value: string): string | null => {
      if (value === '') return null;
      return !UUID_REGEXP.test(value) ? config.message : null;
    },

  isUsername:
    (config: any): any =>
    (value: string): string | null => {
      if (value === '') return null;
      return !USERNAME_REGEXP.test(value) ? config.message : null;
    },
};

export default validation;
