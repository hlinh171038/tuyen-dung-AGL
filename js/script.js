// Lấy nội dung của header.html và chèn vào #app
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
      const app = document.getElementById('navbar');
      app.innerHTML = data;
  })
  .catch(error => console.error('Lỗi:', error));
// fectch sidebar
fetch('components/sidebar/sidebar.html')
  .then(response => response.text())
  .then(data => {
      const app = document.getElementById('sidebar');
      app.innerHTML = data;
  })
  .catch(error => console.error('Lỗi:', error));

//fetch banner   
fetch('components/banner.html')
.then(response => response.text())
.then(data => {
    const app = document.getElementById('banner');
    app.innerHTML = data;
})
.catch(error => console.error('Lỗi:', error));

//fetch banner product  
fetch('components/banner2.html')
.then(response => response.text())
.then(data => {
    const app = document.getElementById('banner-product');
    app.innerHTML = data;
})
.catch(error => console.error('Lỗi:', error));

//fetch banner footer  
fetch('components/banner-3.html')
.then(response => response.text())
.then(data => {
    const app = document.getElementById('banner-footer');
    app.innerHTML = data;
})
.catch(error => console.error('Lỗi:', error));

//fetch  coppyright  
fetch('components/footer.html')
.then(response => response.text())
.then(data => {
    const app = document.getElementById('coppy-right');
    app.innerHTML = data;
})
.catch(error => console.error('Lỗi:', error));