export default function detailsCloser(event) {
  const isClickInside = document.querySelector('details').contains(event.target);
  isClickInside || document.querySelector('details').removeAttribute('open');
};
