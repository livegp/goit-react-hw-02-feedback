import PropTypes from 'prop-types';
import { Table } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Table>
      <tr>
        <td>Good:</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Neutral:</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>Bad:</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>Total:</td>
        <td>{total}</td>
      </tr>
      <tr>
        <td>Positive feedback:</td>
        <td>{positivePercentage}%</td>
      </tr>
    </Table>
  );
};

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
