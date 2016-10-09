function FontChange(e) {
    tempObj.fontSize = e.value, CanvasObj.renderAll()
}

function clickdata() {
    document.getElementById("backgroundcolor").click()
}

function deactiveData() {
    canvas.deactivateAll(), canvas.renderAll()
}

function changeColor1() {
    $("#btn1").hasClass("active_btn") ? canvas.backgroundColor = document.getElementById("color_paletter1").style.backgroundColor : $("#btn2").hasClass("active_btn") && tempObj.setColor(document.getElementById("color_paletter1").style.backgroundColor), canvas.renderAll()
}

function keyupChangeColor1() {
    document.getElementById("color_paletter1").style.backgroundColor = document.getElementById("numbercolor").value, $("#btn1").hasClass("active_btn") ? canvas.backgroundColor = document.getElementById("numbercolor").value : $("#btn2").hasClass("active_btn") && tempObj.setColor(document.getElementById("numbercolor").value), canvas.renderAll()
}

function clickdata1() {
    document.getElementById("backgroundcolor1").click()
}

function changeColor2() {
    document.getElementById("bgcolortext1").value = document.getElementById("backgroundcolor1").value, document.getElementById("color_paletter2").style.backgroundColor = document.getElementById("backgroundcolor1").value, tempObj.setColor(document.getElementById("backgroundcolor1").value), canvas.renderAll()
}

function keyupChangeColor2() {
    document.getElementById("color_paletter2").style.backgroundColor = document.getElementById("bgcolortext1").value, tempObj.setColor(document.getElementById("bgcolortext1").value), canvas.renderAll()
}

function downloadCanvas(e, t) {
    var n = Math.ceil(1e5 * Math.random());
    canvas.deactivateAll(), canvas.renderAll(), e.href = document.getElementById(t).toDataURL(), e.download = n + ".jpg"
}

function FontChnaged(e) {
    tempObj.fontFamily = e.value, CanvasObj.renderAll()
}

function FontStyle(e) {
    "normal" == e.value ? (tempObj.fontWeight = "400", tempObj.fontStyle = e.value) : "bold" == e.value ? (tempObj.fontStyle = "normal", tempObj.fontWeight = e.value) : "italic" == e.value ? (tempObj.fontWeight = "400", tempObj.fontStyle = e.value) : "BoldItalic" == e.value && (tempObj.fontWeight = "bold", tempObj.fontStyle = "italic"), CanvasObj.renderAll()
}

function ColorChanged(e) {
    tempObj.Color = "#" + e.value, CanvasObj.renderAll()
}

function BoldChanged(e) {
    alert(e.value)
}

function deleteData() {
    canvas.getActiveGroup() ? (canvas.getActiveGroup().forEachObject(function(e) {
        canvas.remove(e)
    }), canvas.discardActiveGroup().renderAll()) : null == canvas.getActiveObject().text && canvas.remove(canvas.getActiveObject())
}

function BColorChanged(e) {
    canvas.backgroundColor = "#" + e.value, canvas.renderAll()
}

function LineOneText(e) {
    text41.text = e.value, text41.left = center.x - text41.width / 2, canvas.renderAll()
}

function LineTwoText(e) {
    text40.text = e.value, text40.left = center.x - text40.width / 2, canvas.renderAll()
}

function chnageLng(e) {
    var t = document.getElementById("ftext"),
        n = document.getElementById("stext");
    if ("hindi" == e.value) {
        var a = "देख भाई",
            o = "मेमे इधर बनाने का";
        text41.text = a, text41.left = center.x - text41.width / 2, t.value = a, text40.text = o, text40.left = center.x - text40.width / 2, n.value = o, canvas.renderAll()
    }
    if ("guj" == e.value) {
        var a = "જો બકા",
            o = "MEME તો અહીયાજ બનાવાનું !";
        text41.text = a, text41.left = center.x - text41.width / 2, t.value = a, text40.text = o, text40.fontSize = 30, text40.left = center.x - text40.width / 2, n.value = o, canvas.renderAll()
    }
    if ("en" == e.value) {
        var a = "See Baby",
            o = "Meme will be made here only!";
        text41.text = a, text41.left = center.x - text41.width / 2, t.value = a, text40.text = o, text40.left = center.x - text40.width / 2, n.value = o, canvas.renderAll()
    }
    if ("marathi" == e.value) {
        var a = "देख भाऊ",
            o = "तुम्ही कसे आहात?";
        text41.text = a, text41.left = center.x - text41.width / 2, t.value = a, text40.text = o, text40.left = center.x - text40.width / 2, n.value = o, canvas.renderAll()
    }
}

function facebook() {
    canvas.deactivateAll(), canvas.renderAll();
    var e = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: e
        }
    }).done(function(e) {
        window.open("//www.facebook.com/share.php?m2w&s=100&p[url]=" + encodeURIComponent("http://www.dekhkaka.com") + "&p[images][0]=" + encodeURIComponent("http://www.dekhkaka.com/" + e) + "&p[title]=" + encodeURIComponent("hello") + "&p[summary]=" + encodeURIComponent("Its Free"), "Facebook", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}

function twitter() {
    canvas.deactivateAll(), canvas.renderAll();
    var e = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: e
        }
    }).done(function(e) {
        window.open("https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent("http://www.deskhbhai.com/" + e) + "&text=" + encodeURIComponent("See Baby") + "%20" + encodeURIComponent("http://www.dekhkaka.com/" + e), "Twitter", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}

function twitter() {
    canvas.deactivateAll(), canvas.renderAll();
    var e = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: e
        }
    }).done(function(e) {
        window.open("https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent("http://www.dekhkaka.com/" + e) + "&text=" + encodeURIComponent("See Baby") + "%20" + encodeURIComponent("http://www.dekhkaka.com/" + e), "Twitter", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}

function gplus() {
    canvas.deactivateAll(), canvas.renderAll();
    var e = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: e
        }
    }).done(function(e) {
        window.open("//plus.google.com/share?url=" + encodeURIComponent("http://www.dekhkaka.com/" + e), "GooglePlus", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}

function pintrest() {
    canvas.deactivateAll(), canvas.renderAll();
    var e = canvas.toDataURL();
    $.ajax({
        type: "POST",
        url: "saveme.php",
        data: {
            imgBase64: e
        }
    }).done(function(e) {
        window.open("//pinterest.com/pin/create/button/?url=" + encodeURIComponent("http://www.dekhkaka.com/" + e) + "&media=" + encodeURIComponent("http://www.dekhkaka.com/" + e) + "&description=" + encodeURIComponent("Free meme Genrater"), "Pinterest", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600")
    })
}
var tempObj = "",
    CanvasObj = "",
    group = [],
    text40 = "",
    text41 = "",
    state = [],
    obj = "",
    canvas = this.__canvas = new fabric.Canvas("c"),
    center = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };
state[0] = JSON.stringify(canvas.toDatalessJSON()),
    function() {
        function e(e) {
            function t(e) {
                var t;
                t = window.event ? window.event.keyCode : e.keyCode, 46 == t && (canvas.getActiveGroup() ? (canvas.getActiveGroup().forEachObject(function(e) {
                    canvas.remove(e)
                }), canvas.discardActiveGroup().renderAll()) : null == canvas.getActiveObject().text && canvas.remove(canvas.getActiveObject()))
            }
            "i-text" == e.target.get("type") && (tempObj = e.target, CanvasObj = canvas, $("#text_editer_id").fadeIn(200), $("#data_size").val(tempObj.fontSize)), document.onkeydown = t
        }
        canvas.on("after:render", function() {
            text40.left = text40.left + 0, text41.left = text41.left + 0
        }), canvas.backgroundColor = "#F3BC53", $("#language").val("en"), $(".targetDiv a img").click(function() {
            if (null != $(this).attr("data-src")) {
                $("#multiple_img").is(":checked") || canvas.remove(obj);
                var e = $(this).attr("data-src");
                fabric.loadSVGFromURL(e, function(e, t) {
                    obj = fabric.util.groupSVGElements(e, t), obj.set({
                        left: center.x - 87.5,
                        top: 145
                    }).scaleToWidth(175).setCoords(), canvas.add(obj).setActiveObject(obj)
                })
            } else {
                $("#multiple_img").is(":checked") || canvas.remove(obj);
                var e = $(this).attr("src");
                fabric.Image.fromURL(e, function(e) {
                    obj = e.scale(.6).set({
                        left: center.x - 87.5,
                        top: 145
                    }), canvas.add(obj).setActiveObject(obj)
                })
            }
        });
        var t = "Look Bro",
            n = "More text here",
            a = document.getElementById("ftext"),
            o = document.getElementById("stext");
        text41 = new fabric.IText(t, {
            fontSize: 40,
            left: center.x,
            top: 50,
            angle: 0,
            textAlign: "center",
			fontFamily: "open sans",
            fontWeight: "bold"
        }), text41.left = center.x - text41.width / 2, canvas.add(text41).setActiveObject(text41), a.value = t, text40 = new fabric.IText(n, {
            fontSize: 35,
			fontFamily: "open sans",
            left: center.x,
            top: center.y + 100,
            angle: 0,
            textAlign: "center"
        }), text40.left = center.x - text40.width / 2, canvas.add(text40).setActiveObject(text40), o.value = n;
        var c = "images/itag.png";
        fabric.Image.fromURL(c, function(e) {
            var t = e.scale(1).set({
                left: center.x - 175 / 3,
                top: 145
            });
            t.left = center.x - t.width / 2, t.top = canvas.height - 30, t.set("selectable", !1), canvas.add(t).setActiveObject(t)
        });
        var tmp_imgs = "images/iweb.png";
        fabric.Image.fromURL(tmp_imgs, function(img) {
            var img2 = img.scale(1).set({
                left: center.x - (175 / 3),
                top: 0
            });

            img2.left = center.x - (img2.width / 2);
            img2.top = 0;
            img2.set('selectable', false);
            canvas.add(img2);


        });
        document.getElementById("imgLoader").onchange = function(e) {
            var t = new FileReader;
            t.onload = function(e) {
                console.log("fdsf");
                var t = new Image;
                t.src = e.target.result, t.onload = function() {
                    var e = new fabric.Image(t);
                    e.scale(.6).set({
                        left: center.x - 87.5,
                        top: 145
                    }), canvas.add(e)
                }
            }, t.readAsDataURL(e.target.files[0])
        }, canvas.on("object:selected", e)
    }(), $(document).ready(function() {
        for ($("#data_one_temp").click(), i = 1; 100 >= i; i++) document.getElementById("data_size").innerHTML += "<option value='" + i + "'>" + i + " px</option>";
        $(".text_bg").click(function() {
            $("#btn1").hasClass("active_btn") ? canvas.backgroundColor = $(this).css("background-color") : $("#btn2").hasClass("active_btn") && tempObj.setColor($(this).css("background-color")), canvas.renderAll()
        }), $(".text_color div p").click(function() {
            tempObj.setColor($(this).css("background-color")), canvas.renderAll()
        }), $("#btn1").click(function() {
            $("#btn2").removeClass("active_btn"), $("#btn1").removeClass("active_btn"), $("#btn1").addClass("active_btn")
        }), $("#btn2").click(function() {
            $("#btn1").removeClass("active_btn"), $("#btn2").removeClass("active_btn"), $("#btn2").addClass("active_btn")
        })
    });