import React from 'react';
import {} from './Table.less';

export default (props) => {
  let { className, skin, columns, data } = props;
  let headElm = columns.map((val, idx) => {
    let text = typeof val === 'string' ? val : val.text;
    return <th key={idx}>{text}</th>;
  });

  let bodyElm = data.map((val, idx) => {
    let rowElm = columns.map((column, idx) => {
      return <td key={idx}>{val[column]}</td>;
    });

    return <tr key={idx}>{rowElm}</tr>;
  });

  let rootClasses = ['Gaia-table-Table']
    .concat(skin ? `skin-${skin}` : [])
    .concat(className ? className.split(' ') : []);

  let rootProps = Object.assign({}, props, {
    className: rootClasses.join(' ')
  });

  return (
    <table {...rootProps}>
      <thead>
        <tr>
          {headElm}
        </tr>
      </thead>
      <tbody>
        {bodyElm}
      </tbody>
    </table>
  );
};
