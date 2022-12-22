import PropTypes from 'prop-types';
import { ButtonSet, Button } from './FeedbackOptions.styled.js';

const FeedbackOptions = ({ optionsKey, onLeaveFeedback }) => (
  <ButtonSet>
    {optionsKey.map(option => (
      <Button
        name={option}
        key={option}
        type="button"
        onClick={onLeaveFeedback}
      >
        {option[0].toUpperCase() + option.substring(1)}
      </Button>
    ))}
  </ButtonSet>
);

FeedbackOptions.propTypes = {
  optionsKey: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
