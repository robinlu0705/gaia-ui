var expect = require('expect');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import Form from '../Form.jsx';
import Input from '../Input.jsx';
import Submit from '../Submit.jsx';

describe('Form with empty input', () => {

  var validation = {
    '1': {
      required: function(input) {
        if (input && input !== '') {
          return true;
        }
        return false
      }
    }
  };

  var validationError = {
    '1': {
      required: 'required!'
    }
  };
  
  var form = TestUtils.renderIntoDocument(
    <Form validation={validation} validationError={validationError}>
      <Input name='1' />
      <Submit />
    </Form>
  );

  var formNode = ReactDOM.findDOMNode(form);
  var inputWrapNode = formNode.querySelector('.Gaia-forms-Input');
  var inputNode = inputWrapNode.querySelector('[type=text]');
  var errorNode = inputWrapNode.querySelector('.msg');
  var submitNode = formNode.querySelector('[type=submit]');

  it('is initially valid', () => {
    expect(inputWrapNode.className.indexOf('is-error') === -1).toEqual(true);
    expect(errorNode.textContent).toEqual('');
    expect(submitNode.disabled).toEqual(false);
  });

  it('but turn into invalid after being submitted', () => {
    TestUtils.Simulate.submit(formNode);
    expect(inputWrapNode.className.indexOf('is-error') === -1).toEqual(false);
    expect(errorNode.textContent).toEqual('required!');
    expect(submitNode.disabled).toEqual(true);
  });

  it('back into valid after filling input', () => {
    inputNode.value = 'something';
    TestUtils.Simulate.change(inputNode);
    expect(inputWrapNode.className.indexOf('is-error') === -1).toEqual(true);
    expect(errorNode.textContent).toEqual('');
    expect(submitNode.disabled).toEqual(false);
  });
  
});