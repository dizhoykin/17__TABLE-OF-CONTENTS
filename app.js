const aside = document.querySelector('aside');
const asideHeaders = aside.querySelectorAll('li');
const headers = document.querySelectorAll('h3');
const mainHeader = document.querySelector('h1');
const body = document.querySelector('main');

const classToggler = (array, index) => {
  array.forEach(arrayItem => {
    arrayItem.classList.remove('selected');
  });
  array[index].classList.add('selected');
};

document.addEventListener('scroll', () => {
  for (let i = 1; i < headers.length; i++) {
    if (headers[i].getBoundingClientRect().y < 200) {
      asideHeaders[i-1].classList.remove('selected');
      asideHeaders[i].classList.add('selected');
      asideHeaders[i+1].classList.remove('selected');
    }
    if (headers[0].getBoundingClientRect().y > 150) {
        classToggler(asideHeaders, 0);
    }
    if (window.scrollY + 1 >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
      classToggler(asideHeaders, asideHeaders.length - 1);
    }
  };
});
