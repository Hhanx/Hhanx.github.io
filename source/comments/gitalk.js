(() => {
    const loadComments = async () => {
      if (typeof Gitalk === "undefined") {
        setTimeout(loadComments, 100);
      } else {
        const container = document.getElementById('gitalk-container');
        if (!container) {
          return;
        }
        const path = container.getAttribute("data-path");
        const gitalk = new Gitalk(Object.assign({
            id: path, // 直接使用路径作为 id
            // id: container.getAttribute("data-path-hash"), // 使用 hash 作为 ID
            path: path,
        }, {
          clientID: 'Ov23li02ExeS3q8s57Lm',
          clientSecret: '4e55e6bf526ee1ca1a11141bb568e7cce82ecd1b',
          repo: "hhanx-comment-issues",
          owner: "Hhanx",
          admin: ["Hhanx"],
          distractionFreeMode: false,
        }));
  
        gitalk.render('gitalk-container');
      }
    };
  
    window.loadComments = loadComments;
    window.addEventListener('pjax:success', () => {
      window.loadComments = loadComments;
    });
  })();
  
