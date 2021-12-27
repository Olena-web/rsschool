const lightBtn = document.getElementsByTagName('label');
const light = document.querySelectorAll<HTMLElement>('lightrope');
//console.log(light);

if (lightBtn && light)
  lightBtn[0].addEventListener('click', () => {
    light.forEach((light) => {
      light.classList.toggle('hide');
      console.log('click');
    });
  });
