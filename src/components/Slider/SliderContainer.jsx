import {connect} from "react-redux";
import Slider from "./Slider";
import {useEffect} from "react";
import {addSlides} from "../../redux/reducers/homeReducer";
import image1 from "../../images/slider/image1.jpg";
import image12 from "../../images/slider/image12.jpg";
import image2 from "../../images/slider/image2.jpg";
import image3 from "../../images/slider/image3.jpg";
import image4 from "../../images/slider/image4.jpg";
import image5 from "../../images/slider/image5.jpg";
import image6 from "../../images/slider/image6.jpg";
import image7 from "../../images/slider/image7.jpg";
import image8 from "../../images/slider/image8.jpg";
import image9 from "../../images/slider/image9.jpg";
import image10 from "../../images/slider/image10.jpg";
import image11 from "../../images/slider/image11.jpg";
import image13 from "../../images/slider/image13.jpg";
import image14 from "../../images/slider/image14.jpg";
import image15 from "../../images/slider/image15.jpg";
import image16 from "../../images/slider/image16.jpg";

const SliderContainer = ({slides,addSlides}) =>{
    useEffect(()=>{
        addSlides(
            [
                {
                    image: image1,
                    name: 'Название аниме',
                },
                {
                    image: image12,
                    name: 'Название аниме',
                },
                {
                    image: image2,
                    name: 'Название аниме',
                },
                {
                    image: image3,
                    name: 'Название аниме',
                },
                {
                    image: image4,
                    name: 'Название аниме',
                },
                {
                    image: image5,
                    name: 'Название аниме',
                },
                {
                    image: image6,
                    name: 'Название аниме',
                },
                {
                    image: image7,
                    name: 'Название аниме',
                },
                {
                    image: image8,
                    name: 'Название аниме',
                },
                {
                    image: image9,
                    name: 'Название аниме',
                },
                {
                    image: image10,
                    name: 'Название аниме',
                },
                {
                    image: image11,
                    name: 'Название аниме',
                },
                {
                    image: image12,
                    name: 'Название аниме',
                },
                {
                    image: image13,
                    name: 'Название аниме',
                },
                {
                    image: image14,
                    name: 'Название аниме',
                },
                {
                    image: image15,
                    name: 'Название аниме',
                },
                {
                    image: image16,
                    name: 'Название аниме',
                },
            ]
        )
    },[addSlides])
    return (
        <Slider slides ={slides}/>
    )
}
const mapStateToProps = (state) =>{
   return {
       slides: state.home.slides
   }
}
export default connect(mapStateToProps,{
    addSlides
})(SliderContainer)

