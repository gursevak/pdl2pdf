import React from 'react';
import PropTypes from 'prop-types'
import './Body.css'


export default class ConversionInput extends React.PureComponent {
  static propTypes = {
    textChange: PropTypes.func
  };

  handleChange = event => {
    this.props.textChange(event);
  };

  render() {
    return (
      <div>
        <div className="component-pdl-input">
          <div>
            <input placeholder="Paste manuscript URL link here, ex: http://panjabdigilib.org/webuser/searches/displayPage.jsp?ID=8497&page=1&CategoryID=1" onChange={this.handleChange} />
          </div>
          <div className="component-pdl-user-message">
            {this.props.outputLink}
          </div>
        </div>
      </div>
    );
  }
}
