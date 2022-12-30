import { StatisticsItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  const statisticsList = [
    { stat: good, title: 'Good' },
    { stat: neutral, title: 'Neutral' },
    { stat: bad, title: 'Bad' },
    { stat: total, title: 'Total feedbacks' },
    { stat: positivePercentage, title: 'Positive feedbacks' },
  ];

  return (
    <ul>
      {statisticsList.map(({ stat, title }) => (
        <StatisticsItem key={title}>
          {title}: {stat}
        </StatisticsItem>
      ))}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
