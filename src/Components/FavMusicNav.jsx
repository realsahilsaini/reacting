import React from 'react';
import styles from './style.module.css';

function FavMusicNav({data}) {

  return (
    <div className='w-11/12 px-10 py-4 flex justify-between items-center bg-neutral-800 rounded-full mx-auto mt-2'>

      <h3 className={styles.logo}>
        Orange
      </h3>

      <div className='flex items-center px-3 py-1 text-sm text-orange-500 bg-orange-900 rounded-md gap-2'>
          <h3>Favourites</h3>
          <h4 className=''>
            {data.filter((item) => item.addedToFav).length}
          </h4>
      </div>

    </div>
  )
}

export default FavMusicNav