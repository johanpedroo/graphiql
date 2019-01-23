/**
 *  Copyright (c) Facebook, Inc. and its affiliates.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * ToolbarButton
 *
 * A button to use within the Toolbar.
 */
export class ToolbarInput extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  };

  render() {
    return (
      <input
        className="toolbar-input"
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
        value={this.props.value}
      />
    );
  }

  handleChange = e => {
    this.props.onChange(e);
  };
}
export default ToolbarInput;

