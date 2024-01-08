let currentSlide = 0;
let slides = [];
let autoPlay;

window.onload = () => {
    slides = document.querySelectorAll('#slider img');
    initializeSlides();
    autoPlay = setInterval(nextSlide, 5000); // 每 5 秒切換一次幻燈片
};

function initializeSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? "block" : "none";
    });
}

function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;

    slides[currentSlide].style.display = "none";
    slides[nextIndex].style.display = "block";

    currentSlide = nextIndex;
}

document.getElementById('logo').addEventListener('click', function() {
    showContent('home')
    showHome();
    showSlide(0);
});

function showHome() {
    currentSlide = 0; // 重置幻燈片計數器
    slides = document.querySelectorAll('#slider img');
    initializeSlides;
    showSlide(currentSlide);
    clearInterval(autoPlay); // 停止之前的自动播放
    autoPlay = setInterval(nextSlide, 5000); // 重新开始自动播放
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    if (slides[index]) {
        slides[index].style.display = 'block';
    }
}


function showContent(page) {
    const mainContent = document.getElementById('main-content');
    const nav = document.querySelector('nav ul');

    // 关闭菜单
    nav.classList.remove('active');
    switch(page) {
        case 'home':
            mainContent.innerHTML = `
                <div id="slider">
                    <img src="./images/apple.jpg" alt="Slide 1">
                    <img src="./images/banana.jpg" alt="Slide 2">
                    <img src="./images/cherry.jpg" alt="Slide 3">
                    <img src="./images/pitaya.jpg" alt="Slide 4">
                    <img src="./images/Grape.jpg" alt="Slide 5">
                </div>`;
            break;
            case 'about':
                document.querySelector("main").style.backgroundImage = "url('./images/about.png')";
                mainContent.innerHTML = `
                    <div class="content-flex">
                        <div class="content-text" id="about">
                            <h2>公司簡介</h2>
                            <p>我們的公司是一家專注於水果批發的企業，致力於為學生營養午餐提供優質的水果產品。我們的工作流程包括精心的水果採購、細心的挑選和分裝，最終將新鮮、健康的水果送達各個學校，確保學生們能夠享受到最美味、最營養豐富的水果。<br><br>
                            我們深知孩子們的健康是無價的，因此我們致力於提供優質的水果，確保每一位學生都能夠透過水果，獲得營養均衡。我們的團隊充滿熱情和經驗，不斷努力追求卓越，並與學校團膳公司建立了穩固的合作關係。<br><br>
                            如果您正在尋找可信賴的水果供應商，我們將榮幸地為您提供我們的服務。我們的目標是為學校提供最佳的水果選擇，並在學生的午餐中發揮積極作用，為他們的健康和成長添磚加瓦。</p>
                        </div>
                    </div>`;
            break;
            case 'services':
                document.querySelector("main").style.backgroundImage = "url('./images/services.png')";
                mainContent.innerHTML = `
                    <div class="content-flex">
                        <div class="content-text" id="services">
                            <h2>業務範圍</h2>
                            <p><img src="./images/school.png">  校園營養午餐水果配送<br><br><img src="./images/fruits.png">  會議、餐會 各式水果切盤<br><br><img src="./images/gife.png">  年節送禮水果禮盒<br><br><img src="./images/basket.png">  祈福禮神水果籃組<br><br><img src="./images/box.png">  大量水果訂購</p>
                        </div>
                    </div>`;
                break;
            case 'contact':
                document.querySelector("main").style.backgroundImage = "url('./images/c4.jpg')";
                mainContent.innerHTML = `
                    <div class="content-flex">
                        <div class="content-text" id="contact">
                            <h2>聯絡資訊</h2>
                            <p>公司地址: 台中市外埔區甲後路三段792巷41號</p>
                            <p>電話: 0989-001-066</p>
                            <p>Email: bless.deer@gmail.com</p>
                            <img src="./images/line.png">
                        </div>
                    </div>`;
                break;
        default:
            mainContent.innerHTML = '<div>其他內容</div>';
    }
}

document.getElementById('menu-icon').addEventListener('click', function() {
    var nav = document.querySelector('nav ul');
    if (nav.classList.contains('active')) {
        nav.classList.remove('active');
    } else {
        nav.classList.add('active');
    }
});
