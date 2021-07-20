import Kiwi from './bots-pdf.jpg';
import './kiwi-image.less';

class KiwiImage {
    render(){
        const img = document.createElement('img');
        img.src = Kiwi;
        img.alt = 'Kiwi';
        img.classList.add('kiwi-img');
        document.body.append(img);
    }
}

export default KiwiImage;