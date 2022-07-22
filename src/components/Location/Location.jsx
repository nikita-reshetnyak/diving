import './location.scss'
import { YMaps, Map, ZoomControl, Placemark } from '@pbe/react-yandex-maps';
import logo from './../../images/logo/logo.jpg'



export const Location = ({refs}) => {
   
    return (
        <section className="section section-location" ref={refs}>
            <YMaps
            >
                <div className='map-wrapper'>
                    <Map
                        
                        style={{ width: '100%', height: '100%' }}
                        defaultState={{ center: [44.89756, 37.305496], zoom: 17 }}
                        instanceRef={ref => { ref && ref.behaviors.disable(['scrollZoom','drag','dblClickZoom']) }}
                    >
                        <Placemark
                            geometry={[44.89756, 37.305496]}
                            properties ={{iconCaption:'Barracuda'}}
                            options={{preset:{iconColor:'red'}}}
                        />
                    </Map>
                </div>
            </YMaps>


        </section>
    )
}