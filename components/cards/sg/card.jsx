import React from 'react';
import Card from 'cards/Card';

let code = `
<Card title="Title">
  Lorem ipsum dolor sit amet, mattis pellentesque. Orci ultricies per.<br />
  Quisque in praesent, justo mi lorem odio felis sed, iaculis sed, lacus nunc vestibulum nulla ac.<br />
  Torquent molestie semper, dictum mauris venenatis id in egestas, orci posuere ligula non.<br />
  Dolor nam, neque a ultrices tempor laoreet molestie nulla.<br />
  Vehicula penatibus viverra arcu at ac, id metus congue elit sed.<br />
  Tempore ullamcorper nunc non vestibulum et, non tempor nullam in at.<br />
  Ut quis nullam nunc ultrices, nec in diam nascetur donec porttitor eget.<br />
  Molestie nec sed sem commodo, imperdiet maecenas ac odio.<br />
  Vel sodales, vehicula vestibulum sollicitudin justo consequat sit integer, odio diam erat.<br />
</Card>
`;

let propTypes = Card.propTypes;

class CardSg extends React.Component {
  static displayName = 'CardExample'

  static styleguide = {
    index: '1.1',
    category: 'Cards',
    title: 'Card with title',
    description: '',
    code: code,
    className: ''
  }

  static propTypes = {
    title: React.PropTypes.string
  }

  render() {
    let divStyle = {
      backgroundColor: '#EDEFF0',
      padding: '20px'
    };

    return (
      <div style={divStyle}>
        <div style={{marginBottom: '10px', color: '#6d6d6d'}}>@background-color: #EDEFF0</div>
        <Card title="Title">
          Lorem ipsum dolor sit amet, mattis pellentesque. Orci ultricies per.<br />
          Quisque in praesent, justo mi lorem odio felis sed, iaculis sed, lacus nunc vestibulum nulla ac.<br />
          Torquent molestie semper, dictum mauris venenatis id in egestas, orci posuere ligula non.<br />
          Dolor nam, neque a ultrices tempor laoreet molestie nulla.<br />
          Vehicula penatibus viverra arcu at ac, id metus congue elit sed.<br />
          Tempore ullamcorper nunc non vestibulum et, non tempor nullam in at.<br />
          Ut quis nullam nunc ultrices, nec in diam nascetur donec porttitor eget.<br />
          Molestie nec sed sem commodo, imperdiet maecenas ac odio.<br />
          Vel sodales, vehicula vestibulum sollicitudin justo consequat sit integer, odio diam erat.<br />
        </Card>
      </div>
    );
  }
}

export default CardSg;
