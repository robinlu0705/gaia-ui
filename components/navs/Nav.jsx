import {} from './Nav.less';
import React from 'react';

let Nav = (props) => {
  let tabs = props.tabs || [];
  let selected = props.selected;
  let list = [];
  

  tabs.forEach((tab, idx) => {
    let className = idx === selected ? 'is-selected' : '';
    let item = (
      <li key={idx} className={className}>{tab}</li>
    );

    list.push(item);
  });

  return (
    <nav className="Gaia-navs-Nav">
      <ul>
        {list}
      </ul>
    </nav>
  );
}

export default Nav;
