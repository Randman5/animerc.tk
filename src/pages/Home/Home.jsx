import './main-page.sass'
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <main className={'content'}>
            <section className={'main-page'}>
                <div className="center">
                    <Slider>
                        <div className="slider__title">
                            аниме весеннего сезона
                        </div>
                    </Slider>
                </div>
            </section>
        </main>
    );
}

export default Home;
