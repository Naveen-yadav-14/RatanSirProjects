import MovieCard from "./MovieCard";

function MovieGrid(){

    const Movies = [{id:101,name:"RRR",rating:4.5},
                    {id:102,name:"Devara",rating:4.5},
                    {id:103,name:"Shaho",rating:4.5},
                    {id:104,name:"Rajasab",rating:4.5},
                    {id:105,name:"Bahubali",rating:4.5}
    ]

    const res = Movies.map(Movie=>(
        <li key={Movie.id}>movie id={Movie.id}, movie name = {Movie.name}, rating={Movie.rating}</li>
    ))

    return(
        <>
        <MovieCard MovieObj ={res}/>
        </>
    )

}
export default MovieGrid;