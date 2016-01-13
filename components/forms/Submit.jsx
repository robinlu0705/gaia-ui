import {} from './Submit.less';
import React from 'react';

class Submit extends React.Component {
  render() {
    let checkFormValid = this.context.FormMixin && this.context.FormMixin.checkFormValid || function() {};
    let isFormValid = checkFormValid();
    let attrDisabled = isFormValid && '' || 'disabled';
    return (
      <input type="submit" value="submit" className="Gaia-forms-Submit" disabled={!isFormValid} />
    )
  }
}

Submit.contextTypes = {
  FormMixin: React.PropTypes.object
};

Submit.propTypes = {
  onSubmit: React.PropTypes.func
};

export default Submit;
