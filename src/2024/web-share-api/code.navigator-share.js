navigator.share({
	title: document.querySelector('title').textContent,
	text: document.querySelector('meta[name="description"]').getAttribute('content'),
	url: document.querySelector('link[rel="canonical"]').getAttribute('href')
});
