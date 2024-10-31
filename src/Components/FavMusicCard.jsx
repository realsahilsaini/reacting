import React from 'react'

function FavMusicCard({data, index, handelClick}) {

  const {artistProfile, songName, artistName, addedToFav} = data

  return (
    <div className="relative bg-neutral-800 text-white px-4 py-4 pb-8 rounded-md w-80 flex gap-4 items-center border border-orange-900">

      <div className='rounded-md border border-orange-900 overflow-hidden'>
        <img src={`${artistProfile}`} alt="music" className='w-32 h-32 object-cover'/>
      </div>

      
      <div className=''>

      <h2 className='font-semibold text-2xl whitespace-nowrap'>
        {songName}
      </h2>

      <p className='text-gray-400 text-sm mt-2 w-fit p-1'>
        {artistName}
      </p>

      </div>
      
      <button className={`w-40 mt-8 absolute left-1/2 -translate-x-[50%] bottom-0 translate-y-[50%] text-xs px-4 py-2 rounded-md ${addedToFav ? 'bg-emerald-900' : 'bg-orange-800'}`} 
      onClick={()=>{handelClick(index)}}>
        {addedToFav ? 'Remove from Favourites' : 'Add to Favourites'}
      </button>

      
    </div>

    
  )
}


export default FavMusicCard;


/*

  
  const data = [
    {artistProfile: 'https://i1.sndcdn.com/avatars-tXEHAEjaej61W9Xh-cYAZDQ-t240x240.jpg', songName: 'Softly', artistName: 'Karan Aujla', addedToFav: false},
    {artistProfile: 'https://yt3.googleusercontent.com/mKEBXkP-HM57RXjEZgB0fVHl07LU_d54Vhkc5YOR1eN28kjD0Iww5wS-OsJiplYBzFwExT_khA=s900-c-k-c0x00ffffff-no-rj', songName: 'Excuses', artistName: 'AP Dhillon', addedToFav: false},
    {artistProfile: 'https://img.wynk.in/unsafe/200x200/filters:no_upscale():strip_exif():format(jpg)/http://s3.ap-south-1.amazonaws.com/discovery-prod-zion/zion/1696452544852-Arijit_Singh.png', songName: 'Sataranga', artistName: 'Arijit Singh', addedToFav: false},
    {artistProfile: 'https://th-i.thgim.com/public/entertainment/movies/sswf6k/article68120042.ece/alternates/FREE_1200/Diljit%20Dosanjh.jpg', songName: 'G.O.A.T', artistName: 'Diljit Dosanjh', addedToFav: false},
  ]

  const [stateSongData, setStateSongData] = useState(data);

  const handelClick = (songIndex) => {
    setStateSongData((prevData) => {
      return prevData.map((item, index) => {
        if(index === songIndex){
          return {...item, addedToFav: !item.addedToFav}
        }
        return item
      })
    });
  }



<div className="pt-8">
        <FavMusicNav data={stateSongData}/>
        </div>

        <div className="flex justify-center flex-row flex-wrap gap-12 mt-8 mx-4">
        
        {stateSongData.map((item, index) => {
          return <FavMusicCard index={index} key={index} handelClick={handelClick} data={item} />
        })}

        </div>
*/