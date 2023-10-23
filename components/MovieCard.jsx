import { IMAGE_BASE_URL } from "../config"



const MovieCard = (props) => {

    const {original_title,overview,poster_path,release_date}  = props

    let date = `${new Date(release_date)}`.split(" ").slice(1,4)
    

    return (
    <div className="w-52 bg-sky-600 text-white rounded-lg">

<img src={`${IMAGE_BASE_URL}/${poster_path}`} alt={original_title} className="w-52 h-72 rounded-t-lg" />

<div className="content px-2">
<h1>{original_title}</h1>
<p className="text-gray-100">{`${date[0]} ${date[1]}, ${date[2]}`}</p>
</div>
    </div>
  )
}
export default MovieCard