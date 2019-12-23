let contain = document.querySelector('.container');
    	let screen = document.querySelector('.screen');
    	let sp = document.querySelector('span');

    	contain.addEventListener('mouseover', function() {
           screen.style.backgroundImage = 'url("https://i.ytimg.com/vi/aDxr5c6Cx8I/maxresdefault.jpg")';
           sp.textContent = 'Когда выяснилось, что запчастей нет, то герои начали бежать, то случайно наткнулись на дом любовника Билла, у которого взяли машину, чтобы уехать подальше от этого места';
    	});

    	contain.addEventListener('mouseout', function() {
           screen.style.backgroundImage = 'url("https://i.ytimg.com/vi/FGjpFDsCW7g/maxresdefault.jpg")';
           sp.textContent = 'После того, как Джоел с Елли выбрались из Бостона, они направились в город Билла, знакомого Джоела... Он готов был им помочь в их не легких странствиях... И в качестве помощи поддержал Джоела с его идей собрать для них машину..';
    	});