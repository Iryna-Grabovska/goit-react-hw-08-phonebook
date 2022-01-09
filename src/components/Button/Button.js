import s from './Button.module.css';
import PropTypes from 'prop-types';

export default function Button({ label, onClick, type }) {
  return (
    <button className={s.formButton} type={type} onClick={onClick}>
      {label}
    </button>
  );
}
Button.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
