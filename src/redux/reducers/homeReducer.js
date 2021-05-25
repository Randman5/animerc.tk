const ADD_SLIDES = 'ADD_SLIDES'

const initialState = {
    slides: []
}
const homeReducer = (state = initialState,action) =>{
    switch (action.type){
        case ADD_SLIDES:
            return {
                ...state,
                slides: action.slides
            }
        default:
            return state
    }
}
export const addSlides = (slides) => ({type: ADD_SLIDES, slides})
export default homeReducer