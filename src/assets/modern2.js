/** cssence.com type=module template script */
const init = () => {
	const now = new Date();
	const nowIso = now.toISOString().replace(/:[0-9]+\.[0-9]+Z/, ':00Z');
	document.querySelector('#url').value = `/${now.getFullYear()}/new/`;
	document.querySelector('#thumbnail').value = `/${now.getFullYear()}/new/index.webp`;
	document.querySelector('#timestamp').value = nowIso;
	document.querySelector('#comment-0-timestamp').value = nowIso;

	document.querySelectorAll('form :is(button, input[type="text"], select, textarea):disabled').forEach((control) => {
		control.disabled = false;
	});
};

if (document.readyState !== 'loading') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}
