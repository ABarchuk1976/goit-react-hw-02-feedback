import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';

class App extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    optionsKey: PropTypes.arrayOf(PropTypes.string).isRequired,
    optionsValue: PropTypes.arrayOf(PropTypes.number).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = evt => {
    const { name } = evt.target;

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good * 100) / total) + '%';
  };

  render() {
    const thisState = this.state;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            optionsKey={Object.keys(thisState)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            optionsKey={Object.keys(thisState)}
            optionsValue={Object.values(thisState)}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </Section>
      </>
    );
  }
}

export default App;
