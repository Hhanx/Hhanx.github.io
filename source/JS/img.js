(() => {
    const loadComments = async () => {
      if (typeof Gitalk === "undefined") {
        setTimeout(loadComments, 100);
      } else {
        const container = document.getElementById('text_img');
        if (!container) {
          return;
        }


        container.setAttribute("src", "https://tse4-mm.cn.bing.net/th/id/OIP-C.6kk-VvUu6VKa2Y_lBFMIcgHaHa?rs=1&pid=ImgDetMain");


      }
    };
  
    window.loadComments = loadComments;
    window.addEventListener('pjax:success', () => {
      window.loadComments = loadComments;
    });
  })();
  
