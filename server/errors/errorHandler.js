
const noRouteHandler = async (req, res, next) => {
    const error = new Error('No matching route')
    error.status = 404
    next(error)
}


const errorHandler = async (error, req, res, next) => {
    const status = error.status || 500
    const message = error.message || 'Internal server error'
    res.status(status).json({error: message})
}