
export function homeContent(){
    const homePanel = document.querySelector('#home')
    const about = document.createElement('h3')
    about.textContent = "about"
    const welcome = document.createElement('h6')
    welcome.textContent = `Welcome to`;
    const welcome2 = document.createElement('h1')
    welcome2.textContent = `House Targaryen Café`;
    const aboutContent = document.createElement('h6')
    aboutContent.textContent = "House of Dragon Themed Cafe"

    homePanel.append(welcome,welcome2,about,aboutContent);

    return homePanel;
}
