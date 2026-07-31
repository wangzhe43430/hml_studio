
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual'; 
}
window.scrollTo(0, 0);


const scrollFadeElement = document.getElementById('scrollFade');
if (scrollFadeElement) {
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const opacity = Math.max(1 - scrollY / 150, 0);
        scrollFadeElement.style.opacity = opacity;
        scrollFadeElement.style.pointerEvents = opacity > 0 ? 'auto' : 'none';
    });
}


document.addEventListener('DOMContentLoaded', function() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.15 });
    reveals.forEach(reveal => observer.observe(reveal));
});


const toastPopup = document.getElementById('toastPopup');
let toastTimeout;
function showToast(message, duration = 3000) {
    if (!toastPopup) return;
    toastPopup.innerText = message; 
    toastPopup.classList.add('show');
    
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toastPopup.classList.remove('show');
    }, duration);
}


const secretBtns = document.querySelectorAll('.secret-btn');
if (secretBtns.length > 0) {
    secretBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault(); 
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                showToast("你没有权限访问/(ㄒoㄒ)/~~", 3500);
            }, 300);
        });
    });
}


const randomToastBtn = document.getElementById('randomToastBtn');
if (randomToastBtn) {
    const funFacts = [
        "你知道嘛，点这个按钮是不会跳转的，你得往下滑(可以继续点击触发更多)",
        "你知道嘛，我这句话是废话",
        "你知道嘛，做galgame其实有点花钱 (技术好技能点拉满除外)",
        "你知道嘛，一开始第一部只有BE，后来貌似因为怕被骂成M，于是加上了“HE”",
        "你知道嘛，黑米粒工作室其实在2022年就已经有了，是个我的世界工作室" ,
        "你知道嘛，黑米粒的第一部游戏在2025年9月被提出，因此才有了现在复活的黑米粒工作室" ,
        "你知道嘛，这个神人域名是我闲的没事注册的(真闲)" ,
        "你知道嘛，你可以不用再点了，已经没有别的话可说了(懒"
    ];
    let currentFactIndex = 0;
    randomToastBtn.addEventListener('click', function() {
        showToast(funFacts[currentFactIndex], 3500);
        currentFactIndex++;
        if (currentFactIndex >= funFacts.length) {
            currentFactIndex = 0;
        }
    });
}


const secretStaffBtn = document.getElementById('secretStaffBtn');
if (secretStaffBtn) {
    secretStaffBtn.addEventListener('click', function() {
        showToast("他还没有透露他任何的账户哦):", 3000);
    });
}
