function updateTimer() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
    
    if (now.getFullYear() === 2025) {
        newYear.setFullYear(2026);
    }
    
    const diff = newYear - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 10 + 5;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.top = `${Math.random() * 100}%`;
        
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;
        
        const duration = Math.random() * 10 + 10;
        snowflake.style.animation = `fall ${duration}s linear infinite`;
        
        snowflakesContainer.appendChild(snowflake);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    updateTimer();
    setInterval(updateTimer, 1000);
    
    createSnowflakes();
    
    let backgroundIndex = 0;
    const backgrounds = [
        'linear-gradient(to bottom, #001122, #003344)',
        'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)',
        'linear-gradient(to bottom, #1a2980, #26d0ce)',
        'linear-gradient(to bottom, #200122, #6f0000)',
        'linear-gradient(to bottom, #141e30, #243b55)'
    ];
    
    const messages = [
        "Новый год - это время чудес и волшебства! Пусть все ваши мечты сбудутся в 2025 году!",
        "Пусть новый год принесет много радости, улыбок и теплых встреч!",
        "Желаю здоровья, счастья и процветания в новом году!",
        "Пусть каждый день нового года будет наполнен светом и добротой!",
        "С Новым годом! Пусть все плохое останется в старом году!"
    ];
    
    document.getElementById('change-background').addEventListener('click', function() {
        backgroundIndex = (backgroundIndex + 1) % backgrounds.length;
        document.body.style.background = backgrounds[backgroundIndex];
        document.getElementById('message').textContent = messages[backgroundIndex];
    });
    
    let lightsOn = false;
    document.getElementById('toggle-lights').addEventListener('click', function() {
        lightsOn = !lightsOn;
        const timerUnits = document.querySelectorAll('.time-unit');
        const interactiveItems = document.querySelectorAll('.interactive-item');
        const giftBoxes = document.querySelectorAll('.gift-box');
        
        if (lightsOn) {
            timerUnits.forEach(unit => unit.classList.add('lights-on'));
            interactiveItems.forEach(item => item.classList.add('lights-on'));
            giftBoxes.forEach(box => box.classList.add('lights-on'));
            
            this.querySelector('i').className = 'fas fa-lightbulb';
            this.querySelector('p').textContent = 'Огоньки включены!';
        } else {
            timerUnits.forEach(unit => unit.classList.remove('lights-on'));
            interactiveItems.forEach(item => item.classList.remove('lights-on'));
            giftBoxes.forEach(box => box.classList.remove('lights-on'));
            
            this.querySelector('i').className = 'far fa-lightbulb';
            this.querySelector('p').textContent = 'Огоньки выключены';
        }
    });
    
    let snowIntensity = 1;
    document.getElementById('make-snow').addEventListener('click', function() {
        const snowflakesContainer = document.getElementById('snowflakes');
        snowIntensity++;
        
        if (snowIntensity > 3) {
            snowIntensity = 1;
            snowflakesContainer.innerHTML = '';
            createSnowflakes();
            this.querySelector('p').textContent = 'Легкий снегопад';
        } else if (snowIntensity === 2) {
            snowflakesContainer.innerHTML = '';
            for (let i = 0; i < 100; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                const size = Math.random() * 8 + 4;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                snowflake.style.left = `${Math.random() * 100}%`;
                snowflake.style.top = `${Math.random() * 100}%`;
                snowflake.style.opacity = Math.random() * 0.5 + 0.3;
                const duration = Math.random() * 8 + 5;
                snowflake.style.animation = `fall ${duration}s linear infinite`;
                snowflakesContainer.appendChild(snowflake);
            }
            this.querySelector('p').textContent = 'Сильный снегопад';
        } else if (snowIntensity === 3) {
            snowflakesContainer.innerHTML = '';
            for (let i = 0; i < 200; i++) {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                const size = Math.random() * 12 + 3;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                snowflake.style.left = `${Math.random() * 100}%`;
                snowflake.style.top = `${Math.random() * 100}%`;
                snowflake.style.opacity = Math.random() * 0.6 + 0.2;
                const duration = Math.random() * 6 + 3;
                snowflake.style.animation = `fall ${duration}s linear infinite`;
                snowflakesContainer.appendChild(snowflake);
            }
            this.querySelector('p').textContent = 'Метель!';
        }
    });
    
    let audio = null;
    let isPlaying = false;
    document.getElementById('play-music').addEventListener('click', function() {
        if (!isPlaying) {

            audio = new Audio('https://assets.mixkit.co/music/preview/mixkit-jingle-bells-311.mp3');
            audio.loop = true;
            audio.volume = 0.3;
            
            const playPromise = audio.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isPlaying = true;
                    this.querySelector('i').className = 'fas fa-volume-up';
                    this.querySelector('p').textContent = 'Музыка играет';
                }).catch(error => {
                    console.log("Автовоспроизведение заблокировано");

                    alert("Нажмите 'OK' и затем нажмите на иконку музыки еще раз для воспроизведения");
                    this.querySelector('p').textContent = 'Нажмите еще раз';
                });
            }
        } else {
            audio.pause();
            isPlaying = false;
            this.querySelector('i').className = 'fas fa-volume-mute';
            this.querySelector('p').textContent = 'Музыка выключена';
        }
    });
    
    document.getElementById('lights-on').addEventListener('click', function() {
        const timerUnits = document.querySelectorAll('.time-unit');
        const interactiveItems = document.querySelectorAll('.interactive-item');
        const giftBoxes = document.querySelectorAll('.gift-box');
        
        timerUnits.forEach(unit => unit.classList.add('lights-on'));
        interactiveItems.forEach(item => item.classList.add('lights-on'));
        giftBoxes.forEach(box => box.classList.add('lights-on'));
        
        lightsOn = true;
        document.getElementById('toggle-lights').querySelector('i').className = 'fas fa-lightbulb';
        document.getElementById('toggle-lights').querySelector('p').textContent = 'Огоньки включены!';
    });
    
    document.getElementById('lights-off').addEventListener('click', function() {
        const timerUnits = document.querySelectorAll('.time-unit');
        const interactiveItems = document.querySelectorAll('.interactive-item');
        const giftBoxes = document.querySelectorAll('.gift-box');
        
        timerUnits.forEach(unit => unit.classList.remove('lights-on'));
        interactiveItems.forEach(item => item.classList.remove('lights-on'));
        giftBoxes.forEach(box => box.classList.remove('lights-on'));
        
        lightsOn = false;
        document.getElementById('toggle-lights').querySelector('i').className = 'far fa-lightbulb';
        document.getElementById('toggle-lights').querySelector('p').textContent = 'Огоньки выключены';
    });
    
    const giftBoxes = document.querySelectorAll('.gift-box');
    const giftMessages = [
        "🎁 Поздравляем! Вы получили новогодний подарок!",
        "🍬 Сладости к праздничному столу!",
        "⭐ Звезда удачи будет светить вам весь год!",
        "🎄 Красивая елка для вашего дома!",
        "🦌 Олень Санты доставит все подарки вовремя!"
    ];
    
    giftBoxes.forEach((box, index) => {
        box.addEventListener('click', function() {
            if (!this.classList.contains('opened')) {
                this.classList.add('opened');
                document.getElementById('message').textContent = giftMessages[index];
                
                this.style.transform = 'scale(1.2)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 300);
            }
        });
    });
    
    const timeValues = document.querySelectorAll('.time-value');
    timeValues.forEach(value => {
        value.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        
        value.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});