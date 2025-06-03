import './Home.css'
import Navbar from '../components/Navbar'
import Conteiner from '../components/Conteiner'
import About from './About'
import Projects from './Projects'
import ScrollToTop from '../components/ScrollToTop'
import ReachSection from './ReachSection'
import VideoGallery from './VideoGallery'
import MediaExperience from './MediaExperience'
import FinalSection from './FinalSection'

const Home = () => {
    return (
        <div id="home" className='Home'>
            <Navbar />
            <Conteiner />
            <About />
            <Projects />
            <ReachSection /> 
            <VideoGallery />
            <ScrollToTop />
            <MediaExperience />
            <FinalSection/>


        </div>
    )
}

export default Home
