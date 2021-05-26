import './main-page.sass'
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader";
import SliderContainer from "../../components/Slider/SliderContainer";
import HomePostContainer from "../../components/Home/HomePost/HomePostContainer";


const Home = () => {
    return (
        <main className={'content'}>
            <section className={'main-page'}>
                <div className="center">
                    <SliderContainer/>
                    <div className="main-page__update-wrapper">
                        <div className="main-page__block">
                            <HomeHeader title={'обновления аниме'} link={'#'} linkTitle={'Все обновления'} />
                            <HomePostContainer namePosts={'last-anime'}/>
                        </div>
                        <div className="main-page__block">
                            <HomeHeader title={'Новости'} link={'#'} linkTitle={'Все новости'} />
                            <HomePostContainer namePosts={'news'}/>
                            <HomeHeader title={'Анонсы'} link={'#'} linkTitle={'Все анонсы'} />
                            <HomePostContainer namePosts={'previews'}/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Home;
