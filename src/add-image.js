import Kiwi from './components/kiwi-image/bots-pdf.jpg';

function addImage() {
    const img = document.createElement('img');
    img.alt = 'image';
    img.src = Kiwi;
    document.body.append(img);
}

export default addImage;