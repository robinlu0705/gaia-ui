import React from 'react';
import Input from 'forms/Input';
import { Grid, Col, Row } from 'grid/Grid';

let description = `
\`import Input from 'Gaia/Components/forms/Input'\`
`;

class InputWrap extends React.Component {
  render() {
    let disabled = this.props.disabled;

    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col sm={12} md={6}>
              <Input disabled={disabled} />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
};

class InputSG extends React.Component {
  static styleguide = {
    index: '2.1',
    category: 'Forms',
    title: 'Simple Input',
    description: description,
    exampleComponent: InputWrap,
    examples: [
      {
        tabTitle: 'normal',
        props: {
        },
        code: '<Input />'
      },
      {
        tabTitle: 'disabled',
        props: {
          disabled: true
        },
        code: '<Input disabled={true} />'
      }
    ]
  }
};

export default InputSG;
