import PropTypes from 'prop-types';
import { Marker, Item, Picture, Name } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Marker isOnline={isOnline}></Marker>
      <Picture src={avatar} alt="User avatar " width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
