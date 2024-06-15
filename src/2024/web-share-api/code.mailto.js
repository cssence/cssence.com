const title = document.querySelector('title').textContent;
const url = document.querySelector('link[rel="canonical"]').getAttribute('href');

const link = `<a href="mailto:?subject=${url}&body=${title}">Share this page</a>`;
