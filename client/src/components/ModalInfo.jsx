import React from 'react';

const ModalInfo = (props) => {
  return(
    <div className="modal-column-left-main-info">

      <div className="modal-column-left-info-upper">
        <div className='modal-column-left-info-upper-description'>
          {props.info.description}
        </div>
        <div className="modal-column-left-info-upper-date">
          {props.info.date.slice(0,10)}
        </div>
      </div>

      <div className="modal-column-left-info-lower">

        <div className="modal-column-left-info-lower-user">

          <div className="modal-column-left-info-lower-user-avatar">
            <img src={props.info.user.avatar}></img>
          </div>

          <div className="modal-column-left-info-lower-user-stats">

            <div className="modal-column-left-info-lower-user-stats-username">
              {props.info.user.username}
            </div>

            <div className="modal-column-left-info-lower-user-stats-icons">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon_svg">
                <path d="M11.23 1H4.77A3.77 3.77 0 001 4.77v6.46A3.77 3.77 0 004.77 15h6.46A3.77 3.77 0 0015 11.23V4.77A3.77 3.77 0 0011.23 1zM8 8.63a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM7 11h2.1a2 2 0 011.9 2H5a2 2 0 012-2zm6.05.23a1.71 1.71 0 01-.15.71 4 4 0 00-2.17-2.58 3.42 3.42 0 00.82-2.23 3.5 3.5 0 10-7 0 3.46 3.46 0 00.83 2.23 4 4 0 00-2.18 2.58 1.71 1.71 0 01-.2-.71V4.77C3 3.792 3.792 3 4.77 3h6.46c.978 0 1.77.792 1.77 1.77l.05 6.46z"/>
              </svg>
              {`${props.info.user.friends}`}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="icon_svg">
                <path d="M11.23 1A3.77 3.77 0 0115 4.77v6.46A3.77 3.77 0 0111.23 15H4.77A3.77 3.77 0 011 11.23V4.77A3.77 3.77 0 014.77 1h6.46zM13 11.23V4.77A1.77 1.77 0 0011.23 3H4.77A1.77 1.77 0 003 4.77v6.46c0 .978.792 1.77 1.77 1.77h6.46A1.77 1.77 0 0013 11.23zm-2.18-4.34a.51.51 0 01.41.34.51.51 0 01-.13.51L9.91 8.9l.29 1.61a.49.49 0 01-.2.49.51.51 0 01-.3.12.46.46 0 01-.23-.06L8 10.29l-1.47.77a.5.5 0 01-.72-.53l.28-1.63L4.9 7.74a.51.51 0 01-.13-.51.51.51 0 01.41-.34l1.64-.24.73-1.49a.52.52 0 01.9 0l.73 1.49 1.64.24z"/>
              </svg>
              {`${props.info.user.reviews}`}
            </div>

            <div className="modal-column-left-info-lower-user-stats-elite">
              {props.info.user.yelpElite && `Elite '20`}
            </div>

          </div>
        </div>

        <div className="modal-column-left-info-lower-share-report">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="icon_svg">
            <path d="M17.714 6.429L13 10.357V7.325c-1 0-5.097 1.47-6.286 3.621.274-3.08 4.286-5.5 6.286-5.5V2.5l4.714 3.929zM3 4v10h11v-2.5l1-1V15H2V3h8.5l-1 1H3z"/>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" class="icon_svg">
            <path d="M6 10V3c4.976 1.098 4.024-1 8 0v7c-4.024-.976-3.024 1.024-8 0zM4 2h1v14H4V2z"/>
          </svg>
        </div>

        <div className="modal-column-left-info-lower-helpful-nothelpful">
          <p>helpful</p>
          <p>!helpful</p>
        </div>

      </div>

    </div>
  )
}

export default ModalInfo;