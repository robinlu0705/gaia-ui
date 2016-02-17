import React from 'react';
import Form from 'forms/Form';
import Input from 'forms/Input';
import Submit from 'forms/Submit';
import { Grid, Col, Row } from 'grid/Grid';

let description = `
\`import InputGroup from 'Gaia/components/forms/Form';\`\n
\`import Input from 'Gaia/Components/forms/Input';\`\n
\`import Submit from 'Gaia/Components/forms/Submit';\`\n
`;

let additionalCode = `
let validation = {
  'input1': {
    required: function(input) {
      if (input && input !== '') {
        return true;
      }
      return false
    },
    num: function(input) {
      return !isNaN(input)
    }
  },
  'input2': {
    required: function(input) {
      if (input && input !== '') {
        return true;
      }
      return false
    },
    maxLength: function(input) {
      return (input ? input.length < 5 : true)
    }
  }
};

let validationError = {
  'input1': {
    required: 'required!',
    num: 'only numbers!'
  },
  'input2': {
    maxLength: 'too long'
  }
};
`;

let validation = {
  'input1': {
    required: function(input) {
      if (input && input !== '') {
        return true;
      }
      return false
    },
    num: function(input) {
      return !isNaN(input)
    }
  },
  'input2': {
    required: function(input) {
      if (input && input !== '') {
        return true;
      }
      return false
    },
    maxLength: function(input) {
      return (input ? input.length < 5 : true)
    }
  }
};

let validationError = {
  'input1': {
    required: 'required!',
    num: 'only numbers!'
  },
  'input2': {
    required: 'required!',
    maxLength: 'too long'
  }
}

let sampleCode = `
<Form validation={validation} validationError={validationError}>
  <Input name='input1' placeholder="enter some numbers" />
  <Input name='input2' placeholder="no longer than 4" />
  <Submit />
</Form>
`;

class FormSG extends React.Component {
  static styleguide = {
    index: '2.3',
    category: 'Forms',
    title: 'Form with validation',
    description: '',
    code: additionalCode + sampleCode,
    className: ''
  }

  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Form validation={validation} validationError={validationError}>
            <Col sm={12} md={5}>
              <Input name='input1' placeholder="enter some numbers" />
            </Col>
            <Col sm={12} md={5}>
              <Input name='input2' placeholder="no longer than 4" />
            </Col>
            <Col sm={12} md={2}>
              <Submit />
            </Col>
          </Form>
        </Row>
      </Grid>
    );
  }
}

export default FormSG;