import { StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';
import Notification from 'components/Notification';

const Statistics = ({
  optionsKey,
  optionsValue,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const notEmpty = !!optionsValue.reduce((acc, value) => acc + value, 0);

  const total = countTotalFeedback();
  const percentageGood = countPositiveFeedbackPercentage();

  return notEmpty ? (
    <ul>
      {optionsKey.map((option, idx) => (
        <StatisticsItem key={option}>
          {option[0].toUpperCase() + option.substring(1)}: {optionsValue[idx]}
        </StatisticsItem>
      ))}
      <StatisticsItem>Total feedbacks: {total}</StatisticsItem>
      <StatisticsItem>Positive feedbacks: {percentageGood} </StatisticsItem>
    </ul>
  ) : (
    <Notification message="There is no feedback" />
  );
};

Statistics.propTypes = {
  optionsKey: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionsValue: PropTypes.arrayOf(PropTypes.number).isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
