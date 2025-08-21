const insert = document.getElementById('insert');

// map of non-character keys to their old keyCode values
const keyCodeMap = {
	Enter: 13,
	Tab: 9,
	Backspace: 8,
	Shift: 16,
	Control: 17,
	Alt: 18,
	Escape: 27,
	ArrowLeft: 37,
	ArrowUp: 38,
	ArrowRight: 39,
	ArrowDown: 40,
	Delete: 46,
	Space: 32,
	CapsLock: 20,
	Meta: 91, // windows key / command key
	ContextMenu: 93,
	Home: 36,
	End: 35,
	PageUp: 33,
	PageDown: 34,
	Insert: 45,
	NumLock: 144,
	ScrollLock: 145,
};

// add function keys F1–F12
for (let i = 1; i <= 12; i++) {
	keyCodeMap['F' + i] = 111 + i; // F1=112 ... F12=123
}

// add numpad keys
const numpadKeys = [
	{ key: 'Numpad0', code: 96 },
	{ key: 'Numpad1', code: 97 },
	{ key: 'Numpad2', code: 98 },
	{ key: 'Numpad3', code: 99 },
	{ key: 'Numpad4', code: 100 },
	{ key: 'Numpad5', code: 101 },
	{ key: 'Numpad6', code: 102 },
	{ key: 'Numpad7', code: 103 },
	{ key: 'Numpad8', code: 104 },
	{ key: 'Numpad9', code: 105 },
	{ key: 'NumpadMultiply', code: 106 },
	{ key: 'NumpadAdd', code: 107 },
	{ key: 'NumpadSubtract', code: 109 },
	{ key: 'NumpadDecimal', code: 110 },
	{ key: 'NumpadDivide', code: 111 },
];
numpadKeys.forEach((k) => (keyCodeMap[k.key] = k.code));

window.addEventListener('keydown', (event) => {
	// only prevent default for function keys. note that this will not work in most cases due to Browser/OS intercept of these keys.
	if (/^F\d{1,2}$/.test(event.key)) event.preventDefault();
	let keyNumber;

	event.key.length === 1
		? // for single characters, take the Unicode code point
		  (keyNumber = event.key.charCodeAt(0))
		: // For non-printable keys (Enter, ArrowUp, etc.)
		  (keyNumber = keyCodeMap[event.key] ?? event.key);

	insert.innerHTML = `
    <div class="key">
		${event.key === ' ' ? event.code : event.key}
		<small>event.key</small>
	</div>
	<div class="key">
		${keyNumber}
		<small>event.keyCode</small>
	</div>
	<div class="key">
		${event.code}
		<small>event.code</small>
	</div>
	<div class="key">Press another key to get its keyCode</div>
    `;
});
