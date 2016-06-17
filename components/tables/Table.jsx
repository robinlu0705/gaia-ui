import React from 'react';
import {} from './Table.less';

let Table = (props) => {
  let { className, skin, columns, data } = props;
  let headElm = columns.map((column, idx) => {
    let text = column.text;
    return <th key={idx}>{text}</th>;
  });

  let bodyElm = data.map((row, idx) => {
    let rowElm = columns.map((column, idx) => {
      let key = column.key;
      return <td key={idx}>{row[key]}</td>;
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

Table.propTypes = {
  skin: React.PropTypes.oneOf(['primary', 'contrast', 'secondary', 'tertiary']),
  /**
   *  array of { text, key },
   *  text is for <thead> displaying
   *  key is the property existing in props.data[]
   */
  columns: React.PropTypes.arrayOf(React.PropTypes.shape({
    text: React.PropTypes.string,
    key: React.PropTypes.string.isRequired
  })),

  /**
   *  each object has properties declared in props.columns[].key
   */
  data: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Table;
