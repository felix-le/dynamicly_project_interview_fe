import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';

const paginationStyles = createUseStyles({
  paginationWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    '& .isDisabled': {
      cursor: 'notAllowed',
      opacity: 0.5,
    },
    '& .highlightCurrent': {
      backgroundColor: '#4CAF50',
    },
    '& .inputPageNumber': {
      maxWidth: '150px',
    },
    '& button.disabled': {
      backgroundColor: '#f5f5f5',
      borderColor: ' #ddd',
    },
  },
});

const Pagination = ({ totalItems, limit, getPage }) => {
  const classes = paginationStyles({});
  const [firstPage, setFirstPage] = useState(false);
  const [lastPage, setLastPage] = useState(false);

  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  function paginate(e, pageNumber) {
    e.preventDefault();
    const page = parseInt(pageNumber);
    setCurrentPageNumber(page);
    getPage(pageNumber);
  }
  const numberPage = Math.ceil(totalItems / limit);

  useEffect(() => {
    if (currentPageNumber === 1) {
      setFirstPage(true);
    } else {
      setFirstPage(false);
    }
    if (currentPageNumber === numberPage) {
      setLastPage(true);
    } else {
      setLastPage(false);
    }
  }, [currentPageNumber]);

  const [goPage, setGoPage] = useState('');
  function _handleKeyDown(e) {
    const { value } = e.target;
    if (!value) {
      return;
    } else {
      if (value > 0 && value <= numberPage) {
        setGoPage(value);
      } else {
        setGoPage(numberPage);
      }
    }
  }
  function _handleKeyPress(e) {
    const code = e.keyCode || e.which;
    if (code === 13) {
      if (!goPage) {
        e.preventDefault();
      } else {
        paginate(e, goPage);
        setGoPage('');
      }
    }
  }

  return (
    <div
      className='card-footer bg-white d-sm-flex justify-content-sm-between align-items-sm-center'
      style={{ minHeight: '60px' }}
    >
      {numberPage > 1 ? (
        <>
          <div className='showingPage'>
            Trang {parseFloat(currentPageNumber)} / {numberPage} trang
          </div>
          <nav>
            <ul className={`${classes.paginationWrapper} pagination`}>
              <li className='page-item'>
                <button
                  onClick={(e) => paginate(e, 1)}
                  className={`${firstPage ? 'disabled' : null} page-link`}
                  disabled={firstPage ? 'disabled' : null}
                >
                  First
                </button>
              </li>
              {currentPageNumber > 1 ? (
                <>
                  <li className='page-item'>
                    <button
                      onClick={(e) =>
                        paginate(e, parseFloat(currentPageNumber) - 1)
                      }
                      className='page-link'
                    >
                      &#60;
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className='page-item'>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className={`${firstPage ? 'disabled' : null} page-link`}
                      disabled={firstPage ? 'disabled' : null}
                    >
                      &#60;
                    </button>
                  </li>
                </>
              )}
              <li className='page-item'>
                <form noValidate>
                  <input
                    type='number'
                    className='page-link inputPageNumber'
                    placeholder={`${parseFloat(
                      currentPageNumber
                    )}/${numberPage}`}
                    onKeyPress={_handleKeyPress}
                    onChange={(e) => _handleKeyDown(e)}
                    value={goPage}
                  />
                </form>
              </li>
              {currentPageNumber < numberPage ? (
                <>
                  <li className='page-item'>
                    <button
                      onClick={(e) =>
                        paginate(e, parseFloat(currentPageNumber) + 1)
                      }
                      className='page-link'
                    >
                      &#62;
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className='page-item'>
                    <button
                      onClick={(e) => e.preventDefault()}
                      className={`${lastPage ? 'disabled' : null} page-link`}
                      disabled={lastPage ? 'disabled' : null}
                    >
                      &#62;
                    </button>
                  </li>
                </>
              )}
              <li className='page-item'>
                <button
                  onClick={(e) => paginate(e, numberPage)}
                  className={`${lastPage ? 'disabled' : null} page-link`}
                  disabled={lastPage ? 'disabled' : null}
                >
                  Last
                </button>
              </li>
            </ul>
          </nav>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
