import React from 'react';
import Form from 'forms/Form';
import Input from 'forms/Input';
import Submit from 'forms/Submit';

let code = `
var validation1 = {
  '1': {
    required: function(input) {
      if (input && input !== '') {
        return true;
      }
      return false
    },
    /*num: function(input) {

    }*/
  },
  '2': {
  }
};

var validationError1 = {
  '1': {
    required: 'required!',
    num: 'only numbers!'
  },
  '2': {
    
  }
}

<Form validations={validation1} validationErrors={validationError1}>
  <Input vid='1' />
  <Input vid='2' />
  <Submit />
</Form>
`;

var validation1 = {
  '1': {
    required: function(input) {
      if (input && input !== '') {
        return true;
      }
      return false
    },
    /*num: function(input) {

    }*/
  },
  '2': {
  }
};

var validationError1 = {
  '1': {
    required: 'required!',
    num: 'only numbers!'
  },
  '2': {
    
  }
}

class FormSG extends React.Component {
  static styleguide = {
    index: '2.1',
    category: 'Forms',
    title: 'Form with validation',
    description: '',
    code: code,
    className: ''
  }

  render() {
    return (
      <div>
        <Form validations={validation1} validationErrors={validationError1}>
          <Input vid='1' />
          <Input vid='2' />
          <Submit />
        </Form>
      </div>
    );
  }
}

export default FormSG;