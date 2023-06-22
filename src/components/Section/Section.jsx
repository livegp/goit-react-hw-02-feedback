import Container from './Section.styled';
// Import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';

const Section = props => {
  return (
    <Container>
      <Statistics></Statistics>
    </Container>
  );
};

Section.propTypes = {};

export default Section;
