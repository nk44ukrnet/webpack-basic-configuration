import './heading.less';

class Heading {
    render(){
        const h1 = document.createElement('h1');
        document.body.append(h1);
        h1.innerHTML ='h1';
        h1.classList.add('h1');
    }
}

export default Heading;