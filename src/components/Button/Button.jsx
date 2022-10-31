import { LoadMoreBtn } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ loadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={loadMore}>
      load more
    </LoadMoreBtn>
  );
};
Button.propTypes = {
  loadMore: PropTypes.func.isRequired,
};
