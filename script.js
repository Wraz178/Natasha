document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.layered-heart');
  
    const poemLines = [
      "Я давно хотел сказать тебе спасибо,",
      "но всё как-то не находил правильных слов.",
      "Ты для меня правда очень важный человек,",
      "и я искренне ценю всё, что ты для меня делаешь.",
      "Твоя поддержка, твоё внимание,",
      "то, как ты умеешь выслушать и помочь -",
      "это нечто особенное. ",
      "",
  
      "В моменты, когда бывает непросто, ",
      "ты каким-то образом находишь нужные слова",
      "и возвращаешь спокойствие.",
      "Это редкое качество,",
      "и я это очень уважаю в тебе.",
      "Благодаря тебе многое становится легче,",
      "и даже сложные вещи уже не кажутся такими тяжёлыми.",
      "",
  
      "Мне важно, что ты есть в моей жизни,",
      "не просто как человек рядом,",
      "а как тот, кому можно доверять,",
      "с кем можно быть собой и не притворяться.",
      "Я это очень ценю и не воспринимаю как должное.",
      "",
  
      "Спасибо тебе за твою доброту, за искренность и за всё тепло, которое ты даёшь.",
      "Это правда много для меня значит✨"
    ];
  
    function smoothScrollTo(targetY, duration = 2000) {
        const startY = window.scrollY || window.pageYOffset;
        const distance = targetY - startY;
        let startTime = null;
      
        function animation(currentTime) {
          if (!startTime) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const progress = Math.min(timeElapsed / duration, 1);
          // Плавное замедление
          const ease = progress < 0.5
            ? 2 * progress * progress
            : -1 + (4 - 2 * progress) * progress;
      
          window.scrollTo(0, startY + distance * ease);
      
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        }
      
        requestAnimationFrame(animation);
      }
      
    heart.addEventListener('click', () => {
        

        heart.classList.add('move-up');
        document.querySelectorAll('.heart').forEach(h => h.classList.add('heartbeat'));
        
        // Воспроизведение аудио
        const audio = document.getElementById('background-audio');
        audio.volume = 0.3;  // Значение от 0.0 (тихо) до 1.0 (максимум), например 0.3 — это 30% громкости
        audio.play().catch(e => console.warn('Автовоспроизведение заблокировано:', e));

        setTimeout(() => {
          const poemContainer = document.getElementById('poem');
      
          poemLines.forEach((line, index) => {
            setTimeout(() => {
              const p = document.createElement('div');
              p.className = 'line';
              p.textContent = line;
              poemContainer.appendChild(p);
      
              // Обновляем max-height для плавного расширения
              const fullHeight = poemContainer.scrollHeight;
              poemContainer.style.maxHeight = fullHeight + 'px';
      
              setTimeout(() => {
                p.classList.add('visible');
      
                const scrollOffset = 1000;
                const scrollTarget = p.getBoundingClientRect().top + window.scrollY - scrollOffset;
                
                // Запускаем плавный скролл с длительностью 1500 мс (можно менять)
                smoothScrollTo(scrollTarget, 2000);
      
              }, 100);
      
            }, index * 2500);
          });
        }, 10000);
      });
      
  });
  