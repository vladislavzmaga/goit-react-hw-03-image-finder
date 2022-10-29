import { LoadMoreBtn } from './Button.styled';

export const Button = ({ loadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={loadMore}>
      load more
    </LoadMoreBtn>
  );
};
