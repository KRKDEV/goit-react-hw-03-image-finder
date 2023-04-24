import { Component } from 'react';
import css from './Button.module.css';
import propTypes from 'prop-types';

export class Button extends Component {
  render() {
    const { callback, text, type } = this.props;
    return (
      <>
        <button className={css.Button} type={type} onClick={callback}>
          {text === 'true' && 'Load more'}
        </button>
      </>
    );
  }
}

Button.propTypes = {
  callback: propTypes.func,
  text: propTypes.string,
  type: propTypes.string,
};
