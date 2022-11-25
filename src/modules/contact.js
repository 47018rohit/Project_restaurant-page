import github from '../img/GitHub.png'

export function contactContent(){
    const contactPanel = document.querySelector('#contact')
    const message = document.createElement('h4')
    message.textContent = "Send Ravens to DragonStone";

    const repoLink = document.createElement('a')
    repoLink.setAttribute('href' , "https://github.com/hakkanoodles/Project_restaurant-page.git")
    
    const messageImage = document.createElement('img');
    messageImage.setAttribute('src', github );
    repoLink.append(messageImage)

    contactPanel.append(message,repoLink);
}