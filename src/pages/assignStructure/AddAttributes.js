import React, { Component } from 'react';
import FaIcon from '../../common/FaIcon';
import IconButton from '../../common/forms/IconButton';

class AddAttributes extends Component {
  render() {
    return (
      <>
        <div class="col-sm-4">
          <input
            type="text"
            class="form-control"
            placeholder="Name"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onNameChange(e, this.props.index)}
            value={this.props.nameValue}
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="TypeOfInput"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onTypeOfInputChange(e, this.props.index)}
            value={this.props.typeOfInputValue}
          />
        </div>
        <div class="col-sm-3">
          <input
            type="text"
            class="form-control"
            placeholder="UoM"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onUoMChange(e, this.props.index)}
            value={this.props.uomValue}
          />
        </div>
        <div class="col-sm-2">
          <IconButton
            iconName="faTimesCircle"
            index={this.props.index}
            onClick={() => this.props.onAttributeRemove(this.props.index)}
          />
        </div>
      </>
    );
  }
}

export default AddAttributes;
