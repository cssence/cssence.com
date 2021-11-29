if (!window.CSS.supports('--:1')) {
	fallback('Browser does not support CSS custom properties.');
	return;
}
