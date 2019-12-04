// var loginYF = sessionStorage.getItem('loginYF');
// alert(loginYF);
// if (typeof loginYF != "undefined") {
//     const LoginSuccess = loginYF;
// }
const LoginSuccess = 1;

function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
    }
}
function sendAjax(e, t, a, i) {
    i || (i = {});
    var o = new XMLHttpRequest;
    return o.open(e, t), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "GET" != e && o.setRequestHeader("X-CSRF-TOKEN", _GLOBAL._TOKEN), o.withCredentials = !0, i.upload ? o.send(a) : (o.setRequestHeader("Content-Type", "application/json"), a ? o.send(JSON.stringify(a)) : o.send()), o
}

function getElement(e) {
    return document.querySelector(e)
}

function getAllElements(e) {
    return document.querySelectorAll(e)
}

function createElement(e, t, a, i, o) {
    var n = document.createElement(t);
    if (n.className = a, n.identity = e, i || (i = {}), o)
        for (var r = 0; r < o.length; r++) n.setAttribute(o[r].identity, o[r].value);
    if (i.innerHTML && (n.innerHTML = i.innerHTML), i.childrens)
        for (var r = 0; r < i.childrens.length; r++) {
            var l = createElement(i.childrens[r].identity, i.childrens[r].tag, i.childrens[r].className, i.childrens[r].options, i.childrens[r].properties);
            n.appendChild(l), n[i.childrens[r].identity] = l
        }
    return n
}

function removeElement(e) {
    try {
        e.parentNode.removeChild(e)
    } catch (e) {}
}

function showLoginForm() {
    alertify.confirm("Chức năng này chỉ dành cho thành viên đã đăng nhập", function() {
        try {
            activeNavbarRight()
        } catch (e) {}
    })
}

function formatTime(e) {
    var t = Math.floor(e % 60),
        a = Math.floor(e / 60 % 60),
        i = Math.floor(e / 3600);
    return (isNaN(e) || e === 1 / 0) && (i = a = t = "-"), i = i > 0 ? i + ":" : "", a = (a < 10 ? "0" + a : a) + ":", t = t < 10 ? "0" + t : t, i + a + t
}

function getTimeAgo(e) {
    var t = e.substring(0, 10);
    e = new Date(e).getTime();
    var a = (new Date).getTime(),
        i = (a - e) / 1e3;
    return i > 2592e3 ? (t = t.split("-"), t[2] + "-" + t[1] + "-" + t[0]) : i > 604800 ? Math.floor(i / 604800) + " tuần trước" : i > 86400 ? Math.floor(i / 86400) + " ngày trước" : i > 3600 ? Math.floor(i / 3600) + " giờ trước" : i > 60 ? Math.floor(i / 60) + " phút trước" : Math.floor(i) + " giây trước"
}

function getPageYOffset() {
    try {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
    } catch (e) {
        return 0
    }
}

function getScrollPageType() {
    try {
        return document.body.scrollTop > 0 ? 1 : 2
    } catch (e) {}
    return 0
}

function scrollTo(e, t, a) {
    if (!(a <= 0)) {
        var i = t - e.scrollTop,
            o = i / a * 10;
        setTimeout(function() {
            e.scrollTop = e.scrollTop + o, e.scrollTop != t && scrollTo(e, t, a - 10)
        }, 10)
    }
}

function scrollPageTo(e, t) {
    try {
        return void(document.body.scrollTop > 0 ? scrollTo(document.body, e, t) : scrollTo(document.documentElement, e, t))
    } catch (e) {}
    window.scrollTo(0, e)
}

function encodeString(e, t) {
    var a = "";
    e.toString();
    for (var i = 0; i < e.length; i++) {
        var o = e.charCodeAt(i),
            n = o ^ t;
        a += String.fromCharCode(n)
    }
    return a
}

function setFilmItem(e, t) {
    t || (t = {});
    var a = document.createElement("div");
    a.className = "tray-item";
    for (var i = '<div class="tray-film-genres">', o = 0; o < e.genres.data.length; o++) i += "<span>" + e.genres.data[o].name + "</span>", o + 1 < e.genres.data.length && (i += ",&nbsp;");
    i += "</div>";
    var n = '<div class="tray-film-update">';
    e.is_movie ? n += e.time : n += e.meta.max_episode_name + " / " + e.time, n += "</div>";
    var r = "";
    return e.upcoming && (r = '<div class="tray-item-upcoming">SẮP CHIẾU</div>'), a.innerHTML = '<a href="/' + e.slug + '"><img class="tray-item-thumbnail" src="' + e.thumbnail + '"><div class="tray-item-description"><div class="tray-item-title">' + e.name + '</div><div class="tray-item-meta-info"><div class="tray-film-views">' + e.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' lượt xem</div><div class="tray-film-likes">' + e.likes.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " thích</div></div></div>" + i + n + '<div class="tray-item-play-button"><i class="icon-play"></i></div>' + r + "</a>", a
}

function setVideoItem(e, t) {
    t || (t = {});
    var a = document.createElement("div");
    a.className = "video-item";
    var i = '<div class="video-item-views">' + getTimeAgo(e.published_at) + " - " + e.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " lượt xem</div>";
    return a.innerHTML = '<a href="/video/' + e.id + '"><img class="video-item-thumbnail" src="' + e.thumbnail + '"><div class="video-item-description"><div class="video-item-title">' + e.title + '</div><div class="video-item-duration">' + formatTime(e.duration) + '</div><div class="video-item-play-button"><i class="icon-play"></i></div>' + i + "</a>", a
}

function clickOnTab(e) {
    e.onclick = function() {
        for (var t = getAllElements(".navbar-user-body"), a = e.getAttribute("data-tab"), i = getElement(".tab-" + a), o = t.length - 1; o >= 0; o--) t[o].classList.add("hidden");
        for (var o = navbarTab.children.length - 1; o >= 0; o--) navbarTab.children[o].classList.remove("activated");
        e.classList.add("activated"), i.classList.remove("hidden"), ismobile.any || Ps.update(i)
    }
}

function activeNavbarLeft() {
    navbarLeft.classList.add("activated"), navbarRight.classList.remove("activated"), floatingAction.classList.remove("activated"), actionToggle.innerHTML = '<i class="icon-assistive"></i>', navbar.style.zIndex = "8888"
}

function activeNavbarRight() {
    navbarRight.classList.add("activated"), navbarLeft.classList.remove("activated"), floatingAction.classList.remove("activated"), actionToggle.innerHTML = '<i class="icon-assistive"></i>', navbar.style.zIndex = "8888"
}

function lockScroll() {}

function unlockScroll() {}

function closeNavbar(e) {
    var t = 0,
        a = e.target;
    "ok" != a.className && (navbarLeft.contains(a) || navbarToggle.contains(a) || (navbarLeft.classList.remove("activated"), t++), navbarRight.contains(a) || navbarUser.contains(a) || (navbarRight.classList.remove("activated"), t++), t > 0 && (navbar.style.zIndex = ""))
}

function hideSearchResult(e) {
    navbarSearch.contains(e.target) || searchResult.classList.remove("activated")
}

function hideFloatingAction() {
    if (!(window.innerWidth >= 1024)) return window.innerHeight > window.innerWidth || getPageYOffset() > 100 ? void floatingAction.classList.remove("hidden") : void floatingAction.classList.add("hidden")
}

function setMenuHeight() {
    if (!ismobile.any) return void(navbarMenu.style = "");
    var e = window.innerHeight - 120;
    navbarMenu.style.maxHeight = e + "px", navbarMenu.style.overflow = "auto"
}

function navbarOnload() {
    setMenuHeight(), hideFloatingAction()
}

function uploadAvatar(e) {
    var t = new FormData;
    t.append("avatar", e);
    var a = new XMLHttpRequest;
    a.open("POST", _GLOBAL._API + "/users/self/avatar"), a.setRequestHeader("X-Requested-With", "XMLHttpRequest"), a.setRequestHeader("X-CSRF-TOKEN", _GLOBAL._TOKEN), a.withCredentials = !0, a.send(t), a.onload = function() {
        if (200 == a.status) {
            var e = JSON.parse(a.responseText);
            if (e.avatar) return userAvatar.src = e.avatar, getElement(".user-avatar.big-avatar img").src = e.avatar, void alertify.success("Đổi hình đại diện thành công!")
        }
    }, a.onerror = function() {}
}

function setLoginTabHeight() {
    var e = window.innerHeight - 120;
    loginTab.style.maxHeight = e + "px", signupTab.style.maxHeight = e + "px", ismobile.any && (loginTab.style.overflow = "auto", signupTab.style.overflow = "auto")
}

function setInfomationTabHeight() {
    var e = window.innerHeight - 120;
    informationBody.style.maxHeight = e + "px", notificationBody.style.maxHeight = e + "px", ismobile.any && (informationBody.style.overflow = "auto", notificationBody.style.overflow = "auto")
}

function validateLoginUsername() {
    var e = loginUsername.parentNode,
        t = e.querySelector(".tip");
    return loginUsername.value.length < 5 || loginUsername.value.length > 20 ? (t.innerText = "từ 6 - 20 kí tự", e.classList.add("warning"), !1) : (t.innerText = "", e.classList.remove("warning"), !0)
}

function validateSignupUsername() {
    var e = signupUsername.parentNode,
        t = e.querySelector(".tip");
    if (signupUsername.value.length < 6 || signupUsername.value.length > 20) return validated.username = !1, t.innerText = "từ 6 - 20 kí tự", void e.classList.add("warning");
    if (!validated.username || cachedValidate.username != signupUsername.value) {
        validated.username = !1, t.innerText = "";
        var a = sendAjax("GET", _GLOBAL._API + "/users/validate?username=" + signupUsername.value);
        a.onload = function() {
            if (200 == a.status || 304 == a.status) return cachedValidate.username = signupUsername.value, e.classList.remove("warning"), void(validated.username = !0);
            400 == a.status ? t.innerText = "không hợp lệ (bị cấm)" : 409 == a.status && (t.innerText = "đã tồn tại trong hệ thống"), validated.username = !1, cachedValidate.username = null, e.classList.add("warning")
        }
    }
}

function validatePassword(e) {
    var t = e.querySelector('input[name="password"]'),
        a = t.parentNode,
        i = a.querySelector(".tip");
    return t.value.length < 6 || t.value.length > 30 ? (validated.password = !1, i.innerText = "từ 6 - 30 kí tự", a.classList.add("warning"), !1) : (validated.password = !0, i.innerText = "", a.classList.remove("warning"), !0)
}

function validatePasswordConfirm() {
    var e = passwordConfirm.parentNode,
        t = e.querySelector(".tip");
    if (signupPassword.value != passwordConfirm.value) return validated.passwordConfirm = !1, t.innerText = "2 mật khẩu không khớp", void e.classList.add("warning");
    validated.passwordConfirm = !0, t.innerText = "", e.classList.remove("warning")
}

function validateFullName() {
    var e = fullName.parentNode,
        t = e.querySelector(".tip");
    if (fullName.value.length < 5 || fullName.value.length > 40) return validated.fullName = !1, t.innerText = "từ 8 - 40 kí tự", void e.classList.add("warning");
    if (!validated.fullName || cachedValidate.fullName != fullName.value) {
        validated.fullName = !1, t.innerText = "";
        var a = sendAjax("GET", _GLOBAL._API + "/users/validate?full_name=" + fullName.value);
        a.onload = function() {
            if (200 == a.status || 304 == a.status) return cachedValidate.fullName = fullName.value, e.classList.remove("warning"), void(validated.fullName = !0);
            400 == a.status ? t.innerText = "không hợp lệ (bị cấm)" : t.innerText = "hãy thử lại", validated.fullName = !1, cachedValidate.fullName = null, e.classList.add("warning")
        }
    }
}

function validateEmail() {
    var e = email.parentNode,
        t = e.querySelector(".tip");
    if (email.value.length < 8) return validated.email = !1, t.innerText = "email không hợp lệ", void e.classList.add("warning");
    if (!validated.email || cachedValidate.email != email.value) {
        validated.email = !1, t.innerText = "";
        var a = sendAjax("GET", _GLOBAL._API + "/users/validate?email=" + email.value);
        a.onload = function() {
            if (200 == a.status || 304 == a.status) return validated.email = !0, cachedValidate.email = email.value, void e.classList.remove("warning");
            400 == a.status ? t.innerText = "email không hợp lệ" : 409 == a.status && (t.innerText = "email đã tồn tại"), validated.email = !1, cachedValidate.email = null, e.classList.add("warning")
        }
    }
}

function validateBirthDate(e) {
    var t = formGroupBirthday.querySelector(".tip");
    return birthDate.value < 1 || birthDate.value > 31 ? (validated.birthDate = !1, t.innerText = "chọn ngày sinh từ 1 - 31", formGroupBirthday.classList.add("warning"), !1) : (validated.birthDate = !0, t.innerText = "", formGroupBirthday.classList.remove("warning"), !e && validated.birthMonth && validated.birthYear && validateBirthday(!0), !0)
}

function validateBirthMonth(e) {
    var t = formGroupBirthday.querySelector(".tip");
    return birthMonth.value < 1 || birthMonth.value > 12 ? (validated.birthMonth = !1, t.innerText = "chọn tháng sinh từ 1 - 12", formGroupBirthday.classList.add("warning"), !1) : (validated.birthMonth = !0, t.innerText = "", formGroupBirthday.classList.remove("warning"), !e && validated.birthDate && validated.birthYear && validateBirthday(!0), !0)
}

function validateBirthYear(e) {
    var t = formGroupBirthday.querySelector(".tip");
    return birthYear.value < 1970 || birthYear.value > 2010 ? (validated.birthYear = !1, t.innerText = "chọn năm sinh từ 1970 - 2010", formGroupBirthday.classList.add("warning"), !1) : (validated.birthYear = !0, t.innerText = "", formGroupBirthday.classList.remove("warning"), !e && validated.birthDate && validated.birthMonth && validateBirthday(!0), !0)
}

function validateBirthday(e) {
    if (e || validateBirthDate(!0) && validateBirthMonth(!0) && validateBirthYear(!0)) {
        var t = formGroupBirthday.querySelector(".tip"),
            a = birthDate.value + "-" + birthMonth.value + "-" + birthYear.value,
            i = new Date(birthYear.value + "-" + birthMonth.value + "-" + birthDate.value);
        try {
            if (i.getDate() != birthDate.value || i.getMonth() + 1 != birthMonth.value || i.getFullYear() != birthYear.value) return validated.birthday = !1, cachedValidate.birthday = null, t.innerText = "ngày " + a + " không hợp lệ", void formGroupBirthday.classList.add("warning");
            validated.birthday = !0, cachedValidate.birthday = a
        } catch (e) {
            if (validated.birthday && cachedValidate.birthday == a) return;
            t.innerText = "", validated.birthday = !1;
            var o = sendAjax("GET", _GLOBAL._API + "/users/validate?birthday=" + a);
            o.onload = function() {
                if (200 == o.status || 304 == o.status) return validated.birthday = !0, cachedValidate.birthday = a, void formGroupBirthday.classList.remove("warning");
                validated.birthday = !1, cachedValidate.birthday = null, t.innerText = "ngày " + a + " không hợp lệ", formGroupBirthday.classList.add("warning")
            }
        }
    }
}

function getNotifications(e) {
    var t = getAllElements(".notification-item"),
        a = getElement(".notification-none"),
        i = t.length;
    if (e || (e = {}, !i)) {
        if (navbarLoading.classList.remove("hidden"), cachedNotifications.submitted) {
            if ((new Date).getTime() - cachedNotifications.submitted < 3e5) return a.classList.remove("hidden"), a.innerText = "Không có thông báo", void navbarLoading.classList.add("hidden")
        } else {
            var o = store.get("notifications");
            if (o && (new Date).getTime() - o.submitted < 3e5) return a.classList.remove("hidden"), a.innerText = "Không có thông báo", void navbarLoading.classList.add("hidden")
        }
        var n = sendAjax("GET", _GLOBAL._API + "/users/self/notifications?offset=" + i);
        n.onload = function() {
            if (200 == n.status) {
                var e = JSON.parse(n.responseText);
                i += e.data.length;
                for (var t = 0; t < e.data.length; t++) notificationList.appendChild(setNotificationItem(e.data[t]));
                if (!i) {
                    a.classList.remove("hidden"), a.innerText = "Không có thông báo", cachedNotifications = e, cachedNotifications.submitted = (new Date).getTime();
                    try {
                        store.set("notifications", cachedNotifications)
                    } catch (e) {}
                    return
                }
                a.classList.add("hidden"), cachedNotifications = {};
                try {
                    store.remove("notifications")
                } catch (e) {}
                i >= e.total ? notificationMore.classList.add("hidden") : notificationMore.classList.remove("hidden")
            }
            navbarLoading.classList.add("hidden")
        }, n.onerror = function() {
            navbarLoading.classList.add("hidden")
        }
    }
}

function setNotificationItem(e) {
    var t = document.createElement("div");
    return t.className = "notification-item", t.setAttribute("data-id", e.id), t.innerHTML = '<a href="/' + e.link + '"><div class="notification-item-thumbnail"><img src="' + e.thumbnail + '"></div></a><div class="notification-item-body"><a href="/' + e.link + '"><div class="notification-item-title">' + e.content + '</div></a><div class="notification-item-time"><i class="icon icon-time"></i>' + getTimeAgo(e.created_at) + "</div></div>", t
}

function clearSignupForm() {
    for (var e = document.querySelector(".navbar-user-body.tab-signup").querySelectorAll('input[type="text"], input[type="password"], input[type="number"]'), t = e.length - 1; t >= 0; t--) e[t].value = "";
    validated = {}, cachedValidate = {}
}

function signup() {
    var e = document.querySelector("#form-signup-warning");
    if (e.parentNode.classList.add("hidden"), e.innerHTML = "", navbarLoading.classList.remove("hidden"), signupButton.classList.add("disabled"), validateSignupUsername(), validatePassword(signupTab), validatePasswordConfirm(), validateFullName(), validateEmail(), validateBirthday(), !(validated.username && validated.password && validated.passwordConfirm && validated.fullName && validated.email && validated.birthday)) return signupButton.classList.remove("disabled"), void navbarLoading.classList.add("hidden");
    var t = {
            username: cachedValidate.username,
            password: signupPassword.value,
            password_confirmation: passwordConfirm.value,
            full_name: cachedValidate.fullName,
            email: cachedValidate.email,
            birthday: cachedValidate.birthday,
            gender: parseInt(document.querySelector('input[name="gender"]:checked').value)
        },
        a = sendAjax("POST", _GLOBAL._API + "/users", t);
    a.onload = function() {
        if (signupButton.classList.remove("disabled"), 201 == a.status) return document.querySelector(".navbar-tab-login").click(), clearSignupForm(), loginUsername.value = t.username, loginPassword.value = t.password, void setTimeout(function() {
            loginButton.click()
        }, 1e3);
        e.innerHTML = "<li>Đăng ký thất bại, vui lòng thử lại</li>", e.parentNode.classList.remove("hidden"), navbarLoading.classList.add("hidden")
    }, a.onerror = function(t) {
        e.innerHTML = "<li>Lỗi kết nối, vui lòng thử lại</li>", e.parentNode.classList.remove("hidden"), signupButton.classList.remove("disabled"), navbarLoading.classList.add("hidden")
    }
}

function login() {
    var e = document.querySelector("#form-login-warning");
    if (e.parentNode.classList.add("hidden"), e.innerHTML = "", navbarLoading.classList.remove("hidden"), loginButton.classList.add("disabled"), !validateLoginUsername() || !validatePassword(loginTab)) return e.innerHTML = "<li>Thông tin đăng nhập không chính xác</li>", e.parentNode.classList.remove("hidden"), loginButton.classList.remove("disabled"), void navbarLoading.classList.add("hidden");
    var t = document.querySelector('input[name="username"]').value,
        a = document.querySelector('input[name="password"]').value,
        i = document.querySelector('input[name="remember"]').checked;
        
        $.ajax({
            url: "http://localhost/Git/PRO-1014/user/login.php",
            type: "POST",
            dataType: 'text',
            data: {
                'username' : t,
                'password' : a,
                'checked'  : i
            },
            success : function(msg){
                if (msg == 'true') {
                    const LoginSuccess = 1;
                    location.reload();
                }else{
                    e.innerHTML = "<li>Thông tin đăng nhập không chính xác</li>", e.parentNode.classList.remove("hidden"), loginButton.classList.remove("disabled"), navbarLoading.classList.add("hidden");
                }
            },
            error : function(){
                e.innerHTML = "<li>Lỗi kết nối, vui lòng thử lại</li>", e.parentNode.classList.remove("hidden"), loginButton.classList.remove("disabled"), navbarLoading.classList.add("hidden");
            }
        })
    // n.onload = function() {
    //     if (200 == n.status) return void window.location.reload();
    //     400 == n.status ? e.innerHTML = "<li>Thông tin đăng nhập không chính xác</li>" : 403 == n.status && (e.innerHTML = "<li>Hệ thống đang tắt chức năng đăng nhập</li>"), e.parentNode.classList.remove("hidden"), loginButton.classList.remove("disabled"), navbarLoading.classList.add("hidden")
    // }, n.onerror = function(t) {
    //     e.innerHTML = "<li>Lỗi kết nối, vui lòng thử lại</li>", e.parentNode.classList.remove("hidden"), loginButton.classList.remove("disabled"), navbarLoading.classList.add("hidden")
    // }
}

function logout() {
    var e = sendAjax("POST", _GLOBAL._API + "/users/logout");
    navbarLoading.classList.remove("hidden"), e.onload = function() {
        if (200 == e.status) {
            try {
                store.forEach(function(e, t) {
                    "episode" == e.substring(0, 7) && store.remove(e)
                }), store.remove("notifications")
            } catch (e) {}
            window.location.reload()
        }
    }, e.onerror = function(e) {
        navbarLoading.classList.add("hidden")
    }
}

function windowOnClick(e) {
    closeNavbar(e);
    try {
        seasonActive.contains(e.target) || seasonList.classList.remove("activated")
    } catch (e) {}
    emojiPicker.contains(e.target) || commentEmoticon.contains(e.target) || emojiPicker.classList.add("hidden")
}

function getEpisode(e, t, a) {
    if (lockAPI.episode) return void alertify.log("Đừng bấm quá nhanh!");
    lockAPI.episode = !0, a || (a = {});
    var i = "";
    if ("name" != e) i = "episode-id-" + t;
    else {
        if (t < parseInt(film.min) || t > parseInt(film.max)) return void alertify.error("Chúc bạn xem phim vui vẻ");//"Không tìm thấy tập " + t
        i = "episode-name-" + t
    }
    if (!player.episode || a.refresh || !player.episode.upcoming || t != player.episode.id && t != player.episode.name) {
        if (player.timer && (clearInterval(player.timer.interval), clearInterval(player.timer.animate), clearInterval(player.timer.full), player.timer = null), void 0 != player.countdown) try {
            removeElement(player.countdown), player.countdown = void 0, player.el_.classList.remove("player-has-countdown")
        } catch (e) {}
        if (player.el_.classList.remove("player-error"), player.el_.classList.add("player-waiting"), player.loadingText.innerText = "Đang lấy dữ liệu ...", cachedEpisode[t]) {
            if ((new Date).getTime() - cachedEpisode[t].submitted < 3e5) return episode = cachedEpisode[t].data, a.data = episode, void setEpisode(e, t, a);
            cachedEpisode[t] = null
        }
        var o = store.get(i);
        if (o)
            if ((new Date).getTime() - o.submitted < 3e5) {
                if (episode = o.data, episode.upcoming && (new Date).getTime() >= new Date(episode.upcoming).getTime())
                    if (episode.sources.fb.length || episode.sources.vip.length) {
                        episode.upcoming = null;
                        try {
                            store.set(i, episode)
                        } catch (e) {}
                    } else try {
                        store.remove(i)
                    } catch (e) {}
                    var n = !1;
                if (a.refresh) {
                    if (episode.upcoming && (episode.sources.fb.length || episode.sources.vip.length)) {
                        n = !0, episode.upcoming = null;
                        try {
                            store.set(i, episode)
                        } catch (e) {}
                    }
                } else(episode.sources.fb.length || episode.sources.vip.length || episode.upcoming) && (n = !0);
                if (n) return cachedEpisode[t] = episode, a.data = episode, void setEpisode(e, t, a)
            } else try {
                store.remove(i)
            } catch (e) {}
            var r = _GLOBAL._API + "/films/" + film.id + "/episodes/" + t,
                l = sendAjax("GET", r);
        l.onload = function() {
            try {
                var o = l.getResponseHeader("Date");
                o = new Date(o).getTime(), player.sync = o - (new Date).getTime(), store.set("sync", player.sync)
            } catch (e) {
                player.sync = 0
            }
            if (200 == l.status) {
                var n = JSON.parse(l.responseText);
                episode = n, cachedEpisode[t] = {
                    submitted: (new Date).getTime(),
                    data: n
                };
                try {
                    store.set(i, {
                        submitted: (new Date).getTime(),
                        data: episode
                    })
                } catch (e) {}
                a.data = episode, setEpisode(e, t, a)
            } else 404 == l.status && alertify.error("Chúc các bạn xem phim vui vẻ"); //"Không tìm thấy tập " + t + "."
            lockAPI.episode = !1, player.el_.classList.remove("player-waiting")
        }, l.onerror = function() {
            lockAPI.episode = !1, player.el_.classList.remove("player-waiting")
        }
    }
}

function setEpisode(e, t, a) {
    var i = a.data;
    if (playVideoFromEpisode(i), increaseViews("episodes", i.id), film.type) return void(lockAPI.episode = !1);
    i.name >= 0 ? (episodeSelect.value = i.name, ovaTab.classList.remove("activated"), episodeTab.classList.add("activated")) : (a.ova = !0, ovaTab.classList.add("activated"), episodeTab.classList.remove("activated")), i.season ? (seasonActive.innerHTML = '<div class="season-name">Season ' + i.season.name + '</div><div class="season-range">' + i.season.begin + " - " + i.season.end + "</div>", getSeasons(i.season.id), getEpisodes("seasons", i.season.id)) : getEpisodes("films", film.id, a);
    for (var o = document.querySelectorAll(".episode-item.activated"), n = 0; n < o.length; n++) o[n].classList.remove("activated");
    try {
        var r = getElement(".episode-item.episode-" + i.id);
        r.classList.add("activated"), e || (a.ova ? ovaList.scrollTop = r.offsetTop - 10 : episodeList.scrollTop = r.offsetTop - 10)
    } catch (e) {}
    lockAPI.episode = !1
}

function getEpisodes(e, t, a) {
    var i = _GLOBAL._API + "/" + e + "/" + t + "/episodes?sort=name";
    if (a || (a = {}), a.ova) {
        if (i += "&ova=true", episodeList.ova) return seasonActive.classList.add("hidden"), episodeTotal.classList.remove("hidden"), episodeTotal.innerHTML = "Tổng số: " + episodeList.ova + " video", episodeList.classList.add("hidden"), ovaList.classList.remove("hidden"), episodeLoading.classList.add("hidden"), lockAPI.episodes = !1, void Ps.update(ovaList)
    } else if ("seasons" == e)
        if (a.season = t, episodeList.seasons) {
            if (episodeList.seasons[t]) {
                seasonActive.classList.remove("hidden"), episodeTotal.classList.add("hidden"), ovaList.classList.add("hidden"), episodeList.classList.remove("hidden"), episodeLoading.classList.add("hidden");
                try {
                    setSeasonActive(seasons[t])
                } catch (e) {}
                return lockAPI.episodes = !1, void Ps.update(episodeList)
            }
        } else episodeList.seasons = {};
    else if (episodeList.episodes) return seasonActive.classList.add("hidden"), episodeTotal.classList.remove("hidden"), episodeTotal.innerHTML = "Tổng số: " + episodeList.episodes + " video", episodeList.classList.remove("hidden"), ovaList.classList.add("hidden"), episodeLoading.classList.add("hidden"), lockAPI.episodes = !1, void Ps.update(episodeList);
    var o = e + "-" + t + "-episodes";
    a.ova && (o += "-ova");
    var n = store.get(o);
    if (n) {
        if ((new Date).getTime() - n.submitted < 3e5) return episodeLoading.classList.add("hidden"), a.data = n.data, void setEpisodes(e, t, a);
        try {
            store.remove(o)
        } catch (e) {}
    }
    if (!lockAPI.episodes) {
        lockAPI.episodes = !0;
        var r = sendAjax("GET", i);
        r.onload = function() {
            if (200 == r.status) {
                var i = JSON.parse(r.responseText);
                episodeLoading.classList.add("hidden"), a.data = i.data, setEpisodes(e, t, a), setEpisodesCache(e, t, a)
            }
            lockAPI.episodes = !1
        }, r.onerror = function() {
            lockAPI.episodes = !1
        }
    }
}

function setEpisodesCache(e, t, a) {
    var i = e + "-" + t + "-episodes";
    a.ova && (i += "-ova");
    var o = {
        submitted: (new Date).getTime(),
        data: a.data
    };
    try {
        store.set(i, o)
    } catch (e) {}
}

function setEpisodes(e, t, a) {
    if ("seasons" != e)
        if (seasonActive.classList.add("hidden"), episodeTotal.classList.remove("hidden"), episodeTotal.innerHTML = "Tổng số: " + a.data.length + " video", a.ova) {
            episodeList.classList.add("hidden"), ovaList.classList.remove("hidden"), episodeList.ova = a.data.length;
            for (var i = 0; i < a.data.length; i++) a.data[i].id == episode.id && (a.data[i].activated = !0), ovaList.appendChild(setEpisodeItem(a.data[i]))
        } else {
            ovaList.classList.add("hidden"), episodeList.classList.remove("hidden"), episodeList.episodes = a.data.length;
            for (var i = 0; i < a.data.length; i++) a.data[i].id == episode.id && (a.data[i].activated = !0), episodeList.appendChild(setEpisodeItem(a.data[i]))
        } else {
        if (seasonActive.classList.remove("hidden"), episodeTotal.classList.add("hidden"), "" == seasonActive.innerHTML) try {
            seasonActive.innerHTML = '<div class="season-name">Season ' + a.seasonData.name + '</div><div class="season-range">' + a.seasonData.begin + " - " + a.seasonData.end + "</div>"
        } catch (e) {}
        var o = document.createElement("div");
        o.className = "season-episodes season-" + t + "-episodes", ovaList.classList.add("hidden"), episodeList.classList.remove("hidden"), episodeList.appendChild(o), episodeList.seasons[t] = o;
        for (var i = 0; i < a.data.length; i++) a.data[i].id == episode.id && (a.data[i].activated = !0), o.appendChild(setEpisodeItem(a.data[i]));
        try {
            setSeasonActive(seasons[t])
        } catch (e) {}
    }
    try {
        a.ova ? ovaList.scrollTop = getElement(".episode-item.activated").offsetTop - 10 : episodeList.scrollTop = getElement(".episode-item.activated").offsetTop - 10
    } catch (e) {}
    Ps.update(episodeList), Ps.update(ovaList)
}

function getSeasons(e) {
    for (var t = getAllElements(".season-item"), a = 0; a < t.length; a++) {
        var i = t[a].getAttribute("data-id");
        seasons[i] = {
            id: i,
            name: t[a].getAttribute("data-name"),
            begin: t[a].getAttribute("data-begin"),
            end: t[a].getAttribute("data-end")
        }, setSeasonItem(t[a], {
            id: i
        })
    }
}

function addHistory(e, t) {
    if (1 == LoginSuccess) {
        sendAjax("POST", _GLOBAL._API + "/" + e + "/" + t + "/histories")
    }
}

function increaseViews(e, t) {
    var a = 5e3;
    "episodes" != e && (a = 10), setTimeout(function() {
        var a;
        if (a = "episodes" != e ? film.id : player.episode.id, t == a) {
            var i = sendAjax("POST", _GLOBAL._API + "/" + e + "/" + t + "/views");
            i.onload = function() {
                JSON.parse(i.responseText);
                i.status
            }, addHistory(e, t)
        }
    }, a)
}

function getComments(e) {
    if (!lockAPI.comments) {
        e || (e = {});
        var t = _GLOBAL._API + "/films/" + film.id + "/comments";
        e.commentId ? t += "/" + e.commentId : t += "?limit=20&offset=" + comments.length, lockAPI.comments = !0;
        var a = sendAjax("GET", t);
        commentMore.classList.add("disabled"), a.onload = function() {
            if (removeElement(commentMore), 200 == a.status) {
                var t = JSON.parse(a.responseText);
                if (e.commentId) comments.push(t), commentList.appendChild(setCommentItem(t, e)), commentTab.click(), lockAPI.comments = !1, getComments();
                else if (t.data.length) {
                    comments = comments.concat(t.data);
                    for (var i = 0; i < t.data.length; i++) commentList.appendChild(setCommentItem(t.data[i]));
                    commentList.appendChild(commentMore), t.total > comments.length ? commentMore.classList.remove("hidden") : commentMore.classList.add("hidden")
                } else setNoCommentItem();
                Ps.update(commentList), commentLoading.classList.add("hidden")
            } else 400 == a.status && e.commentId && (alertify.logPosition("top right"), alertify.error("Bình luận đã bị ẩn nên không thể hiển thị"));
            lockAPI.comments = !1, commentMore.classList.remove("disabled")
        }, a.onerror = function() {
            lockAPI.comments = !1, commentMore.classList.remove("disabled")
        }
    }
}

function addComment(e, t) {
    if (!lockAPI.comment) {
        if (e.length < 2) return void alertify.error("Bình luận của bạn quá ngắn");
        if (e.length > 200) return void alertify.error("Bình luận chỉ được dài tối đa 200 kí tự, bạn đã gõ " + e.length + " kí tự.");
        t || (t = {});
        var a = !1,
            i = {
                content: e,
                episode_id: player.episode.id
            };
        t.parentId && (a = !0, i.mentioned_id = t.mentionedId, i.parent_id = t.parentId);
        for (var o = 0, n = e.split(":"), r = 0; r < n.length; r++)
            if ("" != n[r] && n[r].split(" ").length < 2 && o++, o > 2) return alertify.logPosition("top right"), void alertify.closeLogOnClick(!0).error("Mỗi bình luận chỉ được tối đa 3 mặt cười");
        lockAPI.comment = !0, commentLoading.classList.remove("hidden");
        var l = sendAjax("POST", _GLOBAL._API + "/films/" + film.id + "/comments", i);
        l.onload = function() {
            var e = JSON.parse(l.responseText);
            if (alertify.logPosition("top right"), 200 == l.status)
                if (commentInput.value = "", replyInput.value = "", e.hide) alertify.error("Bình luận của bạn bị ẩn vì dính từ cấm hoặc quảng cáo site khác");
                else {
                    comments.length || removeElement(getElement(".comment-no-item"));
                    var t = [];
                    if (t[0] = e, a) {
                        for (var i = 0; i < comments.length; i++)
                            if (comments[i].id == e.parent_id) {
                                comments[i].replies.data.push(e);
                                try {
                                    var o = getElement('.comment-item[data-id="' + comments[i].id + '"]').querySelector(".reply-list");
                                    o.classList.remove("hidden"), o.appendChild(setCommentItem(e, {
                                        reply: !0
                                    }))
                                } catch (e) {}
                                break
                            }
                    } else {
                        comments = t.concat(comments);
                        try {
                            var n = getElement(".comment-item");
                            commentList.insertBefore(setCommentItem(e), n)
                        } catch (e) {}
                    }
                } else 403 == l.status ? alertify.error("Bạn đã bị cấm bình luận") : 429 == l.status ? alertify.error("Mỗi bình luận cách nhau ít nhất 5 giây") : 400 == l.status ? alertify.error("Lỗi hệ thống nên không thể bình luận") : alertify.error("Không thể bình luận");
            lockAPI.comment = !1, commentLoading.classList.add("hidden")
        }, l.onerror = function() {
            alertify.logPosition("top right"), alertify.error("Lỗi hệ thống nên không thể bình luận"), lockAPI.comment = !1, commentLoading.classList.add("hidden")
        }
    }
}

function setSeasonActive(e) {
    var t = document.querySelectorAll(".season-episodes");
    seasonActive.innerHTML = '<div class="season-name">Season ' + e.name + '</div><div class="season-range">' + e.begin + " - " + e.end + "</div>";
    for (var a = seasonList.querySelectorAll(".season-item.activated"), i = 0; i < a.length; i++) a[i].classList.remove("activated");
    seasonList.querySelector(".season-item.season-" + e.id).classList.add("activated");
    for (var i = 0; i < t.length; i++) t[i].classList.add("hidden");
    episodeList.seasons[e.id].classList.remove("hidden")
}

function setEpisodeItem(e, t) {
    t || (t = {});
    var a = document.createElement("div");
    a.className = "episode-item episode-" + e.id, e.id == episode.id && a.classList.add("activated");
    var i = '<div class="episode-item-thumbnail"><img src="' + e.thumbnail_medium + '">';
    return e.upcoming ? i += '<div class="episode-upcoming">SẮP CHIẾU</div>' : e.is_bd && (i += '<div class="episode-bd">1080p</div>'), i += "</div>", a.innerHTML = '<a href="' + e.link + '" target="_blank">' + i + '<div class="episode-item-meta"><div class="episode-item-title">' + e.full_name + '</div><div class="episode-item-views">' + e.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " lượt xem</div></div></a>", a.onclick = function(t) {
        t.preventDefault(), getEpisode(!0, e.id)
    }, a
}

function setSeasonItem(e, t) {
    t.id == episode.season.id && e.classList.add("activated"), e.onclick = function() {
        episodeLoading.classList.remove("hidden"), getEpisodes("seasons", t.id)
    }
}

function setNoCommentItem() {
    var e = document.createElement("div");
    e.className = "comment-item comment-no-item", e.style.textAlign = "center", e.innerHTML = "Phim này chưa có bình luận nào cả", commentList.appendChild(e)
}

function setCommentItem(e, t) {
    t || (t = {});
    var a = document.createElement("div"),
        i = document.createElement("div"),
        o = document.createElement("div"),
        n = document.createElement("div"),
        r = document.createElement("div"),
        l = document.createElement("div"),
        s = document.createElement("span"),
        c = document.createElement("span");
    a.setAttribute("data-id", e.id), i.className = "author-avatar", i.innerHTML = '<img src="' + e.author.avatar + '">', n.className = "author-name", n.innerHTML = e.author.full_name, t.reply ? (a.className = "reply-item", r.className = "reply-content", o.className = "reply-item-body") : (a.className = "comment-item", r.className = "comment-content", o.className = "comment-item-body");
    var d = e.content;
    if (e.is_banned && (d = 'Nội dung đã ẩn vì tài khoản bị cấm do "' + e.author.banned_reason + '"', a.classList.add("banned")), e.mentioned_user ? r.innerHTML = '<span class="reply-mention">@' + e.mentioned_user.full_name + "</span>" + d : r.innerHTML = d, a.appendChild(i), a.appendChild(o), l.className = "comment-action", s.className = "comment-reply", c.className = "comment-time", s.innerHTML = '<i class="icon icon-comment"></i> trả lời', c.innerHTML = '<i class="icon icon-time"></i> ' + getTimeAgo(e.created_at), l.appendChild(s), l.appendChild(c), o.appendChild(n), e.author.role.id < 10 && 8 != e.author.role.id) {
        var p = document.createElement("span");
        p.className = "author-label", p.style.color = e.author.role.color, e.author.label ? p.innerHTML = e.author.label : p.innerHTML = e.author.role.name, o.appendChild(p)
    }
    if (o.appendChild(r), o.appendChild(l), !t.reply && !e.is_banned) {
        var u = document.createElement("div");
        if (u.className = "reply-list hidden", e.replies.total) {
            var v = document.createElement("div");
            v.className = "reply-count", v.innerHTML = '<i class="icon-down"></i> ' + e.replies.total + " trả lời", o.appendChild(v), t.commentId && (u.classList.remove("hidden"), v.classList.add("hidden"));
            for (var m = 0; m < e.replies.data.length; m++) u.appendChild(setCommentItem(e.replies.data[m], {
                reply: !0,
                parentId: e.id,
                commentBody: o
            }));
            v.onclick = function() {
                this.classList.add("hidden"), u.classList.remove("hidden")
            }
        }
        o.appendChild(u)
    }
    return s.onclick = function() {
        return LoginSuccess ? e.is_banned ? (alertify.logPosition("top right"), void alertify.error("Không thể trả lời bình luận này")) : (t.reply ? (replyComment = {
            id: t.parentId,
            author: e.author
        }, t.commentBody.appendChild(replyInput)) : (replyComment = {
            id: e.id
        }, o.appendChild(replyInput)), v && (v.classList.add("hidden"), u.classList.remove("hidden")), replyInput.classList.remove("hidden"), void replyInput.focus()) : void showLoginForm()
    }, a
}

function showOnlyCommentTab() {
    episodeTab.classList.add("hidden"), episodeBody.classList.add("hidden"),
        commentTab.classList.add("activated"), commentBody.classList.remove("hidden"), commentBody.classList.remove("hidden")
}

function clickOnEmojiTab(e, t, a) {
    e.onclick = function() {
        for (var i = document.querySelectorAll(".emoji-list"), o = i.length - 1; o >= 0; o--) i[o].classList.add("hidden");
        for (var o = emojiTypes.length - 1; o >= 0; o--) emojiTypes[o].classList.remove("activated");
        if (e.classList.add("activated"), a.classList.remove("hidden"), !a.querySelector(".emoji-item")) {
            for (var n = 0; n < emoji[t].length; n++) a.appendChild(createEmoji(t, emoji[t][n]));
            Ps.initialize(a, {
                minScrollbarLength: 50,
                maxScrollbarLength: 50
            })
        }
    }
}

function createEmoji(e, t) {
    var a = createElement(e + "-" + t.code.split(":")[1], "li", "emoji-item", {}, [{
        identity: "style",
        value: "background-image: url(https://i.imacdn.com/emoticon/" + e + "/" + t.value + "); background-size: 100% 100%;"
    }]);
    return a.onclick = function() {
        for (var e = 0, a = commentInput.value.split(":"), i = 0; i < a.length; i++)
            if ("" != a[i] && a[i].split(" ").length < 2 && e++, e > 2) return alertify.logPosition("top right"), void alertify.closeLogOnClick(!0).error("Mỗi bình luận chỉ được tối đa 3 mặt cười");
        commentInput.value += " " + t.code
    }, a
}

function filmOnLoad() {
    pageLoaded || (increaseViews("films", film.id), ismobile.apple.device && window.addEventListener("touchstart", function(e) {
        windowOnClick(e)
    }))
}

function createPlayer() {
    player.init = !0, player.filmId = film.id, player.episodeId = film.episodeId, player.cache_.window_width = window.innerWidth;
    var e = createElement("context", "div", "player-context", {
        innerHTML: "ClipAnime"
    });
    e.style.display = "none", document.body.appendChild(e), player.contextMenu = e;
    for (var t = [{
            identity: "video",
            tag: "video",
            className: "player-video",
            options: {},
            properties: [{
                identity: "preload",
                value: "auto"
            }, {
                identity: "playsinline",
                value: ""
            }, {
                identity: "webkit-playsinline",
                value: ""
            }]
        }, {
            identity: "title",
            tag: "div",
            className: "player-title"
        }, {
            identity: "controlBar",
            tag: "div",
            className: "player-control-bar",
            options: {
                childrens: [{
                    identity: "playToggle",
                    tag: "div",
                    className: "player-control player-play-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-play"
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>Phát</span>"
                            }
                        }]
                    }
                }, {
                    identity: "prevControl",
                    tag: "div",
                    className: "player-control player-prev-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-backward"
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>Tập trước</span>"
                            }
                        }]
                    }
                }, {
                    identity: "rewindControl",
                    tag: "div",
                    className: "player-control player-rewind-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-rewind"
                        }]
                    }
                }, {
                    identity: "forwardControl",
                    tag: "div",
                    className: "player-control player-forward-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-fastforward"
                        }]
                    }
                }, {
                    identity: "nextControl",
                    tag: "div",
                    className: "player-control player-next-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-forward"
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>Tập sau</span>"
                            }
                        }]
                    }
                }, {
                    identity: "volumeControl",
                    tag: "div",
                    className: "player-control player-volume-control",
                    options: {
                        childrens: [{
                            identity: "volumeToggle",
                            tag: "div",
                            className: "player-control player-volume-toggle",
                            options: {
                                childrens: [{
                                    identity: "icon",
                                    tag: "i",
                                    className: "icon-volume-up"
                                }]
                            }
                        }, {
                            identity: "volumeLevel",
                            tag: "div",
                            className: "player-volume-level",
                            options: {
                                childrens: [{
                                    identity: "volumeHolder",
                                    tag: "div",
                                    className: "volume-holder",
                                    options: {
                                        childrens: [{
                                            identity: "volumeSlider",
                                            tag: "div",
                                            className: "volume-slider"
                                        }, {
                                            identity: "volumeCurrent",
                                            tag: "div",
                                            className: "volume-current"
                                        }, {
                                            identity: "volumeHandle",
                                            tag: "div",
                                            className: "volume-handle"
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }, {
                    identity: "currentTime",
                    tag: "div",
                    className: "player-control player-current-time player-time",
                    options: {
                        innerHTML: "<span>00:00</span>"
                    }
                }, {
                    identity: "progressControl",
                    tag: "div",
                    className: "player-progress-control",
                    options: {
                        childrens: [{
                            identity: "progressHolder",
                            tag: "div",
                            className: "player-progress-holder",
                            options: {
                                childrens: [{
                                    identity: "background",
                                    tag: "div",
                                    className: "player-progress-background"
                                }, {
                                    identity: "loadProgress",
                                    tag: "div",
                                    className: "player-load-progress"
                                }, {
                                    identity: "playProgress",
                                    tag: "div",
                                    className: "player-play-progress"
                                }, {
                                    identity: "seekHandle",
                                    tag: "div",
                                    className: "player-seek-handle"
                                }]
                            }
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>00:00</span>"
                            }
                        }]
                    }
                }, {
                    identity: "duration",
                    tag: "div",
                    className: "player-control player-duration player-time",
                    options: {
                        innerHTML: "<span>00:00</span>"
                    }
                }, {
                    identity: "downloadControl",
                    tag: "div",
                    className: "player-control player-download-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-download"
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>Tải về</span>"
                            }
                        }]
                    }
                }, {
                    identity: "lightToggle",
                    tag: "div",
                    className: "player-control player-light-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-sunny"
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>Tắt đèn</span>"
                            }
                        }]
                    }
                }, {
                    identity: "settingControl",
                    tag: "div",
                    className: "player-control player-setting-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-settings"
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>Tuỳ chỉnh</span>"
                            }
                        }]
                    }
                }, {
                    identity: "largeToggle",
                    tag: "div",
                    className: "player-control player-large-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-maximise"
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>Mở rộng player</span>"
                            }
                        }]
                    }
                }, {
                    identity: "fullscrenToggle",
                    tag: "div",
                    className: "player-control player-fullscreen-control",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-expand"
                        }, {
                            identity: "tip",
                            tag: "div",
                            className: "player-control-tip",
                            options: {
                                innerHTML: "<span>Toàn màn hình</span>"
                            }
                        }]
                    }
                }]
            }
        }, {
            identity: "board",
            tag: "div",
            className: "player-board",
            options: {
                childrens: [{
                    identity: "close",
                    tag: "div",
                    className: "player-board-close",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-close"
                        }]
                    }
                }, {
                    identity: "selector",
                    tag: "div",
                    className: "player-board-item setting-selector",
                    options: {
                        childrens: [{
                            identity: "label",
                            tag: "div",
                            className: "label",
                            options: {
                                innerHTML: "Chọn tập"
                            }
                        }, {
                            identity: "input",
                            tag: "input",
                            className: "selector-input",
                            options: {},
                            properties: [{
                                identity: "type",
                                value: "number"
                            }, {
                                identity: "min",
                                value: 1
                            }, {
                                identity: "max",
                                value: 999
                            }]
                        }, {
                            identity: "button",
                            tag: "span",
                            className: "selector-button",
                            options: {
                                childrens: [{
                                    identity: "icon",
                                    tag: "i",
                                    className: "icon-play"
                                }]
                            }
                        }, {
                            identity: "tip",
                            tag: "span",
                            className: "selector-tip"
                        }]
                    }
                }, {
                    identity: "quality",
                    tag: "div",
                    className: "player-board-item setting-quality",
                    options: {
                        childrens: [{
                            identity: "label",
                            tag: "div",
                            className: "label",
                            options: {
                                innerHTML: "Chất lượng"
                            }
                        }]
                    }
                }, {
                    identity: "speed",
                    tag: "div",
                    className: "player-board-item setting-speed",
                    options: {
                        childrens: [{
                            identity: "label",
                            tag: "div",
                            className: "label",
                            options: {
                                innerHTML: "Tốc độ"
                            }
                        }]
                    }
                }]
            }
        }, {
            identity: "error",
            tag: "div",
            className: "player-error-display",
            options: {
                innerHTML: '<i class="icon-alert"></i>',
                childrens: [{
                    identity: "message",
                    tag: "span",
                    className: "player-error-message"
                }]
            }
        }, {
            identity: "loading",
            tag: "div",
            className: "player-loading"
        }, {
            identity: "loadingText",
            tag: "div",
            className: "player-loading-text"
        }], a = 0; a < t.length; a++) {
        var i = createElement(t[a].identity, t[a].tag, t[a].className, t[a].options, t[a].properties);
        player.el_.appendChild(i), player[t[a].identity] = i
    }
    player.showLoadingSpinner = function() {
        player.el_.classList.add("player-waiting"), player.loadingText.innerHTML = "Đang đợi video"
    }, player.hideLoadingSpinner = function() {
        player.el_.classList.remove("player-waiting"), player.el_.classList.remove("player-error")
    }, player.createQualityItem = function(e) {
        var t, a = "setting-quality-item quality-" + e.quality,
            i = {
                innerHTML: e.quality
            };
        return parseInt(e.quality) >= 720 && (i.childrens = [{
            name: "sup",
            tag: "sup",
            className: "",
            options: {
                innerHTML: "HD"
            }
        }]), e.default && (a += " active"), t = createElement(e.quality, "span", a, i), t.onclick = function() {
            if (!this.classList.contains("active")) {
                player.el_.classList.remove("player-error"), player.error.code = 0;
                for (var t = document.querySelectorAll(".setting-quality-item"), a = 0; a < t.length; a++) t[a].classList.remove("active");
                this.classList.add("active");
                var i = player.video.currentTime;
                if (void 0 == e.level || null == e.level) {
                    if (!e.VIP && player.hls) try {
                        player.hls.destroy(), player.hls = null
                    } catch (e) {
                        console.log(e)
                    }
                    player.video.src = e.src
                } else {
                    try {
                        if (e.VIP && !player.hls.vip || !e.VIP && player.hls.vip) try {
                            player.hls.destroy(), player.hls = null
                        } catch (e) {
                            console.log(e)
                        }
                        e.VIP && !player.hls.vip && (player.hls.vip = null)
                    } catch (e) {}
                    player.hls ? player.hls.currentLevel = e.level : -1 == e.level && e.VIP ? playHLS(player, player.episode, player.cache_.sources, {
                        VIP: !0,
                        level: -1,
                        src: e.src
                    }) : playHLS(player, player.episode, player.cache_.sources, {
                        driveHLS: !0,
                        level: e.level,
                        src: e.src
                    })
                }
                player.video.currentTime = i, player.cache_.quality = e.quality, player.board.active = !1, player.board.classList.remove("show");
                try {
                    store.set("quality", e.quality)
                } catch (e) {}
                player.video.play()
            }
        }, player.board.quality.appendChild(t), player.board.quality[e.quality] = t, t
    }, player.removeQualityItems = function() {
        for (var e = document.querySelectorAll(".setting-quality-item"), t = 0; t < e.length; t++) removeElement(e[t])
    }, player.createPlaybackRateItem = function(e) {
        var t, a = "setting-speed-item speed-" + e;
        return 1 == e && (a += " active"), t = createElement(e, "span", a, {
            innerHTML: e
        }), t.onclick = function() {
            this.classList.contains("active") || (player.board.speed.active.classList.remove("active"), player.board.speed.active = this, this.classList.add("active"), player.video.playbackRate = e, player.audio && (player.audio.playbackRate = e))
        }, t
    }, player.updateVolumeStyle = function(e) {
        player.controlBar.volumeControl.volumeLevel.style.visibility = "visible", player.controlBar.volumeControl.volumeLevel.style.opacity = 1, player.controlBar.volumeControl.volumeLevel.volumeHolder.update(e.clientY)
    }, player.updateProgressStyle = function(e) {
        player.video.pause(), player.controlBar.progressControl.progressHolder.onclick(e)
    }, player.trim = function(e) {
        return (e + "").replace(/^\s+|\s+$/g, "")
    }, player.round = function(e, t) {
        return t || (t = 0), Math.round(e * Math.pow(10, t)) / Math.pow(10, t)
    }, player.formatTime = function(e) {
        var t = Math.floor(e % 60),
            a = Math.floor(e / 60 % 60),
            i = Math.floor(e / 3600);
        return (isNaN(e) || e === 1 / 0) && (i = a = t = "-"), i = i > 0 ? i + ":" : "", a = (a < 10 ? "0" + a : a) + ":", t = t < 10 ? "0" + t : t, i + a + t
    }, player.updateFullscreenState = function() {
        player.isFullscreen() ? (player.el_.classList.add("player-fullscreen"), player.controlBar.fullscrenToggle.icon.className = "icon-contract", player.controlBar.fullscrenToggle.tip.innerHTML = "<span>Thu nhỏ màn hình</span>") : (player.el_.classList.remove("player-fullscreen"), player.controlBar.fullscrenToggle.icon.className = "icon-expand", player.controlBar.fullscrenToggle.tip.innerHTML = "<span>Toàn màn hình</span>")
    }, player.isFullscreen = function() {
        return document.webkitIsFullScreen ? document.webkitIsFullScreen : document.mozFullScreen ? document.mozFullScreen : !!document.fullscreen && document.fullscreen
    }, player.requestFullscreen = function() {
        if (player.el_.webkitRequestFullscreen) player.el_.webkitRequestFullscreen();
        else if (player.el_.mozRequestFullScreen) player.el_.mozRequestFullScreen();
        else if (player.el_.msRequestFullscreen) player.el_.msRequestFullscreen();
        else if (ismobile.apple.device) player.video.webkitEnterFullscreen();
        else try {
            player.el_.requestFullscreen()
        } catch (e) {}
    }, player.exitFullscreen = function() {
        if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        else if (document.mozCancelFullScreen) document.mozExitFullscreen();
        else if (document.msExitFullscreen) document.msExitFullscreen();
        else if (ismobile.apple.device) player.video.webkitExitFullscreen();
        else try {
            document.exitFullscreen()
        } catch (e) {}
    }, player.displayError = function(e) {
        function t(e) {
            try {
                e = e.split("&expire")[0]
            } catch (e) {}
            for (var t = 0; t < cachedTry.length; t++)
                if (cachedTry[t] == e) return;
            cachedTry.push(e)
        }

        function a(e) {
            try {
                e = e.split("&expire")[0]
            } catch (e) {}
            for (var t = 0; t < cachedTry.length; t++)
                if (cachedTry[t] == e) return !0;
            return !1
        }

        function i(e) {
            if (console.log("autoFixError"), player.hls) {
                console.log("catch error hls"), player.removeQualityItems();
                try {
                    player.hls.destroy()
                } catch (e) {}
                player.hls = null;
                for (var i = !1, o = 0; o < player.cache_.sources.length; o++)("480p" == player.cache_.sources[o].quality || !i && o == player.cache_.sources.length - 1) && (i = !0, player.cache_.quality = player.cache_.sources[o].quality, player.cache_.sources[o].default = !0, player.video.src = player.cache_.sources[o].src, player.video.play()), player.createQualityItem(player.cache_.sources[o]);
                return player.board.quality.classList.remove("hidden"), !0
            }
            try {
                player.video.src.split("/")[2]
            } catch (e) {}
            try {
                if (player.video.src.split(".m3u8") > 1)
                    for (var o = 0; o < player.episode.hls.length; o++)
                        if (!player.episode.hls[o].play) return player.episode.sources.hls = player.episode.hls[o].url, playHLS(player, player.episode, player.cache_.sources, {
                            driveHLS: !0
                        }), void console.log("switch hls")
            } catch (e) {
                console.log("autoFixError HLS"), console.log(e)
            }
            for (var o = 0; o < player.episode.sources.pt.length; o++) {
                try {
                    player.episode.sources.pt[o].src.split("lh3.googleusercontent")[1] && (player.episode.sources.pt[o].src = player.episode.sources.pt[o].src.split("&expire=")[0])
                } catch (e) {}
                if (player.episode.sources.pt[o].quality == player.cache_.quality && !a(player.episode.sources.pt[o].src)) return player.video.src = player.episode.sources.pt[o].src, player.video.load(), player.video.load(), player.video.play(), t(player.video.src), !0
            }
            if ("imacdn" != player.video.src.split(".")[1] && _GLOBAL._IS_VIP && player.episode.sources.vip[0]) {
                player.video.src = player.episode.sources.vip[0].src, player.cache_.quality = "480p";
                for (var n = document.querySelectorAll(".setting-quality-item"), o = 0; o < n.length; o++) n[o].classList.remove("active"), 480 == n[o].className.substr(-4, 3) && n[o].classList.add("active");
                try {
                    player.video.currentTime = player.cache_.currentTime, player.video.load(), player.video.play()
                } catch (e) {}
                return !0
            }
            try {
                cachedEpisode[player.episode.id] = null, store.remove("episode-id-" + player.episode.id)
            } catch (e) {}
            return !1
        }
        var o = "";
        switch (player.controlBar.playToggle.icon.className = "icon-play", player.controlBar.playToggle.tip.innerHTML = "<span>Phát</span>", player.el_.classList.remove("player-waiting"), e.target.error.code) {
            case 1:
                if (o = "Bạn vừa huỷ video, tải lại trang để xem", console.log("MEDIA_ERR_ABORTED"), i(0)) return;
                break;
            case 2:
                if (o = "Lỗi đường truyền, vui lòng tải lại trang", console.log("MEDIA_ERR_NETWORK"), i(0)) return;
                break;
            case 3:
                o = "Không thể chạy file này, hãy báo lỗi với admin nhé!", console.log("MEDIA_ERR_DECODE");
                break;
            case 4:
                if (o = "Video bị lỗi hoặc bị chặn", console.log("MEDIA_ERR_SRC_NOT_SUPPORTED"), i(1)) return;
                break;
            default:
                o = "Video bị lỗi gì đó, khó hiểu lắm!"
        }
        try {
            player.error.code = e.target.error.code
        } catch (e) {}
        player.error.message.innerHTML = o, player.el_.classList.add("player-error"), player.el_.classList.remove("player-waiting"), console.log("displayError"), setTimeout(function() {
            player.el_.classList.add("player-error")
        }, 100)
    }, player.displayContext = function(e) {
        var t = e.pageY,
            a = e.pageX,
            i = player.contextMenu.clientHeight + player.controlBar.clientHeight;
        e.pageY + i > player.el_.clientHeight + player.el_.getBoundingClientRect().top && (t = e.pageY - player.contextMenu.clientHeight), e.pageX + player.contextMenu.clientWidth > player.el_.clientWidth + player.el_.getBoundingClientRect().left && (a = e.pageX - player.contextMenu.clientWidth), player.contextMenu.setAttribute("style", "top: " + t + "px; left: " + a + "px; display: block;")
    }, player.createMidpoint = function(e, t) {
        var a;
        a = createElement("midpoint" + e, "div", "player-midpoint-progress"), a.style.left = t, player.controlBar.progressControl.progressHolder.appendChild(a), player.controlBar.progressControl.progressHolder["midpoint" + e] = a
    }, player.removeMidpoint = function(e) {
        try {
            removeElement(player.controlBar.progressControl.progressHolder["midpoint" + e])
        } catch (e) {}
    }, player.trackEvent = function(e, t) {}, player.changeForUserActivity = function(e) {
        e ? player.el_.classList.remove("user-inactive") : player.el_.classList.add("user-inactive")
    }, player.listenForUserActivity = function() {
        var e, t, a = !0;
        player.el_.addEventListener("mousemove", function() {
            a = !0
        }), player.el_.addEventListener("mousedown", function() {
            a = !0, clearInterval(t), t = setInterval(function() {
                a = !0
            }, 250)
        }), player.el_.addEventListener("mouseup", function() {
            a = !0, clearInterval(t)
        }), player.el_.addEventListener("keydown", function() {
            a = !0
        }), player.el_.addEventListener("keyup", function() {
            a = !0
        }), setInterval(function() {
            a && (a = !1, player.changeForUserActivity(!0), clearTimeout(e), e = setTimeout(function() {
                a || player.changeForUserActivity(!1)
            }, 2e3))
        }, 250)
    }, player.listenForUserActivity(), player.video.onclick = function() {
        ismobile.any || player.controlBar.playToggle.onclick()
    }, player.el_.onclick = function(e) {
        ismobile.phone || ismobile.tablet || (this.tabIndex = 1)
    }, player.el_.oncontextmenu = function(e) {
        e.preventDefault(), e.stopPropagation(), player.displayContext(e)
    }, player.el_.onkeydown = function(e) {
        if (!player.board.active && !player.happy) {
            e.preventDefault();
            var t = player.video.currentTime,
                a = player.video.volume;
            switch (e.which) {
                case 32:
                case 75:
                    if (player.ads) return;
                    player.video.paused ? player.video.play() : player.video.pause();
                    break;
                case 37:
                    e.ctrlKey ? t -= 60 : t -= 10, (player.video.currentTime <= 10 || t < 0) && (t = 0), player.video.currentTime = t;
                    break;
                case 39:
                    e.ctrlKey ? t += 60 : t += 10, t >= player.video.duration && (t = player.video.duration), player.video.currentTime = t;
                    break;
                case 40:
                    a -= .1, a < 0 && (a = 0), player.video.volume = a, player.controlBar.volumeControl.volumeLevel.volumeHolder.update(void 0, a);
                    break;
                case 38:
                    a += .1, a > 1 && (a = 1), player.video.volume = a, player.controlBar.volumeControl.volumeLevel.volumeHolder.update(void 0, a);
                    break;
                case 77:
                    player.video.muted ? player.video.muted = !1 : player.video.muted = !0;
                    break;
                case 70:
                case 13:
                    player.isFullscreen() ? player.exitFullscreen() : player.requestFullscreen();
                    break;
                default:
                    if (e.which > 47 && e.which < 59 || e.which > 95 && e.which < 106) {
                        var i = 48;
                        e.which > 95 && (i = 96), e.preventDefault(), player.video.currentTime = player.video.duration * (e.which - i) * .1
                    }
            }
        }
    }, player.contextMenu.oncontextmenu = function(e) {
        e.preventDefault(), e.stopPropagation()
    }, player.controlBar.playToggle.onclick = function() {
        player.video.paused ? (player.video.play(), player.init = !1) : player.video.pause()
    }, player.controlBar.prevControl.onclick = function() {
        if (episode.meta.previous) try {
            getEpisode(!0, episode.meta.previous.id)
        } catch (e) {}
    }, player.controlBar.nextControl.onclick = function() {
        if (episode.meta.next) try {
            getEpisode(!0, episode.meta.next.id)
        } catch (e) {}
    }, player.controlBar.rewindControl.onclick = function() {
        player.video.currentTime < 10 || (player.video.currentTime -= 10)
    }, player.controlBar.forwardControl.onclick = function() {
        player.video.currentTime >= player.video.duration || (player.video.currentTime += 10)
    }, player.controlBar.volumeControl.volumeToggle.onclick = function() {
        player.video.muted ? player.video.muted = !1 : player.video.muted = !0, player.audio && (player.audio.muted = player.video.muted), player.controlBar.volumeControl.volumeLevel.volumeHolder.update()
    }, player.controlBar.volumeControl.volumeLevel.volumeHolder.onclick = function(e) {
        player.controlBar.volumeControl.volumeLevel.volumeHolder.update(e.clientY)
    }, player.controlBar.volumeControl.volumeLevel.volumeHolder.onmousedown = function(e) {
        player.video.muted = !1, document.addEventListener("mousemove", player.updateVolumeStyle), document.addEventListener("touchmove", player.updateVolumeStyle)
    }, player.controlBar.volumeControl.volumeLevel.volumeHolder.onmouseup = function(e) {
        document.removeEventListener("mousemove", player.updateVolumeStyle, !1), document.removeEventListener("touchmove", player.updateVolumeStyle, !1)
    }, player.controlBar.progressControl.progressHolder.onmousemove = function(e) {
        var t = 0,
            a = 0,
            i = this.getBoundingClientRect(),
            o = this.offsetWidth,
            n = e.clientX - i.left,
            r = n / o;
        r < 0 && (r = 0), t = player.round(100 * r, 2), a = player.formatTime(Math.round(r * player.video.duration)), player.controlBar.progressControl.tip.style.left = t + "%", player.controlBar.progressControl.tip.innerHTML = "<span>" + a + "</span>"
    }, player.controlBar.progressControl.progressHolder.onclick = function(e) {
        if (player.video.duration && !player.happy) {
            var t = player.controlBar.progressControl.getBoundingClientRect(),
                a = player.controlBar.progressControl.offsetWidth,
                i = e.clientX - t.left,
                o = i / a,
                n = Math.round(o * player.video.duration);
            player.video.currentTime = n, i > a || o < 0 || player.controlBar.progressControl.progressHolder.update(i, a)
        }
    }, player.controlBar.progressControl.progressHolder.onmousedown = function() {
        ismobile.tablet || (document.addEventListener("mousemove", player.updateProgressStyle), player.cache_.paused = player.video.paused)
    }, player.controlBar.progressControl.progressHolder.onmouseup = function(e, t) {
        ismobile.tablet || (document.removeEventListener("mousemove", player.updateProgressStyle, !1), t && t.outside || (player.cache_.paused ? player.video.pause() : player.video.play()))
    }, player.controlBar.lightToggle.onclick = function() {
        player.controlBar.lightToggle.on ? (player.controlBar.lightToggle.on = !1, player.controlBar.lightToggle.tip.innerHTML = "Tắt đèn") : (player.controlBar.lightToggle.on = !0, player.controlBar.lightToggle.tip.innerHTML = "Bật đèn"), player.controlBar.lightToggle.update()
    }, player.controlBar.downloadControl.onclick = function(e) {
        e.stopPropagation();
        var t = 0;
        try {
            t = navigator.userAgent.match(/(CriOS|Chrome|Firefox|Safari|Opera(?=\/))\/?\s*(\d+)/i)[2]
        } catch (e) {}
        if (ismobile.any) {
            if (!(ismobile.other.firefox && t > 54 || ismobile.other.chrome && t > 60 || ismobile.other.opera && t > 48)) return void alert("Trình duyệt không hỗ trợ download");
            console.log("downloading...")
        }
        var a = document.createElement("a");
        if (a.href = player.video.currentSrc, a.download = player.episode.full_name, document.createEvent) {
            var i = document.createEvent("MouseEvents");
            i.initEvent("click", !0, !0), a.dispatchEvent(i)
        } else alert("Trình duyệt không hỗ trợ download")
    }, player.controlBar.settingControl.onclick = function(e) {
        player.board.active ? (player.board.active = !1, player.el_.classList.remove("player-show-board")) : (player.board.active = !0, player.el_.classList.add("player-show-board"))
    }, player.controlBar.largeToggle.onclick = function() {
        playerWrapper.classList.contains("large-mode") ? (playerWrapper.classList.remove("large-mode"), this.icon.className = "icon-maximise", this.tip.innerHTML = "<span>Mở rộng player</span>") : (playerWrapper.classList.add("large-mode"), this.icon.className = "icon-minimise", this.tip.innerHTML = "<span>Thu nhỏ player</span>"), playerWrapper.style = "";
        try {
            getElement(".film-related").classList.toggle("hidden")
        } catch (e) {}
    }, player.controlBar.fullscrenToggle.onclick = function() {
        player.isFullscreen() ? player.exitFullscreen() : player.requestFullscreen()
    }, player.board.selector.input.onkeyup = function(e) {
        if (this.value < parseInt(film.min) || this.value > parseInt(film.max)) player.board.selector.button.classList.add("disabled");
        else {
            try {
                13 == e.which && player.board.selector.button.onclick()
            } catch (e) {}
            player.board.selector.button.classList.remove("disabled")
        }
    }, player.board.selector.input.onmouseup = function() {
        player.board.selector.input.onkeyup()
    }, player.board.selector.button.onclick = function() {
        this.classList.contains("disabled") || player.board.selector.input.value < parseInt(film.min) || player.board.selector.input.value > parseInt(film.max) || getEpisode(!1, player.board.selector.input.value, {
            name: player.board.selector.input.value
        })
    }, player.video.addEventListener("pause", function() {
        player.el_.classList.add("player-paused"), player.el_.classList.remove("player-playing"), player.controlBar.playToggle.icon.className = "icon-play", player.controlBar.playToggle.tip.innerHTML = "<span>Phát</span>"
    }), player.video.addEventListener("play", function() {
        player.el_.classList.add("player-playing"), player.el_.classList.remove("player-paused"), player.el_.classList.remove("player-ended"), player.controlBar.playToggle.icon.className = "icon-pause", player.controlBar.playToggle.tip.innerHTML = "<span>Dừng</span>", player.init = !1, player.error.code = 0, cachedError[player.episode.id] = 0, cachedErrorPT[player.episode.id] = 0
    }), player.video.addEventListener("ended", function() {
        player.el_.classList.add("player-ended"), ismobile.apple.device && this.webkitExitFullscreen(), episode.meta.next && getEpisode(!0, episode.meta.next.id, {
            name: episode.meta.next.name
        })
    }), player.video.addEventListener("webkitenterfullscreen", function() {
        player.ios.fullscreen = !0
    }), player.video.addEventListener("webkitbeginfullscreen", function() {
        player.ios.fullscreen = !0
    }), player.video.addEventListener("webkitendfullscreen", function() {
        player.ios.fullscreen = !1
    }), player.video.addEventListener("seeking", player.showLoadingSpinner), player.video.addEventListener("waiting", player.showLoadingSpinner), player.video.addEventListener("canplay", player.hideLoadingSpinner), player.video.addEventListener("canplaythrough", player.hideLoadingSpinner), player.video.addEventListener("playing", player.hideLoadingSpinner), player.video.addEventListener("seeked", player.hideLoadingSpinner), player.video.addEventListener("ended", player.hideLoadingSpinner), player.video.addEventListener("play", player.hideLoadingSpinner), player.video.addEventListener("pause", player.hideLoadingSpinner), player.video.addEventListener("error", player.displayError), player.video.ontimeupdate = function() {
        if (this.currentTime && (player.cache_.currentTime = this.currentTime), player.controlBar.currentTime.innerHTML = "<span>" + player.formatTime(this.currentTime), player.controlBar.duration.innerHTML = "<span>" + player.formatTime(this.duration), player.controlBar.progressControl.progressHolder.update(this.currentTime, this.duration), this.currentTime + 120 < this.duration) try {
            store.set("current-time-" + player.episode.id, this.currentTime)
        } catch (e) {}
        if (player.audio && !player.paused && player.video.src.split("sound=false").length > 1 && player.audio.play(), !_GLOBAL._IS_VIP && player.options_.ads.midroll) {
            if (!player.options_.ads.midroll.length) return;
            if (!player.midpoint)
                if (player.video.duration > 700) {
                    player.video.duration < 1260 && (player.options_.ads.midroll.length = 1);
                    for (var e = 0; e < player.options_.ads.midroll.length; e++) player.createMidpoint(e, player.round(player.options_.ads.midroll[e].time / player.video.duration * 100, 2) + "%");
                    player.midpoint = !0
                } else player.video.duration > 0 && (player.midpoint = !0);
            if (player.video.currentTime < 10 || player.video.currentTime > 2460) return;
            player.options_.ads.midroll[0].play || player.video.currentTime > player.options_.ads.midroll[0].time && player.options_.ads.lastTime < player.options_.ads.midroll[0].time && getAds(player.options_.ads.midroll[0].url, "midroll", 0, {
                backup: player.options_.ads.midroll[0].backup
            }), player.options_.ads.midroll.length > 1 && (player.options_.ads.midroll[1].play || player.video.currentTime > player.options_.ads.midroll[1].time && player.options_.ads.lastTime < player.options_.ads.midroll[1].time && getAds(player.options_.ads.midroll[1].url, "midroll", 1, {
                backup: player.options_.ads.midroll[1].backup
            })), player.options_.ads.lastTime = player.video.currentTime
        }
    }, player.video.onvolumechange = function() {
        try {
            store.set("volume", this.volume)
        } catch (e) {}
    }, document.addEventListener("click", function(e) {
        var t = e.target,
            a = {
                board: !0
            };
        for (player.controlBar.lightToggle.update(t); t != document.body;) try {
            t.classList.contains("player-setting-control") && (a.board = !1), t.classList.contains("player-board-item") && (a.board = !1), t = t.parentNode
        } catch (e) {
            break
        }
        a.board && (player.board.active = !1, player.el_.classList.remove("player-show-board"));
        try {
            if (3 == e.which) return
        } catch (e) {}
        player.contextMenu.style.display = "none"
    }), document.addEventListener("mouseup", function(e) {
        player.controlBar.volumeControl.volumeLevel.style = "", player.controlBar.volumeControl.volumeLevel.volumeHolder.onmouseup(e), player.controlBar.progressControl.progressHolder.onmouseup(e, {
            outside: !0
        })
    }), document.addEventListener("webkitfullscreenchange", player.updateFullscreenState), document.addEventListener("mozfullscreenchange", player.updateFullscreenState), document.addEventListener("msfullscreenchange", player.updateFullscreenState), document.addEventListener("fullscreenchange", player.updateFullscreenState), player.controlBar.lightToggle.update = function(e) {
        var t = document.querySelector(".light-overlay");
        if (void 0 !== e) {
            if (!t) return;
            for (; e != document.body;) {
                if ("player" == e.id) return;
                e = e.parentNode
            }
        }
        t ? t.classList.contains("active") ? (t.classList.remove("active"), setTimeout(function() {
            if (t && "light-overlay" === t.className) try {
                document.body.removeChild(t), player.el_.classList.remove("light-on")
            } catch (e) {}
        }, 500)) : (t.classList.add("active"), player.el_.classList.add("light-on")) : (t = document.createElement("div"), t.className = "light-overlay", document.body.appendChild(t), player.el_.classList.add("light-on"), setTimeout(function() {
            t && t.classList.add("active")
        }, 10))
    }, player.controlBar.volumeControl.volumeLevel.volumeHolder.update = function(e, t) {
        var a = 0;
        void 0 !== e ? (e = this.getBoundingClientRect().bottom - e, e < 0 ? e = 0 : e > this.offsetHeight && (e = this.offsetHeight), a = player.round(e / this.offsetHeight, 2), player.video.volume = a) : t ? a = t : player.video.muted || (a = player.video.volume), player.controlBar.volumeControl.volumeToggle.icon.className = a >= .5 ? "icon-volume-up" : a > .05 ? "icon-volume-down" : "icon-volume-mute", a *= 100;
        var i = a - player.controlBar.volumeControl.volumeLevel.volumeHolder.volumeHandle.offsetHeight / player.controlBar.volumeControl.volumeLevel.volumeHolder.offsetHeight * 100;
        i < 0 && (i = 0), player.controlBar.volumeControl.volumeLevel.volumeHolder.volumeCurrent.style.height = a + "%", player.controlBar.volumeControl.volumeLevel.volumeHolder.volumeHandle.style.bottom = i + "%"
    }, player.controlBar.progressControl.progressHolder.update = function(e, t) {
        var a = e / t,
            i = player.controlBar.progressControl.offsetWidth,
            o = player.controlBar.progressControl.progressHolder.seekHandle.offsetWidth,
            n = o / i,
            r = 1 - n,
            l = a * r;
        player.round(100 * l, 2);
        player.controlBar.progressControl.progressHolder.playProgress.style.width = player.round(100 * a, 2) + "%", player.controlBar.progressControl.progressHolder.seekHandle.style.left = player.round(100 * l, 2) + "%"
    }, player.el_.classList.add("player-waiting"), getEpisode(!0, film.episodeId);
    for (var o = [.25, .5, 1, 1.5, 2], a = 0; a < o.length; a++) {
        var n = player.createPlaybackRateItem(o[a]);
        player.board.speed.appendChild(n), 1 == o[a] && (player.board.speed.active = n)
    }
    var r = setInterval(function() {
        var e = player.video.buffered.length - 1,
            t = player.video.duration;
        if (e < 0) return !1;
        var a = player.video.buffered.end(e);
        if (a >= t) return player.controlBar.progressControl.progressHolder.loadProgress.style.width = "100%", clearInterval(r), !1;
        var i = player.round(a / t * 100, 2);
        player.controlBar.progressControl.progressHolder.loadProgress.style.width = i + "%"
    }, 500)
}

function shuffle(e) {
    for (var t, a, i = e.length; 0 !== i;) a = Math.floor(Math.random() * i), i -= 1, t = e[i], e[i] = e[a], e[a] = t;
    return e
}

function popState(e) {
    onpopstateTimeout = setTimeout(function(e) {
        try {
            e.state && getEpisode(!0, e.state.episodeId, {
                onpopstate: !0
            })
        } catch (e) {}
    }, 100)
}

function countdownTimer(e, t, a) {
    function i(e) {
        return e < 10 ? "0" + e : e
    }
    var o, n, r, l, s = 0,
        c = 0,
        d = 0,
        p = 0,
        u = "",
        v = player.sync;
    switch (a = new Date(a), a.getDay()) {
        case 1:
            u = "thứ hai";
            break;
        case 2:
            u = "thứ ba";
            break;
        case 3:
            u = "thứ tư";
            break;
        case 4:
            u = "thứ năm";
            break;
        case 5:
            u = "thứ sáu";
            break;
        case 6:
            u = "thứ bảy";
            break;
        default:
            u = "chủ nhật"
    }
    if (!v) try {
        v = store.get("sync")
    } catch (e) {
        v = 0
    }
    var m = createElement("countdown", "div", "player-countdown", {
        childrens: [{
            identity: "background",
            tag: "img",
            className: "player-thumbnail",
            options: {},
            properties: [{
                identity: "src",
                value: "/assets/img/countdown-bg.png"
            }]
        }, {
            identity: "content",
            tag: "div",
            className: "player-countdown-body",
            options: {
                childrens: [{
                    identity: "name",
                    tag: "div",
                    className: "player-countdown-title",
                    options: {
                        innerHTML: t
                    }
                }, {
                    identity: "date",
                    tag: "div",
                    className: "player-countdown-date",
                    options: {
                        innerHTML: "<span>Đón xem vào lúc</span> " + i(a.getHours()) + ":" + i(a.getMinutes()) + " <span>" + u + "</span> " + i(a.getDate()) + "/" + i(a.getMonth() + 1) + "/" + a.getFullYear()
                    }
                }, {
                    identity: "timer",
                    tag: "div",
                    className: "player-countdown-timer",
                    options: {
                        childrens: [{
                            identity: "days",
                            tag: "div",
                            className: "countdown p100 days",
                            options: {
                                childrens: [{
                                    identity: "value",
                                    tag: "span",
                                    className: "countdown-value"
                                }, {
                                    identity: "label",
                                    tag: "span",
                                    className: "",
                                    options: {
                                        innerHTML: "ngày"
                                    }
                                }, {
                                    identity: "slice",
                                    tag: "div",
                                    className: "slice",
                                    options: {
                                        childrens: [{
                                            identity: "bar",
                                            tag: "div",
                                            className: "bar"
                                        }, {
                                            identity: "fill",
                                            tag: "div",
                                            className: "fill"
                                        }]
                                    }
                                }]
                            }
                        }, {
                            identity: "hours",
                            tag: "div",
                            className: "countdown p100 hours",
                            options: {
                                childrens: [{
                                    identity: "value",
                                    tag: "span",
                                    className: "countdown-value"
                                }, {
                                    identity: "label",
                                    tag: "span",
                                    className: "",
                                    options: {
                                        innerHTML: "giờ"
                                    }
                                }, {
                                    identity: "slice",
                                    tag: "div",
                                    className: "slice",
                                    options: {
                                        childrens: [{
                                            identity: "bar",
                                            tag: "div",
                                            className: "bar"
                                        }, {
                                            identity: "fill",
                                            tag: "div",
                                            className: "fill"
                                        }]
                                    }
                                }]
                            }
                        }, {
                            identity: "minutes",
                            tag: "div",
                            className: "countdown p100 minutes",
                            options: {
                                childrens: [{
                                    identity: "value",
                                    tag: "span",
                                    className: "countdown-value"
                                }, {
                                    identity: "label",
                                    tag: "span",
                                    className: "",
                                    options: {
                                        innerHTML: "phút"
                                    }
                                }, {
                                    identity: "slice",
                                    tag: "div",
                                    className: "slice",
                                    options: {
                                        childrens: [{
                                            identity: "bar",
                                            tag: "div",
                                            className: "bar"
                                        }, {
                                            identity: "fill",
                                            tag: "div",
                                            className: "fill"
                                        }]
                                    }
                                }]
                            }
                        }, {
                            identity: "seconds",
                            tag: "div",
                            className: "countdown p100 seconds",
                            options: {
                                childrens: [{
                                    identity: "value",
                                    tag: "span",
                                    className: "countdown-value"
                                }, {
                                    identity: "label",
                                    tag: "span",
                                    className: "",
                                    options: {
                                        innerHTML: "giây"
                                    }
                                }, {
                                    identity: "slice",
                                    tag: "div",
                                    className: "slice",
                                    options: {
                                        childrens: [{
                                            identity: "bar",
                                            tag: "div",
                                            className: "bar"
                                        }, {
                                            identity: "fill",
                                            tag: "div",
                                            className: "fill"
                                        }]
                                    }
                                }]
                            }
                        }]
                    }
                }]
            }
        }]
    });
    player.el_.appendChild(m), player.el_.classList.add("player-has-countdown"), player.el_.classList.remove("player-waiting"), player.el_.classList.remove("player-error"), player.countdown = m, player.isFullscreen() && player.exitFullscreen(), a = a.getTime(), r = setInterval(function() {
        var e = 100;
        n = setInterval(function() {
            --e <= 0 && clearInterval(n);
            try {
                player.countdown.content.timer.days.className = "countdown days p" + e, player.countdown.content.timer.hours.className = "countdown hours p" + e, player.countdown.content.timer.minutes.className = "countdown minutes p" + e
            } catch (e) {
                clearInterval(n)
            }
        }, 8)
    }, 1e4), o = setInterval(function() {
        if ((l = a - (new Date).getTime() + v) < 0) {
            clearInterval(o), clearInterval(r), getEpisode(!0, e, {
                current: !0,
                refresh: !0
            });
            try {
                removeElement(player.countdown), player.countdown = void 0, player.el_.classList.remove("player-has-countdown")
            } catch (e) {}
        } else s = Math.floor(l / 864e5), c = Math.floor(l % 864e5 / 36e5), d = Math.floor(l % 36e5 / 6e4), p = Math.floor(l % 6e4 / 1e3), player.countdown.content.timer.days.className = "countdown days p" + Math.floor(100 * s / 30), player.countdown.content.timer.days.value.innerText = s, player.countdown.content.timer.hours.className = "countdown hours p" + Math.floor(100 * c / 24), player.countdown.content.timer.hours.value.innerText = c, player.countdown.content.timer.minutes.className = "countdown minutes p" + Math.floor(100 * d / 60), player.countdown.content.timer.minutes.value.innerText = d, player.countdown.content.timer.seconds.className = "countdown seconds p" + Math.floor(100 * p / 60), player.countdown.content.timer.seconds.value.innerText = p
    }, 1e3), player.timer = {
        interval: o,
        animate: n,
        full: r
    }
}

function getAds(e, t, a, i) {
    var o, n;
    try {
        e = e.replace("[page_url]", encodeURIComponent(window.location.href)), e = e.replace("[width]", player.el_.offsetWidth), e = e.replace("[height]", player.el_.offsetHeight), e = e.replace("[timestamp]", (new Date).getTime())
    } catch (e) {}
    player.vast || (player.vast = {}), player.ads || (player.ads = {}), i || (i = {}), player.vast.container || (o = createElement("vastVideo", "video", "player-vast-video hidden", {}, [{
        identity: "autoplay",
        value: ""
    }, {
        identity: "preload",
        value: "auto"
    }, {
        identity: "playsinline",
        value: ""
    }, {
        identity: "webkit-playsinline",
        value: ""
    }]), n = createElement("vast", "div", "player-vast-container hidden", {
        childrens: [{
            identity: "vpaid",
            tag: "div",
            className: "player-vast-vpaid hidden"
        }, {
            identity: "noskip",
            tag: "div",
            className: "player-vast-noskip hidden",
            options: {
                innerHTML: "Quảng cáo ..."
            }
        }, {
            identity: "blocker",
            tag: "a",
            className: "player-vast-blocker hidden",
            properties: [{
                identity: "target",
                value: "_blank"
            }, {
                identity: "href",
                value: ""
            }]
        }, {
            identity: "progress",
            tag: "div",
            className: "player-vast-progress",
            options: {
                childrens: [{
                    identity: "loaded",
                    tag: "div",
                    className: "player-vast-loaded"
                }]
            }
        }, {
            identity: "skip",
            tag: "div",
            className: "player-vast-skip"
        }, {
            identity: "info",
            tag: "div",
            className: "player-vast-title",
            options: {
                innerHTML: "Quảng cáo"
            }
        }, {
            identity: "control",
            tag: "div",
            className: "player-vast-control",
            options: {
                childrens: [{
                    identity: "play",
                    tag: "div",
                    className: "player-vast-play",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-play"
                        }]
                    }
                }, {
                    identity: "mute",
                    tag: "div",
                    className: "player-vast-mute",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-volume-up"
                        }]
                    }
                }, {
                    identity: "happy",
                    tag: "div",
                    className: "player-vast-happy",
                    options: {
                        childrens: [{
                            identity: "icon",
                            tag: "i",
                            className: "icon-minimise"
                        }]
                    }
                }]
            }
        }]
    }), player.el_.appendChild(o), player.el_.appendChild(n), player.vast = {
        video: o,
        container: n
    }, player.vast.container.control.happy.onclick = function() {
        if (player.happy) player.happy = !1, player.el_.classList.remove("player-happy"), player.video.pause(), this.icon.className = "icon-minimise", player.vast.video.style = "", player.vast.container.style = "";
        else {
            player.happy = !0, player.el_.classList.add("player-happy"), playerWrapper.classList.remove("large-mode"), player.video.play(), player.vast.video.volume = 0, player.adUnit && player.adUnit.setAdVolume(0), player.vast.muted = !0, this.icon.className = "icon-maximise", player.vast.container.control.mute.icon.className = "icon-volume-mute";
            var e = (document.body.offsetWidth - container.offsetWidth) / 2 + player.el_.offsetWidth + 20;
            window.innerWidth >= 1024 ? (player.vast.video.style.left = e + "px", player.vast.container.style.left = e + "px") : (player.vast.video.style = "", player.vast.container.style = "")
        }
        player.adUnit && player.adUnit.resizeAd(player.el_.offsetWidth, player.el_.offsetHeight, "normal", function() {})
    }), i.canPlayVPAID = canPlayVPAID, getAdsResponse(e, t, a, i)
}

function getAdsResponse(e, t, a, i) {
    function o(e) {
        if (player.options_.ads[t][a].get = !0, e)
            if (e.ads.length) {
                if (e.ads[0].creatives.length > 0)
                    for (var o = 0; o < e.ads.length; o++) {
                        var n = e.ads[o];
                        try {
                            player.adid = n.id
                        } catch (e) {}
                        for (var r = 0; r < n.creatives.length; r++) {
                            var l = n.creatives[r];
                            if ("linear" == l.type) {
                                player.vast.skip = player.options_.ads[t][a].skip, player.vast.duration = l.duration;
                                var s = "",
                                    c = "";
                                if (l.mediaFiles.length)
                                    for (var d = 0; d < l.mediaFiles.length; d++) {
                                        if (s = l.mediaFiles[d].fileURL.trim(), c = l.mediaFiles[d].mimeType, player.tracker = new DMVAST.tracker(n, l), "video/mp4" == c) return delete n.lastURI, void playVAST(s, t, a, i);
                                        if ("application/javascript" == c && i.canPlayVPAID) return void playVPAID(s, t, a, i)
                                    }
                            }
                        }
                    }
            } else console.log("has no ads"), player.ads = !1;
        else console.log("not response"), player.ads = !1;
        if (!player.options_.ads[t][a].play && player.options_.ads[t][a].backup && !player.options_.ads[t][a].get_backup) return player.options_.ads[t][a].get_backup = !0, void getAds(player.options_.ads[t][a].backup, t, a);
        removeAds(t, a, i)
    }
    "an" != e.substr(8, 2) ? (i.facebook = !1, DMVAST.client.get(e, function(e) {
        o(e)
    })) : (i.facebook = !0, DMVAST.client.get(e, {
        withCredentials: !0
    }, function(e) {
        o(e)
    }))
}

function playHLS(e, t, a, i) {
    function o(i) {
        i || (i = {}), console.log("destroy hls"), errorStatus = "", e.removeQualityItems(), e.hls.destroy(), e.hls = null, cachedError[t.id] = 0;
        for (var o = 0; o < t.hls.length; o++)
            if (!t.hls[o].play) return t.sources.hls = t.hls[o].url, playHLS(e, t, a, {
                driveHLS: !0
            }), void console.log("switch hls");
        for (var o = 0; o < a.length; o++) a[o].quality == n && (r = !0, a[o].default = !0, e.video.src = a[o].src), e.createQualityItem(a[o]);
        e.board.quality.classList.remove("hidden")
    }
    if (!Hls) return !1;
    i || (i = {});
    var n = "480p",
        r = !1;
    if (t.sources.vip.length) {
        t.sources.vip[0].src.replace("/vg/", "/vod/vg/").replace(".mp4", ".mp4/playlist.m3u8")
    }
    for (var l = 0; l < t.hls.length; l++) t.hls[l].url == t.sources.hls && (t.hls[l].play = !0);
    if (Hls.isSupported()) return e.hls = new Hls({
        fragLoadingTimeOut: 15e3
    }), e.hls.vip = null, e.hls.p2pDomain = "https://" + t.sources.hls.split("/")[2], window.p2pDomain = e.hls.p2pDomain, e.hls.loadSource(t.sources.hls), e.hls.attachMedia(e.video), e.hls.on(Hls.Events.MANIFEST_PARSED, function() {
        if (console.log("play hls"), i.level && (e.hls.currentLevel = i.level), e.ads ? e.video.pause() : e.video.play(), void 0 == i.level || null == i.level) {
            e.removeQualityItems();
            var a;
            if (e.createQualityItem({
                    level: -1,
                    quality: "auto",
                    default: !0,
                    src: t.sources.hls
                }), e.hls.levels.length > 1)
                for (var a = 0; a < e.hls.levels.length; a++) e.hls.levels[a].height >= 480 && e.hls.levels[a].height <= 1080 && (e.hls.levels[a].level = a, e.hls.levels[a].quality = e.hls.levels[a].height + "p", e.createQualityItem(e.hls.levels[a]));
            e.board.quality.classList.remove("hidden")
        }
    }), e.hls.on(Hls.Events.ERROR, function(t, a) {
        if ("manifestLoadTimeOut" == a.details || "manifestLoadError" == a.details || "manifestParsingError" == a.details) return void o();
        switch (a.type) {
            case Hls.ErrorTypes.MEDIA_ERROR:
                console.log("hls media error");
                try {
                    if (e.hls.recoverMediaError(), cachedError[e.episode.id] > 30) return void o()
                } catch (e) {
                    return void o()
                }
                cachedError[e.episode.id]++, errorStatus = Hls.ErrorTypes.MEDIA_ERROR;
                break;
            case Hls.ErrorTypes.NETWORK_ERROR:
                console.log("hls network error");
                try {
                    if (e.hls.startLoad(), cachedError[e.episode.id] > 30) return void o()
                } catch (e) {
                    return void o()
                }
                cachedError[e.episode.id]++, errorStatus = Hls.ErrorTypes.NETWORK_ERROR
        }
    }), !0;
    if (e.video.canPlayType("application/vnd.apple.mpegurl")) {
        if (void 0 != i.level && null != i.level || e.removeQualityItems(), i.src ? e.video.src = i.src : e.video.src = t.sources.hls, e.video.load(), (void 0 == i.level || null == i.level) && (e.board.quality.classList.remove("hidden"), !t.sources.vip.length)) {
            e.createQualityItem({
                level: -1,
                quality: "auto",
                default: !0,
                src: t.sources.hls
            });
            try {
                var s = t.sources.hls.split("/")[2],
                    c = new XMLHttpRequest;
                c.open("GET", t.sources.hls), c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), c.send(), c.onload = function() {
                    var t = c.responseText,
                        a = t.split("#EXT-X-STREAM-INF:BANDWIDTH=");
                    if (a.length > 2) {
                        for (var i = [], o = 1; o < a.length; o++) try {
                            var n = a[o].split("\n"),
                                r = n[0].substr(-4).replace("x", "");
                            r >= 480 && r <= 1080 && i.push({
                                quality: r + "p",
                                src: "https://" + s + n[1],
                                type: "video/mp4"
                            })
                        } catch (e) {}
                        i.sort(function(e, t) {
                            return parseInt(e.quality) < parseInt(t.quality) ? -1 : parseInt(e.quality) > parseInt(t.quality) ? 1 : 0
                        });
                        for (var o = 0; o < i.length; o++) e.createQualityItem(i[o])
                    }
                }
            } catch (e) {}
        }
        return !0
    }
}

function addHLSQuality(e, t) {
    if (Hls && t) try {
        var a = t.split("/")[2],
            i = [],
            o = new XMLHttpRequest;
        o.open("GET", t), o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.send(), o.onload = function() {
            var t = o.responseText,
                n = t.split("#EXT-X-STREAM-INF:BANDWIDTH=");
            if (n.length > 2) {
                for (var r = [], l = 1; l < n.length; l++) try {
                    var s = n[l].split("\n"),
                        c = s[0].substr(-4).replace("x", "");
                    i[c] = !0, r.push({
                        quality: c + "p",
                        src: "https://" + a + s[1],
                        type: "video/mp4"
                    })
                } catch (e) {}
                r.sort(function(e, t) {
                    return parseInt(e.quality) < parseInt(t.quality) ? -1 : parseInt(e.quality) > parseInt(t.quality) ? 1 : 0
                });
                var d = 0,
                    p = 1;
                i[360] && i[480] ? d = 2 : (i[360] && !i[480] || !i[360] && i[480]) && (d = 1), p = i[720] ? d + 1 : d;
                for (var l = 0; l < r.length; l++) "720p" == r[l].quality ? (r[l].level = d, e.createQualityItem(r[l])) : "1080p" == r[l].quality && (r[l].level = p, e.createQualityItem(r[l]))
            }
        }
    } catch (e) {}
}

function playIMA3(e, t, a, i) {
    function o(e) {
        var o = new google.ima.AdsRenderingSettings;
        o.restoreCustomPlaybackStateOnAdBreakComplete = !0, s = e.getAdsManager(player.vast.video, o), s.addEventListener(google.ima.AdEvent.Type.LOADED, n), s.addEventListener(google.ima.AdEvent.Type.STARTED, n), s.addEventListener(google.ima.AdEvent.Type.COMPLETE, n), s.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
            console.log("Ad error"), console.log(e), player.vast.stopped = !0;
            try {
                s.destroy(), player.adsManager = null, player.vast.container.vpaid.innerHTML = ""
            } catch (e) {}
            removeAds(t, a, i)
        }), s.addEventListener(google.ima.AdEvent.Type.FIRST_QUARTILE, n), s.addEventListener(google.ima.AdEvent.Type.MIDPOINT, n), s.addEventListener(google.ima.AdEvent.Type.THIRD_QUARTILE, n), s.addEventListener(google.ima.AdEvent.Type.PAUSED, n), s.addEventListener(google.ima.AdEvent.Type.RESUMED, n), s.addEventListener(google.ima.AdEvent.Type.SKIPPED, n), s.addEventListener(google.ima.AdEvent.Type.CLICK, n), s.addEventListener(google.ima.AdEvent.Type.VOLUME_MUTED, n), s.addEventListener(google.ima.AdEvent.Type.VOLUME_CHANGED, n), s.addEventListener(google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED, n), s.init(player.vast.container.offsetWidth, player.vast.container.offsetHeight, google.ima.ViewMode.NORMAL), ismobile.any || player.happy ? (s.setVolume(0), player.vast.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute") : s.setVolume(.4), s.start(), player.adsManager = s
    }

    function n(e) {
        var o = e.getAd(),
            n = o.getDuration(),
            r = Math.ceil(player.vast.skip);
        switch (n || (n = player.vast.duration), e.type) {
            case google.ima.AdEvent.Type.LOADED:
                if (console.log("vpaid loaded"), !o.isLinear()) return void console.log("NOT LINEAR");
                if (player.ios.fullscreen) try {
                    player.video.webkitExitFullscreen()
                } catch (e) {}
                player.vast.completed = !1, ismobile.any || player.happy ? (s.setVolume(0), player.vast.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute") : s.setVolume(.4), player.vast.paused = !0, player.vast.timeout = setTimeout(function() {
                    if (!l) {
                        console.log("Ad timeout");
                        try {
                            s.pause()
                        } catch (e) {}
                        removeAds(t, a)
                    }
                }, 8e3);
                break;
            case google.ima.AdEvent.Type.STARTED:
                if (console.log("vpaid started"), l = !0, player.vast.paused = !1, player.video.pause(), player.vast.timeout && clearTimeout(player.vast.timeout), i.xml) try {
                    player.tracker.trackURLs(player.tracker.creative.trackingEvents.start)
                } catch (e) {}
                if (player.vast.container.classList.remove("hide"), player.vast.container.vpaid.classList.remove("hide"), player.vast.container.control.play.icon.className = "icon-pause", player.el_.classList.remove("player-waiting"), player.loadingText.innerText = "", "preroll" != t && player.removeMidpoint(a), player.options_.ads[t][a].play = !0, ismobile.any || player.happy ? (s.setVolume(0), player.vast.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute") : s.setVolume(.4), o.isLinear()) {
                    try {
                        clearInterval(player.vast.vpaidInterval)
                    } catch (e) {}
                    player.vast.vpaidInterval = setInterval(function() {
                        var e = s.getRemainingTime(),
                            t = o.getDuration(),
                            a = t - e;
                        r--, player.vast.countdown = r, r <= 0 ? (player.vast.container.skip.innerHTML = "tắt", player.vast.container.skip.classList.remove("disabled"), player.vast.container.noskip.classList.add("hidden"), player.skippable = !0) : (player.vast.container.skip.innerHTML = r, player.vast.container.skip.classList.add("disabled")), player.vast.container.skip.classList.remove("hide"), player.vast.container.progress.loaded.style.width = a / t * 100 + "%", e <= 0 && clearInterval(player.vast.vpaidInterval)
                    }, 1e3)
                }
                break;
            case google.ima.AdEvent.Type.FIRST_QUARTILE:
                console.log("vpaid firstQuartile");
                break;
            case google.ima.AdEvent.Type.MIDPOINT:
                console.log("vpaid midpoint");
                break;
            case google.ima.AdEvent.Type.THIRD_QUARTILE:
                console.log("vpaid thirdQuartile"), player.thirdQuartile = !0;
                break;
            case google.ima.AdEvent.Type.COMPLETE:
                if (console.log("vpaid completed"), player.vast.completed) return;
                player.vast.completed = !0, removeAds(t, a);
                break;
            case google.ima.AdEvent.Type.SKIPPED:
                console.log("vpaid skipped"), removeAds(t, a);
                break;
            case google.ima.AdEvent.Type.CLICK:
                break;
            case google.ima.AdEvent.Type.VOLUME_MUTED:
                player.vast.video.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute";
                break;
            case google.ima.AdEvent.Type.VOLUME_CHANGED:
                s.getVolume() > 0 && (player.vast.video.muted = !1, player.vast.container.control.mute.icon.className = "icon-volume-up");
                break;
            case google.ima.AdEvent.Type.PAUSED:
                player.vast.paused = !0, player.vast.container.control.play.icon.className = "icon-play";
                break;
            case google.ima.AdEvent.Type.RESUMED:
                player.vast.paused = !1, player.vast.started || (player.vast.started = !0), player.vast.container.control.play.icon.className = "icon-pause"
        }
    }

    function r(e) {
        console.log(e), player.vast.stopped = !0;
        try {
            s.destroy(), DMVAST.util.track(player.vast.ad.errorURLTemplates, {
                ERRORCODE: 405
            })
        } catch (e) {}
        removeAds(t, a, i)
    }
    console.log("play ima3");
    var l = !1;
    player.ads = !0, player.adsType = t, player.vast.countdown = void 0, player.vast.skip = player.options_.ads[t][a].skip + 0, player.vast.completed = !1, i || (i = {});
    try {
        console.log(google.ima)
    } catch (e) {
        return void removeAds(t, a, i)
    }
    try {
        e = e.replace("[page_url]", encodeURIComponent(window.location.href)), e = e.replace("[width]", player.el_.offsetWidth), e = e.replace("[height]", player.el_.offsetHeight), e = e.replace("[timestamp]", (new Date).getTime()), clearInterval(player.vast.vpaidInterval)
    } catch (e) {}
    var s;
    player.el_.classList.add("player-waiting"), player.loadingText.innerText = "Đang tải quảng cáo", player.vast.paused = !1, player.happy || player.video.pause(), player.vast.video.classList.remove("hidden"), player.vast.container.classList.remove("hidden"), player.vast.container.vpaid.classList.remove("hidden"), player.vast.container.control.play.icon.className = "icon-pause", player.vast.container.skip.style.display = "", player.vast.container.skip.classList.add("hidden"), player.vast.container.noskip.classList.remove("hidden"), player.vast.container.info.classList.remove("hidden"), player.vast.container.info.innerText = "midroll" != t ? "Quảng cáo đầu phim " + (a + 1) + "/" + player.episode.meta.ads[t].data.length : "Quảng cáo giữa phim", google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED);
    var c = new google.ima.AdDisplayContainer(player.vast.container.vpaid, player.vast.video),
        d = new google.ima.AdsLoader(c);
    d.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, o, !1), d.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, r, !1);
    var p = new google.ima.AdsRequest;
    p.adTagUrl = e, p.linearAdSlotWidth = player.el_.offsetWidth, p.linearAdSlotHeight = player.el_.offsetHeight, p.nonLinearAdSlotWidth = player.el_.offsetWidth, p.nonLinearAdSlotHeight = player.el_.offsetHeight, d.requestAds(p), c.initialize(), player.vast.container.control.play.onclick = function() {
        if (player.init && player.vast.video.paused) return s.pause(), void s.resume();
        player.vast.paused ? s.resume() : s.pause()
    }, player.vast.container.control.mute.onclick = function() {
        player.vast.muted ? (s.setVolume(.2), player.vast.muted = !1, player.vast.video.muted = !1, player.vast.container.control.mute.icon.className = "icon-volume-up") : (s.setVolume(0), player.vast.muted = !0, player.vast.video.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute")
    }, player.vast.container.skip.onclick = function(e) {
        e.stopPropagation(), e.preventDefault(), player.vast.countdown > 0 || void 0 == player.vast.countdown || s.skip()
    }
}

function playVAST(e, t, a, i) {
    var o, n = !1,
        r = !1;
    player.ads = !0, player.adsType = t, player.happy || player.video.pause();
    try {
        clearInterval(player.vast.vpaidInterval)
    } catch (e) {}
    player.vast.skip = player.options_.ads[t][a].skip + 0, ismobile.any || (player.vast.skip = 8), player.vast.container.info.innerText = "midroll" != t ? "Quảng cáo đầu phim " + (a + 1) + "/" + player.episode.meta.ads[t].data.length : "Quảng cáo giữa phim", player.el_.classList.add("player-waiting"), player.loadingText.innerText = "Đang tải quảng cáo", player.vast.container.skip.style.display = "", player.vast.container.skip.classList.add("hidden"), player.tracker.clickThroughURLTemplate && (o = DMVAST.util.resolveURLTemplates([player.tracker.clickThroughURLTemplate], {
        CACHEBUSTER: Math.round(1e10 * Math.random()),
        CONTENTPLAYHEAD: player.tracker.progressFormated()
    })[0]), player.vast.container.blocker.href = o;
    player.tracker.clickTrackingURLTemplates;
    if (player.vast.container.blocker.onclick = function(e) {
            player.vast.video.paused ? player.vast.video.play() : player.vast.video.pause(), Math.floor(25 * Math.random()) > 0 || player.tracker.click()
        }, player.vast.container.classList.remove("hidden"), player.vast.video.classList.remove("hidden"), player.vast.container.blocker.classList.remove("hidden"), player.vast.video.src = e, player.vast.video.load(), player.ios.fullscreen) try {
        player.video.webkitExitFullscreen()
    } catch (e) {}
    ismobile.any && player.isFullscreen() && player.exitFullscreen(), player.vast.video.volume = .4;
    try {
        store.get("volume") >= .4 ? player.vast.video.volume = .4 : player.vast.video.volume = store.get("volume") / 2
    } catch (e) {}
    ismobile.any || player.happy ? (player.vast.video.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute") : (player.vast.video.muted = !1, player.vast.container.control.mute.icon.className = "icon-volume-up"), player.vast.video.play(), player.vast.skip || (player.vast.skip = 0, player.vast.container.skip.innerHTML = "tắt"), player.vast.ended = function() {
        if (!player.vast.completed) {
            player.vast.completed = !0, r || (console.log("complete"), player.tracker.complete());
            try {
                player.vast.video.removeEventListener("timeupdate", player.vast.timeupdate, !1)
            } catch (e) {
                console.log(e)
            }
            removeAds(t, a)
        }
    }, player.vast.timeupdate = function() {
        if (player.vast.video.duration) {
            var e = player.vast.video.currentTime,
                t = player.tracker.quartiles.firstQuartile,
                a = player.tracker.quartiles.midpoint,
                i = player.tracker.quartiles.thirdQuartile;
            if (player.vast.currentTime < t && e > t) {
                console.log("firstQuartile");
                try {
                    player.tracker.trackURLs(player.tracker.creative.trackingEvents.firstQuartile)
                } catch (e) {}
            } else if (player.vast.currentTime < a && e > a) {
                console.log("midpoint");
                try {
                    player.tracker.trackURLs(player.tracker.creative.trackingEvents.midpoint)
                } catch (e) {}
            } else if (player.vast.currentTime < i && e > i) {
                console.log("thirdQuartile");
                try {
                    player.tracker.trackURLs(player.tracker.creative.trackingEvents.thirdQuartile)
                } catch (e) {}
            }
            player.vast.currentTime = e, player.vast.container.skip.classList.remove("hidden"), player.vast.container.progress.loaded.style.width = player.round(e / player.vast.video.duration * 100, 2) + "%", player.vast.skip ? (player.vast.countdown = Math.ceil(player.vast.skip - e), player.vast.countdown > 0 ? (player.vast.container.skip.style.cursor = "not-allowed", player.vast.container.skip.innerHTML = player.vast.countdown) : (player.vast.container.skip.style.cursor = "", player.vast.container.skip.innerHTML = "tắt", player.happy || ismobile.any || player.vast.container.control.happy.click(), player.vast.skip = 0)) : player.vast.container.skip.innerHTML = "tắt"
        }
    }, player.vast.loadstart = function() {
        n = !0, player.vast.completed = !1, player.tracker.impressed = !1, console.log("impression"), player.tracker.load(), console.log("start");
        try {
            player.tracker.trackURLs(player.tracker.creative.trackingEvents.start)
        } catch (e) {}
        player.hideLoadingSpinner(), player.trackEvent("VAST impression", e), player.options_.ads[t][a].play = !0, ismobile.any || (player.vast.video.muted = !1), "preroll" != t && player.removeMidpoint(a)
    }, player.vast.video.addEventListener("loadstart", player.vast.loadstart), player.vast.video.addEventListener("loadedmetadata", function() {
        isNaN(player.tracker.assetDuration) ? player.tracker.assetDuration = player.vast.video.duration : player.tracker.assetDuration > player.vast.video.duration && (player.tracker.assetDuration = player.vast.video.duration), player.vast.skip > player.vast.video.duration && (player.vast.skip = player.vast.video.duration), player.tracker.quartiles || (player.tracker.quartiles = {
            firstQuartile: .25 * player.tracker.assetDuration,
            midpoint: .5 * player.tracker.assetDuration,
            thirdQuartile: .75 * player.tracker.assetDuration
        })
    }), player.vast.video.addEventListener("play", function() {
        n = !0, player.hideLoadingSpinner(), player.vast.container.control.play.icon.className = "icon-pause", player.el_.classList.remove("player-waiting"), player.loadingText.innerText = ""
    }), player.vast.video.addEventListener("pause", function() {
        player.vast.container.control.play.icon.className = "icon-play"
    }), player.vast.video.addEventListener("error", function(e) {
        r = !0;
        try {
            player.tracker.errorWithCode(405)
        } catch (e) {}
        removeAds(t, a, i)
    }), player.vast.video.addEventListener("ended", player.vast.ended), player.vast.video.addEventListener("webkitendfullscreen", function() {
        player.ios.fullscreen = !1
    }), player.vast.video.addEventListener("playing", player.hideLoadingSpinner), player.vast.container.control.play.onclick = function() {
        player.vast.video.paused ? player.vast.video.play() : player.vast.video.pause()
    }, player.vast.container.control.mute.onclick = function() {
        player.vast.video.muted ? (player.vast.video.muted = !1, player.vast.container.control.mute.icon.className = "icon-volume-up") : (player.vast.video.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute")
    }, player.vast.container.skip.onclick = function(e) {
        if (e.stopPropagation(), e.preventDefault(), !(player.vast.countdown > 0 || void 0 == player.vast.countdown)) {
            if (!ismobile.any) return void player.vast.container.control.happy.click();
            player.vast.video.pause();
            try {
                player.vast.video.removeAttribute("src")
            } catch (e) {}
            player.tracker.skip(), removeAds(t, a, i)
        }
    }, player.vast.video.addEventListener("timeupdate", player.vast.timeupdate), player.vast.skip > 0 && (player.vast.skipTimeout = setTimeout(function() {
        player.vast.countdown > 0 && (player.vast.skip = 0, player.vast.countdown = 0, player.vast.container.skip.style.cursor = "", player.vast.container.skip.innerHTML = "tắt")
    }, 1e3 * (player.vast.skip + 5)))
}

function playVideoFromEpisode(e, t) {
    var a = [],
        i = "480p",
        o = {},
        n = !1;
    if (player.episode = e, e.hls = setM3u8Data(e.sources.m3u8), e.hls.length ? e.sources.hls = e.hls[0].url : e.sources.hvg && (e.sources.hls = encodeString(e.sources.hvg, 69)), e.hls || (e.hls = []), e.title || (e.title = film.name + " " + e.full_name), o = {
            episodeId: e.id,
            title: e.title,
            link: e.link
        }, t || (t = {}), !film.type && (document.title = e.title, player.title.innerHTML = "<span>" + e.title + "</span>", getElement(".film-info-title").innerHTML = film.name + " " + e.full_name.split("-")[0], !t.onpopstate && e.link != window.location.pathname)) try {
        history.pushState(o, e.title, e.link)
    } catch (e) {}
    if (updatePlayerSetting(e), e.upcoming) return void countdownTimer(e.id, e.full_name, e.upcoming);
    var r = [];
    e.sources.gd.length;
    i = "480p";
    var l = {
        "360p": !1,
        "480p": !1,
        "720p": !1,
        "1080p": !1
    };
    if (e.sources.pt.length)
        for (var s = 0; s < e.sources.pt.length; s++) {
            try {
                e.sources.pt[s].src.split("lh3.googleusercontent")[1] && (e.sources.pt[s].src = e.sources.pt[s].src.split("&expire=")[0])
            } catch (e) {}
            l[e.sources.pt[s].quality] || (a.push(e.sources.pt[s]), l[e.sources.pt[s].quality] = !0)
        }
    for (var s = 0; s < a.length; s++) r[a[s].quality] = !0;
    if (a.length || (i = "480p", a = e.sources.vip, r["480p"] = !0), r["480p"])
        for (var s = 0; s < a.length; s++)
            if ("480p" == a[s].quality) {
                "googlevideo" == a[s].src.split(".")[1] && (i = "480p");
                break
            }
    a.sort(function(e, t) {
        return parseInt(e.quality) < parseInt(t.quality) ? -1 : parseInt(e.quality) > parseInt(t.quality) ? 1 : 0
    }), player.cache_.sources = a;
    if (!LoginSuccess && (656 == film.id || 5076 == film.id)) return !0, player.video.pause(), player.el_.classList.add("player-blocked"), player.el_.classList.add("player-error"), player.el_.classList.remove("player-waiting"), void(player.error.message.innerHTML = "CLIPANIME TẠM NGƯNG CHIẾU PHIM NÀY");
    player.el_.classList.remove("player-blocked");
    var c = !1;
    if (e.sources.hls && playHLS(player, e, a) && (c = !0), !c) {
        for (var s = 0; s < a.length; s++) a[s].quality == i && (n = !0, a[s].default = !0, player.video.src = a[s].src), player.createQualityItem(a[s]);
        if (player.board.quality.classList.remove("hidden"), !a.length) return player.el_.classList.add("player-paused"), player.el_.classList.add("player-error"), player.el_.classList.remove("player-waiting"), void(player.error.message.innerHTML = "Tập phim đang gặp lỗi, hãy báo cho ClipAnime sửa lại nhé!");
        n || (player.video.src = a[0].src, player.cache_.quality = a[0].quality, player.board.quality[a[0].quality].classList.add("active"))
    }
    player.el_.classList.remove("player-waiting");
    var d = store.get("current-time-" + e.id);
    player.video.addEventListener("loadedmetadata", function t() {
        if (player.video.removeEventListener("loadedmetadata", t, !1), d > 60 && d + 120 < player.video.duration) try {
            player.video.currentTime = store.get("current-time-" + e.id)
        } catch (e) {}
    }), _GLOBAL._IS_VIP || !e.meta.ads.preroll.data.length || t.noads ? (player.video.load(), player.video.play()) : (player.video.pause(), player.options_.ads = {
        preroll: e.meta.ads.preroll.data,
        midroll: e.meta.ads.midroll.data
    }, player.midpoint = !1, player.options_.ads.midroll.length && (e.midroll ? player.options_.ads.midroll[0].time = e.midroll : player.options_.ads.midroll[0].time = 600, player.options_.ads.midroll[1] && (e.midroll2 ? player.options_.ads.midroll[1].time = e.midroll2 : player.options_.ads.midroll[1].time = 1200)), getAds(e.meta.ads.preroll.data[0].url, "preroll", 0, {
        backup: e.meta.ads.preroll.data[0].backup
    }))
}

function setM3u8Data(e) {
    var t = [],
        a = 0;
    return e ? (e.hdp && (t[a] = {
        url: encodeString(e.hdp, 69),
        play: !1
    }, a++), e.hpl && (t[a] = {
        url: encodeString(e.hpl, 69),
        play: !1
    }, a++), e.sd && (t[a] = {
        url: encodeString(e.sd, 69),
        play: !1
    }), t) : t
}

function playVPAID(e, t, a, i) {
    function o(e, o) {
        function l(e, t) {
            o.initAd(player.el_.offsetWidth, player.el_.offsetHeight, "normal", -1, {
                AdParameters: player.tracker.creative.adParameters
            }, {})
        }

        function s() {
            r = !0, player.ads = !0, player.completed = !1, player.el_.classList.remove("player-waiting"), player.loadingText.innerText = "", player.happy || player.video.pause(), "preroll" != t && player.removeMidpoint(a), player.options_.ads[t][a].play = !0, player.vast.container.classList.remove("hidden"), player.vast.video.classList.remove("hidden"), i.facebook && setTimeout(function() {
                player.vast.container.info.classList.add("hidden")
            }, 2e3), console.log("impression"), player.tracker.load(), o.startAd(), o.setAdVolume(.4), i.facebook || (ismobile.any ? (o.setAdVolume(0), player.vast.muted = !0, player.vast.video.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute") : (player.vast.video.muted = !1, player.vast.container.control.mute.icon.className = "icon-volume-up")), n || (console.log("Avoid duplicate vpaid on init"), f()), n = !0
        }

        function c() {
            player.started = !0, console.log("start"), console.log(player.tracker);
            try {
                player.tracker.trackURLs(player.tracker.creative.trackingEvents.start)
            } catch (e) {}
            player.vast.container.control.play.icon.className = "icon-pause", player.el_.classList.remove("player-waiting"), player.loadingText.innerText = ""
        }

        function d() {
            console.log("call Stop Ad"), o._destroy(), player.adUnit = null, player.vast.stopped = !0, clearInterval(player.vast.vpaidInterval), removeAds(t, a, i)
        }

        function p() {
            player.vast.stopped || (player.vast.paused = !0, player.vast.container.control.play.icon.className = "icon-play")
        }

        function u() {
            player.vast.paused = !1, player.vast.container.control.play.icon.className = "icon-pause", player.hideLoadingSpinner()
        }

        function v() {
            console.log("onFirstQuartile");
            try {
                player.tracker.trackURLs(player.tracker.creative.trackingEvents.firstQuartile)
            } catch (e) {}
        }

        function m() {
            console.log("onMidpoint");
            try {
                player.tracker.trackURLs(player.tracker.creative.trackingEvents.midpoint)
            } catch (e) {}
        }

        function y() {
            console.log("onThirdQuartile");
            try {
                player.tracker.trackURLs(player.tracker.creative.trackingEvents.thirdQuartile)
            } catch (e) {}
        }

        function g() {
            console.log("onComplete"), player.completed = !0, player.tracker.complete()
        }

        function h(e) {
            e.playerHandles && window.open(e.url, "_blank"), player.tracker.click()
        }

        function f() {
            var e = player.vast.skip,
                t = 0;
            player.duration = o._creative.getAdDuration(), (!player.duration || player.duration > 30) && (player.duration = 15), setTimeout(function() {
                player.duration < o._creative.getAdRemainingTime() && (player.duration = o._creative.getAdRemainingTime())
            }, 900), player.vast.vpaidInterval = setInterval(function() {
                var a = o._creative.getAdRemainingTime(),
                    i = player.duration - a,
                    n = Math.ceil(e - i);
                player.vast.countdown = n, t++, n > 0 ? (player.vast.container.skip.style.cursor = "not-allowed", player.vast.container.skip.innerHTML = n) : (player.vast.container.skip.style.cursor = "", player.vast.container.skip.innerHTML = "tắt", player.vast.container.noskip.classList.add("hidden"), player.happy || ismobile.any || player.vast.container.control.happy.click(), player.vast.skip = 0), player.vast.container.progress.loaded.style.width = i / player.duration * 100 + "%", (a <= 0 || t > player.duration) && (console.log("clearInterval vpaid"), clearInterval(player.vast.vpaidInterval))
            }, 1e3), console.log("PLAYER.VAST.VPAID_INTERVAL"), console.log(player.vast.vpaidInterval)
        }
        if (e) {
            player.adUnit = null, player.vast.stopped = !0;
            try {
                DMVAST.util.track(player.vast.ad.errorURLTemplates, {
                    ERRORCODE: 405
                })
            } catch (e) {}
            return void removeAds(t, a, i)
        }
        player.vast.container.classList.remove("hidden"), player.vast.container.vpaid.classList.remove("hidden"), player.vast.stopped = !1, player.adUnit = o, o.subscribe("AdLoaded", s), o.subscribe("AdStarted", c), o.subscribe("AdStopped", d), o.subscribe("AdSkipped", d), o.subscribe("AdPaused", p), o.subscribe("AdPlaying", u), o.subscribe("AdVideoFirstQuartile", v), o.subscribe("AdVideoMidpoint", m), o.subscribe("AdVideoThirdQuartile", y), o.subscribe("AdVideoComplete", g), o.subscribe("AdClickThru", h), o.handshakeVersion("2.0", l), player.vast.container.control.play.onclick = function() {
            if (console.log("play/pause vpaid"), player.init && player.vast.video.paused) return o.pauseAd(), void o.resumeAd();
            player.vast.paused ? (o.resumeAd(), player.vast.paused = !1) : (o.pauseAd(), player.vast.paused = !0)
        }, player.vast.container.control.mute.onclick = function() {
            player.vast.muted ? (o.setAdVolume(.4, function() {}), player.vast.muted = !1, player.vast.video.muted = !1, player.vast.container.control.mute.icon.className = "icon-volume-up") : (o.setAdVolume(0, function() {}), player.vast.muted = !0, player.vast.video.muted = !0, player.vast.container.control.mute.icon.className = "icon-volume-mute")
        }, player.vast.container.skip.onclick = function(e) {
            if (e.stopPropagation(), e.preventDefault(), !(player.vast.countdown > 0 || void 0 == player.vast.countdown)) {
                if (!ismobile.any) return void player.vast.container.control.happy.click();
                o.skipAd(), player.tracker.skip()
            }
        }
    }
    var n = !1,
        r = !1;
    player.ads = !0, player.adsType = t, player.vast.countdown = void 0, player.vast.skip = player.options_.ads[t][a].skip + 0, player.vast.completed = !1, ismobile.any || (player.vast.skip = 8), i || (i = {});
    try {
        clearInterval(player.vast.vpaidInterval)
    } catch (e) {}
    if (player.el_.classList.add("player-waiting"), player.loadingText.innerText = "Đang tải quảng cáo", player.vast.paused = !1, player.happy || player.video.pause(), player.ios.fullscreen) try {
        player.video.webkitExitFullscreen()
    } catch (e) {}
    ismobile.any && player.isFullscreen() && player.exitFullscreen(), player.vast.video.classList.remove("hidden"), player.vast.container.classList.remove("hidden"), player.vast.container.vpaid.classList.remove("hidden"), player.vast.container.control.play.icon.className = "icon-pause", player.vast.container.skip.style.display = "", player.vast.container.noskip.classList.remove("hidden"), player.vast.container.info.classList.remove("hidden"), player.vast.container.info.innerText = "midroll" != t ? "Quảng cáo đầu phim " + (a + 1) + "/" + player.episode.meta.ads[t].data.length : "Quảng cáo giữa phim", new VPAIDHTML5Client(player.vast.container, player.vast.video, {}, {
        timeout: 3e3,
        element: ".player-vast-vpaid"
    }).loadAdUnit(e, o);
    var l = setTimeout(function() {
        player.vast.container.skip.classList.remove("hidden")
    }, 8e3);
    player.vast.timeout = setTimeout(function() {
        r || (console.log("Ad timeout"), clearTimeout(l), removeAds(t, a, i))
    }, 5e3)
}

function removeAds(e, t, a) {
    var i = player.episode.meta.ads;
    if (console.log("removeAds"), player.ads = !1, player.happy = !1, player.el_.classList.remove("player-happy"), player.vast.video.style.left = "", player.vast.container.style.left = "", a || (a = {}), player.adsType && e != player.adsType) return void console.log("do not remove");
    try {
        player.vast.video.removeEventListener("loadstart", player.vast.loadstart, !1), player.vast.video.removeEventListener("timeupdate", player.vast.timeupdate, !1), player.vast.video.removeEventListener("ended", player.vast.ended, !1)
    } catch (e) {}
    player.vast.skipTimeout && clearTimeout(player.vast.skipTimeout), player.vast.vpaidInterval && clearInterval(player.vast.vpaidInterval), player.vast.timeout && clearTimeout(player.vast.timeout);
    try {
        player.vast.video.style = "", player.vast.video.pause(), player.vast.video.src = "", player.vast.video.removeAttribute("src")
    } catch (e) {}
    player.vast.video.classList.add("hidden"), player.vast.container.classList.add("hidden"), player.vast.container.blocker.classList.add("hidden"), player.vast.container.vpaid.classList.add("hidden"), player.vast.container.progress.loaded.style.width = "";
    for (var o = 0; o < player.vast.container.vpaid.children.length; o++) player.vast.container.vpaid.children[o].classList.add("hidden");
    try {
        if (a.backup && !player.options_.ads[e][t].play) return void getAds(i[e].data[t].backup, e, t)
    } catch (e) {}
    if ("midroll" != e) {
        if (t + 1 < i[e].data.length) return void getAds(i[e].data[t + 1].url, e, t + 1, a);
        ismobile.any && player.init && player.el_.classList.add("player-paused")
    }
    player.adsType = null, player.el_.classList.remove("player-waiting"), player.video.play()
}

function stopAds() {
    player.ads = !1, player.happy = !1, player.el_.classList.remove("player-happy"), player.vast.video.style.left = "", player.vast.container.style.left = "";
    for (var e = 0; e < player.options_.ads.preroll.length; e++) player.options_.ads.preroll[e].play = !1, player.options_.ads.preroll[e].get_backup = !1;
    for (var e = 0; e < player.options_.ads.midroll.length; e++) player.options_.ads.midroll[e].play = !1, player.options_.ads.midroll[e].get_backup = !1;
    try {
        player.vast.video.removeEventListener("loadstart", player.vast.loadstart, !1), player.vast.video.removeEventListener("timeupdate", player.vast.timeupdate, !1), player.vast.video.removeEventListener("ended", player.vast.ended, !1)
    } catch (e) {}
    player.vast.skipTimeout && clearTimeout(player.vast.skipTimeout), player.vast.vpaidInterval && clearInterval(player.vast.vpaidInterval), player.vast.timeout && clearTimeout(player.vast.timeout);
    try {
        player.vast.video.pause(), player.vast.video.src = "", player.vast.video.removeAttribute("src")
    } catch (e) {}
    if (player.vast.container.classList.add("hidden"), player.vast.video.classList.add("hidden"), player.vast.container.blocker.classList.add("hidden"), player.vast.container.vpaid.classList.add("hidden"), player.vast.container.progress.loaded.style.width = "", player.adsType = null, ismobile.any && player.init && player.el_.classList.add("player-paused"), player.el_.classList.remove("player-waiting"), player.video.play(), player.options_.ads.midroll)
        for (var e = 0; e < player.options_.ads.midroll.length; e++) player.removeMidpoint(e)
}

function updatePlayerSetting(e) {
    var t = 1,
        a = document.querySelectorAll(".setting-quality-item"),
        i = document.querySelectorAll(".setting-speed-item");
    if ("" != player.video.src) {
        player.video.pause();
        try {
            player.video.removeAttribute("src")
        } catch (e) {}
    }
    if (cachedError[e.id] = null, cachedErrorPT[e.id] = null, player.hls) {
        try {
            player.hls.destroy()
        } catch (e) {}
        player.hls = null
    }
    player.vast && stopAds(), player.cache_ = {};
    try {
        store.get("volume") ? t = store.get("volume") : (t = 1, store.set("volume", 1))
    } catch (e) {}
    player.video.volume = t, player.controlBar.volumeControl.volumeLevel.volumeHolder.update(void 0, t), player.controlBar.progressControl.progressHolder.loadProgress.style.width = 0, player.controlBar.progressControl.progressHolder.playProgress.style.width = 0, player.board.quality.classList.add("hidden");
    for (var o = 0; o < a.length; o++) removeElement(a[o]);
    for (var o = 0; o < i.length; o++) 2 != o ? i[o].classList.remove("active") : (i[o].classList.add("active"), player.board.speed.active = i[o]);
    e.meta.previous ? player.controlBar.prevControl.classList.remove("disabled") : player.controlBar.prevControl.classList.add("disabled"), e.meta.next ? player.controlBar.nextControl.classList.remove("disabled") : player.controlBar.nextControl.classList.add("disabled"), player.board.selector.button.classList.remove("disabled"), film.type ? player.board.selector.classList.add("hidden") : e.name >= 0 ? player.board.selector.input.value = e.name : player.board.selector.input.value = ""
}! function e(t, a, i) {
    function o(r, l) {
        if (!a[r]) {
            if (!t[r]) {
                var s = "function" == typeof require && require;
                if (!l && s) return s(r, !0);
                if (n) return n(r, !0);
                var c = new Error("Cannot find module '" + r + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = a[r] = {
                exports: {}
            };
            t[r][0].call(d.exports, function(e) {
                var a = t[r][1][e];
                return o(a || e)
            }, d, d.exports, e, t, a, i)
        }
        return a[r].exports
    }
    for (var n = "function" == typeof require && require, r = 0; r < i.length; r++) o(i[r]);
    return o
}({
    1: [function(e, t, a) {
        "use strict";
        var i = e("../main");
        "function" == typeof define && define.amd ? define(i) : (window.PerfectScrollbar = i, void 0 === window.Ps && (window.Ps = i))
    }, {
        "../main": 7
    }],
    2: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            var a = e.className.split(" ");
            a.indexOf(t) < 0 && a.push(t), e.className = a.join(" ")
        }

        function o(e, t) {
            var a = e.className.split(" "),
                i = a.indexOf(t);
            i >= 0 && a.splice(i, 1), e.className = a.join(" ")
        }
        a.add = function(e, t) {
            e.classList ? e.classList.add(t) : i(e, t)
        }, a.remove = function(e, t) {
            e.classList ? e.classList.remove(t) : o(e, t)
        }, a.list = function(e) {
            return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
        }
    }, {}],
    3: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            return window.getComputedStyle(e)[t]
        }

        function o(e, t, a) {
            return "number" == typeof a && (a = a.toString() + "px"), e.style[t] = a, e
        }

        function n(e, t) {
            for (var a in t) {
                var i = t[a];
                "number" == typeof i && (i = i.toString() + "px"), e.style[a] = i
            }
            return e
        }
        var r = {};
        r.e = function(e, t) {
            var a = document.createElement(e);
            return a.className = t, a
        }, r.appendTo = function(e, t) {
            return t.appendChild(e), e
        }, r.css = function(e, t, a) {
            return "object" == typeof t ? n(e, t) : void 0 === a ? i(e, t) : o(e, t, a)
        }, r.matches = function(e, t) {
            return void 0 !== e.matches ? e.matches(t) : void 0 !== e.matchesSelector ? e.matchesSelector(t) : void 0 !== e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : void 0 !== e.mozMatchesSelector ? e.mozMatchesSelector(t) : void 0 !== e.msMatchesSelector ? e.msMatchesSelector(t) : void 0
        }, r.remove = function(e) {
            void 0 !== e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e)
        }, r.queryChildren = function(e, t) {
            return Array.prototype.filter.call(e.childNodes, function(e) {
                return r.matches(e, t)
            })
        }, t.exports = r
    }, {}],
    4: [function(e, t, a) {
        "use strict";
        var i = function(e) {
            this.element = e, this.events = {}
        };
        i.prototype.bind = function(e, t) {
            void 0 === this.events[e] && (this.events[e] = []), this.events[e].push(t), this.element.addEventListener(e, t, !1)
        }, i.prototype.unbind = function(e, t) {
            var a = void 0 !== t;
            this.events[e] = this.events[e].filter(function(i) {
                return !(!a || i === t) || (this.element.removeEventListener(e, i, !1), !1)
            }, this)
        }, i.prototype.unbindAll = function() {
            for (var e in this.events) this.unbind(e)
        };
        var o = function() {
            this.eventElements = []
        };
        o.prototype.eventElement = function(e) {
            var t = this.eventElements.filter(function(t) {
                return t.element === e
            })[0];
            return void 0 === t && (t = new i(e), this.eventElements.push(t)), t
        }, o.prototype.bind = function(e, t, a) {
            this.eventElement(e).bind(t, a)
        }, o.prototype.unbind = function(e, t, a) {
            this.eventElement(e).unbind(t, a)
        }, o.prototype.unbindAll = function() {
            for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
        }, o.prototype.once = function(e, t, a) {
            var i = this.eventElement(e),
                o = function(e) {
                    i.unbind(t, o), a(e)
                };
            i.bind(t, o)
        }, t.exports = o
    }, {}],
    5: [function(e, t, a) {
        "use strict";
        t.exports = function() {
            function e() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }
            return function() {
                return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e()
            }
        }()
    }, {}],
    6: [function(e, t, a) {
        "use strict";
        var i = e("./class"),
            o = e("./dom"),
            n = a.toInt = function(e) {
                return parseInt(e, 10) || 0
            },
            r = a.clone = function(e) {
                if (e) {
                    if (e.constructor === Array) return e.map(r);
                    if ("object" == typeof e) {
                        var t = {};
                        for (var a in e) t[a] = r(e[a]);
                        return t
                    }
                    return e
                }
                return null
            };
        a.extend = function(e, t) {
            var a = r(e);
            for (var i in t) a[i] = r(t[i]);
            return a
        }, a.isEditable = function(e) {
            return o.matches(e, "input,[contenteditable]") || o.matches(e, "select,[contenteditable]") || o.matches(e, "textarea,[contenteditable]") || o.matches(e, "button,[contenteditable]")
        }, a.removePsClasses = function(e) {
            for (var t = i.list(e), a = 0; a < t.length; a++) {
                var o = t[a];
                0 === o.indexOf("ps-") && i.remove(e, o)
            }
        }, a.outerWidth = function(e) {
            return n(o.css(e, "width")) + n(o.css(e, "paddingLeft")) + n(o.css(e, "paddingRight")) + n(o.css(e, "borderLeftWidth")) + n(o.css(e, "borderRightWidth"))
        }, a.startScrolling = function(e, t) {
            i.add(e, "ps-in-scrolling"), void 0 !== t ? i.add(e, "ps-" + t) : (i.add(e, "ps-x"), i.add(e, "ps-y"))
        }, a.stopScrolling = function(e, t) {
            i.remove(e, "ps-in-scrolling"), void 0 !== t ? i.remove(e, "ps-" + t) : (i.remove(e, "ps-x"), i.remove(e, "ps-y"))
        }, a.env = {
            isWebKit: "WebkitAppearance" in document.documentElement.style,
            supportsTouch: "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
            supportsIePointer: null !== window.navigator.msMaxTouchPoints
        }
    }, {
        "./class": 2,
        "./dom": 3
    }],
    7: [function(e, t, a) {
        "use strict";
        var i = e("./plugin/destroy"),
            o = e("./plugin/initialize"),
            n = e("./plugin/update");
        t.exports = {
            initialize: o,
            update: n,
            destroy: i
        }
    }, {
        "./plugin/destroy": 9,
        "./plugin/initialize": 17,
        "./plugin/update": 21
    }],
    8: [function(e, t, a) {
        "use strict";
        t.exports = {
            handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
            maxScrollbarLength: null,
            minScrollbarLength: null,
            scrollXMarginOffset: 0,
            scrollYMarginOffset: 0,
            suppressScrollX: !1,
            suppressScrollY: !1,
            swipePropagation: !0,
            useBothWheelAxes: !1,
            wheelPropagation: !1,
            wheelSpeed: 1,
            theme: "default"
        }
    }, {}],
    9: [function(e, t, a) {
        "use strict";
        var i = e("../lib/helper"),
            o = e("../lib/dom"),
            n = e("./instances");
        t.exports = function(e) {
            var t = n.get(e);
            t && (t.event.unbindAll(), o.remove(t.scrollbarX), o.remove(t.scrollbarY), o.remove(t.scrollbarXRail), o.remove(t.scrollbarYRail), i.removePsClasses(e), n.remove(e))
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18
    }],
    10: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            function a(e) {
                return e.getBoundingClientRect()
            }
            var i = function(e) {
                e.stopPropagation()
            };
            t.event.bind(t.scrollbarY, "click", i), t.event.bind(t.scrollbarYRail, "click", function(i) {
                var o = i.pageY - window.pageYOffset - a(t.scrollbarYRail).top,
                    l = o > t.scrollbarYTop ? 1 : -1;
                r(e, "top", e.scrollTop + l * t.containerHeight), n(e), i.stopPropagation()
            }), t.event.bind(t.scrollbarX, "click", i), t.event.bind(t.scrollbarXRail, "click", function(i) {
                var o = i.pageX - window.pageXOffset - a(t.scrollbarXRail).left,
                    l = o > t.scrollbarXLeft ? 1 : -1;
                r(e, "left", e.scrollLeft + l * t.containerWidth), n(e), i.stopPropagation()
            })
        }
        var o = e("../instances"),
            n = e("../update-geometry"),
            r = e("../update-scroll");
        t.exports = function(e) {
            i(e, o.get(e))
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    11: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            function a(a) {
                var o = i + a * t.railXRatio,
                    r = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                t.scrollbarXLeft = o < 0 ? 0 : o > r ? r : o;
                var l = n.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                c(e, "left", l)
            }
            var i = null,
                o = null,
                l = function(t) {
                    a(t.pageX - o), s(e), t.stopPropagation(), t.preventDefault()
                },
                d = function() {
                    n.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", l)
                };
            t.event.bind(t.scrollbarX, "mousedown", function(a) {
                o = a.pageX, i = n.toInt(r.css(t.scrollbarX, "left")) * t.railXRatio, n.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", l), t.event.once(t.ownerDocument, "mouseup", d), a.stopPropagation(), a.preventDefault()
            })
        }

        function o(e, t) {
            function a(a) {
                var o = i + a * t.railYRatio,
                    r = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                t.scrollbarYTop = o < 0 ? 0 : o > r ? r : o;
                var l = n.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                c(e, "top", l)
            }
            var i = null,
                o = null,
                l = function(t) {
                    a(t.pageY - o), s(e), t.stopPropagation(), t.preventDefault()
                },
                d = function() {
                    n.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", l)
                };
            t.event.bind(t.scrollbarY, "mousedown", function(a) {
                o = a.pageY, i = n.toInt(r.css(t.scrollbarY, "top")) * t.railYRatio, n.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", l), t.event.once(t.ownerDocument, "mouseup", d), a.stopPropagation(), a.preventDefault()
            })
        }
        var n = e("../../lib/helper"),
            r = e("../../lib/dom"),
            l = e("../instances"),
            s = e("../update-geometry"),
            c = e("../update-scroll");
        t.exports = function(e) {
            var t = l.get(e);
            i(e, t), o(e, t)
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    12: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            function a(a, i) {
                var o = e.scrollTop;
                if (0 === a) {
                    if (!t.scrollbarYActive) return !1;
                    if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                }
                var n = e.scrollLeft;
                if (0 === i) {
                    if (!t.scrollbarXActive) return !1;
                    if (0 === n && a < 0 || n >= t.contentWidth - t.containerWidth && a > 0) return !t.settings.wheelPropagation
                }
                return !0
            }
            var i = !1;
            t.event.bind(e, "mouseenter", function() {
                i = !0
            }), t.event.bind(e, "mouseleave", function() {
                i = !1
            });
            var r = !1;
            t.event.bind(t.ownerDocument, "keydown", function(c) {
                if (!(c.isDefaultPrevented && c.isDefaultPrevented() || c.defaultPrevented)) {
                    var d = n.matches(t.scrollbarX, ":focus") || n.matches(t.scrollbarY, ":focus");
                    if (i || d) {
                        var p = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (p) {
                            if ("IFRAME" === p.tagName) p = p.contentDocument.activeElement;
                            else
                                for (; p.shadowRoot;) p = p.shadowRoot.activeElement;
                            if (o.isEditable(p)) return
                        }
                        var u = 0,
                            v = 0;
                        switch (c.which) {
                            case 37:
                                u = c.metaKey ? -t.contentWidth : c.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                v = c.metaKey ? t.contentHeight : c.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                u = c.metaKey ? t.contentWidth : c.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                v = c.metaKey ? -t.contentHeight : c.altKey ? -t.containerHeight : -30;
                                break;
                            case 33:
                                v = 90;
                                break;
                            case 32:
                                v = c.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                v = -90;
                                break;
                            case 35:
                                v = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                break;
                            case 36:
                                v = c.ctrlKey ? e.scrollTop : t.containerHeight;
                                break;
                            default:
                                return
                        }
                        s(e, "top", e.scrollTop - v), s(e, "left", e.scrollLeft + u), l(e), (r = a(u, v)) && c.preventDefault()
                    }
                }
            })
        }
        var o = e("../../lib/helper"),
            n = e("../../lib/dom"),
            r = e("../instances"),
            l = e("../update-geometry"),
            s = e("../update-scroll");
        t.exports = function(e) {
            i(e, r.get(e))
        }
    }, {
        "../../lib/dom": 3,
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    13: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            function a(a, i) {
                var o = e.scrollTop;
                if (0 === a) {
                    if (!t.scrollbarYActive) return !1;
                    if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                }
                var n = e.scrollLeft;
                if (0 === i) {
                    if (!t.scrollbarXActive) return !1;
                    if (0 === n && a < 0 || n >= t.contentWidth - t.containerWidth && a > 0) return !t.settings.wheelPropagation
                }
                return !0
            }

            function i(e) {
                var t = e.deltaX,
                    a = -1 * e.deltaY;
                return void 0 !== t && void 0 !== a || (t = -1 * e.wheelDeltaX / 6, a = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, a *= 10), t !== t && a !== a && (t = 0, a = e.wheelDelta), e.shiftKey ? [-a, -t] : [t, a]
            }

            function o(t, a) {
                var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (i) {
                    if (!window.getComputedStyle(i).overflow.match(/(scroll|auto)/)) return !1;
                    var o = i.scrollHeight - i.clientHeight;
                    if (o > 0 && !(0 === i.scrollTop && a > 0 || i.scrollTop === o && a < 0)) return !0;
                    var n = i.scrollLeft - i.clientWidth;
                    if (n > 0 && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === n && t > 0)) return !0
                }
                return !1
            }

            function l(l) {
                var c = i(l),
                    d = c[0],
                    p = c[1];
                o(d, p) || (s = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (p ? r(e, "top", e.scrollTop - p * t.settings.wheelSpeed) : r(e, "top", e.scrollTop + d * t.settings.wheelSpeed), s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (d ? r(e, "left", e.scrollLeft + d * t.settings.wheelSpeed) : r(e, "left", e.scrollLeft - p * t.settings.wheelSpeed), s = !0) : (r(e, "top", e.scrollTop - p * t.settings.wheelSpeed), r(e, "left", e.scrollLeft + d * t.settings.wheelSpeed)), n(e), (s = s || a(d, p)) && (l.stopPropagation(), l.preventDefault()))
            }
            var s = !1;
            void 0 !== window.onwheel ? t.event.bind(e, "wheel", l) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", l)
        }
        var o = e("../instances"),
            n = e("../update-geometry"),
            r = e("../update-scroll");
        t.exports = function(e) {
            i(e, o.get(e))
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    14: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            t.event.bind(e, "scroll", function() {
                n(e)
            })
        }
        var o = e("../instances"),
            n = e("../update-geometry");
        t.exports = function(e) {
            i(e, o.get(e))
        }
    }, {
        "../instances": 18,
        "../update-geometry": 19
    }],
    15: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            function a() {
                var e = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "";
                return 0 === e.toString().length ? null : e.getRangeAt(0).commonAncestorContainer
            }

            function i() {
                c || (c = setInterval(function() {
                    return n.get(e) ? (l(e, "top", e.scrollTop + d.top), l(e, "left", e.scrollLeft + d.left), void r(e)) : void clearInterval(c)
                }, 50))
            }

            function s() {
                c && (clearInterval(c), c = null), o.stopScrolling(e)
            }
            var c = null,
                d = {
                    top: 0,
                    left: 0
                },
                p = !1;
            t.event.bind(t.ownerDocument, "selectionchange", function() {
                e.contains(a()) ? p = !0 : (p = !1, s())
            }), t.event.bind(window, "mouseup", function() {
                p && (p = !1, s())
            }), t.event.bind(window, "keyup", function() {
                p && (p = !1, s())
            }), t.event.bind(window, "mousemove", function(t) {
                if (p) {
                    var a = {
                            x: t.pageX,
                            y: t.pageY
                        },
                        n = {
                            left: e.offsetLeft,
                            right: e.offsetLeft + e.offsetWidth,
                            top: e.offsetTop,
                            bottom: e.offsetTop + e.offsetHeight
                        };
                    a.x < n.left + 3 ? (d.left = -5, o.startScrolling(e, "x")) : a.x > n.right - 3 ? (d.left = 5, o.startScrolling(e, "x")) : d.left = 0, a.y < n.top + 3 ? (d.top = n.top + 3 - a.y < 5 ? -5 : -20, o.startScrolling(e, "y")) : a.y > n.bottom - 3 ? (d.top = a.y - n.bottom + 3 < 5 ? 5 : 20, o.startScrolling(e, "y")) : d.top = 0, 0 === d.top && 0 === d.left ? s() : i()
                }
            })
        }
        var o = e("../../lib/helper"),
            n = e("../instances"),
            r = e("../update-geometry"),
            l = e("../update-scroll");
        t.exports = function(e) {
            i(e, n.get(e))
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    16: [function(e, t, a) {
        "use strict";

        function i(e, t, a, i) {
            function o(a, i) {
                var o = e.scrollTop,
                    n = e.scrollLeft,
                    r = Math.abs(a),
                    l = Math.abs(i);
                if (l > r) {
                    if (i < 0 && o === t.contentHeight - t.containerHeight || i > 0 && 0 === o) return !t.settings.swipePropagation
                } else if (r > l && (a < 0 && n === t.contentWidth - t.containerWidth || a > 0 && 0 === n)) return !t.settings.swipePropagation;
                return !0
            }

            function s(t, a) {
                l(e, "top", e.scrollTop - a), l(e, "left", e.scrollLeft - t), r(e)
            }

            function c() {
                L = !0
            }

            function d() {
                L = !1
            }

            function p(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            }

            function u(e) {
                return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
            }

            function v(e) {
                if (u(e)) {
                    T = !0;
                    var t = p(e);
                    g.pageX = t.pageX, g.pageY = t.pageY, h = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                }
            }

            function m(e) {
                if (!T && t.settings.swipePropagation && v(e), !L && T && u(e)) {
                    var a = p(e),
                        i = {
                            pageX: a.pageX,
                            pageY: a.pageY
                        },
                        n = i.pageX - g.pageX,
                        r = i.pageY - g.pageY;
                    s(n, r), g = i;
                    var l = (new Date).getTime(),
                        c = l - h;
                    c > 0 && (f.x = n / c, f.y = r / c, h = l), o(n, r) && (e.stopPropagation(), e.preventDefault())
                }
            }

            function y() {
                !L && T && (T = !1, clearInterval(b), b = setInterval(function() {
                    return n.get(e) && (f.x || f.y) ? Math.abs(f.x) < .01 && Math.abs(f.y) < .01 ? void clearInterval(b) : (s(30 * f.x, 30 * f.y), f.x *= .8, void(f.y *= .8)) : void clearInterval(b)
                }, 10))
            }
            var g = {},
                h = 0,
                f = {},
                b = null,
                L = !1,
                T = !1;
            a ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", d), t.event.bind(e, "touchstart", v), t.event.bind(e, "touchmove", m), t.event.bind(e, "touchend", y)) : i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", d), t.event.bind(e, "pointerdown", v), t.event.bind(e, "pointermove", m), t.event.bind(e, "pointerup", y)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", d), t.event.bind(e, "MSPointerDown", v), t.event.bind(e, "MSPointerMove", m), t.event.bind(e, "MSPointerUp", y)))
        }
        var o = e("../../lib/helper"),
            n = e("../instances"),
            r = e("../update-geometry"),
            l = e("../update-scroll");
        t.exports = function(e) {
            if (o.env.supportsTouch || o.env.supportsIePointer) {
                i(e, n.get(e), o.env.supportsTouch, o.env.supportsIePointer)
            }
        }
    }, {
        "../../lib/helper": 6,
        "../instances": 18,
        "../update-geometry": 19,
        "../update-scroll": 20
    }],
    17: [function(e, t, a) {
        "use strict";
        var i = e("../lib/helper"),
            o = e("../lib/class"),
            n = e("./instances"),
            r = e("./update-geometry"),
            l = {
                "click-rail": e("./handler/click-rail"),
                "drag-scrollbar": e("./handler/drag-scrollbar"),
                keyboard: e("./handler/keyboard"),
                wheel: e("./handler/mouse-wheel"),
                touch: e("./handler/touch"),
                selection: e("./handler/selection")
            },
            s = e("./handler/native-scroll");
        t.exports = function(e, t) {
            t = "object" == typeof t ? t : {}, o.add(e, "ps-container");
            var a = n.add(e);
            a.settings = i.extend(a.settings, t), o.add(e, "ps-theme-" + a.settings.theme), a.settings.handlers.forEach(function(t) {
                l[t](e)
            }), s(e), r(e)
        }
    }, {
        "../lib/class": 2,
        "../lib/helper": 6,
        "./handler/click-rail": 10,
        "./handler/drag-scrollbar": 11,
        "./handler/keyboard": 12,
        "./handler/mouse-wheel": 13,
        "./handler/native-scroll": 14,
        "./handler/selection": 15,
        "./handler/touch": 16,
        "./instances": 18,
        "./update-geometry": 19
    }],
    18: [function(e, t, a) {
        "use strict";

        function i(e) {
            function t() {
                s.add(e, "ps-focus")
            }

            function a() {
                s.remove(e, "ps-focus")
            }
            var i = this;
            i.settings = l.clone(c), i.containerWidth = null, i.containerHeight = null, i.contentWidth = null, i.contentHeight = null, i.isRtl = "rtl" === d.css(e, "direction"), i.isNegativeScroll = function() {
                var t = e.scrollLeft,
                    a = null;
                return e.scrollLeft = -1, a = e.scrollLeft < 0, e.scrollLeft = t, a
            }(), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, i.event = new p, i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = d.appendTo(d.e("div", "ps-scrollbar-x-rail"), e), i.scrollbarX = d.appendTo(d.e("div", "ps-scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", t), i.event.bind(i.scrollbarX, "blur", a), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = l.toInt(d.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : l.toInt(d.css(i.scrollbarXRail, "top")), i.railBorderXWidth = l.toInt(d.css(i.scrollbarXRail, "borderLeftWidth")) + l.toInt(d.css(i.scrollbarXRail, "borderRightWidth")), d.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = l.toInt(d.css(i.scrollbarXRail, "marginLeft")) + l.toInt(d.css(i.scrollbarXRail, "marginRight")), d.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = d.appendTo(d.e("div", "ps-scrollbar-y-rail"), e), i.scrollbarY = d.appendTo(d.e("div", "ps-scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", t), i.event.bind(i.scrollbarY, "blur", a), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = l.toInt(d.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : l.toInt(d.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? l.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = l.toInt(d.css(i.scrollbarYRail, "borderTopWidth")) + l.toInt(d.css(i.scrollbarYRail, "borderBottomWidth")), d.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = l.toInt(d.css(i.scrollbarYRail, "marginTop")) + l.toInt(d.css(i.scrollbarYRail, "marginBottom")), d.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
        }

        function o(e) {
            return e.getAttribute("data-ps-id")
        }

        function n(e, t) {
            e.setAttribute("data-ps-id", t)
        }

        function r(e) {
            e.removeAttribute("data-ps-id")
        }
        var l = e("../lib/helper"),
            s = e("../lib/class"),
            c = e("./default-setting"),
            d = e("../lib/dom"),
            p = e("../lib/event-manager"),
            u = e("../lib/guid"),
            v = {};
        a.add = function(e) {
            var t = u();
            return n(e, t), v[t] = new i(e), v[t]
        }, a.remove = function(e) {
            delete v[o(e)], r(e)
        }, a.get = function(e) {
            return v[o(e)]
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/event-manager": 4,
        "../lib/guid": 5,
        "../lib/helper": 6,
        "./default-setting": 8
    }],
    19: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            return e.settings.minScrollbarLength && (t = Math.max(t, e.settings.minScrollbarLength)), e.settings.maxScrollbarLength && (t = Math.min(t, e.settings.maxScrollbarLength)), t
        }

        function o(e, t) {
            var a = {
                width: t.railXWidth
            };
            t.isRtl ? a.left = t.negativeScrollAdjustment + e.scrollLeft + t.containerWidth - t.contentWidth : a.left = e.scrollLeft, t.isScrollbarXUsingBottom ? a.bottom = t.scrollbarXBottom - e.scrollTop : a.top = t.scrollbarXTop + e.scrollTop, l.css(t.scrollbarXRail, a);
            var i = {
                top: e.scrollTop,
                height: t.railYHeight
            };
            t.isScrollbarYUsingRight ? t.isRtl ? i.right = t.contentWidth - (t.negativeScrollAdjustment + e.scrollLeft) - t.scrollbarYRight - t.scrollbarYOuterWidth : i.right = t.scrollbarYRight - e.scrollLeft : t.isRtl ? i.left = t.negativeScrollAdjustment + e.scrollLeft + 2 * t.containerWidth - t.contentWidth - t.scrollbarYLeft - t.scrollbarYOuterWidth : i.left = t.scrollbarYLeft + e.scrollLeft, l.css(t.scrollbarYRail, i), l.css(t.scrollbarX, {
                left: t.scrollbarXLeft,
                width: t.scrollbarXWidth - t.railBorderXWidth
            }), l.css(t.scrollbarY, {
                top: t.scrollbarYTop,
                height: t.scrollbarYHeight - t.railBorderYWidth
            })
        }
        var n = e("../lib/helper"),
            r = e("../lib/class"),
            l = e("../lib/dom"),
            s = e("./instances"),
            c = e("./update-scroll");
        t.exports = function(e) {
            var t = s.get(e);
            t.containerWidth = e.clientWidth, t.containerHeight = e.clientHeight, t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight;
            var a;
            e.contains(t.scrollbarXRail) || (a = l.queryChildren(e, ".ps-scrollbar-x-rail"), a.length > 0 && a.forEach(function(e) {
                l.remove(e)
            }), l.appendTo(t.scrollbarXRail, e)), e.contains(t.scrollbarYRail) || (a = l.queryChildren(e, ".ps-scrollbar-y-rail"), a.length > 0 && a.forEach(function(e) {
                l.remove(e)
            }), l.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = i(t, n.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = n.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = i(t, n.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = n.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), o(e, t), t.scrollbarXActive ? r.add(e, "ps-active-x") : (r.remove(e, "ps-active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? r.add(e, "ps-active-y") : (r.remove(e, "ps-active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
        }
    }, {
        "../lib/class": 2,
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-scroll": 20
    }],
    20: [function(e, t, a) {
        "use strict";
        var i, o, n = e("./instances"),
            r = function(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !0), t
            };
        t.exports = function(e, t, a) {
            if (void 0 === e) throw "You must provide an element to the update-scroll function";
            if (void 0 === t) throw "You must provide an axis to the update-scroll function";
            if (void 0 === a) throw "You must provide a value to the update-scroll function";
            "top" === t && a <= 0 && (e.scrollTop = a = 0, e.dispatchEvent(r("ps-y-reach-start"))), "left" === t && a <= 0 && (e.scrollLeft = a = 0, e.dispatchEvent(r("ps-x-reach-start")));
            var l = n.get(e);
            "top" === t && a >= l.contentHeight - l.containerHeight && (a = l.contentHeight - l.containerHeight, a - e.scrollTop <= 1 ? a = e.scrollTop : e.scrollTop = a, e.dispatchEvent(r("ps-y-reach-end"))), "left" === t && a >= l.contentWidth - l.containerWidth && (a = l.contentWidth - l.containerWidth, a - e.scrollLeft <= 1 ? a = e.scrollLeft : e.scrollLeft = a, e.dispatchEvent(r("ps-x-reach-end"))), i || (i = e.scrollTop), o || (o = e.scrollLeft), "top" === t && a < i && e.dispatchEvent(r("ps-scroll-up")), "top" === t && a > i && e.dispatchEvent(r("ps-scroll-down")), "left" === t && a < o && e.dispatchEvent(r("ps-scroll-left")), "left" === t && a > o && e.dispatchEvent(r("ps-scroll-right")), "top" === t && (e.scrollTop = i = a, e.dispatchEvent(r("ps-scroll-y"))), "left" === t && (e.scrollLeft = o = a, e.dispatchEvent(r("ps-scroll-x")))
        }
    }, {
        "./instances": 18
    }],
    21: [function(e, t, a) {
        "use strict";
        var i = e("../lib/helper"),
            o = e("../lib/dom"),
            n = e("./instances"),
            r = e("./update-geometry"),
            l = e("./update-scroll");
        t.exports = function(e) {
            var t = n.get(e);
            t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, o.css(t.scrollbarXRail, "display", "block"), o.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(o.css(t.scrollbarXRail, "marginLeft")) + i.toInt(o.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(o.css(t.scrollbarYRail, "marginTop")) + i.toInt(o.css(t.scrollbarYRail, "marginBottom")), o.css(t.scrollbarXRail, "display", "none"), o.css(t.scrollbarYRail, "display", "none"), r(e), l(e, "top", e.scrollTop), l(e, "left", e.scrollLeft), o.css(t.scrollbarXRail, "display", ""), o.css(t.scrollbarYRail, "display", ""))
        }
    }, {
        "../lib/dom": 3,
        "../lib/helper": 6,
        "./instances": 18,
        "./update-geometry": 19,
        "./update-scroll": 20
    }]
}, {}, [1]),
function(e, t) {
    "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? module.exports = t() : e.store = t()
}(this, function() {
    var e, t = {},
        a = window,
        i = a.document,
        o = "localStorage",
        n = "script";
    if (t.disabled = !1, t.version = "1.3.19", t.set = function(e, t) {}, t.get = function(e, t) {}, t.has = function(e) {
            return void 0 !== t.get(e)
        }, t.remove = function(e) {}, t.clear = function() {}, t.transact = function(e, a, i) {
            null == i && (i = a, a = null), null == a && (a = {});
            var o = t.get(e, a);
            i(o), t.set(e, o)
        }, t.getAll = function() {}, t.forEach = function() {}, t.serialize = function(e) {
            return JSON.stringify(e)
        }, t.deserialize = function(e) {
            if ("string" == typeof e) try {
                return JSON.parse(e)
            } catch (t) {
                return e || void 0
            }
        }, function() {
            try {
                return o in a && a[o]
            } catch (e) {
                return !1
            }
        }()) e = a[o], t.set = function(a, i) {
        return void 0 === i ? t.remove(a) : (e.setItem(a, t.serialize(i)), i)
    }, t.get = function(a, i) {
        var o = t.deserialize(e.getItem(a));
        return void 0 === o ? i : o
    }, t.remove = function(t) {
        e.removeItem(t)
    }, t.clear = function() {
        e.clear()
    }, t.getAll = function() {
        var e = {};
        return t.forEach(function(t, a) {
            e[t] = a
        }), e
    }, t.forEach = function(a) {
        for (var i = 0; i < e.length; i++) {
            var o = e.key(i);
            a(o, t.get(o))
        }
    };
    else if (i.documentElement.addBehavior) {
        var r, l;
        try {
            l = new ActiveXObject("htmlfile"), l.open(), l.write("<" + n + ">document.w=window</" + n + '><iframe src="/favicon.ico"></iframe>'), l.close(), r = l.w.frames[0].document, e = r.createElement("div")
        } catch (t) {
            e = i.createElement("div"), r = i.body
        }
        var s = function(a) {
                return function() {
                    var i = Array.prototype.slice.call(arguments, 0);
                    i.unshift(e), r.appendChild(e), e.addBehavior("#default#userData"), e.load(o);
                    var n = a.apply(t, i);
                    return r.removeChild(e), n
                }
            },
            c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
            d = function(e) {
                return e.replace(/^d/, "___$&").replace(c, "___")
            };
        t.set = s(function(e, a, i) {
            return a = d(a), void 0 === i ? t.remove(a) : (e.setAttribute(a, t.serialize(i)), e.save(o), i)
        }), t.get = s(function(e, a, i) {
            a = d(a);
            var o = t.deserialize(e.getAttribute(a));
            return void 0 === o ? i : o
        }), t.remove = s(function(e, t) {
            t = d(t), e.removeAttribute(t), e.save(o)
        }), t.clear = s(function(e) {
            var t = e.XMLDocument.documentElement.attributes;
            for (e.load(o); t.length;) e.removeAttribute(t[0].name);
            e.save(o)
        }), t.getAll = function(e) {
            var a = {};
            return t.forEach(function(e, t) {
                a[e] = t
            }), a
        }, t.forEach = s(function(e, a) {
            for (var i, o = e.XMLDocument.documentElement.attributes, n = 0; i = o[n]; ++n) a(i.name, t.deserialize(e.getAttribute(i.name)))
        })
    }
    try {
        var p = "__storejs__";
        t.set(p, p), t.get(p) != p && (t.disabled = !0), t.remove(p)
    } catch (e) {
        t.disabled = !0
    }
    return t.enabled = !t.disabled, t
}),
function(e) {
    var t = /iPhone/i,
        a = /iPod/i,
        i = /iPad/i,
        o = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
        n = /Android/i,
        r = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        l = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        s = /IEMobile/i,
        c = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
        d = /BlackBerry/i,
        p = /BB10/i,
        u = /Opera Mini/i,
        v = /Safari(?=.*)/i,
        m = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        y = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
        g = /UC.*Browser|UCWEB/i,
        h = /AppleTV/i,
        f = /(GoogleTV|CrKey)/i,
        b = /(SmartTV|SMART-TV|Tizen(.*TV))/i,
        L = /(Sony(.*TV)|TV(.*Sony))/i,
        T = /(LG(.*NetCast))/i,
        w = /TSB(.*TV)/i,
        k = /Viera/i,
        E = /(HbbTV|Espial|NETTV|TV(.*HDMI))/i,
        A = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
        S = function(e, t) {
            return e.test(t)
        },
        x = function(e) {
            var x = e || navigator.userAgent,
                _ = x.split("[FBAN");
            if (void 0 !== _[1] && (x = _[0]), this.apple = {
                    phone: S(t, x),
                    ipod: S(a, x),
                    tablet: !S(t, x) && S(i, x),
                    device: S(t, x) || S(a, x) || S(i, x)
                }, this.amazon = {
                    phone: S(r, x),
                    tablet: !S(r, x) && S(l, x),
                    device: S(r, x) || S(l, x)
                }, this.android = {
                    phone: S(r, x) || S(o, x),
                    tablet: !S(r, x) && !S(o, x) && (S(l, x) || S(n, x)),
                    device: S(r, x) || S(l, x) || S(o, x) || S(n, x)
                }, this.windows = {
                    phone: S(s, x),
                    tablet: S(c, x),
                    device: S(s, x) || S(c, x)
                }, this.tvu = {
                    apple: S(h, x),
                    google: S(f, x),
                    samsung: S(b, x),
                    sony: S(L, x),
                    lg: S(T, x),
                    toshiba: S(w, x),
                    panasonic: S(k, x),
                    other: S(E, x)
                }, this.other = {
                    blackberry: S(d, x),
                    blackberry10: S(p, x),
                    opera: S(u, x),
                    firefox: S(y, x),
                    chrome: S(m, x),
                    safari: S(v, x),
                    uc: S(g, x),
                    device: S(d, x) || S(p, x) || S(u, x) || S(y, x) || S(m, x)
                }, this.seven_inch = S(A, x), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, this.tv = this.tvu.apple || this.tvu.google || this.tvu.samsung || this.tvu.sony || this.tvu.lg || this.tvu.toshiba || this.tvu.panasonic || this.tvu.other, "undefined" == typeof window) return this
        },
        _ = function() {
            var e = new x;
            return e.Class = x, e
        };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = x : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = _() : "function" == typeof define && define.amd ? define("ismobile", [], e.ismobile = _()) : e.ismobile = _()
}(this),
function() {
    "use strict";

    function e() {
        var e = {
            parent: document.body,
            version: "1.0.11",
            defaultOkLabel: "Ok",
            okLabel: "Ok",
            defaultCancelLabel: "Cancel",
            cancelLabel: "Cancel",
            defaultMaxLogItems: 2,
            maxLogItems: 2,
            promptValue: "",
            promptPlaceholder: "",
            closeLogOnClick: !1,
            closeLogOnClickDefault: !1,
            delay: 5e3,
            defaultDelay: 5e3,
            logContainerClass: "alertify-logs",
            logContainerDefaultClass: "alertify-logs",
            dialogs: {
                buttons: {
                    holder: "<nav>{{buttons}}</nav>",
                    ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                    cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                },
                input: "<input type='text'>",
                message: "<p class='msg'>{{message}}</p>",
                log: "<div class='{{class}}'>{{message}}</div>"
            },
            defaultDialogs: {
                buttons: {
                    holder: "<nav>{{buttons}}</nav>",
                    ok: "<button class='ok' tabindex='1'>{{ok}}</button>",
                    cancel: "<button class='cancel' tabindex='2'>{{cancel}}</button>"
                },
                input: "<input type='text'>",
                message: "<p class='msg'>{{message}}</p>",
                log: "<div class='{{class}}'>{{message}}</div>"
            },
            build: function(e) {
                var t = this.dialogs.buttons.ok,
                    a = "<div class='dialog'><div>" + this.dialogs.message.replace("{{message}}", e.message);
                return "confirm" !== e.type && "prompt" !== e.type || (t = this.dialogs.buttons.cancel + this.dialogs.buttons.ok), "prompt" === e.type && (a += this.dialogs.input), a = (a + this.dialogs.buttons.holder + "</div></div>").replace("{{buttons}}", t).replace("{{ok}}", this.okLabel).replace("{{cancel}}", this.cancelLabel)
            },
            setCloseLogOnClick: function(e) {
                this.closeLogOnClick = !!e
            },
            close: function(e, a) {
                this.closeLogOnClick && e.addEventListener("click", function() {
                    t(e)
                }), a = a && !isNaN(+a) ? +a : this.delay, 0 > a ? t(e) : a > 0 && setTimeout(function() {
                    t(e)
                }, a)
            },
            dialog: function(e, t, a, i) {
                return this.setup({
                    type: t,
                    message: e,
                    onOkay: a,
                    onCancel: i
                })
            },
            log: function(e, t, a) {
                var i = document.querySelectorAll(".alertify-logs > div");
                if (i) {
                    var o = i.length - this.maxLogItems;
                    if (o >= 0)
                        for (var n = 0, r = o + 1; r > n; n++) this.close(i[n], -1)
                }
                this.notify(e, t, a)
            },
            setLogPosition: function(e) {
                this.logContainerClass = "alertify-logs " + e
            },
            setupLogContainer: function() {
                var e = document.querySelector(".alertify-logs"),
                    t = this.logContainerClass;
                return e || (e = document.createElement("div"), e.className = t, this.parent.appendChild(e)), e.className !== t && (e.className = t), e
            },
            notify: function(t, a, i) {
                var o = this.setupLogContainer(),
                    n = document.createElement("div");
                n.className = a || "default", e.logTemplateMethod ? n.innerHTML = e.logTemplateMethod(t) : n.innerHTML = t, "function" == typeof i && n.addEventListener("click", i), o.appendChild(n), setTimeout(function() {
                    n.className += " show"
                }, 10), this.close(n, this.delay)
            },
            setup: function(e) {
                function a(a) {
                    "function" != typeof a && (a = function() {}), o && o.addEventListener("click", function(o) {
                        e.onOkay && "function" == typeof e.onOkay && (r ? e.onOkay(r.value, o) : e.onOkay(o)), a(r ? {
                            buttonClicked: "ok",
                            inputValue: r.value,
                            event: o
                        } : {
                            buttonClicked: "ok",
                            event: o
                        }), t(i)
                    }), n && n.addEventListener("click", function(o) {
                        e.onCancel && "function" == typeof e.onCancel && e.onCancel(o), a({
                            buttonClicked: "cancel",
                            event: o
                        }), t(i)
                    }), r && r.addEventListener("keyup", function(e) {
                        13 === e.which && o.click()
                    })
                }
                var i = document.createElement("div");
                i.className = "alertify hide", i.innerHTML = this.build(e);
                var o = i.querySelector(".ok"),
                    n = i.querySelector(".cancel"),
                    r = i.querySelector("input"),
                    l = i.querySelector("label");
                r && ("string" == typeof this.promptPlaceholder && (l ? l.textContent = this.promptPlaceholder : r.placeholder = this.promptPlaceholder), "string" == typeof this.promptValue && (r.value = this.promptValue));
                var s;
                return "function" == typeof Promise ? s = new Promise(a) : a(), this.parent.appendChild(i), setTimeout(function() {
                    i.classList.remove("hide"), r && e.type && "prompt" === e.type ? (r.select(), r.focus()) : o && o.focus()
                }, 100), s
            },
            okBtn: function(e) {
                return this.okLabel = e, this
            },
            setDelay: function(e) {
                return e = e || 0, this.delay = isNaN(e) ? this.defaultDelay : parseInt(e, 10), this
            },
            cancelBtn: function(e) {
                return this.cancelLabel = e, this
            },
            setMaxLogItems: function(e) {
                this.maxLogItems = parseInt(e || this.defaultMaxLogItems)
            },
            theme: function(e) {
                switch (e.toLowerCase()) {
                    case "bootstrap":
                        this.dialogs.buttons.ok = "<button class='ok btn btn-primary' tabindex='1'>{{ok}}</button>", this.dialogs.buttons.cancel = "<button class='cancel btn btn-default' tabindex='2'>{{cancel}}</button>", this.dialogs.input = "<input type='text' class='form-control'>";
                        break;
                    case "purecss":
                        this.dialogs.buttons.ok = "<button class='ok pure-button' tabindex='1'>{{ok}}</button>", this.dialogs.buttons.cancel = "<button class='cancel pure-button' tabindex='2'>{{cancel}}</button>";
                        break;
                    case "mdl":
                    case "material-design-light":
                        this.dialogs.buttons.ok = "<button class='ok mdl-button mdl-js-button mdl-js-ripple-effect'  tabindex='1'>{{ok}}</button>", this.dialogs.buttons.cancel = "<button class='cancel mdl-button mdl-js-button mdl-js-ripple-effect' tabindex='2'>{{cancel}}</button>", this.dialogs.input = "<div class='mdl-textfield mdl-js-textfield'><input class='mdl-textfield__input'><label class='md-textfield__label'></label></div>";
                        break;
                    case "angular-material":
                        this.dialogs.buttons.ok = "<button class='ok md-primary md-button' tabindex='1'>{{ok}}</button>", this.dialogs.buttons.cancel = "<button class='cancel md-button' tabindex='2'>{{cancel}}</button>", this.dialogs.input = "<div layout='column'><md-input-container md-no-float><input type='text'></md-input-container></div>";
                        break;
                    case "default":
                    default:
                        this.dialogs.buttons.ok = this.defaultDialogs.buttons.ok, this.dialogs.buttons.cancel = this.defaultDialogs.buttons.cancel, this.dialogs.input = this.defaultDialogs.input
                }
            },
            reset: function() {
                this.parent = document.body, this.theme("default"), this.okBtn(this.defaultOkLabel), this.cancelBtn(this.defaultCancelLabel), this.setMaxLogItems(), this.promptValue = "", this.promptPlaceholder = "", this.delay = this.defaultDelay, this.setCloseLogOnClick(this.closeLogOnClickDefault), this.setLogPosition("bottom left"), this.logTemplateMethod = null
            },
            injectCSS: function() {
                if (!document.querySelector("#alertifyCSS")) {
                    var e = document.getElementsByTagName("head")[0],
                        t = document.createElement("style");
                    t.type = "text/css", t.id = "alertifyCSS", t.innerHTML = ".alertify-logs>*{padding:12px 24px;color:#fff;box-shadow:0 2px 5px 0 rgba(0,0,0,.2);border-radius:1px}.alertify-logs>*,.alertify-logs>.default{background:rgba(0,0,0,.8)}.alertify-logs>.error{background:rgba(244,67,54,.8)}.alertify-logs>.success{background:rgba(76,175,80,.9)}.alertify{position:fixed;background-color:rgba(0,0,0,.3);left:0;right:0;top:0;bottom:0;width:100%;height:100%;z-index:1}.alertify.hide{opacity:0;pointer-events:none}.alertify,.alertify.show{box-sizing:border-box;transition:all .33s cubic-bezier(.25,.8,.25,1)}.alertify,.alertify *{box-sizing:border-box}.alertify .dialog{padding:12px}.alertify .alert,.alertify .dialog{width:100%;margin:0 auto;position:relative;top:50%;transform:translateY(-50%)}.alertify .alert>*,.alertify .dialog>*{width:400px;max-width:95%;margin:0 auto;text-align:center;padding:12px;background:#fff;box-shadow:0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)}.alertify .alert .msg,.alertify .dialog .msg{padding:12px;margin-bottom:12px;margin:0;text-align:left}.alertify .alert input:not(.form-control),.alertify .dialog input:not(.form-control){margin-bottom:15px;width:100%;font-size:100%;padding:12px}.alertify .alert input:not(.form-control):focus,.alertify .dialog input:not(.form-control):focus{outline-offset:-2px}.alertify .alert nav,.alertify .dialog nav{text-align:right}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button),.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button){background:transparent;box-sizing:border-box;color:rgba(0,0,0,.87);position:relative;outline:0;border:0;display:inline-block;-ms-flex-align:center;-ms-grid-row-align:center;align-items:center;padding:0 6px;margin:6px 8px;line-height:36px;min-height:36px;white-space:nowrap;min-width:88px;text-align:center;text-transform:uppercase;font-size:14px;text-decoration:none;cursor:pointer;border:1px solid transparent;border-radius:2px}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):active,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):hover{background-color:rgba(0,0,0,.05)}.alertify .alert nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus,.alertify .dialog nav button:not(.btn):not(.pure-button):not(.md-button):not(.mdl-button):focus{border:1px solid rgba(0,0,0,.1)}.alertify .alert nav button.btn,.alertify .dialog nav button.btn{margin:6px 4px}.alertify-logs{position:fixed;z-index:1}.alertify-logs.bottom,.alertify-logs:not(.top){bottom:16px}.alertify-logs.left,.alertify-logs:not(.right){left:16px}.alertify-logs.left>*,.alertify-logs:not(.right)>*{float:left;transform:translateZ(0);height:auto}.alertify-logs.left>.show,.alertify-logs:not(.right)>.show{left:0}.alertify-logs.left>*,.alertify-logs.left>.hide,.alertify-logs:not(.right)>*,.alertify-logs:not(.right)>.hide{left:-110%}.alertify-logs.right{right:16px}.alertify-logs.right>*{float:right;transform:translateZ(0)}.alertify-logs.right>.show{right:0;opacity:1}.alertify-logs.right>*,.alertify-logs.right>.hide{right:-110%;opacity:0}.alertify-logs.top{top:0}.alertify-logs>*{box-sizing:border-box;transition:all .4s cubic-bezier(.25,.8,.25,1);position:relative;clear:both;backface-visibility:hidden;perspective:1000;max-height:0;margin:0;padding:0;overflow:hidden;opacity:0;pointer-events:none}.alertify-logs>.show{margin-top:12px;opacity:1;max-height:1000px;padding:12px;pointer-events:auto}", e.insertBefore(t, e.firstChild)
                }
            },
            removeCSS: function() {
                var e = document.querySelector("#alertifyCSS");
                e && e.parentNode && e.parentNode.removeChild(e)
            }
        };
        return e.injectCSS(), {
            _$$alertify: e,
            parent: function(t) {
                e.parent = t
            },
            reset: function() {
                return e.reset(), this
            },
            alert: function(t, a, i) {
                return e.dialog(t, "alert", a, i) || this
            },
            confirm: function(t, a, i) {
                return e.dialog(t, "confirm", a, i) || this
            },
            prompt: function(t, a, i) {
                return e.dialog(t, "prompt", a, i) || this
            },
            log: function(t, a) {
                return e.log(t, "default", a), this
            },
            theme: function(t) {
                return e.theme(t), this
            },
            success: function(t, a) {
                return e.log(t, "success", a), this
            },
            error: function(t, a) {
                return e.log(t, "error", a), this
            },
            cancelBtn: function(t) {
                return e.cancelBtn(t), this
            },
            okBtn: function(t) {
                return e.okBtn(t), this
            },
            delay: function(t) {
                return e.setDelay(t), this
            },
            placeholder: function(t) {
                return e.promptPlaceholder = t, this
            },
            defaultValue: function(t) {
                return e.promptValue = t, this
            },
            maxLogItems: function(t) {
                return e.setMaxLogItems(t), this
            },
            closeLogOnClick: function(t) {
                return e.setCloseLogOnClick(!!t), this
            },
            logPosition: function(t) {
                return e.setLogPosition(t || ""), this
            },
            setLogTemplate: function(t) {
                return e.logTemplateMethod = t, this
            },
            clearLogs: function() {
                return e.setupLogContainer().innerHTML = "", this
            },
            version: e.version
        }
    }
    var t = function(e) {
        if (e) {
            var t = function() {
                e && e.parentNode && e.parentNode.removeChild(e)
            };
            e.classList.remove("show"), e.classList.add("hide"), e.addEventListener("transitionend", t), setTimeout(t, 500)
        }
    };
    if ("undefined" != typeof module && module && module.exports) {
        module.exports = function() {
            return new e
        };
        var a = new e;
        for (var i in a) module.exports[i] = a[i]
    } else "function" == typeof define && define.amd ? define(function() {
        return new e
    }) : window.alertify = new e
}();
var url = "",
    api = "",
    token = document.querySelector("#token").getAttribute("value"),
    isLoggedIn = !1,
    isVIP = !1,
    userId = null,
    roleId = null,
    userDate = null,
    happy = !1,
    browserVersion = 0,
    canPlayVPAID = !1,
    lockAPI = {};
try {
    url = window.location.origin
} catch (e) {
    try {
        url = window.location.protocol + "//" + window.location.host
    } catch (e) {
        url = window.location.href.split("/")[0] + "//" + window.location.host
    }
}
api = url + "/api/v2";
try {
    if (userId = document.querySelector("#user-id").value) {
        isLoggedIn = !0;
        try {
            document.querySelector("#user-vip").value && (isVIP = !0)
        } catch (e) {}
        try {
            userDate = document.querySelector("#user-date").value
        } catch (e) {}
        try {
            roleId = document.querySelector("#user-v").value
        } catch (e) {}
    }
} catch (e) {}
try {
    browserVersion = navigator.userAgent.match(/(CriOS|Chrome|Firefox|Safari(?=\/))\/?\s*(\d+)/i)[2], console.log("browser version: " + browserVersion), (!ismobile.any || ismobile.apple.device && browserVersion > 601 || ismobile.other.chrome && browserVersion > 53 || ismobile.other.firefox && browserVersion > 48) && (canPlayVPAID = !0)
} catch (e) {}
for (var _GLOBAL = {
        _URL: url,
        _API: api,
        _TOKEN: token,
        _IS_LOGGED_IN: isLoggedIn,
        _IS_VIP: isVIP,
        _HAPPY: canPlayVPAID,
        _USER_ID: userId,
        _USER_ROLE: roleId,
        _USER_DATE: userDate
    }, imgDefer = document.getElementsByTagName("img"), i = 0; i < imgDefer.length; i++) imgDefer[i].getAttribute("data-src") && imgDefer[i].setAttribute("src", imgDefer[i].getAttribute("data-src"));
var navbar = getElement("nav"),
    navbarLeft = getElement("#navbar-left"),
    navbarRight = getElement("#navbar-right"),
    navbarToggle = getElement("#navbar-toggle"),
    navbarMenu = getElement(".navbar-menu"),
    navbarSearch = getElement(".navbar-search"),
    userAvatar = getElement("#user-avatar"),
    userTheme = getElement("#user-theme"),
    navbarTab = getElement(".navbar-user-tab"),
    userHeader = getElement(".navbar-user-header"),
    navbarUser = getElement(".navbar-header-user"),
    navbarLoading = navbarRight.querySelector(".loading"),
    floatingAction = getElement(".floating-action"),
    actionToggle = getElement(".action-toggle"),
    actionHome = getElement(".action-home"),
    actionMenu = getElement(".action-menu"),
    actionUser = getElement(".action-user"),
    actionTop = getElement(".action-top"),
    alertifyEl = getElement(".alertify"),
    searchBox = getElement(".search-box input"),
    searchButton = getElement(".search-box .icon"),
    searchResult = getElement(".search-result"),
    searchResultBody = getElement(".result-body"),
    searchLoading = searchResult.querySelector(".loading"),
    searchNoitem = searchResult.querySelector(".result-noitem"),
    cssTheme = document.createElement("link");
cssTheme.id = "dark-theme", cssTheme.rel = "stylesheet", cssTheme.type = "text/css", cssTheme.href = "/css/dark.css?v=" + (new Date).getTime(), window.addEventListener("resize", navbarOnload), window.addEventListener("scroll", hideFloatingAction), window.addEventListener("load", navbarOnload);
for (var i = navbarTab.children.length - 1; i >= 0; i--) clickOnTab(navbarTab.children[i]);
var navbarLeftBrand = document.createElement("div");
navbarLeftBrand.className = "navbar-brand", navbarLeftBrand.innerHTML = '<a class="logo" href="/"><img src="/assets/img/logo.png" alt="VuiGhe.Net"></a>', navbarLeft.appendChild(navbarLeftBrand), userAvatar.onclick = function() {
    activeNavbarRight()
}, navbarToggle.onclick = function() {
    activeNavbarLeft()
};
try {
    userTheme.onclick = function() {
        var e = getElement("#dark-theme"),
            t = {};
        e ? (removeElement(e), t = {
            theme: null
        }) : (document.head.appendChild(cssTheme), t = {
            theme: "dark"
        });
        var a = sendAjax("PUT", _GLOBAL._API + "/users/self/theme", t);
        a.onload = function() {}, a.onerror = function() {}
    }
} catch (e) {}
navbarLeft.querySelector(".navbar-close").onclick = function() {
    navbarLeft.classList.remove("activated"), navbar.style.zIndex = ""
}, navbarRight.querySelector(".navbar-close").onclick = function() {
    navbarRight.classList.remove("activated"), navbar.style.zIndex = ""
}, actionToggle.onclick = function() {
    scrollPageTo(0, 600)
};
var loginButton = document.querySelector("#login"),
    logoutButton = document.querySelector("#logout"),
    signupButton = document.querySelector("#signup"),
    loginTab = document.querySelector(".tab-login"),
    signupTab = document.querySelector(".tab-signup"),
    validated = {
        username: !1,
        password: !1,
        passwordConfirm: !1,
        fullName: !1,
        email: !1,
        birthday: !1
    },
    cachedValidate = {
        username: null,
        fullName: null,
        email: null,
        birthday: null
    },
    cachedNotifications = {};
if (loginButton) {
    loginButton.onclick = function() {
        login()
    }, signupButton.onclick = function() {
        signup()
    };
    var loginUsername = loginTab.querySelector('input[name="username"]'),
        loginPassword = loginTab.querySelector('input[name="password"]'),
        signupUsername = signupTab.querySelector('input[name="username"]'),
        signupPassword = signupTab.querySelector('input[name="password"]'),
        passwordConfirm = signupTab.querySelector('input[name="password_confirm"]'),
        fullName = signupTab.querySelector('input[name="full_name"]'),
        email = signupTab.querySelector('input[name="email"]'),
        birthDate = document.querySelector('input[name="birthday"]'),
        birthMonth = document.querySelector('input[name="birthmonth"]'),
        birthYear = document.querySelector('input[name="birthyear"]'),
        formGroupBirthday = document.querySelector(".navbar-form-group.birthday");
    loginUsername.addEventListener("focusout", function() {
        validateLoginUsername()
    }), loginPassword.addEventListener("focusout", function() {
        validatePassword(loginTab)
    }), signupUsername.addEventListener("focusout", function() {
        validateSignupUsername()
    }), signupPassword.addEventListener("focusout", function() {
        validatePassword(signupTab)
    }), passwordConfirm.addEventListener("focusout", function() {
        validatePasswordConfirm()
    }), fullName.addEventListener("focusout", function() {
        validateFullName()
    }), email.addEventListener("focusout", function() {
        validateEmail()
    }), birthDate.addEventListener("focusout", function() {
        validateBirthDate()
    }), birthMonth.addEventListener("focusout", function() {
        validateBirthMonth()
    }), birthYear.addEventListener("focusout", function() {
        validateBirthYear()
    }), loginUsername.addEventListener("keyup", function(e) {
        try {
            13 == e.which && loginButton.click()
        } catch (e) {}
    }), loginPassword.addEventListener("keyup", function(e) {
        try {
            13 == e.which && loginButton.click()
        } catch (e) {}
    }), window.addEventListener("resize", function() {
        setLoginTabHeight(), ismobile.any || (Ps.update(loginTab), Ps.update(signupTab))
    }), window.addEventListener("load", function() {
        setLoginTabHeight(), ismobile.any || (Ps.initialize(loginTab, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50
        }), Ps.initialize(signupTab, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50
        }))
    })
}
if (logoutButton) {
    logoutButton.onclick = function() {
        logout()
    };
    var informationTab = document.querySelector(".navbar-tab-information"),
        notificationTab = document.querySelector(".navbar-tab-notification"),
        informationBody = document.querySelector(".tab-information"),
        notificationBody = document.querySelector(".tab-notification"),
        notificationList = document.querySelector(".notification-list"),
        notificationMore = document.querySelector(".notification-more"),
        avatarFile = getElement("#avatar-upload");
    avatarFile.onchange = function() {
        try {
            uploadAvatar(avatarFile.files[0])
        } catch (e) {}
    }, notificationTab.addEventListener("click", function() {
        getNotifications()
    }), notificationMore.onclick = function() {
        getNotifications({
            more: !0
        })
    }, window.addEventListener("resize", function() {
        setInfomationTabHeight(), ismobile.any || (Ps.update(informationBody), Ps.update(notificationBody))
    }), window.addEventListener("load", function() {
        setInfomationTabHeight(), ismobile.any || (Ps.initialize(informationBody, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50
        }), Ps.initialize(notificationBody, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50
        }))
    })
}
var container = getElement(".container"),
    sidebarTab = getElement(".player-sidebar-header"),
    seasonList = getElement(".season-list"),
    seasonActive = getElement(".season-active"),
    episodeTotal = getElement(".episode-total"),
    episodeList = getElement(".episode-list"),
    ovaList = getElement(".ova-list"),
    commentList = getElement(".comment-list"),
    episodeTab = getElement(".tab-item.tab-episode"),
    ovaTab = getElement(".tab-item.tab-ova"),
    commentTab = getElement(".tab-item.tab-comment"),
    infoTab = getElement(".tab-item.tab-information"),
    episodeBody = getElement(".player-sidebar-body.body-episode"),
    commentBody = getElement(".player-sidebar-body.body-comment"),
    infoBody = getElement(".film-info"),
    episodeLoading = getElement(".player-sidebar-body.body-episode .loading"),
    commentLoading = commentBody.querySelector(".loading"),
    commentMore = getElement(".comment-more"),
    commentEmoticon = getElement(".comment-emoticon"),
    emojiPicker = getElement(".emoji-picker"),
    emojiClose = getElement(".emoji-close"),
    emojiTypes = getAllElements(".emoji-picker-type"),
    commentInput = getElement("#comment-input"),
    replyInput = getElement("#reply-input"),
    episodeSelect = getElement(".episode-select input"),
    episodeSelectButton = getElement(".episode-select .play-button"),
    film = {
        id: container.getAttribute("data-id"),
        episodeId: container.getAttribute("data-episode-id"),
        type: container.getAttribute("data-type"),
        upcoming: container.getAttribute("data-is-upcoming"),
        copyrighted: container.getAttribute("data-copyrighted"),
        name: container.getAttribute("data-name"),
        min: container.getAttribute("data-episode-min"),
        max: container.getAttribute("data-episode-max")
    },
    episode = {},
    seasons = [],
    comments = [],
    emoji = {},
    player = {
        el_: getElement("#player"),
        init: !0,
        timer: null,
        ios: {},
        cache_: {},
        options_: {
            ads: {}
        }
    },
    cachedEpisode = [],
    cachedError = [],
    cachedErrorPT = [],
    cachedTry = [],
    replyComment = {};
try {
    store.forEach(function(e, t) {
        t.submitted && (new Date).getTime() - t.submitted > 3e5 && store.remove(e)
    })
} catch (e) {}
film.upcoming && film.upcoming.length ? player.el_.appendChild(createElement("content", "div", "player-content", {
    childrens: [{
        identity: "thumbnail",
        tag: "img",
        className: "player-thumbnail",
        options: {},
        properties: [{
            identity: "src",
            value: "/assets/img/countdown-bg.png"
        }]
    }, {
        identity: "upcoming",
        tag: "div",
        className: "player-upcoming",
        options: {
            innerHTML: "Đây là phim sắp chiếu, hãy đợi tới khi có tập mới nhé!"
        }
    }]
})) : window.addEventListener("load", function() {
    createPlayer()
});
var seasonListData = [];
try {
    for (var seasonListItems = seasonList.querySelectorAll(".season-item"), i = 0; i < seasonListItems.length; i++) seasonListData[i] = {
        id: seasonListItems[i].getAttribute("data-id"),
        name: seasonListItems[i].getAttribute("data-name"),
        begin: seasonListItems[i].getAttribute("data-begin"),
        end: seasonListItems[i].getAttribute("data-end")
    }
} catch (e) {}
try {
    seasonActive.onclick = function() {
        seasonList.classList.contains("activated") ? seasonList.classList.remove("activated") : seasonList.classList.add("activated"), setTimeout(function() {
            Ps.update(seasonList)
        }, 500)
    }, episodeTab.onclick = function() {
        episodeLoading.classList.remove("hidden");
        for (var e = sidebarTab.children.length - 1; e >= 0; e--) sidebarTab.children[e].classList.remove("activated");
        if (this.classList.add("activated"), episodeBody.classList.remove("hidden"), commentBody.classList.add("hidden"), episode.season) getEpisodes("seasons", episode.season.id);
        else if (seasonListData.length) {
            var t = seasonListData[0];
            getEpisodes("seasons", t.id, {
                seasonData: t
            })
        } else getEpisodes("films", film.id)
    }, ovaTab.onclick = function() {
        episodeLoading.classList.remove("hidden");
        for (var e = sidebarTab.children.length - 1; e >= 0; e--) sidebarTab.children[e].classList.remove("activated");
        this.classList.add("activated"), episodeBody.classList.remove("hidden"), commentBody.classList.add("hidden"), getEpisodes("films", film.id, {
            ova: !0
        })
    }, commentTab.onclick = function() {
        for (var e = sidebarTab.children.length - 1; e >= 0; e--) sidebarTab.children[e].classList.remove("activated");
        this.classList.add("activated"), episodeBody.classList.add("hidden"), commentBody.classList.remove("hidden"), comments.length || (commentLoading.classList.remove("hidden"), getComments())
    }, infoTab.onclick = function() {
        for (var e = sidebarTab.children.length - 1; e >= 0; e--) sidebarTab.children[e].classList.remove("activated");
        this.classList.add("activated"), episodeBody.classList.add("hidden"), commentBody.classList.add("hidden")
    }, episodeSelectButton.onclick = function() {
        parseInt(episodeSelect.value) && getEpisode(!1, episodeSelect.value)
    }, episodeSelect.onkeyup = function(e) {
        try {
            13 == e.which && episodeSelectButton.click()
        } catch (e) {}
    }, commentInput.onkeyup = function(e) {
        try {
            13 == e.which && addComment(this.value)
        } catch (e) {}
    }, replyInput.onkeyup = function(e) {
        try {
            if (13 == e.which) {
                var t = {
                    parentId: replyComment.id
                };
                replyComment.author && (t.mentionedId = replyComment.author.id), addComment(this.value, t)
            }
        } catch (e) {
            console.log(e)
        }
    }
} catch (e) {}
var pageLoaded = !1;
ismobile.tv || filmOnLoad(), window.addEventListener("load", filmOnLoad), document.addEventListener("load", filmOnLoad), window.addEventListener("click", function(e) {
    windowOnClick(e)
}), commentEmoticon.onclick = function() {
    if (!LoginSuccess) return void showLoginForm();
    emojiPicker.classList.toggle("hidden");
    var e = getElement(".emoji-list");
    if (!e.querySelector(".emoji-item")) {
        for (var t = e.getAttribute("data-tab"), a = 0; a < emoji[t].length; a++) e.appendChild(createEmoji(t, emoji[t][a]));
        Ps.initialize(e, {
            minScrollbarLength: 50,
            maxScrollbarLength: 50
        })
    }
}, emojiClose.onclick = function() {
    emojiPicker.classList.add("hidden")
}, commentMore.onclick = function() {
    commentLoading.classList.remove("hidden"), getComments()
}, commentInput.onclick = function() {
    if (!LoginSuccess) return void showLoginForm()
}, emoji.panda = [{
    code: ":daynay:",
    value: "1.gif"
}, {
    code: ":choe:",
    value: "2.gif"
}, {
    code: ":herehere:",
    value: "3.gif"
}, {
    code: ":uhuh:",
    value: "4.gif"
}, {
    code: ":oea:",
    value: "5.gif"
}, {
    code: ":veoma:",
    value: "6.gif"
}, {
    code: ":chetdi:",
    value: "7.gif"
}, {
    code: ":quaytay:",
    value: "8.gif"
}, {
    code: ":longlanh:",
    value: "9.gif"
}, {
    code: ":oizoi:",
    value: "10.gif"
}, {
    code: ":run:",
    value: "11.gif"
}, {
    code: ":nani:",
    value: "12.gif"
}, {
    code: ":bbb:",
    value: "13.gif"
}, {
    code: ":hitmui:",
    value: "14.gif"
}, {
    code: ":quaytaylonglanh:",
    value: "15.gif"
}, {
    code: ":hihi:",
    value: "16.gif"
}, {
    code: ":gie:",
    value: "17.gif"
}, {
    code: ":aaa:",
    value: "18.gif"
}, {
    code: ":eyelove:",
    value: "19.gif"
}, {
    code: ":bagia:",
    value: "20.gif"
}, {
    code: ":huchuc:",
    value: "21.gif"
}, {
    code: ":anbanh:",
    value: "22.gif"
}, {
    code: ":tucgian:",
    value: "23.gif"
}, {
    code: ":tromat:",
    value: "24.gif"
}, {
    code: ":wtf:",
    value: "25.gif"
}, {
    code: ":liecliec:",
    value: "26.gif"
}, {
    code: ":hi:",
    value: "27.gif"
}, {
    code: ":chew:",
    value: "28.gif"
}, {
    code: ":keke:",
    value: "29.gif"
}, {
    code: ":quat:",
    value: "30.gif"
}, {
    code: ":huhu:",
    value: "31.gif"
}, {
    code: ":clgt:",
    value: "32.gif"
}, {
    code: ":what:",
    value: "33.gif"
}, {
    code: ":xuyxuy:",
    value: "34.gif"
}, {
    code: ":jjj:",
    value: "35.gif"
}, {
    code: ":hoho:",
    value: "36.gif"
}, {
    code: ":...:",
    value: "37.gif"
}, {
    code: ":laclac:",
    value: "38.gif"
}, {
    code: ":hi2:",
    value: "39.gif"
}, {
    code: ":ohyeah:",
    value: "40.gif"
}, {
    code: ":mmm:",
    value: "41.gif"
}, {
    code: ":acac:",
    value: "42.gif"
}, {
    code: ":vayvay:",
    value: "43.gif"
}, {
    code: ":khocloc:",
    value: "44.gif"
}, {
    code: ":ngoaymui:",
    value: "45.gif"
}, {
    code: ":hello:",
    value: "46.gif"
}, {
    code: ":laclac2:",
    value: "48.gif"
}, {
    code: ":ancut:",
    value: "49.gif"
}, {
    code: ":rotrot:",
    value: "50.gif"
}, {
    code: ":uhuhtay:",
    value: "51.gif"
}, {
    code: ":huytsao:",
    value: "52.gif"
}, {
    code: ":bagia2:",
    value: "53.gif"
}, {
    code: ":xuyt:",
    value: "54.gif"
}, {
    code: ":laclac3:",
    value: "55.gif"
}, {
    code: ":longlanh2:",
    value: "56.gif"
}, {
    code: ":clgt2:",
    value: "57.gif"
}, {
    code: ":choivoi:",
    value: "58.gif"
}, {
    code: ":uhuh2:",
    value: "59.gif"
}, {
    code: ":khongbiet:",
    value: "60.gif"
}, {
    code: ":tinhtien:",
    value: "61.gif"
}, {
    code: ":canloi:",
    value: "62.gif"
}, {
    code: ":byebye:",
    value: "63.gif"
}, {
    code: ":vvv:",
    value: "64.gif"
}, {
    code: ":naonao:",
    value: "65.gif"
}, {
    code: ":xeng:",
    value: "66.gif"
}, {
    code: ":?:",
    value: "67.gif"
}, {
    code: ":sieunhan:",
    value: "68.gif"
}, {
    code: ":victoria:",
    value: "69.gif"
}, {
    code: ":@@:",
    value: "70.gif"
}, {
    code: ":linhi:",
    value: "71.gif"
}, {
    code: ":im:",
    value: "72.gif"
}, {
    code: ":dao:",
    value: "73.gif"
}, {
    code: ":angel:",
    value: "74.gif"
}, {
    code: ":deu:",
    value: "75.gif"
}, {
    code: ":vayco:",
    value: "76.gif"
}, {
    code: ":sutmui:",
    value: "77.gif"
}, {
    code: ":tunghoa:",
    value: "78.gif"
}, {
    code: ":votay:",
    value: "79.gif"
}, {
    code: ":oi:",
    value: "80.gif"
}, {
    code: ":tako:",
    value: "81.gif"
}, {
    code: ":here:",
    value: "82.gif"
}, {
    code: ":den:",
    value: "83.gif"
}, {
    code: ":nono:",
    value: "84.gif"
}, {
    code: ":le:",
    value: "85.gif"
}, {
    code: ":uongnuoc:",
    value: "86.gif"
}, {
    code: ":vuvu:",
    value: "87.gif"
}, {
    code: ":qqq:",
    value: "88.gif"
}, {
    code: ":leluoi:",
    value: "89.gif"
}, {
    code: ":matsao:",
    value: "90.gif"
}, {
    code: ":hehe:",
    value: "92.gif"
}, {
    code: ":$:",
    value: "93.gif"
}, {
    code: ":buot:",
    value: "94.gif"
}, {
    code: ":hamieng:",
    value: "95.gif"
}], emoji.onion = [{
    code: ":nani1:",
    value: "9.gif"
}, {
    code: ":givay:",
    value: "13.gif"
}, {
    code: ":xitmau:",
    value: "16.gif"
}, {
    code: ":vungmau:",
    value: "18.gif"
}, {
    code: ":xoaybong:",
    value: "19.gif"
}, {
    code: ":cungchia:",
    value: "21.gif"
}, {
    code: ":oe:",
    value: "22.gif"
}, {
    code: ":thenthung1:",
    value: "23.gif"
}, {
    code: ":samhoi:",
    value: "24.gif"
}, {
    code: ":lamon:",
    value: "25.gif"
}, {
    code: ":thenthung:",
    value: "26.gif"
}, {
    code: ":hehe1:",
    value: "27.gif"
}, {
    code: ":thedo:",
    value: "28.gif"
}, {
    code: ":lanh:",
    value: "29.gif"
}, {
    code: ":dongbang:",
    value: "30.gif"
}, {
    code: ":ngugat:",
    value: "31.gif"
}, {
    code: ":sapchet:",
    value: "32.gif"
}, {
    code: ":good:",
    value: "33.gif"
}, {
    code: ":noqua:",
    value: "34.gif"
}, {
    code: ":hetcach:",
    value: "35.gif"
}, {
    code: ":tungtang:",
    value: "36.gif"
}, {
    code: ":khoc:",
    value: "37.gif"
}, {
    code: ":chetdi1:",
    value: "38.gif"
}, {
    code: ":gomo:",
    value: "39.gif"
}, {
    code: ":dingu:",
    value: "40.gif"
}, {
    code: ":soqua2:",
    value: "41.gif"
}, {
    code: ":nongqua:",
    value: "42.gif"
}, {
    code: ":eatme:",
    value: "43.gif"
}, {
    code: ":thoimien:",
    value: "44.gif"
}, {
    code: ":eatme1:",
    value: "45.gif"
}, {
    code: ":laclu:",
    value: "46.gif"
}, {
    code: ":thenthung3:",
    value: "47.gif"
}, {
    code: ":khongquantam:",
    value: "48.gif"
}, {
    code: ":cogang:",
    value: "49.gif"
}, {
    code: ":muidai:",
    value: "50.gif"
}, {
    code: ":khongchiudau:",
    value: "51.gif"
}, {
    code: ":bye:",
    value: "52.gif"
}, {
    code: ":bye1:",
    value: "53.gif"
}, {
    code: ":covu2:",
    value: "54.gif"
}, {
    code: ":hi1:",
    value: "56.gif"
}, {
    code: ":die:",
    value: "57.gif"
}, {
    code: ":sanara:",
    value: "58.gif"
}, {
    code: ":ngaytho:",
    value: "60.gif"
}, {
    code: ":hoho1:",
    value: "61.gif"
}, {
    code: ":biamo:",
    value: "62.gif"
}, {
    code: ":khongchiudau1:",
    value: "63.gif"
}, {
    code: ":cryrun:",
    value: "65.gif"
}, {
    code: ":cuuvoi:",
    value: "66.gif"
}, {
    code: ":angel1:",
    value: "67.gif"
}, {
    code: ":mot:",
    value: "68.gif"
}, {
    code: ":xd:",
    value: "70.gif"
}, {
    code: ":tuky:",
    value: "71.gif"
}, {
    code: ":eyelove1:",
    value: "72.gif"
}, {
    code: ":tuky1:",
    value: "73.gif"
}, {
    code: ":ngoaymui1:",
    value: "74.gif"
}, {
    code: ":loden:",
    value: "75.gif"
}, {
    code: ":bittai:",
    value: "76.gif"
}, {
    code: ":aaaa:",
    value: "77.gif"
}, {
    code: ":hetnoi:",
    value: "78.gif"
}, {
    code: ":laiday:",
    value: "79.gif"
}, {
    code: ":phut:",
    value: "81.gif"
}, {
    code: ":coichungdo:",
    value: "82.gif"
}, {
    code: ":depzai:",
    value: "83.gif"
}, {
    code: ":quyenanh:",
    value: "84.gif"
}, {
    code: ":chongday:",
    value: "85.gif"
}, {
    code: ":psy:",
    value: "86.gif"
}, {
    code: ":uong:",
    value: "87.gif"
}, {
    code: ":robot:",
    value: "88.gif"
}, {
    code: ":dabong:",
    value: "89.gif"
}, {
    code: ":soqua:",
    value: "90.gif"
}, {
    code: ":soqua1:",
    value: "91.gif"
}, {
    code: ":thatim:",
    value: "92.gif"
}, {
    code: ":hethon:",
    value: "93.gif"
}, {
    code: ":soc:",
    value: "94.gif"
}, {
    code: ":thenthung2:",
    value: "95.gif"
}, {
    code: ":haizz:",
    value: "96.gif"
}, {
    code: ":caigie:",
    value: "97.gif"
}, {
    code: ":cuonchan:",
    value: "98.gif"
}, {
    code: ":hutthuoc:",
    value: "99.gif"
}, {
    code: ":xiga:",
    value: "100.gif"
}, {
    code: ":hammuon:",
    value: "1.gif"
}, {
    code: ":ngoayngoay:",
    value: "2.gif"
}, {
    code: ":aha:",
    value: "3.gif"
}, {
    code: ":angel2:",
    value: "4.gif"
}, {
    code: ":thoisao:",
    value: "5.gif"
}, {
    code: ":ma:",
    value: "6.gif"
}, {
    code: ":chayxe:",
    value: "10.gif"
}, {
    code: ":hura:",
    value: "11.gif"
}, {
    code: ":luclac:",
    value: "12.gif"
}, {
    code: ":dead:",
    value: "14.gif"
}, {
    code: ":chimbay:",
    value: "15.gif"
}, {
    code: ":hocmau:",
    value: "17.gif"
}, {
    code: ":dapmay:",
    value: "20.gif"
}, {
    code: ":chetcmnr:",
    value: "7.gif"
}];
for (var i = 0; i < emojiTypes.length; i++) {
    var tabName = emojiTypes[i].getAttribute("data-tab"),
        bodyTab = document.querySelector(".emoji-list.emoji-" + tabName);
    clickOnEmojiTab(emojiTypes[i], tabName, bodyTab)
}
try {
    Ps.initialize(seasonList, {
        minScrollbarLength: 50,
        maxScrollbarLength: 50
    }), Ps.initialize(episodeList, {
        minScrollbarLength: 50,
        maxScrollbarLength: 50
    }), Ps.initialize(ovaList, {
        minScrollbarLength: 50,
        maxScrollbarLength: 50
    }), Ps.initialize(commentList, {
        minScrollbarLength: 50,
        maxScrollbarLength: 50
    })
} catch (e) {}
var playerWrapper = getElement(".player-wrapper");
window.p2pDomain = "https://hvg.imacdn.com";
var onpopstateTimeout;
window.onpopstate = function(e) {
    clearTimeout(onpopstateTimeout), popState(e)
}, window.addEventListener("resize", function() {
    if (player.happy) {
        var e = (document.body.offsetWidth - container.offsetWidth) / 2 + player.el_.offsetWidth + 20;
        window.innerWidth >= 1024 ? (player.vast.video.style.left = e + "px", player.vast.container.style.left = e + "px") : (player.vast.video.style = "", player.vast.container.style = "")
    }
});