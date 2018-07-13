import React, { Component } from 'react';

class toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState(state => ({ isOpen: !state.isOpen }));
  }

  open() {
    this.setState({ isOpen: true });
  }

  close() {
    this.setState({ isOpen: false });
  }

  render() {
    return this.props.children({
      toggle: this.toggle,
      open: this.open,
      close: this.close,
      isOpen: this.state.isOpen,
    })
  }
}

export default toggle;