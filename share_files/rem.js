/**
 * Created by jiangsizhi on 2017/2/13.
 */
(function(doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = "orientationchange" in window ? "orientationchange" : "resize";
    var recalc = function() {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 720) {
            docEl.style.fontSize = "100px";
        }
        else {
            docEl.style.fontSize = 100 * (clientWidth / 720) + "px";
        }
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);