import {} from './InputGroupAddons.less';
import React from 'react';

export var InputGroupLabel = (props) => {
  let classes = ['Gaia-forms-InputGroupLabel'].concat(props.className ? props.className.split(' ') : []);
  let newProps = Object.assign({}, props, {
    className: classes.join(' ')
  });

  return (
    <div {...newProps}>{props.children}</div>
  );
};

export var InputGroupButton = (props) => {
  let classes = ['Gaia-forms-InputGroupButton'].concat(props.className ? props.className.split(' ') : []);
  let newProps = Object.assign({}, props, {
    type: 'button',
    className: classes.join(' ')
  });

  return (
    <button {...newProps}>{props.children}</button>
  );
};
