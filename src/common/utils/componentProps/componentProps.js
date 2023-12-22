import { setFirstCharToUpper } from 'utils/function/string';

export default class componentProps {
  constructor(params = {}) {
    const {
      control = {},
      errors = {},
      controlName = [],
      label = [],
      placeholder = [],
      additionalErrorType = '',
      comparisonErrorType = '',
    } = params;

    this._control = control;
    this._errors = errors;
    if (Array.isArray(controlName)) {
      this._controlName = controlName;
    } else {
      this._controlName = [controlName];
    }

    if (Array.isArray(label)) {
      this._label = label;
    } else {
      this._label = [label];
    }

    if (Array.isArray(placeholder)) {
      this._placeholder = placeholder;
    } else {
      this._placeholder = [placeholder];
    }

    this._comparisonErrorType = comparisonErrorType;
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

  set controlName(value) {
    this._controlName = value;
  }

  get label() {
    return this.#getLabel().map(elm => setFirstCharToUpper(elm));
  }

  set label(value) {
    this._label = value;
  }

  get placeholder() {
    if (this._placeholder && this._placeholder.length !== 0) {
      return this._placeholder;
    }

    return this.#getLabel().map(elm => `Enter ${elm.toLowerCase()}`);
  }

  get additionalErrorType() {
    return this._additionalErrorType;
  }

  set additionalErrorType(value) {
    this._additionalErrorType = value;
  }

  get comparisonErrorType() {
    return this._comparisonErrorType;
  }

  set comparisonErrorType(value) {
    this._comparisonErrorType = value;
  }

  #getLabel() {
    if (this._label && this._label.length !== 0) {
      return this._label;
    }

    return this._controlName;
  }
}
