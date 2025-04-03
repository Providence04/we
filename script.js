document.querySelectorAll('nav a').forEach(tab => {
    tab.addEventListener('click', function() {
      this.classList.add('rotating');
      
      // Remove the class after animation completes (2s)
      setTimeout(() => this.classList.remove('rotating'), 500);
    });
  });
  