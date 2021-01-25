(function (win) {
    win.common = {};
    win.common.test = function () {
        console.log('win Legacy')
    }
}(window));

var common2 = common2 || {};
common2.test = function () {
    console.log('Legacy')
}
window.common2 = common2;