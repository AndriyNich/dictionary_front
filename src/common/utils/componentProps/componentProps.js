import { setFirstCharToUpper } from 'utils/function/string';

export default class componentProps {
  constructor(params = {}) {
    const {
      control = {},
      errors = {},
      controlName = '',
      label = '',
      placeholder = '',
      additionalErrorType = '',
    } = params;
    this._control = control;
    this._errors = errors;
    this._controlName = controlName;
    this._label = label;
    this._placeholder = placeholder;
    this._additionalErrorType = additionalErrorType;
  }

  get control() {
    return this._control;
  }

  get errors() {
    return this._errors;
  }

  get controlName() {
    return this._controlName;
  }

  set controlName(name) {
    this._controlName = name;
  }

  get label() {
    return setFirstCharToUpper(this.#getLabel());
  }

  set label(label) {
    this._label = label;
  }

  get placeholder() {
    if (this._placeholder && this._placeholder !== '') {
      return this._placeholder;
    }
    return `Enter ${this.#getLabel()}`;
  }

  get additionalErrorType() {
    return this._additionalErrorType;
  }

  set additionalErrorType(additionalErrorType) {
    this._additionalErrorType = additionalErrorType;
  }

  #getLabel() {
    if (this._label && this._label !== '') {
      return this._label;
    }

    return this._controlName;
  }
}
