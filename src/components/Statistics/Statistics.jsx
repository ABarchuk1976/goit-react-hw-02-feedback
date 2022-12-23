import { StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const isEmpty = !(good + neutral + bad);
  if (isEmpty) return;

  const total = countTotalFeedback();
  const percentageGood = countPositiveFeedbackPercentage();

  return (
    <ul>
      <StatisticsItem>Good: {good}</StatisticsItem>
      <StatisticsItem>Neutral: {neutral}</StatisticsItem>
      <StatisticsItem>Bad: {bad}</StatisticsItem>
      <StatisticsItem>Total feedbacks: {total}</StatisticsItem>
      <StatisticsItem>Positive feedbacks: {percentageGood} </StatisticsItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.PropTypes.number.isRequired,
  neutral: PropTypes.PropTypes.number.isRequired,
  bad: PropTypes.PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
