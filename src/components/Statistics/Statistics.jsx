import { Component } from 'react';

class Statistics extends Component {
  state = {
    bad: 0,
    good: 0,
    neutral: 0,
  };

  handleClick = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      // eslint-disable-next-line no-magic-numbers
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    // eslint-disable-next-line no-magic-numbers
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <div>
          <button name="good" onClick={this.handleClick}>
            Good
          </button>
          <button name="neutral" onClick={this.handleClick}>
            Neutral
          </button>
          <button name="bad" onClick={this.handleClick}>
            Bad
          </button>
        </div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

export default Statistics;
