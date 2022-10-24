(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.platform = window.opspark.platform || {};

  let platform = window.opspark.platform;

  /**
   * init: This function initializes the platforms for the level.
   *
   * GOAL: Add as many platforms necessary to make your level challenging.
   *
   * Use the createPlatform Function to create platforms for the level.
   *
   * createPlatform() takes these arguments:
   *
   *      createPlatform(x, y, scaleX, scaleY);
   *
   *      x: The x coordineate for the platform.
   *      y: The y coordineate for the platform.
   *      scaleX: OPTIONAL The scale factor on the x-axis, this value will
   *              stretch the platform in width.
   *      scaleY: OPTIONAL The scale factor on the y-axis, this value will
   *              stretch the platform in height.
   */
  function init(game) {
    let createPlatform = platform.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
    createPlatform(100, 250);
    createPlatform(160, 260, 0.1);
    createPlatform(100, 150);
    createPlatform(270, 490, 0.3);
    createPlatform(600, 210);
    


    /*
     * aiground : here, we create a floor. Given the width of of the platform
     * asset, giving it a scaleX and scaleY of 2 will stretch it across the
     * bottom of the game.
     */
    createPlatform(0, game.world.height - 32, 3, 2); // DO NOT DELETE

    // example:
    createPlatform(400, 250);
    createPlatform(170, 460, 0.5);

    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    [main aad7565] update
 232 files changed, 74779 insertions(+)
 create mode 100644 index.html
 create mode 100644 portfolio.html
 create mode 100755 projects/bouncing-box/README.md
 create mode 100644 projects/bouncing-box/images/.DS_Store
 create mode 100644 projects/bouncing-box/images/bouncing-box.gif
 create mode 100644 projects/bouncing-box/images/changeOfSpeed.png
 create mode 100644 projects/bouncing-box/images/collisionDetection.png
 create mode 100644 projects/bouncing-box/images/wiggle_bug.gif
 create mode 100644 projects/bouncing-box/index.html
 create mode 100644 projects/bouncing-box/jquery.min.js
 create mode 100644 projects/bouncing-box/reading/index.md
 create mode 100644 projects/circularity/.npmrc
 create mode 100644 projects/circularity/LICENSE
 create mode 100644 projects/circularity/README.md
 create mode 100644 projects/circularity/bower.json
 create mode 100644 projects/circularity/bower_components/chance/.bower.json
 create mode 100644 projects/circularity/bower_components/chance/.bowerrc
 create mode 100644 projects/circularity/bower_components/chance/.gitignore
 create mode 100644 projects/circularity/bower_components/chance/.travis.yml
 create mode 100644 projects/circularity/bower_components/chance/Gruntfile.js
 create mode 100644 projects/circularity/bower_components/chance/README.md
 create mode 100644 projects/circularity/bower_components/chance/bin/chance.js
 create mode 100644 projects/circularity/bower_components/chance/bower.json
 create mode 100644 projects/circularity/bower_components/chance/chance.js
 create mode 100644 projects/circularity/bower_components/chance/component.json
 create mode 100644 projects/circularity/bower_components/chance/package.json
 create mode 100644 projects/circularity/bower_components/chance/test/base.js
 create mode 100644 projects/circularity/bower_components/chance/test/bower.json
 create mode 100644 projects/circularity/bower_components/chance/test/runner.html
 create mode 100644 projects/circularity/bower_components/chance/test/test.address.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.basic.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.finance.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.helpers.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.misc.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.mobile.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.person.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.text.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.time.js
 create mode 100644 projects/circularity/bower_components/chance/test/test.web.js
 create mode 100644 projects/circularity/bower_components/chance/util/yob-to-json.js
 create mode 100644 projects/circularity/bower_components/easeljs/.bower.json
 create mode 100644 projects/circularity/bower_components/easeljs/bower.json
 create mode 100644 projects/circularity/bower_components/easeljs/lib/easeljs-0.8.2.combined.js
 create mode 100644 projects/circularity/bower_components/easeljs/lib/easeljs-0.8.2.min.js
 create mode 100644 projects/circularity/bower_components/easeljs/lib/easeljs-NEXT.combined.js
 create mode 100644 projects/circularity/bower_components/easeljs/lib/easeljs-NEXT.min.js
 create mode 100644 projects/circularity/bower_components/easeljs/lib/webgl-0.8.2.combined.js
 create mode 100644 projects/circularity/bower_components/easeljs/lib/webgl-0.8.2.min.js
 create mode 100644 projects/circularity/bower_components/easeljs/lib/webgl-NEXT.combined.js
 create mode 100644 projects/circularity/bower_components/easeljs/lib/webgl-NEXT.min.js
 create mode 100644 projects/circularity/bower_components/lodash/.bower.json
 create mode 100644 projects/circularity/bower_components/lodash/LICENSE.txt
 create mode 100644 projects/circularity/bower_components/lodash/bower.json
 create mode 100644 projects/circularity/bower_components/lodash/lodash.js
 create mode 100644 projects/circularity/bower_components/lodash/lodash.min.js
 create mode 100644 projects/circularity/bower_components/opspark-draw/.bower.json
 create mode 100644 projects/circularity/bower_components/opspark-draw/README.md
 create mode 100644 projects/circularity/bower_components/opspark-draw/bower.json
 create mode 100644 projects/circularity/bower_components/opspark-draw/draw.js
 create mode 100644 projects/circularity/bower_components/racket/.bower.json
 create mode 100644 projects/circularity/bower_components/racket/README.md
 create mode 100644 projects/circularity/bower_components/racket/bower.json
 create mode 100644 projects/circularity/bower_components/racket/racket.js
 create mode 100644 projects/circularity/bower_components/tweenjs/.bower.json
 create mode 100644 projects/circularity/bower_components/tweenjs/CONTRIBUTING.md
 create mode 100644 projects/circularity/bower_components/tweenjs/LICENSE
 create mode 100644 projects/circularity/bower_components/tweenjs/README.md
 create mode 100644 projects/circularity/bower_components/tweenjs/bower.json
 create mode 100644 projects/circularity/bower_components/tweenjs/package.json
 create mode 100644 projects/circularity/bower_components/tweenjs/src/Tween.js
 create mode 100644 projects/circularity/css/bootstrap.min.css
 create mode 100644 projects/circularity/css/style.css
 create mode 100644 projects/circularity/img/bower-install.png
 create mode 100644 projects/circularity/img/bower-installed.png
 create mode 100644 projects/circularity/img/chrome.png
 create mode 100644 projects/circularity/img/clone-workspace.png
 create mode 100644 projects/circularity/img/op-spark-logo.png
 create mode 100644 projects/circularity/img/popout.png
 create mode 100644 projects/circularity/img/run-app.png
 create mode 100644 projects/circularity/img/screenBounds.png
 create mode 100644 projects/circularity/img/start-editing.png
 create mode 100644 projects/circularity/index.html
 create mode 100644 projects/circularity/js/init.js
 create mode 100644 projects/circularity/js/opspark.js
 create mode 100644 projects/circularity/package.json
 create mode 100644 projects/circularity/test/index.spec.js
 create mode 100644 projects/circularity/test/mocha.opts
 create mode 100644 projects/circularity/test/windowMock.js
 create mode 100644 projects/platformer/.npmrc
 create mode 100644 projects/platformer/README.md
 create mode 100644 projects/platformer/asset/cannon.png
 create mode 100644 projects/platformer/asset/collectable/database.png
 create mode 100644 projects/platformer/asset/collectable/diamond-head.png
 create mode 100644 projects/platformer/asset/collectable/grace-head.png
 create mode 100644 projects/platformer/asset/collectable/kennedi-head.png
 create mode 100644 projects/platformer/asset/collectable/max-head.png
 create mode 100644 projects/platformer/asset/collectable/steve-head.png
 create mode 100644 projects/platformer/asset/halle/phaser-json-array/halle.json
 create mode 100644 projects/platformer/asset/halle/phaser-json-array/halle.png
 create mode 100644 projects/platformer/asset/platform.png
 create mode 100644 projects/platformer/asset/projectile.png
 create mode 100644 projects/platformer/asset/readme/y_is_100.png
 create mode 100644 projects/platformer/asset/readme/y_is_500.png
 create mode 100644 projects/platformer/bower.json
 create mode 100644 projects/platformer/bower_components/jquery/.bower.json
 create mode 100644 projects/platformer/bower_components/jquery/AUTHORS.txt
 create mode 100644 projects/platformer/bower_components/jquery/LICENSE.txt
 create mode 100644 projects/platformer/bower_components/jquery/README.md
 create mode 100644 projects/platformer/bower_components/jquery/bower.json
 create mode 100644 projects/platformer/bower_components/jquery/dist/jquery.js
 create mode 100644 projects/platformer/bower_components/jquery/dist/jquery.min.js
 create mode 100644 projects/platformer/bower_components/jquery/dist/jquery.min.map
 create mode 100644 projects/platformer/bower_components/jquery/external/sizzle/LICENSE.txt
 create mode 100644 projects/platformer/bower_components/jquery/external/sizzle/dist/sizzle.js
 create mode 100644 projects/platformer/bower_components/jquery/external/sizzle/dist/sizzle.min.js
 create mode 100644 projects/platformer/bower_components/jquery/external/sizzle/dist/sizzle.min.map
 create mode 100644 projects/platformer/bower_components/jquery/src/.jshintrc
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/jsonp.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/load.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/parseJSON.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/parseXML.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/script.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/var/location.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/var/nonce.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/var/rquery.js
 create mode 100644 projects/platformer/bower_components/jquery/src/ajax/xhr.js
 create mode 100644 projects/platformer/bower_components/jquery/src/attributes.js
 create mode 100644 projects/platformer/bower_components/jquery/src/attributes/attr.js
 create mode 100644 projects/platformer/bower_components/jquery/src/attributes/classes.js
 create mode 100644 projects/platformer/bower_components/jquery/src/attributes/prop.js
 create mode 100644 projects/platformer/bower_components/jquery/src/attributes/support.js
 create mode 100644 projects/platformer/bower_components/jquery/src/attributes/val.js
 create mode 100644 projects/platformer/bower_components/jquery/src/callbacks.js
 create mode 100644 projects/platformer/bower_components/jquery/src/core.js
 create mode 100644 projects/platformer/bower_components/jquery/src/core/access.js
 create mode 100644 projects/platformer/bower_components/jquery/src/core/init.js
 create mode 100644 projects/platformer/bower_components/jquery/src/core/parseHTML.js
 create mode 100644 projects/platformer/bower_components/jquery/src/core/ready.js
 create mode 100644 projects/platformer/bower_components/jquery/src/core/var/rsingleTag.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/addGetHookIf.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/adjustCSS.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/curCSS.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/defaultDisplay.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/hiddenVisibleSelectors.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/showHide.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/support.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/var/cssExpand.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/var/getStyles.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/var/isHidden.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/var/rmargin.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/var/rnumnonpx.js
 create mode 100644 projects/platformer/bower_components/jquery/src/css/var/swap.js
 create mode 100644 projects/platformer/bower_components/jquery/src/data.js
 create mode 100644 projects/platformer/bower_components/jquery/src/data/Data.js
 create mode 100644 projects/platformer/bower_components/jquery/src/data/var/acceptData.js
 create mode 100644 projects/platformer/bower_components/jquery/src/data/var/dataPriv.js
 create mode 100644 projects/platformer/bower_components/jquery/src/data/var/dataUser.js
 create mode 100644 projects/platformer/bower_components/jquery/src/deferred.js
 create mode 100644 projects/platformer/bower_components/jquery/src/deprecated.js
 create mode 100644 projects/platformer/bower_components/jquery/src/dimensions.js
 create mode 100644 projects/platformer/bower_components/jquery/src/effects.js
 create mode 100644 projects/platformer/bower_components/jquery/src/effects/Tween.js
 create mode 100644 projects/platformer/bower_components/jquery/src/effects/animatedSelector.js
 create mode 100644 projects/platformer/bower_components/jquery/src/event.js
 create mode 100644 projects/platformer/bower_components/jquery/src/event/ajax.js
 create mode 100644 projects/platformer/bower_components/jquery/src/event/alias.js
 create mode 100644 projects/platformer/bower_components/jquery/src/event/focusin.js
 create mode 100644 projects/platformer/bower_components/jquery/src/event/support.js
 create mode 100644 projects/platformer/bower_components/jquery/src/event/trigger.js
 create mode 100644 projects/platformer/bower_components/jquery/src/exports/amd.js
 create mode 100644 projects/platformer/bower_components/jquery/src/exports/global.js
 create mode 100644 projects/platformer/bower_components/jquery/src/intro.js
 create mode 100644 projects/platformer/bower_components/jquery/src/jquery.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/_evalUrl.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/buildFragment.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/getAll.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/setGlobalEval.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/support.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/var/rcheckableType.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/var/rscriptType.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/var/rtagName.js
 create mode 100644 projects/platformer/bower_components/jquery/src/manipulation/wrapMap.js
 create mode 100644 projects/platformer/bower_components/jquery/src/offset.js
 create mode 100644 projects/platformer/bower_components/jquery/src/outro.js
 create mode 100644 projects/platformer/bower_components/jquery/src/queue.js
 create mode 100644 projects/platformer/bower_components/jquery/src/queue/delay.js
 create mode 100644 projects/platformer/bower_components/jquery/src/selector-native.js
 create mode 100644 projects/platformer/bower_components/jquery/src/selector-sizzle.js
 create mode 100644 projects/platformer/bower_components/jquery/src/selector.js
 create mode 100644 projects/platformer/bower_components/jquery/src/serialize.js
 create mode 100644 projects/platformer/bower_components/jquery/src/traversing.js
 create mode 100644 projects/platformer/bower_components/jquery/src/traversing/findFilter.js
 create mode 100644 projects/platformer/bower_components/jquery/src/traversing/var/dir.js
 create mode 100644 projects/platformer/bower_components/jquery/src/traversing/var/rneedsContext.js
 create mode 100644 projects/platformer/bower_components/jquery/src/traversing/var/siblings.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/arr.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/class2type.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/concat.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/document.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/documentElement.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/hasOwn.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/indexOf.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/pnum.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/push.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/rcssNum.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/rnotwhite.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/slice.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/support.js
 create mode 100644 projects/platformer/bower_components/jquery/src/var/toString.js
 create mode 100644 projects/platformer/bower_components/jquery/src/wrap.js
 create mode 100644 projects/platformer/config.json
 create mode 100644 projects/platformer/index.html
 create mode 100644 projects/platformer/js/controller/player-manager.js
 create mode 100644 projects/platformer/js/factory/cannon.js
 create mode 100644 projects/platformer/js/factory/collectable.js
 create mode 100644 projects/platformer/js/factory/game.js
 create mode 100644 projects/platformer/js/factory/platform.js
 create mode 100644 projects/platformer/js/factory/player.js
 create mode 100644 projects/platformer/js/factory/preload.js
 create mode 100644 projects/platformer/js/index.js
 create mode 100644 projects/platformer/js/init/cannon.js
 create mode 100644 projects/platformer/js/init/collectable.js
 create mode 100644 projects/platformer/js/init/platform.js
 create mode 100644 projects/platformer/js/init/player.js
 create mode 100644 projects/platformer/lib/jquery.min.js
 create mode 100644 projects/platformer/lib/phaser.min.js
 create mode 100644 projects/platformer/package.json
 create mode 100644 projects/platformer/test/mocha.opts
 create mode 100644 projects/platformer/test/platformer.spec.js
gitpod /workspace/ray-github-Raymond25014 (main) $ git push
Enumerating objects: 287, done.
Counting objects: 100% (287/287), done.
Delta compression using up to 16 threads
Compressing objects: 100% (267/267), done.
Writing objects: 100% (286/286), 5.27 MiB | 8.62 MiB/s, done.
Total 286 (delta 15), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (15/15), done.
remote: This repository moved. Please use the new location:
remote:   https://github.com/Raymond25014/Raymond25014.github.io.git
To https://github.com/Raymond25014/ray-github-Raymond25014.git
   66ebc2c..aad7565  main -> main
gitpod /workspace/ray-github-Raymond25014 (main)
  }
  platform.init = init;
})(window);
