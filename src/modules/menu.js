import dragonEgg from '../img/dragon-egg-cake.jpeg'
import porkThrone from '../img/pork-throne.jpeg'
import meatPie from '../img/meat-pie.jpeg'

export function menuContent(){
    const menuPanel = document.querySelector('#menu')

    const title = document.createElement('div');
    title.textContent = "Feast for The Dragons"
    
    const item1Box = document.createElement('div');
    const item1 = document.createElement('h3')
    item1.textContent = "Dragon Egg Cake";
    const item1Image = document.createElement('img');
    item1Image.setAttribute('src', dragonEgg );
    item1Box.append(item1,item1Image);

    
    const item2Box = document.createElement('div');
    const item2 = document.createElement('h3')
    item2.textContent = "Pork Throne";
    const item2Image = document.createElement('img');
    item2Image.setAttribute('src', porkThrone );
    item2Box.append(item2,item2Image);

    
    const item3Box = document.createElement('div');
    const item3 = document.createElement('h3')
    item3.textContent = "Meat Pie";
    const item3Image = document.createElement('img');
    item3Image.setAttribute('src', meatPie );
    item3Box.append(item3,item3Image);

    menuPanel.append(title,item1Box,item2Box,item3Box);

    return menuPanel;
}