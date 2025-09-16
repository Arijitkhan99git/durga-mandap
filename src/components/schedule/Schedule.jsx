import React, { useEffect } from 'react'

function Schedule() {
 useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
     <>
      <div className='w-full mt-[4rem]'>
        <p>Program</p>

        <p></p>
      </div>
    </>
  )
}

export default Schedule