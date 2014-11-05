angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("cardTemplate.html","<div class=\"card\" ng-click=\"setCardSelected(brick); showProject()\">\n\n	<div class=\"contact\">\n		<div class=\"contactPhotoContainer\">\n			<img ng-src=\"{{brick.userPhoto}}\" class=\"contactPhotoContainer\">\n		</div>\n		<div class=\"name\"> \n			<a>{{brick.firstName}} {{brick.lastName}}</a> \n			</div>\n		</div>\n\n	<div class=\"projectPhotoContainer images-loaded\"> \n		<img class=\"projectPhoto\" ng-src=\"{{brick.projectPhoto.thumb}}\">\n	</div>\n\n	<div class=\"project\">\n		<div class=\"projectTitle\">\n			<p>{{brick.projectTitle}}</p>\n		</div>\n		<div class=\"projectDesc\">\n		{{brick.projectSynopsis}}\n		</div>\n\n		<div class=\"actions\">\n			<hr>\n			<a ng-bind=\"setProjectName(brick.firstName)\"></a>\n			</div>\n		</div>\n</div>\n\n");
$templateCache.put("index.html","<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n	<meta charset=\"UTF-8\">\n	<meta http-equiv=\"Cache-Control\" content=\"public\"/>\n	<!-- <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\"> -->\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n	<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n	<base href=\"/\">\n	<title>UTS Industrial Design | Graduate Show 2014</title>\n\n	<!-- SEO -->\n	<meta name=\"description\" content=\"This year\'s students have assembled a wide variety of service and product designs; with work ranging from furniture, homewares, lighting, web, and wearables, this exhibition showcases the talent and diversity of the 2014 graduates.\"/>\n	<meta property=\"og:title\" content=\"Industrial Design Graduate Show (2014)\"/>\n	<meta property=\"og:type\" content=\"gallery\"/>\n	<meta property=\"og:url\" content=\"utsid14.com\"/>\n	<meta property=\"og:description\" content=\"This year\'s students have assembled a wide variety of service and product designs; with work ranging from furniture, homewares, lighting, web, and wearables, this exhibition showcases the talent and diversity of the 2014 graduates.\">\n	<meta property=\"keywords\" content=\"UTS, univeristy, technology, sydney, industrial, design, id14, graduate, show, grad, product, service, innovation, student, works, show, event, exhibition, 2014, 14, showcase, viscomm, id, fashion, graphic, industrial design, product design, IPD, web, wearable, furniture, homeware, homewares, lighting, batchelor, degree\">\n	<meta property=\"author\" content=\"University of Technology, Sydney\"/>\n\n	<!-- Styles -->\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/stylesheet.css\"/>\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/js/lib/normalize-css/normalize.css\"/>\n	\n	<!-- Animation Libraries -->\n	<script src=\"assets/js/lib/jquery/dist/jquery.min.js\"></script>\n	<script src=\"assets/js/lib/isotope/jquery.isotope.min.js\"></script>\n	<script src=\"assets/js/lib/imagesloaded/imagesloaded.pkgd.min.js\"></script>\n\n	<!-- Angular Dependacies -->\n	<script type=\"text/javascript\" src=\"assets/js/lib/angular/angular.min.js\"></script>\n	<script src=\"assets/js/lib/angular-isotope/dist/angular-isotope.min.js\"></script>\n	<script src=\"assets/js/lib/angular-images-loaded/angular-images-loaded.js\"></script>\n	<script src=\"assets/js/lib/angular-retina/dist/angular-retina.min.js\"></script>\n	<script src=\"assets/js/lib/angular-animate/angular-animate.min.js\"></script>\n	\n	<!-- APP -->\n	<script type=\"text/javascript\" src=\"assets/js/app.js\"></script>\n\n\n</head>\n\n<body ng-app=\"id14App\" ng-controller=\"id14Controller\">\n\n<!-- <nav class=\"navBar hiddenNav\">\n<div ng-hide=\"showingProject\" class=\"animate-fade\">\n	<div class=\"brickContainer\">\n	<div id=\"navContent\" class=\"navContent\"><strong>UTS</strong> | ID14 </div>\n	<div id=\"nav-sort\" ng-include=\" \'sortOptions.html\' \"></div>\n	</div>\n	</div>\n<div ng-show=\"showingProject\" class=\"animate-fade\">\n	<div class=\"actionContainer\">\n		<div class=\"back\"> <a href=\"#\" ng-click=\"showProject()\">Back to all projects</a></div>\n	</div>\n</nav> -->\n\n\n\n<div class=\"infoContainer\">\n	<h1>ID14</h1>\n	<p>This year\'s students have assembled a wide variety of service and product designs; with work ranging from furniture, homewares, lighting, web, and wearables, this exhibition showcases the talent and diversity of the 2014 graduates. </p><br/><p> See the students and their work at the <span id=\"link\" ng-click=\"showInfo()\"> Industrial Design Graduate Show</span>.</p>\n</div>\n\n<div class=\"eventContainer animate-slide\" ng-if=\"showingInfo\">\n	<a name=\"info\"></a>\n	 <a href=\"https://www.google.com.au/maps/place/University+of+Technology,+Sydney\" target =\"_blank\"><div class=\"map\"> <img class=\"map\" ng-src=\"assets/images/global/uts_map.jpg\" alt=\"uts_map\"></div></a>\n	<div class=\"eventInfo\">\n		<p> <strong>Industrial Design Graduate Show </strong></p>\n		<p> UTS Foyer - Level 4, Tower Building</p>\n		<br/>\n		<p><span id=\"openingNight\"> Tue 25th November, 6pm to 9pm (Opening Night)<span></p>\n		<p> Wed 26th November</p>\n		<p> Thu 27th November</p>\n		<br/> \n		 <p> <a href=\"https://www.google.com.au/maps/place/University+of+Technology,+Sydney\" target=\"_blank\">Directions to UTS</a></p>\n		 <p><a href=\"assets/images/global/event.ics\" target=\"_blank\">+ Add to calendar </a></p>\n		\n	</div>\n</div>\n\n<div class=\"loader\" ng-hide=\"isPublic\">Student projects will be avaliable soon<br/><hr></div>\n\n<!-- THIS CONTENT ONLY VIEWABLE IN PREVIEW MODE -->\n<div ng-show=\"isPublic\">\n	<div class=\"loader\" id=\"projectLoader\"> Loading Projects... <br/><hr></div>\n	<div id=\"projects\" class=\"projectContainer hidden\">\n		<div id=\"sort-options\" class=\"brickContainer\">		\n				<!-- SORT OPTIONS-->				\n				<div class=\"sort-group\" opt-kind=\"\" ok-key=\"sortBy\">\n					<div ng-include=\" \'sortOptions.html\' \"></div>\n			    </div>\n		</div>\n\n		<!-- PROJECTS -->\n		<div isotope-container=\"isotope-container\" class=\"brickContainer\">\n			<div ng-repeat=\"brick in bricks\"  isotope-item=\"isotope-item item\">\n					<div ng-include=\"\'cardTemplate.html\' \" ng-show=\"isPublished(brick)\"></div>\n			</div>\n		</div>\n\n	<div class=\"sponsors\">\n		<a name=\"sponsors\"></a>\n			<p>A special thank you to our event sponsors:</p>\n			<br/>\n			<a href=\"http://uts.edu.au\" target=\"_blank\"><img ng-src=\"assets/images/global/UTS_logo.jpg\" alt=\"UTS\"/></a>\n			<a href=\"#\" target=\"_blank\"><img ng-src=\"assets/images/global/sponsor2.jpg\" alt=\"Fake Sponsor\"/></a>\n		</div>\n	</div>\n</div>\n\n<footer>\n	<p>Designed &amp; developed by <a href=\"http://mrprkr.com\" target=\"_blank\">Michael Parker</a></p>\n	<p>&#xA9;2014</p>\n	<br/>\n</footer>\n\n<div class=\"projectPanelContainer animate-fade\" ng-if=\"showingProject\">\n	<div class=\"projectBackground\" ng-click=\"showProject()\"></div>\n	<div ng-include=\" \'projectPanel.html\' \"></div>\n</div>\n\n<!--Google analytics -->\n<script>\n  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n  ga(\'create\', \'UA-54301603-1\', \'auto\');\n  ga(\'send\', \'pageview\');\n</script>\n</body>\n</html>\n");
$templateCache.put("projectPanel.html","<div class=\"projectPanel\">\n	<div id=\"backButton\">ID14 / <a href=\"#\" ng-click=\"showProject()\"> All Projects</a> / <a href=\"#\">{{cardSelected.firstName}} {{cardSelected.lastName}}</a></div>\n	<div class=\"projectPanelHeroContainer\">\n		<div class=\"projectPanelHero\" ng-style=\"{\'background-image\':\'url({{cardSelected.projectPhoto.url}})\'}\">\n			<!-- <img ng-src=\"{{cardSelected.projectPhoto.url}}\" class=\"projectPanelHeroContainer\">  -->\n		</div>\n	</div>\n	\n	<div class=\"projectContact content\">\n		<div id=\"projectUserPhoto\">\n			<img id=\"projectUserPhoto\" ng-src=\"{{cardSelected.userPhoto}}\" width=\"100\" height=\"100\">\n		</div>\n		<div id=\"projectUserDetails\">\n		<p><strong>{{cardSelected.firstName}} {{cardSelected.lastName}}</strong></p>\n		<p><a href=\"mailto:{{cardSelected.email}}\">{{cardSelected.email}}</a></p>\n		<p ng-show=\"showingPortfolio\"><a href=\"{{cardSelected.userPortfolio}}\" target=\"_blank\">See {{cardSelected.firstName}}\'s Portfolio</a></p>\n		<p ng-show=\"showingLinkedIn\"><a href=\"{{cardSelected.linkedIn}}\" target=\"_blank\">Connect on LinkedIn</a></p>\n		</div>\n	</div>\n	<div class=\"projectContent content\">\n		{{cardSelected.projectTitle}}\n		<p ng-bind-html=\"toTrusted(cardSelected.projectDescription)\"></p>\n		<br/>\n		<a ng-href=\"{{cardSelected.projectPhoto.url}}\" target=\"_blank\"><img ng-src=\"{{cardSelected.projectPhoto.url}}\" alt=\"{{cardSelected.projectPhoto.alt}}\"></a>\n		<br/><br/>\n		<a href=\"#\" ng-click=\"showProject()\">Back to all projects</a>\n	</div>\n\n</div>");
$templateCache.put("sortOptions.html","<div class=\"btn-group\" opt-kind=\"\" ok-key=\"sortBy\">\nArrange by:\n<a ok-sel=\".firstName\" ok-type=\"\">First Name</a> | <a ok-sel=\"[id]\" ok-type=\"integer\">Last Name</a> | <a ng-click=\"shuffle()\">Shuffle</a>\n</div>\n");}]);