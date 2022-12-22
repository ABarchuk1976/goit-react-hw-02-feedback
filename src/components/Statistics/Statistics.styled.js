import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StatisticsItem = styled.li`
  font-weight: 600;
  margin-bottom: 10px;
  :last-child() {
    margin-bottom: 0;
  }
`;

StatisticsItem.propTypes = {
  key: PropTypes.string.isRequired,
};
