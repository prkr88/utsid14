angular.module("templatescache", []).run(["$templateCache", function($templateCache) {$templateCache.put("cardTemplate.html","<div class=\"card\">\n	<a ng-href=\"#project/{{getId(brick)}}\">\n	<div class=\"contact\">\n		<div class=\"contactPhotoContainer\">\n			<img ng-src=\"{{brick.userPhoto}}\" class=\"contactPhotoContainer\">\n		</div>\n		<div class=\"name\"> \n			<a ng-href=\"#project/{{getId(brick)}}\">{{brick.firstName}} {{brick.lastName}}</a> \n			</div>\n		</div>\n	<div class=\"projectPhotoContainer images-loaded\"> \n		<img class=\"projectPhoto\" ng-src=\"{{brick.projectThumb}}\">\n	</div>\n	<div class=\"project\">\n		<div class=\"projectTitle\">\n			<p>{{brick.projectTitle}}</p>\n		</div>\n		<div class=\"projectDesc\">\n		{{brick.projectSynopsis}}\n		</div>\n\n		<div class=\"actions\">\n			<hr>\n			<a ng-href=\"#project/{{getId(brick)}}\" ng-bind=\"setProjectName(brick.firstName)\"></a>\n			</div>\n		</div>\n		</a>\n</div>\n");
$templateCache.put("home.html","<div class=\"infoContainer\">\n  <img style=\"margin:25px\" src=\"assets/images/global/logo.png\" alt=\"ID14 logo\"/>\n  <p>This year\'s students have assembled a wide variety of service and product designs; with work ranging from furniture, homewares, lighting, web, and wearables, this exhibition showcases the talent and diversity of the 2014 graduates. </p><br/><p> See the students and their work at the <span id=\"link\" ng-click=\"showInfo()\"> Industrial Design Graduate Show</span>.</p>\n</div>\n\n<div class=\"eventContainer animate-slide\" ng-if=\"showingInfo\">\n  <a name=\"info\"></a>\n  <a href=\"https://www.google.com.au/maps/place/University+of+Technology,+Sydney\" target =\"_blank\"><div class=\"map\"> <img class=\"map\" ng-src=\"assets/images/global/uts_map.jpg\" alt=\"uts_map\"></div></a>\n  <div class=\"eventInfo\">\n    <p> <strong>Industrial Design Graduate Show </strong></p>\n    <p> UTS Foyer - Level 4, Tower Building</p>\n    <br/>\n    <p><span id=\"openingNight\"> Tue 25th November, 6pm to 9pm (Opening Night)<span></p>\n    <p> Wed 26th November</p>\n    <p> Thu 27th November</p>\n    <br/>\n    <p> <a href=\"https://www.google.com.au/maps/place/University+of+Technology,+Sydney\" target=\"_blank\">Directions to UTS</a></p>\n    <p><a href=\"assets/images/global/event.ics\" target=\"_blank\">+ Add to calendar </a></p>\n\n  </div>\n</div>\n  <div class=\"loader\" id=\"projectLoader\"> Loading projects...<br/><hr></div>\n\n  <div id=\"projects\" class=\"projectContainer hidden\">\n    <div id=\"sort-options\" class=\"brickContainer\">\n      <!-- SORT OPTIONS-->\n      <div class=\"sort-group\" opt-kind=\"\" ok-key=\"sortBy\">\n        <div ng-include=\" \'sortOptions.html\' \"></div>\n      </div>\n    </div>\n\n    <!-- PROJECTS -->\n    <div isotope-container=\"isotope-container\" class=\"brickContainer\">\n      <div ng-repeat=\"brick in bricks | orderBy: orderValue\" isotope-item=\"isotope-item item\">\n        <div ng-include=\"\'cardTemplate.html\' \"></div>\n      </div>\n    </div>\n\n    <div class=\"sponsors\">\n      <a name=\"sponsors\"></a>\n      <p>A special thank you to our event sponsors:</p>\n      <br/>\n      <a href=\"http://www.spenceandlyda.com.au\" target=\"_blank\"><img ng-src=\"assets/images/global/sponsor3.png\" alt=\"UTS\"/></a>\n      <a href=\"http://uts.edu.au\" target=\"_blank\"><img ng-src=\"assets/images/global/UTS_logo.jpg\" alt=\"UTS\"/></a>\n      <a href=\"http://www.expocentric.com.au\" target=\"_blank\"><img ng-src=\"assets/images/global/sponsor4.jpg\" alt=\"UTS\"/></a>\n    </div>\n  </div>\n\n<footer>\n  <p>Designed &amp; developed by <a href=\"#\" target=\"_blank\">Michael Parker</a></p>\n  <p>&#xA9;2014</p>\n  <br/>\n</footer>");
$templateCache.put("index.html","<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n	<meta charset=\"UTF-8\">\n	<meta http-equiv=\"Cache-Control\" content=\"public\"/>\n	<!-- <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\"> -->\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1, user-scalable=no\">\n	<meta name=\"apple-mobile-web-app-capable\" content=\"yes\">\n	<link rel=\"apple-touch-icon\" sizes=\"152x152\" href=\"assets/images/global/apple-touch-icon-152.jpg\">\n	<base href=\"/\">\n	<title>UTS Industrial Design | Graduate Show 2014</title>\n\n	<!-- SEO -->\n	<meta name=\"description\" content=\"This year\'s students have assembled a wide variety of service and product designs; with work ranging from furniture, homewares, lighting, web, and wearables, this exhibition showcases the talent and diversity of the 2014 graduates.\"/>\n	<meta property=\"og:title\" content=\"Industrial Design Graduate Show (2014)\"/>\n	<meta property=\"og:type\" content=\"gallery\"/>\n	<meta property=\"og:url\" content=\"utsid14.com\"/>\n	<meta property=\"og:description\" content=\"This year\'s students have assembled a wide variety of service and product designs; with work ranging from furniture, homewares, lighting, web, and wearables, this exhibition showcases the talent and diversity of the 2014 graduates.\">\n	<meta property=\"keywords\" content=\"UTS, univeristy, technology, sydney, industrial, design, id14, graduate, show, grad, product, service, innovation, student, works, show, event, exhibition, 2014, 14, showcase, viscomm, id, fashion, graphic, industrial design, product design, IPD, web, wearable, furniture, homeware, homewares, lighting, batchelor, degree\">\n	<meta property=\"author\" content=\"University of Technology, Sydney\"/>\n\n	<!-- Styles -->\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/css/stylesheet.css\"/>\n	<link rel=\"stylesheet\" type=\"text/css\" href=\"assets/js/lib/normalize-css/normalize.css\"/>\n	\n	<!-- Animation Libraries -->\n	<script src=\"assets/js/lib/jquery/dist/jquery.min.js\"></script>\n	<script src=\"assets/js/lib/isotope/jquery.isotope.min.js\"></script>\n	<script src=\"assets/js/lib/imagesloaded/imagesloaded.pkgd.min.js\"></script>\n\n	<!-- Angular Dependacies -->\n	<script type=\"text/javascript\" src=\"assets/js/lib/angular/angular.min.js\"></script>\n	<script src=\"assets/js/lib/angular-isotope/dist/angular-isotope.min.js\"></script>\n	<script src=\"assets/js/lib/angular-images-loaded/angular-images-loaded.js\"></script>\n	<script src=\"assets/js/lib/angular-retina/dist/angular-retina.min.js\"></script>\n	<script src=\"assets/js/lib/angular-animate/angular-animate.min.js\"></script>\n	<script src=\"assets/js/lib/angular-route/angular-route.min.js\"></script>\n	<!-- CMS -->\n	<script src=\"assets/js/lib/contentful/dist/contentful.min.js\"></script>\n	<script src=\"assets/js/lib/ng-contentful/ng-contentful.js\"></script>\n\n	<!-- APP -->\n	<script type=\"text/javascript\" src=\"assets/js/app.js\"></script>\n\n\n</head>\n\n<body ng-app=\"id14App\">\n\n\n<ng-view></ng-view>\n\n\n<br/><br/><br/>\n\n\n<!--Google analytics -->\n<script>\n  (function(i,s,o,g,r,a,m){i[\'GoogleAnalyticsObject\']=r;i[r]=i[r]||function(){\n  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n  })(window,document,\'script\',\'//www.google-analytics.com/analytics.js\',\'ga\');\n  ga(\'create\', \'UA-54301603-1\', \'auto\');\n  ga(\'send\', \'pageview\');\n</script>\n</body>\n</html>\n");
$templateCache.put("project.html","<div id=\"backButton\">\n<span id=\"backButtonContainer\">ID14 / <a ng-href=\"#home\"> All Projects</a> / <a>{{cardSelected.firstName}} {{cardSelected.lastName}}</a></span>\n</div>\n\n<div ng-if=\"projectLoaded\" class=\"projectDetail animate-slide\">\n	<div class=\"projectPanelHeroContainer\" ng-style=\"{\'background-image\':\'url({{cardSelected.projectImage}})\'}\">\n		<div class=\"projectPanelHero\" >\n			<img ng-src=\"{{cardSelected.projectImage}}\" class=\"heroPhoto\">\n		</div>\n	</div>\n\n	<div class=\"content projectNav\"><span class=\"projectNav\" id=\"projectNav\">\n	<a ng-href=\"#project/{{getPrevId()}}\">Previous Project</a> | <a ng-href=\"#project/{{getNextId()}}\">Next Project</a></span></div>\n	<div class=\"projectContact content\">\n		<div id=\"projectUserPhoto\">\n			<img id=\"projectUserPhoto\" ng-src=\"{{cardSelected.userPhoto}}\" width=\"100\" height=\"100\">\n		</div>\n		<div id=\"projectUserDetails\">\n		<p><strong>{{cardSelected.firstName}} {{cardSelected.lastName}}</strong></p>\n		<p><a href=\"mailto:{{cardSelected.email}}\">{{cardSelected.email}}</a></p>\n		<p ng-show=\"showingPortfolio\"><a href=\"{{cardSelected.userPortfolio}}\" target=\"_blank\">See {{cardSelected.firstName}}\'s Portfolio</a></p>\n		<p ng-show=\"showingLinkedIn\"><a href=\"{{cardSelected.linkedIn}}\" target=\"_blank\">Connect on LinkedIn</a></p>\n		</div>\n	</div>\n	<div class=\"projectContent content\">\n		{{cardSelected.projectTitle}}\n		<p ng-bind-html=\"toTrusted(cardSelected.projectDescription)\"></p>\n		<br/><br/>\n	</div>\n	<div class=\"content projectNav\"><a ng-href=\"#home\" ng-click=\"showProject()\"> All Projects</a><span id=\"projectNav\">\n		<a ng-href=\"#project/{{getPrevId()}}\">Previous Project</a> | <a ng-href=\"#project/{{getNextId()}}\">Next Project</a></span><br/></div>\n</div>");
$templateCache.put("projectPanel.html","<div class=\"projectPanel\" id=\"project-panel\">\n	<div id=\"backButton\">ID14 / <a href=\"#\" ng-click=\"showProject()\"> All Projects</a> / <a href=\"#\">{{cardSelected.firstName}} {{cardSelected.lastName}}</a></div>\n	<div class=\"projectPanelHeroContainer\">\n		<div class=\"projectPanelHero\" ng-style=\"{\'background-image\':\'url({{cardSelected.projectPhoto.url}})\'}\">\n			<!-- <img ng-src=\"{{cardSelected.projectPhoto.url}}\" class=\"projectPanelHeroContainer\">  -->\n		</div>\n	</div>\n	\n	<div class=\"projectContact content\">\n		<div id=\"projectUserPhoto\">\n			<img id=\"projectUserPhoto\" ng-src=\"{{cardSelected.userPhoto}}\" width=\"100\" height=\"100\">\n		</div>\n		<div id=\"projectUserDetails\">\n		<p><strong>{{cardSelected.firstName}} {{cardSelected.lastName}}</strong></p>\n		<p><a href=\"mailto:{{cardSelected.email}}\">{{cardSelected.email}}</a></p>\n		<p ng-show=\"showingPortfolio\"><a href=\"{{cardSelected.userPortfolio}}\" target=\"_blank\">See {{cardSelected.firstName}}\'s Portfolio</a></p>\n		<p ng-show=\"showingLinkedIn\"><a href=\"{{cardSelected.linkedIn}}\" target=\"_blank\">Connect on LinkedIn</a></p>\n		</div>\n	</div>\n	<div class=\"projectContent content\">\n		{{cardSelected.projectTitle}}\n		<p ng-bind-html=\"toTrusted(cardSelected.projectDescription)\"></p>\n		<br/><br/>\n		<a href=\"#\" ng-click=\"showProject()\">Back to all projects</a>\n	</div>\n\n</div>");
$templateCache.put("sortOptions.html","<div class=\"btn-group\" opt-kind=\"\" ok-key=\"sortBy\">\nArrange by:\n<a ok-sel=\".firstName\" ok-type=\"\" ng-click=\"setOrder(firstName)\">First Name</a> | <a ok-sel=\".lastName\" ok-type=\"integer\" ng-click=\"setOrder(lastName)\">Last Name</a> | <a ok-sel=\".projectTitle\" ok-type=\"\" ng-click=\"setOrder(projectTitle)\">Project Name</a> <span id=\"shuffleOption\">| <a ng-click=\"shuffle()\">Shuffle</a></span>\n</div>\n");}]);