function navigationMenu(node)
{
  if (node == null) return;

  function slideDown(element, duration, finalheight, callback) {
	  var s = element.style;
	  s.height = '0px';

	  var y = 0;
	  var framerate = 10;
	  var one_second = 1000;
	  var interval = one_second * duration / framerate;
	  var totalframes = one_second * duration / interval;
	  var heightincrement = finalheight / totalframes;
	  var tween = function tween() {
	    y += heightincrement;
	    s.height = y + 'px';
	    if (y < finalheight) {
	      setTimeout(tween, interval);
	    } else {
	      s.height = '';
	    }
	  };
	  tween();
	}

	function slideUp(element, duration, finalheight, callback) {
	  var s = element.style;
	  s.height = finalheight + 'px';

	  var y = finalheight;
	  var framerate = 10;
	  var one_second = 1000;
	  var interval = one_second * duration / framerate;
	  var totalframes = one_second * duration / interval;
	  var heightincrement = finalheight / totalframes;
	  var tween = function tween() {
	    y -= heightincrement;
	    s.height = y + 'px';
	    if (y > 0) {
	      setTimeout(tween, interval);
	    } else {
	      s.height = '';
	      s.display = 'none';
	    }
	  };
	  tween();
  }
  
  var navOpen = false;
  node.querySelector('.src-views-header-styles---mobile-nav---3skS1').addEventListener('click', function () {
    var menu = node.querySelector('.src-views-header-styles---mobile-menu---210GA');
    navOpen = !navOpen;
    if (navOpen) {
      menu.style.display = '';
      var h = menu.clientHeight;
      slideDown(menu, 0.25, h);
    } else {
      var h = menu.clientHeight;
      slideUp(menu, 0.25, h);
    }
  });
}

navigationMenu(document.querySelector('.src-views-header-styles---header---10oqo'));

function loadSubmenu(node)
{
  if (node == null) return;

  var parent = node.parentNode;
  parent.addEventListener('mouseover', function () {
    node.style.display = 'block';
  });
  parent.addEventListener('mouseout', function () {
    node.style.display = 'none';
  });
}

var submenus = document.querySelectorAll('.src-views-header-styles---dd-menu---3m0IT');
for (var i=0; i<submenus.length; i++) loadSubmenu(submenus[i]);

function newsletterForm(node)
{
	if (node == null) return;
	
	var subscribeEmailURL = '/subscribe.php';
  var classSidebar = 'src-views-sidemenu-styles---sidebar---2fVwP';
  var classSidebarTop = 'src-views-sidemenu-styles---sidebar--top---g_xw8';
  var classSidebarVisible = 'src-views-sidemenu-styles---sidebar--visible---3-E6V';
  var classSidebarItem = 'src-views-sidemenu-styles---sidebar__item---3tF0f';
  var classNewsletterFormStatus = 'src-views-sidemenu-styles---newsletterForm__status---3OnUe';
  var _this = {
		top: node.className.indexOf(classSidebarTop) != -1
	};
  var mousein = false,
      formopen = false,
      slideopen = false,
      int = null;
  node.querySelectorAll('a').forEach(function (n) {
    return n.addEventListener('click', function (event) {
      console.log(slideopen);
      if (!slideopen) event.preventDefault();
    });
  });
  node.addEventListener('mouseover', function () {
    mousein = true;
    node.className = classSidebar + (_this.top ? ' ' + classSidebarTop : '') + ' ' + classSidebarVisible;
    clearTimeout(int);
    int = setTimeout(function () {
      slideopen = true;
    }, 100);
  });
  node.addEventListener('mouseout', function () {
    mousein = false;
    if (formopen) return;
    node.className = classSidebar + (_this.top ? ' ' + classSidebarTop : '');
    clearTimeout(int);
    int = setTimeout(function () {
      slideopen = false;
    }, 100);
  });
  var newsletterBtn = node.querySelector('.' + classSidebarItem + ':nth-child(3)');
  var newsletterForm = node.querySelector('.' + classSidebarItem + ':nth-child(4)');
  var formStatus = node.querySelector('.' + classNewsletterFormStatus);
  newsletterBtn.addEventListener('click', function () {
    formopen = true;
    newsletterBtn.className = classSidebarItem + ' src-views-sidemenu-styles---sidebar__item--flipped---3vNhu';
    newsletterForm.className = classSidebarItem + ' src-views-sidemenu-styles---sidebar__item--flipped---3vNhu src-views-sidemenu-styles---sidebar__item--backface---1e3xE src-views-sidemenu-styles---sidebar__item--no-hover---364jd';
  });
  newsletterForm.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
		var address = newsletterForm.querySelector('form input[name="email"]').value.trim();
		if (address == '') return;
    formStatus.className = classNewsletterFormStatus + ' src-views-sidemenu-styles---newsletterForm__status--visible---3wbKs';
    formStatus.innerHTML = 'Working...';
    superagent.post(subscribeEmailURL).type('form').send({ emailaddress: address }).end(function (err, res) {
      if (err) {
        console.error(err);
        formStatus.innerHTML = 'An error occurred.';
      } else {
        formStatus.innerHTML = 'Thanks for subscribing!';
				newsletterForm.querySelector('form').reset();
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: 'formSubmissionSuccess',
					formId: 'newsletterSignup'
				});
      }
      setTimeout(closeForm, 1500);
    });
  });
  newsletterForm.querySelector('form button').addEventListener('click', function (event) {
    event.preventDefault();
    closeForm();
  });
  var closeForm = function closeForm() {
    formopen = false;
    formStatus.className = classNewsletterFormStatus;
    newsletterBtn.className = classSidebarItem;
    newsletterForm.className = classSidebarItem + ' src-views-sidemenu-styles---sidebar__item--backface---1e3xE src-views-sidemenu-styles---sidebar__item--no-hover---364jd';
    if (!mousein) {
      node.className = classSidebar + (_this.top ? ' ' + classSidebarTop : '');
      slideopen = false;
      clearInterval(int);
    }
  };
}

newsletterForm(document.querySelector('.src-views-sidemenu-styles---sidebar---2fVwP'));

function partsForm(form)
{
	if (form == null) return;

	var years = [];
	for (var i = 2017; i >= 1950; i--) {
	  years.push(i);
	}
	
	var postFormURL = '/submit-parts-form.php';

	var categoryInput = form.querySelector('[name="category-other"]');
	var categorySel = form.querySelector('[name="category"]');
	categorySel.addEventListener('change', function (event) {
		categoryInput.style = categorySel.value == 'other' ? '' : 'display: none;';
	});

	var formStatus = form.querySelector('.js-formStatus');
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		var payload = {
			year: form.querySelector('[name="year"]').value.trim(),
			make: form.querySelector('[name="make"]').value.trim(),
			model: form.querySelector('[name="model"]').value.trim(),
			category: form.querySelector('[name="category"]').value.trim(),
			categoryOther: form.querySelector('[name="category-other"]').value.trim(),
			email: form.querySelector('[name="email"]').value.trim(),
			message: form.querySelector('[name="message"]').value.trim()
		};
		if (isNaN(payload.year) || payload.year == "") {
			formStatus.className = 'src-views-parts-styles---status---3MwYA src-views-parts-styles---status--error---5g_J8';
			formStatus.innerHTML = 'Please select a year.';
			return;
		}
		if (payload.make == "") {
			formStatus.className = 'src-views-parts-styles---status---3MwYA src-views-parts-styles---status--error---5g_J8';
			formStatus.innerHTML = 'Please select a make.';
			return;
		}
		if (payload.model == "") {
			formStatus.className = 'src-views-parts-styles---status---3MwYA src-views-parts-styles---status--error---5g_J8';
			formStatus.innerHTML = 'Please select a model.';
			return;
		}
		if (payload.category == "-1" || payload.category == "other" && payload.categoryOther == "") {
			formStatus.className = 'src-views-parts-styles---status---3MwYA src-views-parts-styles---status--error---5g_J8';
			formStatus.innerHTML = 'Please choose a category.';
			return;
		}
		if (payload.email == "") {
			formStatus.className = 'src-views-parts-styles---status---3MwYA src-views-parts-styles---status--error---5g_J8';
			formStatus.innerHTML = 'Please enter an email address.';
			return;
		}
		if (payload.message == "") {
			formStatus.className = 'src-views-parts-styles---status---3MwYA src-views-parts-styles---status--error---5g_J8';
			formStatus.innerHTML = 'Please enter a message.';
			return;
		}
		formStatus.className = 'src-views-parts-styles---status---3MwYA src-views-parts-styles---status--loading---18Wby';
		formStatus.innerHTML = 'Working...';
		superagent.post(postFormURL).type('form').send(payload).end(function (err, res) {
			if (err) {
				console.error(err);
				formStatus.className = 'src-views-parts-styles---status---3MwYA src-views-parts-styles---status--error---5g_J8';
				formStatus.innerHTML = 'An error occurred. Try again in a minute';
			} else {
				formStatus.className = 'src-views-parts-styles---status--success---t4IST';
				formStatus.innerHTML = 'Your form has been sent';
				form.reset();
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: 'formSubmissionSuccess',
					formId: 'partsForm'
				});
			}
		});
	});
}

partsForm(document.querySelector('.src-views-parts-styles---form---2ktVT'));

function tradeForm(form)
{
	if (form == null) return;

  var postFormURL = '/submit-trade-form.php';

	var formStatus = form.querySelector('.js-formStatus');
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		var payload = {
			companyName: form.querySelector('[name="company-name"]').value.trim(),
			abn: form.querySelector('[name="abn"]').value.trim(),
			email: form.querySelector('[name="email"]').value.trim(),
			request: form.querySelector('[name="request"]').value.trim()
		};
		if (payload.companyName == "" && payload.abn == "") {
			formStatus.className = 'src-views-pages-tradeForm---status---32cgo src-views-pages-tradeForm---status--error---1_Cts';
 			formStatus.innerHTML = 'Please enter a company name or an ABN.';
			return;
		}
		if (payload.email == "") {
			formStatus.className = 'src-views-pages-tradeForm---status---32cgo src-views-pages-tradeForm---status--error---1_Cts';
			formStatus.innerHTML = 'Please enter an email address.';
			return;
		}
		if (payload.request == "") {
			formStatus.className = 'src-views-pages-tradeForm---status---32cgo src-views-pages-tradeForm---status--error---1_Cts';
			formStatus.innerHTML = 'Please enter a request.';
			return;
		}
		formStatus.className = 'src-views-pages-tradeForm---status---32cgo src-views-pages-tradeForm---status--loading---20lNN';
		formStatus.innerHTML = 'Working...';
		superagent.post(postFormURL).type('form').send(payload).end(function (err, res) {
			if (err) {
				console.error(err);
				formStatus.className = 'src-views-pages-tradeForm---status---32cgo src-views-pages-tradeForm---status--error---1_Cts';
				formStatus.innerHTML = 'An error occurred. Try again in a minute';
			} else {
				formStatus.className = 'src-views-pages-tradeForm---status---32cgo src-views-pages-tradeForm---status--success---rbV9p';
				formStatus.innerHTML = 'Your form has been sent';
				form.reset();
				window.dataLayer = window.dataLayer || [];
				window.dataLayer.push({
					event: 'formSubmissionSuccess',
					formId: 'tradeForm'
				});
			}
		});
	});
}

tradeForm(document.querySelector('.src-views-pages-tradeForm---form---11t2L'));