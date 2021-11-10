

const serverFinder = (path) => {
    const baseUrl = process.env.NODE_ENV === 'production' ?
        path : `http://localhost:3001/${path}`
        return baseUrl;
}

export default serverFinder;