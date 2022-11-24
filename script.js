'use strict';

const accordion = document.querySelectorAll('.faq__accordion');

const toggleAccordion = function () {
  accordion.forEach((el) => {
    if (this !== el) el.removeAttribute('open');
  });
};

accordion.forEach((el) => {
  el.addEventListener('click', toggleAccordion);
});
