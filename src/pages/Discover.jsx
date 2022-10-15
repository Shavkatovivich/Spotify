/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-spacing */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-indent */
// eslint-disable-next-line no-unused-vars
import {Error, Loader, SongCard} from "../components";
// eslint-disable-next-line semi, object-curly-spacing
import {genres} from '../assets/constants'
// eslint-disable-next-line no-multiple-empty-lines

// eslint-disable-next-line object-curly-spacing
import {useGetTopChartsQuery} from "../redux/services/shazamCore"

const Discover = () => {
    const {data, isFetching, error} = useGetTopChartsQuery()
    const genreTitle = "Pop"

    if(isFetching) return  <Loader title="Loading songs..."/>
    if (error) return <Error/>

  return (
      <div className="flex flex-col">
         <div className="w-full flex justify-center items-center  sm:flex-row flex-col mt-4 mb-10">
           <h2 className="font-bold text-3xl text-white">Discovery {genreTitle}</h2>
            <select 
                className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5" 
                onChange={() => {
                value = ""
            }}>
                {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
            </select>
         </div>

         <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((song, i) => (
                <SongCard 
                    key={song.key}
                    song={song}
                    i={i}
                />
            ))}
         </div>
      </div>
  )
}

export default Discover;
