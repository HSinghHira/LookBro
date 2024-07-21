function FontChange(_0x6d86x2) {
    tempObj.fontSize = _0x6d86x2.value, CanvasObj.renderAll();
  }
  function clickdata() {
    document.getElementById("backgroundcolor").click();
  }
  function deactiveData() {
    canvas.deactivateAll(), canvas.renderAll();
  }
  function changeColor1() {
    $("#btn1").hasClass("active_btn") ? canvas.backgroundColor = document.getElementById("color_paletter1").style.backgroundColor : $("#btn2").hasClass("active_btn") && tempObj.setColor(document.getElementById("color_paletter1").style.backgroundColor), canvas.renderAll();
  }
  function keyupChangeColor1() {
    document.getElementById("color_paletter1").style.backgroundColor = document.getElementById("numbercolor").value, $("#btn1").hasClass("active_btn") ? canvas.backgroundColor = document.getElementById("numbercolor").value : $("#btn2").hasClass("active_btn") && tempObj.setColor(document.getElementById("numbercolor").value), canvas.renderAll();
  }
  function clickdata1() {
    document.getElementById("backgroundcolor1").click();
  }
  function changeColor2() {
    document.getElementById("bgcolortext1").value = document.getElementById("backgroundcolor1").value, document.getElementById("color_paletter2").style.backgroundColor = document.getElementById("backgroundcolor1").value, tempObj.setColor(document.getElementById("backgroundcolor1").value), canvas.renderAll();
  }
  function keyupChangeColor2() {
    document.getElementById("color_paletter2").style.backgroundColor = document.getElementById("bgcolortext1").value, tempObj.setColor(document.getElementById("bgcolortext1").value), canvas.renderAll();
  }
  function downloadCanvas(_0x6d86x2, _0x6d86xb) {
    var _0x6d86xc = Math.ceil(1e5 * Math.random());
    canvas.deactivateAll(), canvas.renderAll(), _0x6d86x2.href = document.getElementById(_0x6d86xb).toDataURL(), _0x6d86x2.download = _0x6d86xc + ".jpg";
  }
  function FontChnaged(_0x6d86x2) {
    tempObj.fontFamily = _0x6d86x2.value, CanvasObj.renderAll();
  }
  function FontStyle(_0x6d86x2) {
    "normal" == _0x6d86x2.value ? (tempObj.fontWeight = "400", tempObj.fontStyle = _0x6d86x2.value) : "bold" == _0x6d86x2.value ? (tempObj.fontStyle = "normal", tempObj.fontWeight = _0x6d86x2.value) : "italic" == _0x6d86x2.value ? (tempObj.fontWeight = "400", tempObj.fontStyle = _0x6d86x2.value) : "BoldItalic" == _0x6d86x2.value && (tempObj.fontWeight = "bold", tempObj.fontStyle = "italic"), CanvasObj.renderAll();
  }
  function ColorChanged(_0x6d86x2) {
    tempObj.Color = "#" + _0x6d86x2.value, CanvasObj.renderAll();
  }
  function BoldChanged(_0x6d86x2) {
    alert(_0x6d86x2.value);
  }
  function deleteData() {
    canvas.getActiveGroup() ? (canvas.getActiveGroup().forEachObject(function (_0x6d86x2) {
      canvas.remove(_0x6d86x2);
    }), canvas.discardActiveGroup().renderAll()) : null == canvas.getActiveObject().text && canvas.remove(canvas.getActiveObject());
  }
  function BColorChanged(_0x6d86x2) {
    canvas.backgroundColor = "#" + _0x6d86x2.value, canvas.renderAll();
  }
  function LineOneText(_0x6d86x2) {
    text41.text = _0x6d86x2.value, text41.left = center.x - text41.width / 2, canvas.renderAll();
  }
  function LineTwoText(_0x6d86x2) {
    text40.text = _0x6d86x2.value, text40.left = center.x - text40.width / 2, canvas.renderAll();
  }
  function chnageLng(_0x6d86x2) {
    var _0x6d86xb = document.getElementById("ftext"), _0x6d86xc = document.getElementById("stext");
    if ("hindi" == _0x6d86x2.value) {
      var _0x6d86x16 = "देख भाई", _0x6d86x17 = "मेमे इधर बनाने का";
      text41.text = _0x6d86x16, text41.left = center.x - text41.width / 2, _0x6d86xb.value = _0x6d86x16, text40.text = _0x6d86x17, text40.left = center.x - text40.width / 2, _0x6d86xc.value = _0x6d86x17, canvas.renderAll();
    }
    ;
    if ("guj" == _0x6d86x2.value) {
      var _0x6d86x16 = "જો બકા", _0x6d86x17 = "MEME તો અહીયાજ બનાવાનું !";
      text41.text = _0x6d86x16, text41.left = center.x - text41.width / 2, _0x6d86xb.value = _0x6d86x16, text40.text = _0x6d86x17, text40.fontSize = 30, text40.left = center.x - text40.width / 2, _0x6d86xc.value = _0x6d86x17, canvas.renderAll();
    }
    ;
    if ("en" == _0x6d86x2.value) {
      var _0x6d86x16 = "See Baby", _0x6d86x17 = "Meme will be made here only!";
      text41.text = _0x6d86x16, text41.left = center.x - text41.width / 2, _0x6d86xb.value = _0x6d86x16, text40.text = _0x6d86x17, text40.left = center.x - text40.width / 2, _0x6d86xc.value = _0x6d86x17, canvas.renderAll();
    }
    ;
    if ("marathi" == _0x6d86x2.value) {
      var _0x6d86x16 = "देख भाऊ", _0x6d86x17 = "तुम्ही कसे आहात?";
      text41.text = _0x6d86x16, text41.left = center.x - text41.width / 2, _0x6d86xb.value = _0x6d86x16, text40.text = _0x6d86x17, text40.left = center.x - text40.width / 2, _0x6d86xc.value = _0x6d86x17, canvas.renderAll();
    }
  }
  function facebook() {
    canvas.deactivateAll(), canvas.renderAll();
    var _0x6d86x2 = canvas.toDataURL();
    $.ajax({type: "POST", url: "saveme.php", data: {imgBase64: _0x6d86x2}}).done(function (_0x6d86x2) {
      window.open("//www.facebook.com/share.php?m2w&s=100&p[url]=" + encodeURIComponent("http://hsinghhira.me") + "&p[images][0]=" + encodeURIComponent("http://hsinghhira.me/" + _0x6d86x2) + "&p[title]=" + encodeURIComponent("hello") + "&p[summary]=" + encodeURIComponent("Its Free"), "Facebook", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
    });
  }
  function twitter() {
    canvas.deactivateAll(), canvas.renderAll();
    var _0x6d86x2 = canvas.toDataURL();
    $.ajax({type: "POST", url: "saveme.php", data: {imgBase64: _0x6d86x2}}).done(function (_0x6d86x2) {
      window.open("https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent("http://www.deskhbhai.com/" + _0x6d86x2) + "&text=" + encodeURIComponent("See Baby") + "%20" + encodeURIComponent("http://hsinghhira.me/" + _0x6d86x2), "Twitter", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
    });
  }
  function twitter() {
    canvas.deactivateAll(), canvas.renderAll();
    var _0x6d86x2 = canvas.toDataURL();
    $.ajax({type: "POST", url: "saveme.php", data: {imgBase64: _0x6d86x2}}).done(function (_0x6d86x2) {
      window.open("https://twitter.com/intent/tweet?original_referer=" + encodeURIComponent("http://hsinghhira.me/" + _0x6d86x2) + "&text=" + encodeURIComponent("See Baby") + "%20" + encodeURIComponent("http://hsinghhira.me/" + _0x6d86x2), "Twitter", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
    });
  }
  function gplus() {
    canvas.deactivateAll(), canvas.renderAll();
    var _0x6d86x2 = canvas.toDataURL();
    $.ajax({type: "POST", url: "saveme.php", data: {imgBase64: _0x6d86x2}}).done(function (_0x6d86x2) {
      window.open("//plus.google.com/share?url=" + encodeURIComponent("http://hsinghhira.me/" + _0x6d86x2), "GooglePlus", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
    });
  }
  function pintrest() {
    canvas.deactivateAll(), canvas.renderAll();
    var _0x6d86x2 = canvas.toDataURL();
    $.ajax({type: "POST", url: "saveme.php", data: {imgBase64: _0x6d86x2}}).done(function (_0x6d86x2) {
      window.open("//pinterest.com/pin/create/button/?url=" + encodeURIComponent("http://hsinghhira.me/" + _0x6d86x2) + "&media=" + encodeURIComponent("http://hsinghhira.me/" + _0x6d86x2) + "&description=" + encodeURIComponent("Free meme Genrater"), "Pinterest", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600");
    });
  }
  var tempObj = "", CanvasObj = "", group = [], text40 = "", text41 = "", state = [], obj = "", canvas = this.__canvas = new fabric.Canvas("c"), center = {x: canvas.width / 2, y: canvas.height / 2};
  state[0] = JSON.stringify(canvas.toDatalessJSON()), function () {
    function _0x6d86x2(_0x6d86x2) {
      function _0x6d86xb(_0x6d86x2) {
        var _0x6d86xb;
        _0x6d86xb = window.event ? window.event.keyCode : _0x6d86x2.keyCode, 46 == _0x6d86xb && (canvas.getActiveGroup() ? (canvas.getActiveGroup().forEachObject(function (_0x6d86x2) {
          canvas.remove(_0x6d86x2);
        }), canvas.discardActiveGroup().renderAll()) : null == canvas.getActiveObject().text && canvas.remove(canvas.getActiveObject()));
      }
      "i-text" == _0x6d86x2.target.get("type") && (tempObj = _0x6d86x2.target, CanvasObj = canvas, $("#text_editer_id").fadeIn(200), $("#data_size").val(tempObj.fontSize)), document.onkeydown = _0x6d86xb;
    }
    canvas.on("after:render", function () {
      text40.left = text40.left + 0, text41.left = text41.left + 0;
    }), canvas.backgroundColor = "#F3BC53", $("#language").val("en"), $(".targetDiv a img").click(function () {
      if (null != $(this).attr("data-src")) {
        $("#multiple_img").is(":checked") || canvas.remove(obj);
        var _0x6d86x2 = $(this).attr("data-src");
        fabric.loadSVGFromURL(_0x6d86x2, function (_0x6d86x2, _0x6d86xb) {
          obj = fabric.util.groupSVGElements(_0x6d86x2, _0x6d86xb), obj.set({left: center.x - 87.5, top: 145}).scaleToWidth(175).setCoords(), canvas.add(obj).setActiveObject(obj);
        });
      } else {
        $("#multiple_img").is(":checked") || canvas.remove(obj);
        var _0x6d86x2 = $(this).attr("src");
        fabric.Image.fromURL(_0x6d86x2, function (_0x6d86x2) {
          obj = _0x6d86x2.scale(0.6).set({left: center.x - 87.5, top: 145}), canvas.add(obj).setActiveObject(obj);
        });
      }
    });
    var _0x6d86xb = "Look Bro", _0x6d86xc = "More text here", _0x6d86x16 = document.getElementById("ftext"), _0x6d86x17 = document.getElementById("stext");
    text41 = new fabric.IText(_0x6d86xb, {fontSize: 40, left: center.x, top: 50, angle: 0, textAlign: "center", fontFamily: "open sans", fontWeight: "bold"}), text41.left = center.x - text41.width / 2, canvas.add(text41).setActiveObject(text41), _0x6d86x16.value = _0x6d86xb, text40 = new fabric.IText(_0x6d86xc, {fontSize: 35, fontFamily: "open sans", left: center.x, top: center.y + 100, angle: 0, textAlign: "center"}), text40.left = center.x - text40.width / 2, canvas.add(text40).setActiveObject(text40), _0x6d86x17.value = _0x6d86xc;
    var _0x6d86x25 = "https://git.hsinghhira.me/LookBro/images/itag.png";
    fabric.Image.fromURL(_0x6d86x25, function (_0x6d86x2) {
      var _0x6d86xb = _0x6d86x2.scale(1).set({left: center.x - 58.333333333333336, top: 145});
      _0x6d86xb.left = center.x - _0x6d86xb.width / 2, _0x6d86xb.top = canvas.height - 30, _0x6d86xb.set("selectable", false), canvas.add(_0x6d86xb).setActiveObject(_0x6d86xb);
    });
    var _0x6d86x26 = "https://git.hsinghhira.me/LookBro/images/iweb.png";
    fabric.Image.fromURL(_0x6d86x26, function (_0x6d86x27) {
      var _0x6d86x28 = _0x6d86x27.scale(1).set({left: center.x - 58.333333333333336, top: 0});
      _0x6d86x28.left = center.x - _0x6d86x28.width / 2;
      _0x6d86x28.top = 0;
      _0x6d86x28.set("selectable", false);
      canvas.add(_0x6d86x28);
    });
    document.getElementById("imgLoader").onchange = function (_0x6d86x2) {
      var _0x6d86xb = new FileReader;
      _0x6d86xb.onload = function (_0x6d86x2) {
        console.log("fdsf");
        var _0x6d86xb = new Image;
        _0x6d86xb.src = _0x6d86x2.target.result, _0x6d86xb.onload = function () {
          var _0x6d86x2 = new fabric.Image(_0x6d86xb);
          _0x6d86x2.scale(0.6).set({left: center.x - 87.5, top: 145}), canvas.add(_0x6d86x2);
        };
      }, _0x6d86xb.readAsDataURL(_0x6d86x2.target.files[0]);
    }, canvas.on("object:selected", _0x6d86x2);
  }(), $(document).ready(function () {
    for ($("#data_one_temp").click(), i = 1; 100 >= i; i++) {
      document.getElementById("data_size").innerHTML += "<option value='" + i + "'>" + i + " px</option>";
    }
    ;
    $(".text_bg").click(function () {
      $("#btn1").hasClass("active_btn") ? canvas.backgroundColor = $(this).css("background-color") : $("#btn2").hasClass("active_btn") && tempObj.setColor($(this).css("background-color")), canvas.renderAll();
    }), $(".text_color div p").click(function () {
      tempObj.setColor($(this).css("background-color")), canvas.renderAll();
    }), $("#btn1").click(function () {
      $("#btn2").removeClass("active_btn"), $("#btn1").removeClass("active_btn"), $("#btn1").addClass("active_btn");
    }), $("#btn2").click(function () {
      $("#btn1").removeClass("active_btn"), $("#btn2").removeClass("active_btn"), $("#btn2").addClass("active_btn");
    });
  });
  