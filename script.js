function hideLoadingScreen() {
  var loadingScreen = document.getElementById('loading-screen');
  loadingScreen.style.opacity = '0';
  setTimeout(function() {
    loadingScreen.style.display = 'none';
    document.querySelector('.container').style.display = 'flex'; // Display the container after loading
  }, 1000); // 1 second delay after opacity transition
};
