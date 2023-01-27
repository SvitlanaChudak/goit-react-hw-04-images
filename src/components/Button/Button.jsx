import PropTypes from 'prop-types';
import { ButtonSubmit } from './Button.styled';

export const Button = ({ onloadMore }) => {
    return (
        <ButtonSubmit type="button" onClick={onloadMore}>Load more</ButtonSubmit>
    )
} 

Button.propTypes = {
  onloadMore: PropTypes.func,
};