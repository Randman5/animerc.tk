import './main-page.sass'
import './main-page.sass'
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader";
import HomePost from "../../components/Home/HomePost/HomePost";
import SliderContainer from "../../components/Slider/SliderContainer";


const Home = () => {
    return (
        <main className={'content'}>
            <section className={'main-page'}>
                <div className="center">
                    <SliderContainer/>
                    <div className="main-page__update-wrapper">
                        <div className="main-page__block">
                            <HomeHeader title={'обновления аниме'} link={'#'} linkTitle={'Все обновления'} />
                            <HomePost/>
                        </div>
                        <div className="main-page__block">
                            <HomeHeader title={'Новости'} link={'#'} linkTitle={'Все новости'} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
