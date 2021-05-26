import './new-anime.sass'
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {Link} from "react-router-dom";
import image from '../../images/slider/image1.jpg'
const NewAnime = () => {

    return (
        <div className={'new-anime'}>
            <Tabs selectedTabClassName={'new-anime__tab--active'}>
                <TabList className={'new-anime__tab-list'}>
                    <Tab className={'new-anime__tab'}>Новое на сайте</Tab>
                </TabList>
                < TabPanel>
                    <div className="new-anime__row">
                        <div className="new-anime__anime new-anime__anime--left">
                            <div className="new-anime__inner">
                                <Link className={'new-anime__img'} to={'/'}>
                                    <img src={image} alt=""/>
                                </Link>
                                <div className="new-anime__info">
                                    <Link to={''} className={'new-anime__title'}>
                                        Эпоха Экс-Самураев
                                    </Link>
                                    <div className="new-anime__rating-info">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="new-anime__anime new-anime__anime--right">
                            123
                        </div>
                        <div className="new-anime__anime new-anime__anime--left">
                            123
                        </div>
                        <div className="new-anime__anime new-anime__anime--right">
                            123
                        </div>
                    </div>
                < / TabPanel>
            </Tabs>
        </div>
    )
}

export default NewAnime