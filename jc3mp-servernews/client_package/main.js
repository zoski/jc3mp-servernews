/**
 * @overview package-servernews Main
 * @author Lukas 'derbl4ck' Berwanger , Myami
 * @copyright (c) derbl4ck, Myami
 * @license
 */

'use strict';

const ui = new WebUIWindow('jc3mp-servernews', 'package://jc3mp-servernews/ui/index.html', new Vector2(jcmp.viewportSize.x, jcmp.viewportSize.y));
ui.autoResize = true;

jcmp.ui.AddEventHandler('toggle_cursor', function (toggle) {
    localPlayer.controlsEnabled = toggle;
});