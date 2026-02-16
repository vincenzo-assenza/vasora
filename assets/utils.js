/**
 * Global Utilities for Vasora Skeleton Theme
 */

window.Vasora = window.Vasora || {};

window.Vasora.utils = {
	/**
	 * Prevents scrolling on the body element.
	 * Useful for modals, drawers, and mobile menus.
	 */
	lockScroll: () => {
		document.documentElement.setAttribute("data-scroll-locked", "true");
	},

	/**
	 * Re-enables scrolling on the body element.
	 */
	unlockScroll: () => {
		document.documentElement.removeAttribute("data-scroll-locked");
	},

	/**
	 * Simple debounce function to limit how often a function can fire.
	 */
	debounce: (fn, wait = 300) => {
		let timeout;
		return (...args) => {
			clearTimeout(timeout);
			timeout = setTimeout(() => fn.apply(this, args), wait);
		};
	},

	/**
	 * Traps the focus within a specific element.
	 * Useful for accessibility in modals and menus.
	 */
	trapFocus: (element) => {
		const focusableElements = element.querySelectorAll(
			'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])',
		);
		const firstFocusable = focusableElements[0];
		const lastFocusable = focusableElements[focusableElements.length - 1];

		element.addEventListener("keydown", (e) => {
			if (e.key !== "Tab") return;

			if (e.shiftKey) {
				if (document.activeElement === firstFocusable) {
					lastFocusable.focus();
					e.preventDefault();
				}
			} else {
				if (document.activeElement === lastFocusable) {
					firstFocusable.focus();
					e.preventDefault();
				}
			}
		});
	},
};
