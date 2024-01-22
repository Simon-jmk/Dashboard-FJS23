// FAVICON
function fetchFavicon(link) {
  return "https://www.google.com/s2/favicons?domain=" + link + "&sz=256";
}

// LINKS CARD
document.addEventListener('DOMContentLoaded', () => {
  const addLinkButton = document.getElementById('add-link-btn');
  const savedLinksContainer = document.getElementById('saved-links');

  const loadLinks = () => JSON.parse(localStorage.getItem('savedLinksContainer')) || [];
  const saveLinks = links => localStorage.setItem('savedLinksContainer', JSON.stringify(links));

  const httpsUrl = (url) => {
  if (!url.startsWith('https://')) {
    return `https://${url}`;
  }
  
  return url;
};

const titleShortener = (title) => {
  if (title.length > 11) {
    return title.substring(0, 11) + '...';
  }
  
  return title;
  
};
  
const createLinkCard = (link, title) => { 
  const formattedLink = httpsUrl(link);
  const formattedTitle = titleShortener(title);
  
  return`
  <div class="link-card">
    <a href="${formattedLink}" target="_blank"><img src="${fetchFavicon(link)}" alt="Favicon" class="favicon"/></a>
    <a class="link-text" href="${formattedLink}" target="_blank">${formattedTitle}</a>
    <button class="remove-btn" data-link="${link}"><img class="trash-bin" src="Trash-bin.svg" alt="Trash-bin"/></button>
  </div>
`;
};

  const updateDOM = () => {
    savedLinksContainer.innerHTML = loadLinks().map(link => createLinkCard(link.url, link.title)).join('');
  };

  addLinkButton.addEventListener('click', () => {
    const url = prompt("Ange URL:");
    const title = prompt("Ange Titel:");
    if (url && title) {
      const links = loadLinks();
      links.push({ url, title });
      saveLinks(links);
      updateDOM();
    }
  });

  savedLinksContainer.addEventListener('click', event => {
    if (event.target.classList.contains('remove-btn')) {
      const linkToRemove = event.target.getAttribute('data-link');
      const newLinks = loadLinks().filter(link => link.url !== linkToRemove);
      saveLinks(newLinks);
      updateDOM();
    }
  });

  updateDOM();
});
