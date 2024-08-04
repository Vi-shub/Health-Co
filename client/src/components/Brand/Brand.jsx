import Slider from 'react-infinite-logo-slider'
import DCCADV from '../../assets/Brands/logo_DCCADV.jpeg';
import DefJam from '../../assets/Brands/logo_DefJam.png';
import DPS from '../../assets/Brands/logo_DPS.png';
import Dreamville from '../../assets/Brands/logo_Dreamville.jpeg';
import Lorel from '../../assets/Brands/logo_L_Oréal.png';
import MLS from '../../assets/Brands/logo_MLS.png';
import NBA from '../../assets/Brands/logo_nba.png';
import NCAA from '../../assets/Brands/logo_NCAA.png';
import Universal from '../../assets/Brands/logo_universal.png';
import USC from '../../assets/Brands/logo_USC.png';
import VCU from '../../assets/Brands/logo_VCU.png';
import VSU from '../../assets/Brands/logo_vsu.jpeg';

const Brand = () => {
    
    return (
        <Slider
            width="250px"
            duration={40}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img src={DPS} alt="DPS" className='w-40 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={DCCADV} alt="DCCADV" className='w-40 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={DefJam} alt="DefJam" className='w-40 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Dreamville} alt="Dreamville" className='w-40 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Lorel} alt="Lorel" className='w-40 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={MLS} alt="MLS" className='w-30 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={NBA} alt="NBA" className='w-30 h-30' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={NCAA} alt="NCAA" className='w-40 h-30' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Universal} alt="Universal" className='w-40 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={USC} alt="USC" className='w-40 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={VCU} alt="VCU" className='w-30 h-20' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={VSU} alt="VSU" className='w-40 h-20' />
            </Slider.Slide>
           
        </Slider>
    )
}              
                     
export default Brand;