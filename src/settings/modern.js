/** cssence.com type=module settings script */
const init = () => {
	const cndMsgs = {
		'today': 'Today is April&nbsp;9!<br>Happy CND! 🥳',
		'somewhere': 'It is April&nbsp;9 somewhere on planet Earth!<br>Happy CND! 🌎',
		'50h': 'You’re really into celebrating CND. This website will be shown without style sheets when it is April&nbsp;9 in any time zone on planet Earth. 🤩',
		'24h': 'CND is observed. This website will be shown without style sheets on April&nbsp;9. 🙂',
		'all-year': 'CND observation doesn’t matter much, you’ve chosen to go without a page style all year round. 🤓',
		'opt-out': 'You’ve opted out of celebrating CND. This website will be shown with style sheets all year round. 🥲'
	};
	const celebrateCssNakedDay = (() => {
		const allYear = localStorage.getItem('page-style') === 'none';
		const duration = localStorage.getItem('cnd-observation') || '24h';
		if (!allYear && duration === 'none') return 'opt-out';
		const date = { now: new Date() };
		const year = date.now.getFullYear();
		const tz = duration ? { start: '+14:00', end: '-12:00' } : { start: '', end: '' };
		date.from = new Date(`${year}-04-09T00:00:00${tz.start}`);
		date.to = new Date(`${year}-04-09T24:00:00${tz.end}`);
		const celebrate = date.now >= date.from && date.now < date.to;
		if (celebrate) return date.now.getDate() === 9 ? 'today' : 'somewhere';
		if (allYear) return 'all-year';
		return duration;
	})();
	document.querySelector('form').insertAdjacentHTML('beforeend', `<aside hidden class="figure standoff"><h3 class="subtle">Preview</h3><p class="preview"></p></aside><h3 class="subtle">Information</h3><p class="info">${cndMsgs[celebrateCssNakedDay].replace('CND', '<a href="/about/css-naked-day/">CSS Naked Day</a> (CND)')}</p>`);

	const map = {
		'page-style': { data: 'data-style', storable: ['none', 'basic', 'elegant']},
		'color-scheme': { data: 'data-scheme', storable: ['dark', 'light']},
		'syntax-highlighting': { data: 'data-highlighter', storable: ['none', 'a11y-dark', 'a11y-light']},
	};
	Object.keys(localStorage).forEach((id) => {
		if (map[id].storable.includes(localStorage.getItem(id))) {
			document.getElementById(id).querySelector('[selected]').removeAttribute('selected');
			document.getElementById(id).querySelector(`[value="${localStorage.getItem(id)}"]`).setAttribute('selected', '');
		} else {
			localStorage.removeItem(id);
		}
	});
	Object.keys(map).forEach((id) => {
		document.querySelector('.preview').setAttribute(map[id].data, document.getElementById(id).value);
	});
	const previews = {};
	const currentPreview = document.getElementById('page-style').value;
	document.getElementById('page-style').querySelectorAll('option').forEach(async (option) => {
		const response = await fetch(`preview.${option.value}.svg`);
		previews[option.value] = await response.text();
		if (option.value === currentPreview) document.querySelector('.preview').innerHTML = previews[currentPreview];
	});

	const styleChange = (hasStyle) => {
		if (hasStyle) {
			document.querySelectorAll('form select:disabled').forEach((select) => {
				select.value = select.getAttribute('data-backup');
				select.removeAttribute('data-backup');
				select.disabled = false;
			});
		} else {
			const enforced = {
				'syntax-highlighting': 'none'
			};
			Object.keys(enforced).forEach((id) => {
				const select = document.getElementById(id);
				select.setAttribute('data-backup', select.value);
				select.value = enforced[id];
				select.disabled = true;
			});
		}
	};

	const form = document.querySelector('main form');
	form.addEventListener('change', (event) => {
		let msg = 'Hit ‘Save’ to persist your changes.';
		const id = event.target.id;
		if (id === 'page-style') {
			document.querySelector('.preview').innerHTML = previews[document.getElementById(id).value];
			const hasStyle = event.target.value !== 'none';
			styleChange(hasStyle);
			if (!hasStyle) msg = 'Syntax highlighting is not available if you choose to go without a page style.';
		}
		if (Object.keys(map).includes(event.target.id)) {
			document.querySelector('.preview').setAttribute(map[event.target.id].data, document.getElementById(id).value);
		}
		document.querySelector('.info').innerText = msg;
	});
	form.addEventListener('submit', (event) => {
		event.target.querySelectorAll('select').forEach((select) => {
			if (select.querySelector('option:checked').innerText.endsWith('(Default)')) {
				localStorage.removeItem(select.id);
			} else {
				localStorage.setItem(select.id, select.value);
			}
		});
	});
	document.querySelectorAll('form :is(button, select):disabled').forEach((control) => {
		control.disabled = false;
	});
	styleChange(document.getElementById('page-style').value !== 'none');
};

if (document.readyState !== 'loading') {
	init();
} else {
	document.addEventListener('DOMContentLoaded', init);
}
