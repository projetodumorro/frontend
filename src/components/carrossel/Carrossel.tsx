import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';  // Importe os estilos do autoplay
import './Carrossel.css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Carrosel1 from '../../assets/Carrosel1.jpg';
import Carrosel2 from '../../assets/Carrosel2.jpg';
import Carrosel3 from '../../assets/Carrosel3.jpg';

function Carrossel() {
    var items = [
        { 
            img: Carrosel1,
            text: 'Seja Bem-Vindo a DuMorro'
        },
        { 
            img: Carrosel2,
            text: 'Transformando Vidas, Impulsionando Negócios.'
        },
        { 
            img: Carrosel3,
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
                    delay: 2000,  // Tempo de espera entre os slides (em milissegundos)
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