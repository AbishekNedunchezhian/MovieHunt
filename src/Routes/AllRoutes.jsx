import { Routes, Route} from "react-router-dom"
import { MoviesDetails, MoviesList, PageNotFound, Search } from '../Pages'
const AllRoutes = () => {
  return( 
  <>
   
   <Routes>
        <Route path="/" element={<MoviesList title="Your Guide to great Movies" apiPath="movie/now_playing"/>} />
        <Route path="movies/popular" element={<MoviesList title="Popular Movies" apiPath="movie/popular"/>} />
        <Route path="movies/top" element={<MoviesList title="Top Rated Movies" apiPath="movie/top_rated"/>} />
        <Route path="movies/upcoming" element={<MoviesList title="Upcoming Movies" apiPath="movie/upcoming"/>} />
        <Route path="movie/:id" element={<MoviesDetails />} />
        <Route path="search" element={<Search apiPath="search/movie" />} />
        <Route path="*" element={<PageNotFound />} title="Page not found" />
   </Routes>

  </>
  )
}

export default AllRoutes  
