const ADD_SLIDES = 'ADD_SLIDES'
const ADD_LAST_ANIME = 'ADD_LAST_ANIME'
const ADD_NEWS = 'ADD_NEWS'
const ADD_PREVIEWS = 'ADD_PREVIEWS'
const initialState = {
    slides: [],
    posts: [],
    news: [],
    previews: []
}

const homeReducer = (state = initialState,action) =>{
    switch (action.type){
        case ADD_SLIDES:
            return {
                ...state,
                slides: action.slides
            }
        case ADD_LAST_ANIME:
            return {
                ...state,
                posts: action.posts
            }
        case ADD_NEWS:
            return {
                ...state,
                news: action.news
            }
        case ADD_PREVIEWS:
            return {
                ...state,
                previews: action.previews
            }
        default:
            return state
    }
}
export const addSlides = (slides) => ({type: ADD_SLIDES, slides})
export const addPosts = (posts) => ({type: ADD_LAST_ANIME, posts})
export const addNews = (news) => ({type: ADD_NEWS, news})
export const addPreviews = (previews) => ({type: ADD_PREVIEWS, previews})
export default homeReducer