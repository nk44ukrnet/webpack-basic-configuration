import './hw.less';

class hw {
    buttonCssClass = 'hw-btn';
    render() {
        const button = document.createElement('button');
        button.classList.add(this.buttonCssClass) //'hw-btn'
        button.innerHTML = 'hw';
        button.onclick = function() {
            const p = document.createElement('p');
            p.classList.add('hw-p'); //'hw-p'
            p.innerHTML = 'hw';
            document.body.append(p);
        }
        document.body.append(button);
    }
}

export default hw;