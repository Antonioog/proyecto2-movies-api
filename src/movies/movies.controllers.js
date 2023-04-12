const moviesDB = [
    {
        id: 1,
        title: 'Pacific Rim',
        description: 'Lorem ipsum',
        year: 2012,
        director: 'Guillermo del Toro'
    }
]
let movieId = 1

const findAllMovies = async () => {
    return moviesDB
}

const findMovieById = async (id) => {
    const movie = moviesDB.find(movieItem => movieItem.id === id)
    return movie
}

const createMovie = async (movieObj) => {
    const newMovie = {
        id: movieId++,
        title: movieObj.title || 'Untitle',
        description: movieObj.description || 'Lorem Ipsum',
        year: movieObj.year ||null,
        director: movieObj.director || 'Anonymus'
    }
    moviesDB.push(newMovie)
    return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById, 
    createMovie
}