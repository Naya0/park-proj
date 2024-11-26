import adminPanelPhone from './admin-panel-phone.png';
import adminPanelPhoneBack from './admin-panel-phone-back.png';
import adminPanelLaptop from './admin-panel-laptop.png';
import adminPanelVideo from './admin-panel-video.png';

export default [
    {
        description: 'Круглосуточный мониторинг, удаленное управление шлагбаумом',
        image: adminPanelVideo, 
        alt: 'Видеонаблюдение',
        imageBack: null,
    },
    {
        description: 'Анализ данных по доходам и гибкие настройки тарифов',
        image: adminPanelLaptop, 
        alt: 'Анализ данных',
        imageBack: null,
    }, 
    {
        description: 'Ведение статистики посещаемости',
        image: adminPanelPhone,
        alt: 'Статистика посещаемости', 
        imageBack: adminPanelPhoneBack,
    },  
]
