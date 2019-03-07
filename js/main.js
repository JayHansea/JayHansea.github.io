function toggleDropdown (e) {
	const _d = $(e.target).closest('.dropdown'),
	_m = $('.dropdown-menu', _d);
	setTimeout(function(){
		const shouldOpen = e.type !== 'click' && _d.is(':hover');
		_m.toggleClass('show', shouldOpen);
		_d.toggleClass('show', shouldOpen);
		$('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
	}, e.type === 'mouseleave' ? 50 : 0);
}

$('body')
.on('mouseenter mouseleave','.dropdown',toggleDropdown)
.on('click', '.dropdown-menu a', toggleDropdown);

// let dropItem = document.querySelectorAll(".dropdown-item");

// for (var i = 0; i < dropItem.length; i++) {
// 	dropItem[i].addEventListener('mouseover', function() {
// 		let navLink = document.querySelectorAll(".nav-link");
// 		console.log(navLink);
// 		for (var i = 0; i < navLink.length; i++) {
// 			document.navLink[i].style.color = 'white';
// 		}
// 	});
// }