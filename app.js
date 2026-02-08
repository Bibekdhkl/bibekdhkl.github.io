function addText(){
      document.getElementById("text_area").innerText= "☕️☕️☕️";
}
function removeText(){
      document.getElementById("text_area").innerText= "";
}

//Scroll to top button

function scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'});
}

document.addEventListener('DOMContentLoaded', () => {
      // Render Gallery
      const galleryContainer = document.getElementById('gallery-content');
      if (galleryContainer && PortfolioComponents.renderGallery) {
          galleryContainer.innerHTML = PortfolioComponents.renderGallery(portfolioData.gallery);
      }

      // Render Talks
      const talksContainer = document.getElementById('talks-content');
      if (talksContainer && PortfolioComponents.renderTalks) {
          talksContainer.innerHTML = PortfolioComponents.renderTalks(portfolioData.talks);
      }

      // Render Podcasts
      const podcastsContainer = document.getElementById('podcasts-content');
      if (podcastsContainer && PortfolioComponents.renderPodcasts) {
          podcastsContainer.innerHTML = PortfolioComponents.renderPodcasts(portfolioData.podcasts);
      }

      // Render Resources
      const resourcesContainer = document.getElementById('resources-content');
      if (resourcesContainer && PortfolioComponents.renderResources) {
          resourcesContainer.innerHTML = PortfolioComponents.renderResources(portfolioData.resources);
      }
  });
