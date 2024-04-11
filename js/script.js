// Counter Stuff

const counters = document.querySelectorAll('#counter-value');
const counterDuration = 1000;

function animateCounters() {
	counters.forEach(counter => {
		const animate = () => {
			const value =+ counter.getAttribute('count-to');
			const data =+ counter.innerText;
			const time = value / counterDuration;
			if (data < value) {
				counter.innerText = Math.ceil(data + time);
				setTimeout(animate, 1);
			}
			else {
				counter.innerText = value;
			}
		}
		animate();
	});
}

setInterval(function elementInViewport() {
	const bounding = counters[0].getBoundingClientRect();
	if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
		return animateCounters();
	}
}, 500);

