const ADD_SLIDES = 'ADD_SLIDES'
const ADD_LAST_ANIME = 'ADD_LAST_ANIME'
const ADD_NEWS = 'ADD_NEWS'
const initialState = {
    slides: [],
    posts: [],
    news: []
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
        default:
            return state
    }
}
export const addSlides = (slides) => ({type: ADD_SLIDES, slides})
export const addPosts = (posts) => ({type: ADD_LAST_ANIME, posts})
export const addNews = (news) => ({type: ADD_NEWS, news})
export default homeReducer