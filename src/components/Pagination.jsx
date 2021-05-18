import { selectNextPage, setUrl } from 'features/app/appSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch();
  const nextPage = useSelector(selectNextPage);
  // const isLoading = useSelector(selectLoading);
  function loadMore() {
    dispatch(setUrl(nextPage));
  }

  // const observer = React.useRef();
  // const lastBookElementRef = React.useCallback(
  //   (node) => {
  //     if (isLoading) return;
  //     if (observer.current) observer.current.disconnect();
  //     observer.current = new IntersectionObserver((entries) => {
  //       if (entries[0].isIntersecting && nextPage) {
  //         dispatch(setUrl(nextPage));
  //       }
  //     });
  //     if (node) observer.current.observe(node);
  //   },
  //   [isLoading, nextPage, dispatch]
  // );

  return (
    <div>
      <button
        onClick={loadMore}
        className='px-2 py-1 text-white bg-blue-600 rounded-lg text-white-400'
      >
        Load more
      </button>
    </div>
  );
};

export default Pagination;
