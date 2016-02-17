import React from 'react';
import InputGroup from 'forms/InputGroup';
import { InputGroupLabel, InputGroupButton } from 'forms/InputGroupAddons';
import Input from 'forms/Input';
import { Grid, Col, Row } from 'grid/Grid';
import reactElementToJSXString from 'react-element-to-jsx-string';

let description = `
\`import InputGroup from 'Gaia/components/forms/InputGroup';\`\n
\`import { InputGroupLabel, InputGroupButton } from 'Gaia/components/forms/InputGroupAddons';\`\n
\`import Input from 'Gaia/Components/forms/Input';\`
`;

let element = {};

element.label = 
<InputGroup>
  <InputGroupLabel>Table</InputGroupLabel>
  <Input placeholder="table name" />
</InputGroup>
;

element.button = 
<InputGroup>
  <Input placeholder="table name" />
  <InputGroupButton>Go</InputGroupButton>
</InputGroup>
;

element.both = 
<InputGroup>
  <InputGroupLabel>Table</InputGroupLabel>
  <Input placeholder="table name" />
  <InputGroupButton>Go</InputGroupButton>
</InputGroup>
;

class InputWrap extends React.Component {
  render() {
    let type = this.props.type;

    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Col sm={12} md={6}>
              {element[type]}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
};

class InputGroupSG extends React.Component {
  static styleguide = {
    index: '2.2',
    category: 'Forms',
    title: 'Input Group',
    description: description,
    exampleComponent: InputWrap,
    examples: [
      {
        tabTitle: 'label',
        props: {
          type: 'label'
        },
        code: reactElementToJSXString(element.label)
      },
      {
        tabTitle: 'button',
        props: {
          type: 'button'
        },
        code: reactElementToJSXString(element.button)
      },
      {
        tabTitle: 'label & button',
        props: {
          type: 'both'
        },
        code: reactElementToJSXString(element.both)
      }
    ]
  }
};

export default InputGroupSG;
