const box = document.querySelector('.box'),
sound = document.querySelector('#sound');

let y = 0;

document.addEventListener('keydown', (event) => {
  console.log(event);
  console.log(y);

  if(y < 10) {
    y = 10;
  } else if (y > 452) {
    y = 452;

    setTimeout(()=> {
	sound.play();
    }, 850);
	
    setTimeout(()=> {
      document.querySelector(".suprise").classList.add('show-suprise');

      if(document.querySelector(".suprise").classList.contains('show-suprise')) {
        setTimeout(() => {
          document.querySelector(".suprise").classList.remove('show-suprise');
          box.style.bottom = "0px";
          y = 0;
        }, 3000);
      }

    }, 1000);
  }

  if(event.key === 'ArrowUp' || event.key === 'w') {
    y += 10;
  } else if(event.key === 'ArrowDown' || event.key === 's') {
    y -= 10;
  }


  box.style.bottom = `${y}px`;
})

box.addEventListener('click', () => {

  if(y > 452) {
    y = 452;
    setTimeout(()=> {
      document.querySelector(".suprise").classList.add('show-suprise');

      if(document.querySelector(".suprise").classList.contains('show-suprise')) {
        setTimeout(() => {
          document.querySelector(".suprise").classList.remove('show-suprise');
          box.style.bottom = "0px";
          y = 0;
        }, 3000);
      }

      sound.play();

    }, 1000);
  }

  y += 50;
  box.style.bottom = `${y}px`;
})