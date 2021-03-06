import React, { Component } from 'react';

class Radio extends Component {
  render() {
    return (
      <div class="form-check float-left">
        <label class="form-check-label">
          <input
            type="radio"
            color={this.props.color}
            class="form-check-input"
            value={this.props.value}
            checked={this.props.checked}
            onChange={this.props.onChange}
          />
          {this.props.label}
          <i class="input-helper"></i>
        </label>
      </div>
    );
  }
}

export default Radio;
