import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  // Importe os estilos do autoplay
import './Carrossel.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Car1 from '../../assets/carrossel/Carrossel1.jpg';
import Car2 from '../../assets/carrossel/Carrossel2.jpg';
import Car3 from '../../assets/carrossel/Carrossel3.jpg';

function Carrossel() {
    var items = [
        { 
            img: Car1,
            text: 'Seja Bem-Vinde a DuMorro'
        },
        { 
            img: Car2,
            text: 'Transformando Vidas, Impulsionando Negócios.'
        },
        { 
            img: Car3,
            text: 'Conheça o nosso site!'
        },
    ];

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}  // Adicione Autoplay aos módulos
                autoplay={{  // Configure as opções de autoplay
                    delay: 4000,  // Tempo de espera entre os slides (em milissegundos)
                    disableOnInteraction: false,  // Manter o autoplay após interações do usuário
                }}
                className="mySwiper" 
                
            >
            {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.img} alt="Imagem" />
                        <div className="slide-text">{item.text}</div>
                    </SwiperSlide>
                ))}
                
            </Swiper>
           
            
        </>
    );
}

export default Carrossel;