import _, { bind } from 'lodash';
import './style.css';
import icon from './img/icon.png'
import { homeContent} from './modules/home.js';
import { menuContent } from './modules/menu.js';
import { contactContent} from './modules/contact.js';


const container = document.querySelector('#content')
const tabContainer = document.querySelector('.tab-container')
const tabs = document.querySelectorAll('[data-tab-target]');
const panels = document.querySelectorAll('.tab-content')
const header = document.createElement('div');
header.classList.add('header');
container.insertBefore(header, tabContainer)

const myIcon = document.createElement('img')
myIcon.setAttribute('src' , icon);
header.append(myIcon)


tabs.forEach(e => e.addEventListener('click', ()=>{
    const target = document.querySelector(e.dataset.tabTarget);
    panels.forEach(content =>{
        content.classList.remove('active')
        }
    )
    tabs.forEach(e =>{
        e.classList.remove('active')
        }
    )

    e.classList.add('active');
    target.classList.add('active');
    
}))


homeContent();
menuContent()
contactContent();