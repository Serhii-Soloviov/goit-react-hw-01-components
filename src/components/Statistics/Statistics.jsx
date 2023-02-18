import PropTypes from 'prop-types';
import {
  Section,
  Item,
  Label,
  List,
  Percentage,
  Title,
} from './Statistics.styled';
export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(stat => (
          <Item key={stat.id} style={{ backgroundColor: getRandomHexColor() }}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}</Percentage>
          </Item>
        ))}
      </List>
    </Section>
  );
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
