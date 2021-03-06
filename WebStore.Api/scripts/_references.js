﻿/// <autosync enabled="true" />
/// <reference path="angular.js" />
/// <reference path="angular-mocks.js" />
/// <reference path="../wwwroot/admin/app/app.js" />
/// <reference path="../wwwroot/admin/app/config.js" />
/// <reference path="../wwwroot/admin/app/controllers/account/login-controller.js" />
/// <reference path="../wwwroot/admin/app/controllers/account/logout-controller.js" />
/// <reference path="../wwwroot/admin/app/controllers/category/category-controller.js" />
/// <reference path="../wwwroot/admin/app/controllers/home/home-controller.js" />
/// <reference path="../wwwroot/admin/app/controllers/product/product-create-controller.js" />
/// <reference path="../wwwroot/admin/app/controllers/product/product-edit-controller.js" />
/// <reference path="../wwwroot/admin/app/controllers/product/product-list-controller.js" />
/// <reference path="../wwwroot/admin/app/factories/account-factory.js" />
/// <reference path="../wwwroot/admin/app/factories/category-factory.js" />
/// <reference path="../wwwroot/admin/app/factories/product-factory.js" />
/// <reference path="../wwwroot/admin/app/routes.js" />
/// <reference path="../wwwroot/admin/bower_components/angular/angular.js" />
/// <reference path="../wwwroot/admin/bower_components/angular/index.js" />
/// <reference path="../wwwroot/admin/bower_components/angular-route/angular-route.js" />
/// <reference path="../wwwroot/admin/bower_components/angular-route/index.js" />
/// <reference path="../wwwroot/admin/bower_components/animate.css/gulpfile.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/dist/js/bootstrap.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/dist/js/npm.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/grunt/bs-commonjs-generator.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/grunt/bs-glyphicons-data-generator.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/grunt/bs-lessdoc-parser.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/grunt/bs-raw-files-generator.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/grunt/change-version.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/Gruntfile.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/affix.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/alert.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/button.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/carousel.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/collapse.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/dropdown.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/modal.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/popover.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/scrollspy.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/tab.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/tooltip.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/js/transition.js" />
/// <reference path="../wwwroot/admin/bower_components/bootstrap/package.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/dist/jquery.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/external/sizzle/dist/sizzle.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax/jsonp.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax/load.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax/parseXML.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax/script.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax/var/location.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax/var/nonce.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax/var/rquery.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/ajax/xhr.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/attributes.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/attributes/attr.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/attributes/classes.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/attributes/prop.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/attributes/support.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/attributes/val.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/callbacks.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/core.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/core/access.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/core/init.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/core/parseHTML.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/core/ready.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/core/var/rsingleTag.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/addGetHookIf.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/adjustCSS.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/curCSS.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/hiddenVisibleSelectors.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/showHide.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/support.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/var/cssExpand.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/var/getStyles.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/var/rmargin.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/var/rnumnonpx.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/css/var/swap.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/data.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/data/Data.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/data/var/acceptData.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/data/var/dataPriv.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/data/var/dataUser.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/deferred.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/deprecated.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/dimensions.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/effects.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/effects/animatedSelector.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/effects/Tween.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/event.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/event/ajax.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/event/alias.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/event/focusin.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/event/support.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/event/trigger.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/exports/amd.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/exports/global.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/jquery.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/_evalUrl.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/buildFragment.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/getAll.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/setGlobalEval.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/support.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/var/rcheckableType.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/var/rscriptType.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/var/rtagName.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/manipulation/wrapMap.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/offset.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/queue.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/queue/delay.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/selector.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/selector-native.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/selector-sizzle.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/serialize.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/traversing.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/traversing/findFilter.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/traversing/var/dir.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/traversing/var/rneedsContext.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/traversing/var/siblings.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/arr.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/class2type.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/concat.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/document.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/documentElement.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/hasOwn.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/indexOf.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/pnum.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/push.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/rcssNum.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/rnotwhite.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/slice.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/support.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/var/toString.js" />
/// <reference path="../wwwroot/admin/bower_components/jquery/src/wrap.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/compile/minified/ng-img-crop.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/compile/unminified/ng-img-crop.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/gulpfile.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/classes/crop-area.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/classes/crop-area-circle.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/classes/crop-area-square.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/classes/crop-canvas.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/classes/crop-exif.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/classes/crop-host.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/classes/crop-pubsub.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/init.js" />
/// <reference path="../wwwroot/admin/bower_components/ng-img-crop/source/js/ng-img-crop.js" />
/// <reference path="../wwwroot/admin/bower_components/toastr/toastr.js" />
/// <reference path="../wwwroot/store/app/app.js" />
/// <reference path="../wwwroot/store/app/config.js" />
/// <reference path="../wwwroot/store/app/controllers/account/login-controller.js" />
/// <reference path="../wwwroot/store/app/controllers/account/logout-controller.js" />
/// <reference path="../wwwroot/store/app/controllers/category/category-controller.js" />
/// <reference path="../wwwroot/store/app/controllers/home/home-controller.js" />
/// <reference path="../wwwroot/store/app/controllers/product/product-create-controller.js" />
/// <reference path="../wwwroot/store/app/controllers/product/product-edit-controller.js" />
/// <reference path="../wwwroot/store/app/controllers/product/product-list-controller.js" />
/// <reference path="../wwwroot/store/app/factories/account-factory.js" />
/// <reference path="../wwwroot/store/app/factories/category-factory.js" />
/// <reference path="../wwwroot/store/app/factories/product-factory.js" />
/// <reference path="../wwwroot/store/app/routes.js" />
/// <reference path="../wwwroot/store/bower_components/angular/angular.js" />
/// <reference path="../wwwroot/store/bower_components/angular/index.js" />
/// <reference path="../wwwroot/store/bower_components/angular-route/angular-route.js" />
/// <reference path="../wwwroot/store/bower_components/angular-route/index.js" />
/// <reference path="../wwwroot/store/bower_components/animate.css/gulpfile.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/dist/js/bootstrap.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/dist/js/npm.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/grunt/bs-commonjs-generator.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/grunt/bs-glyphicons-data-generator.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/grunt/bs-lessdoc-parser.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/grunt/bs-raw-files-generator.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/grunt/change-version.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/Gruntfile.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/affix.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/alert.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/button.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/carousel.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/collapse.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/dropdown.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/modal.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/popover.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/scrollspy.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/tab.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/tooltip.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/js/transition.js" />
/// <reference path="../wwwroot/store/bower_components/bootstrap/package.js" />
