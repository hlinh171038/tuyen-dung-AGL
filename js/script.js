// Lấy nội dung của header.html và chèn vào #app
fetch('components/header.html')
  .then(response => response.text())
  .then(data => {
      const app = document.getElementById('navbar');
      app.innerHTML = data;
  })
  .catch(error => console.error('Lỗi:', error));
 
fetch('components/sidebar/sidebar.html')
  .then(response => response.text())
  .then(data => {
      const app = document.getElementById('sidebar');
      app.innerHTML = data;
  })
  .catch(error => console.error('Lỗi:', error));

   
fetch('components/banner.html')
.then(response => response.text())
.then(data => {
    const app = document.getElementById('banner');
    app.innerHTML = data;
})
.catch(error => console.error('Lỗi:', error));

 