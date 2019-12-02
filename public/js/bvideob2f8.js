function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
    }
}

function sendAjax(e, t, a, i) {
    i || (i = {});
    var n = new XMLHttpRequest;
    return n.open(e, t), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "GET" != e && n.setRequestHeader("X-CSRF-TOKEN", _GLOBAL._TOKEN), n.withCredentials = !0, i.upload ? n.send(a) : (n.setRequestHeader("Content-Type", "application/json"), a ? n.send(JSON.stringify(a)) : n.send()), n
}

function getElement(e) {
    return document.querySelector(e)
}

function getAllElements(e) {
    return document.querySelectorAll(e)
}

function createElement(e, t, a, i, n) {
    var o = document.createElement(t);
    if (o.className = a, o.identity = e, i || (i = {}), n)
        for (var r = 0; r < n.length; r++) o.setAttribute(n[r].identity, n[r].value);
    if (i.innerHTML && (o.innerHTML = i.innerHTML), i.childrens)
        for (var r = 0; r < i.childrens.length; r++) {
            var l = createElement(i.childrens[r].identity, i.childrens[r].tag, i.childrens[r].className, i.childrens[r].options, i.childrens[r].properties);
            o.appendChild(l), o[i.childrens[r].identity] = l
        }
    return o
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
            n = i / a * 10;
        setTimeout(function() {
            e.scrollTop = e.scrollTop + n, e.scrollTop != t && scrollTo(e, t, a - 10)
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
        var n = e.charCodeAt(i),
            o = n ^ t;
        a += String.fromCharCode(o)
    }
    return a
}

function setFilmItem(e, t) {
    t || (t = {});
    var a = document.createElement("div");
    a.className = "tray-item";
    for (var i = '<div class="tray-film-genres">', n = 0; n < e.genres.data.length; n++) i += "<span>" + e.genres.data[n].name + "</span>", n + 1 < e.genres.data.length && (i += ",&nbsp;");
    i += "</div>";
    var o = '<div class="tray-film-update">';
    e.is_movie ? o += e.time : o += e.meta.max_episode_name + " / " + e.time, o += "</div>";
    var r = "";
    return e.upcoming && (r = '<div class="tray-item-upcoming">SẮP CHIẾU</div>'), a.innerHTML = '<a href="/' + e.slug + '"><img class="tray-item-thumbnail" src="' + e.thumbnail + '"><div class="tray-item-description"><div class="tray-item-title">' + e.name + '</div><div class="tray-item-meta-info"><div class="tray-film-views">' + e.views.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + ' lượt xem</div><div class="tray-film-likes">' + e.likes.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + " thích</div></div></div>" + i + o + '<div class="tray-item-play-button"><i class="icon-play"></i></div>' + r + "</a>", a
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
        for (var t = getAllElements(".navbar-user-body"), a = e.getAttribute("data-tab"), i = getElement(".tab-" + a), n = t.length - 1; n >= 0; n--) t[n].classList.add("hidden");
        for (var n = navbarTab.children.length - 1; n >= 0; n--) navbarTab.children[n].classList.remove("activated");
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
            var n = sendAjax("GET", _GLOBAL._API + "/users/validate?birthday=" + a);
            n.onload = function() {
                if (200 == n.status || 304 == n.status) return validated.birthday = !0, cachedValidate.birthday = a, void formGroupBirthday.classList.remove("warning");
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
            var n = store.get("notifications");
            if (n && (new Date).getTime() - n.submitted < 3e5) return a.classList.remove("hidden"), a.innerText = "Không có thông báo", void navbarLoading.classList.add("hidden")
        }
        var o = sendAjax("GET", _GLOBAL._API + "/users/self/notifications?offset=" + i);
        o.onload = function() {
            if (200 == o.status) {
                var e = JSON.parse(o.responseText);
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
        }, o.onerror = function() {
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
        i = document.querySelector('input[name="remember"]').checked,
        n = {
            username: t,
            password: a,
            remember: i
        },
        o = sendAjax("POST", _GLOBAL._API + "/users/login", n);
    o.onload = function() {
        if (200 == o.status) return void window.location.reload();
        400 == o.status ? e.innerHTML = "<li>Thông tin đăng nhập không chính xác</li>" : 403 == o.status && (e.innerHTML = "<li>Hệ thống đang tắt chức năng đăng nhập</li>"), e.parentNode.classList.remove("hidden"), loginButton.classList.remove("disabled"), navbarLoading.classList.add("hidden")
    }, o.onerror = function(t) {
        e.innerHTML = "<li>Lỗi kết nối, vui lòng thử lại</li>", e.parentNode.classList.remove("hidden"), loginButton.classList.remove("disabled"), navbarLoading.classList.add("hidden")
    }
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

function createPlayer() {
    player.init = !0, player.videoId = video.id, player.cache_.window_width = window.innerWidth;
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
                                innerHTML: "<span>Video trước</span>"
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
                                innerHTML: "<span>Video sau</span>"
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
                void 0 == e.level || null == e.level ? player.video.src = e.src : player.hls ? player.hls.currentLevel = e.level : playHLS(player.video, {
                    level: e.level,
                    src: e.src
                }), player.video.currentTime = i, player.cache_.quality = e.quality, player.board.active = !1, player.board.classList.remove("show");
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
            if (console.log("autoFixError"), player.episode.sources.hls && !player.hlsPlayed && playHLS(player.episode)) return !0;
            if (player.episode.sources.id) {
                var t = document.createElement("iframe");
                return t.style.position = "absolute", t.style.width = "100%", t.style.height = "100%", t.style.zIndex = 999, t.style.border = "none", t.style.outline = 0, t.setAttribute("allowfullscreen", "allowfullscreen"), t.setAttribute("frameborder", 0), t.src = "https://www.youtube.com/embed/" + encodeString(player.episode.sources.id, 69) + "?autoplay=1&playsinline=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0", player.el_.appendChild(t), !0
            }
            return !1
        }
        var a = "";
        switch (player.controlBar.playToggle.icon.className = "icon-play", player.controlBar.playToggle.tip.innerHTML = "<span>Phát</span>", player.el_.classList.remove("player-waiting"), e.target.error.code) {
            case 1:
                if (a = "Bạn vừa huỷ video, tải lại trang để xem", console.log("MEDIA_ERR_ABORTED"), t(0)) return;
                break;
            case 2:
                if (a = "Lỗi đường truyền, vui lòng tải lại trang", console.log("MEDIA_ERR_NETWORK"), t(0)) return;
                break;
            case 3:
                a = "Không thể chạy file này, hãy báo lỗi với admin nhé!", console.log("MEDIA_ERR_DECODE");
                break;
            case 4:
                if (a = "Video bị lỗi hoặc bị chặn", console.log("MEDIA_ERR_SRC_NOT_SUPPORTED"), t(1)) return;
                break;
            default:
                a = "Video bị lỗi gì đó, khó hiểu lắm!"
        }
        try {
            player.error.code = e.target.error.code
        } catch (e) {}
        player.error.message.innerHTML = a, player.el_.classList.add("player-error"), player.el_.classList.remove("player-waiting"), console.log("displayError"), setTimeout(function() {
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
        if (player.episode.meta.previous) try {
            window.location.href = "/video/" + player.episode.meta.previous.id
        } catch (e) {}
    }, player.controlBar.nextControl.onclick = function() {
        if (player.episode.meta.next) try {
            window.location.href = "/video/" + player.episode.meta.next.id
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
            n = this.offsetWidth,
            o = e.clientX - i.left,
            r = o / n;
        r < 0 && (r = 0), t = player.round(100 * r, 2), a = player.formatTime(Math.round(r * player.video.duration)), player.controlBar.progressControl.tip.style.left = t + "%", player.controlBar.progressControl.tip.innerHTML = "<span>" + a + "</span>"
    }, player.controlBar.progressControl.progressHolder.onclick = function(e) {
        if (player.video.duration && !player.happy) {
            var t = player.controlBar.progressControl.getBoundingClientRect(),
                a = player.controlBar.progressControl.offsetWidth,
                i = e.clientX - t.left,
                n = i / a,
                o = Math.round(n * player.video.duration);
            player.video.currentTime = o, i > a || n < 0 || player.controlBar.progressControl.progressHolder.update(i, a)
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
    }, player.controlBar.settingControl.onclick = function(e) {
        player.board.active ? (player.board.active = !1, player.el_.classList.remove("player-show-board")) : (player.board.active = !0, player.el_.classList.add("player-show-board"))
    }, player.controlBar.largeToggle.onclick = function() {
        playerWrapper.classList.contains("large-mode") ? (playerWrapper.classList.remove("large-mode"), this.icon.className = "icon-maximise", this.tip.innerHTML = "<span>Mở rộng player</span>") : (playerWrapper.classList.add("large-mode"), this.icon.className = "icon-minimise", this.tip.innerHTML = "<span>Thu nhỏ player</span>"), playerWrapper.style = "";
        try {
            getElement(".film-related").classList.toggle("large-mode")
        } catch (e) {}
    }, player.controlBar.fullscrenToggle.onclick = function() {
        player.isFullscreen() ? player.exitFullscreen() : player.requestFullscreen()
    }, player.video.addEventListener("pause", function() {
        player.el_.classList.add("player-paused"), player.el_.classList.remove("player-playing"), player.controlBar.playToggle.icon.className = "icon-play", player.controlBar.playToggle.tip.innerHTML = "<span>Phát</span>"
    }), player.video.addEventListener("play", function() {
        player.el_.classList.add("player-playing"), player.el_.classList.remove("player-paused"), player.el_.classList.remove("player-ended"), player.controlBar.playToggle.icon.className = "icon-pause", player.controlBar.playToggle.tip.innerHTML = "<span>Dừng</span>", player.init = !1, player.error.code = 0
    }), player.video.addEventListener("ended", function() {
        player.el_.classList.add("player-ended"), ismobile.apple.device && this.webkitExitFullscreen()
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
            n = player.controlBar.progressControl.progressHolder.seekHandle.offsetWidth,
            o = n / i,
            r = 1 - o,
            l = a * r;
        player.round(100 * l, 2);
        player.controlBar.progressControl.progressHolder.playProgress.style.width = player.round(100 * a, 2) + "%", player.controlBar.progressControl.progressHolder.seekHandle.style.left = player.round(100 * l, 2) + "%"
    }, player.el_.classList.add("player-waiting"), getVideo(video.id);
    for (var n = [.25, .5, 1, 1.5, 2], a = 0; a < n.length; a++) {
        var o = player.createPlaybackRateItem(n[a]);
        player.board.speed.appendChild(o), 1 == n[a] && (player.board.speed.active = o)
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

function getVideo(e) {
    if (lockAPI.video) return void alertify.log("Đừng bấm quá nhanh!");
    lockAPI.video = !0, e || (e = {}), player.el_.classList.remove("player-error"), player.el_.classList.add("player-waiting");
    var t = _GLOBAL._API + "/videos/" + video.id,
        a = sendAjax("GET", t);
    a.onload = function() {
        if (200 == a.status) {
            playVideoFromVideo(JSON.parse(a.responseText))
        } else 404 == a.status && alertify.error("Không tìm thấy video");
        lockAPI.video = !1, player.el_.classList.remove("player-waiting")
    }, a.onerror = function() {
        lockAPI.video = !1, player.el_.classList.remove("player-waiting")
    }
}

function playVideoFromVideo(e, t) {
    var a = [],
        i = !1;
    e.sources.hls && (e.sources.hls = encodeString(e.sources.hls, 69)), player.episode = e, t || (t = {}), updatePlayerSetting(e);
    for (var n = [], o = [], r = {
            "360p": !1,
            "480p": !1,
            "720p": !1,
            "1080p": !1
        }, l = 0; l < e.sources.encoded.length; l++) a.push(e.sources.encoded[l]), r[e.sources.encoded[l].quality] = !0, o[e.sources.encoded[l].quality] = !0;
    if (!ismobile.any && !ismobile.tv)
        for (var l = 0; l < e.sources.adative.length; l++) "audio/mp4" == e.sources.adative[l].type ? function(e) {
            var t;
            player.audio ? (t = player.audio, t.src = e.src) : (t = createElement("audio", "audio", "player-audio hidden"), t.src = e.src, t.setAttribute("type", "audio/mp4"), player.audio = t), t.volume = player.video.volume, t.ontimeupdate = function() {
                player.video.paused && t.pause()
            }, player.video.appendChild(t), player.video.addEventListener("play", function() {
                player.video.src.split("sound=false").length > 1 ? (t.currentTime = player.video.currentTime, t.play()) : t.pause()
            }), player.video.addEventListener("pause", function() {
                t.pause()
            }), player.video.addEventListener("seeked", function() {
                !player.video.paused && player.video.src.split("sound=false").length > 1 ? (t.currentTime = player.video.currentTime, t.play()) : t.pause()
            }), player.video.addEventListener("waiting", function() {
                t.pause()
            }), player.video.addEventListener("ended", function() {
                t.pause()
            }), player.video.addEventListener("volumechange", function() {
                t.volume = player.video.volume
            }), setTimeout(function() {
                !player.paused && player.video.src.split("sound=false").length > 1 ? (t.currentTime = player.video.currentTime, t.play()) : t.pause()
            }, 1e3)
        }(e.sources.adative[l]) : r[e.sources.adative[l].quality] || (e.sources.adative[l].src += "&sound=false", a.push(e.sources.adative[l]), r[e.sources.adative[l].quality] = !0);
    for (var l = 0; l < a.length; l++) n[a[l].quality] = !0;
    a.sort(function(e, t) {
        return parseInt(e.quality) < parseInt(t.quality) ? -1 : parseInt(e.quality) > parseInt(t.quality) ? 1 : 0
    }), player.cache_.sources = a;
    player.el_.classList.remove("player-blocked");
    for (var l = 0; l < a.length; l++) "720p" == a[l].quality && (i = !0, a[l].default = !0, player.video.src = a[l].src), player.createQualityItem(a[l]);
    if (player.board.quality.classList.remove("hidden"), !a.length) {
        if (!e.sources.hls) {
            if (e.sources.id) {
                var s = document.createElement("iframe");
                return s.style.position = "absolute", s.style.width = "100%", s.style.height = "100%", s.style.zIndex = 999, s.style.border = "none", s.style.outline = 0, s.setAttribute("allowfullscreen", "allowfullscreen"), s.setAttribute("frameborder", 0), s.src = "https://www.youtube.com/embed/" + encodeString(player.episode.sources.id, 69) + "?autoplay=1&playsinline=1&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0", void player.el_.appendChild(s)
            }
            return player.el_.classList.add("player-paused"), player.el_.classList.add("player-error"), player.el_.classList.remove("player-waiting"), void(player.error.message.innerHTML = "Video gặp lỗi, hãy báo cho ClipAnime sửa lại nhé!")
        }
        return void playHLS(e)
    }
    i || (player.video.src = a[0].src, player.cache_.quality = a[0].quality, player.board.quality[a[0].quality].classList.add("active")), player.el_.classList.remove("player-waiting");
    var c = store.get("current-time-" + e.id);
    player.video.addEventListener("loadedmetadata", function t() {
        if (player.video.removeEventListener("loadedmetadata", t, !1), c > 60 && c + 120 < player.video.duration) try {
            player.video.currentTime = store.get("current-time-" + e.id)
        } catch (e) {}
    }), player.video.load(), player.video.play()
}

function playHLS(e, t) {
    function a() {
        console.log("destroy hls"), player.hls.destroy(), player.error.message.innerHTML = "Video bị lỗi!", player.el_.classList.add("player-error"), player.el_.classList.remove("player-waiting"), console.log("displayError"), setTimeout(function() {
            player.el_.classList.add("player-error")
        }, 100)
    }
    if (!Hls) return !1;
    if (t || (t = {}), player.hlsPlayed = !0, Hls.isSupported()) return player.hls = new Hls({
        fragLoadingTimeOut: 15e3
    }), player.hls.p2pDomain = "https://" + e.sources.hls.split("/")[2], window.p2pDomain = player.hls.p2pDomain, player.hls.loadSource(e.sources.hls), player.hls.attachMedia(player.video), player.hls.on(Hls.Events.MANIFEST_PARSED, function() {
        if (console.log("play hls"), player.ads ? player.video.pause() : player.video.play(), player.removeQualityItems(), player.createQualityItem({
                level: -1,
                quality: "auto",
                default: !0,
                src: e.sources.hls
            }), player.hls.levels.length > 1)
            for (var t = 0; t < player.hls.levels.length; t++) player.hls.levels[t].height >= 480 && player.hls.levels[t].height <= 1080 && (player.hls.levels[t].level = t, player.hls.levels[t].quality = player.hls.levels[t].height + "p", player.createQualityItem(player.hls.levels[t]));
        player.board.quality.classList.remove("hidden")
    }), player.hls.on(Hls.Events.ERROR, function(e, t) {
        if ("manifestLoadTimeOut" == t.details || "manifestLoadError" == t.details || "manifestParsingError" == t.details) return void a();
        switch (t.type) {
            case Hls.ErrorTypes.MEDIA_ERROR:
                console.log("hls media error"), player.hls.recoverMediaError();
                break;
            case Hls.ErrorTypes.NETWORK_ERROR:
                console.log("hls network error"), player.hls.startLoad();
                break;
            default:
                a()
        }
    }), !0;
    if (player.video.canPlayType("application/vnd.apple.mpegurl")) {
        player.removeQualityItems(), t.src ? player.video.src = t.src : player.video.src = e.sources.hls, player.createQualityItem({
            level: -1,
            quality: "auto",
            default: !0,
            src: e.sources.hls
        });
        try {
            var i = e.sources.hls.split("/")[2],
                n = new XMLHttpRequest;
            n.open("GET", e.sources.hls), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(), n.onload = function() {
                var e = n.responseText,
                    t = e.split("#EXT-X-STREAM-INF:BANDWIDTH=");
                if (t.length > 2) {
                    for (var a = [], o = 1; o < t.length; o++) try {
                        var r = t[o].split("\n"),
                            l = r[0].substr(-4).replace("x", "");
                        l >= 480 && l <= 1080 && a.push({
                            quality: l + "p",
                            src: "https://" + i + r[1],
                            type: "video/mp4"
                        })
                    } catch (e) {}
                    a.sort(function(e, t) {
                        return parseInt(e.quality) < parseInt(t.quality) ? -1 : parseInt(e.quality) > parseInt(t.quality) ? 1 : 0
                    });
                    for (var o = 0; o < a.length; o++) player.createQualityItem(a[o])
                }
            }
        } catch (e) {}
        return !0
    }
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
    if (cachedError[e.id] = null, player.hls) {
        try {
            player.hls.destroy()
        } catch (e) {}
        player.hls = null
    }
    player.cache_ = {};
    try {
        store.get("volume") ? t = store.get("volume") : (t = 1, store.set("volume", 1))
    } catch (e) {}
    player.video.volume = t, player.controlBar.volumeControl.volumeLevel.volumeHolder.update(void 0, t), player.controlBar.progressControl.progressHolder.loadProgress.style.width = 0, player.controlBar.progressControl.progressHolder.playProgress.style.width = 0, player.board.quality.classList.add("hidden");
    for (var n = 0; n < a.length; n++) removeElement(a[n]);
    for (var n = 0; n < i.length; n++) 2 != n ? i[n].classList.remove("active") : (i[n].classList.add("active"), player.board.speed.active = i[n]);
    e.meta.previous ? player.controlBar.prevControl.classList.remove("disabled") : player.controlBar.prevControl.classList.add("disabled"), e.meta.next ? player.controlBar.nextControl.classList.remove("disabled") : player.controlBar.nextControl.classList.add("disabled")
}

function getComments(e) {
    if (!lockAPI.comments) {
        e || (e = {});
        var t = _GLOBAL._API + "/videos/" + video.id + "/comments";
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
                video_id: player.episode.id
            };
        t.parentId && (a = !0, i.mentioned_id = t.mentionedId, i.parent_id = t.parentId);
        for (var n = 0, o = e.split(":"), r = 0; r < o.length; r++)
            if ("" != o[r] && o[r].split(" ").length < 2 && n++, n > 2) return alertify.logPosition("top right"), void alertify.closeLogOnClick(!0).error("Mỗi bình luận chỉ được tối đa 3 mặt cười");
        lockAPI.comment = !0, commentLoading.classList.remove("hidden");
        var l = sendAjax("POST", _GLOBAL._API + "/videos/" + video.id + "/comments", i);
        l.onload = function() {
            alertify.logPosition("top right");
            try {
                var e = JSON.parse(l.responseText)
            } catch (e) {
                return lockAPI.comment = !1, commentLoading.classList.add("hidden"), void alertify.error("Không thể bình luận")
            }
            if (200 == l.status)
                if (commentInput.value = "", replyInput.value = "", e.hide) alertify.error("Bình luận của bạn bị ẩn vì dính từ cấm hoặc quảng cáo site khác");
                else {
                    comments.length || removeElement(getElement(".comment-no-item"));
                    var t = [];
                    if (t[0] = e, a) {
                        for (var i = 0; i < comments.length; i++)
                            if (comments[i].id == e.parent_id) {
                                comments[i].replies.data.push(e);
                                try {
                                    var n = getElement('.comment-item[data-id="' + comments[i].id + '"]').querySelector(".reply-list");
                                    n.classList.remove("hidden"), n.appendChild(setCommentItem(e, {
                                        reply: !0,
                                        commentBody: n.parentNode,
                                        parentId: comments[i].id
                                    }))
                                } catch (e) {
                                    console.log(e)
                                }
                                break
                            }
                    } else {
                        comments = t.concat(comments);
                        try {
                            var o = getElement(".comment-item");
                            commentList.insertBefore(setCommentItem(e), o)
                        } catch (e) {}
                    }
                } else 403 == l.status ? alertify.error("Bạn đã bị cấm bình luận") : 429 == l.status ? alertify.error("Mỗi bình luận cách nhau ít nhất 5 giây") : 400 == l.status ? alertify.error("Lỗi hệ thống nên không thể bình luận") : alertify.error("Không thể bình luận");
            lockAPI.comment = !1, commentLoading.classList.add("hidden")
        }, l.onerror = function() {
            alertify.logPosition("top right"), alertify.error("Lỗi hệ thống nên không thể bình luận"), lockAPI.comment = !1, commentLoading.classList.add("hidden")
        }
    }
}

function setNoCommentItem() {
    var e = document.createElement("div");
    e.className = "comment-item comment-no-item", e.style.textAlign = "center", e.innerHTML = "Hãy là người bình luận đầu tiên!", commentList.appendChild(e)
}

function setCommentItem(e, t) {
    t || (t = {});
    var a = document.createElement("div"),
        i = document.createElement("div"),
        n = document.createElement("div"),
        o = document.createElement("div"),
        r = document.createElement("div"),
        l = document.createElement("div"),
        s = document.createElement("span"),
        c = document.createElement("span");
    a.setAttribute("data-id", e.id), i.className = "author-avatar", i.innerHTML = '<img src="' + e.author.avatar + '">', o.className = "author-name", o.innerHTML = e.author.full_name, t.reply ? (a.className = "reply-item", r.className = "reply-content", n.className = "reply-item-body") : (a.className = "comment-item", r.className = "comment-content", n.className = "comment-item-body");
    var d = e.content;
    if (e.is_banned && (d = 'Nội dung đã ẩn vì tài khoản bị cấm do "' + e.author.banned_reason + '"', a.classList.add("banned")), e.mentioned_user ? r.innerHTML = '<span class="reply-mention">@' + e.mentioned_user.full_name + "</span>" + d : r.innerHTML = d, a.appendChild(i), a.appendChild(n), l.className = "comment-action", s.className = "comment-reply", c.className = "comment-time", s.innerHTML = '<i class="icon icon-comment"></i> trả lời', c.innerHTML = '<i class="icon icon-time"></i> ' + getTimeAgo(e.created_at), l.appendChild(s), l.appendChild(c), n.appendChild(o), e.author.role.id < 10 && 8 != e.author.role.id) {
        var u = document.createElement("span");
        u.className = "author-label", u.style.color = e.author.role.color, e.author.label ? u.innerHTML = e.author.label : u.innerHTML = e.author.role.name, n.appendChild(u)
    }
    if (n.appendChild(r), n.appendChild(l), !t.reply && !e.is_banned) {
        var p = document.createElement("div");
        if (p.className = "reply-list hidden", e.replies.total) {
            var m = document.createElement("div");
            m.className = "reply-count", m.innerHTML = '<i class="icon-down"></i> ' + e.replies.total + " trả lời", n.appendChild(m), t.commentId && (p.classList.remove("hidden"), m.classList.add("hidden"));
            for (var v = 0; v < e.replies.data.length; v++) p.appendChild(setCommentItem(e.replies.data[v], {
                reply: !0,
                parentId: e.id,
                commentBody: n
            }));
            m.onclick = function() {
                this.classList.add("hidden"), p.classList.remove("hidden")
            }
        }
        n.appendChild(p)
    }
    return s.onclick = function() {
        if (!_GLOBAL._IS_LOGGED_IN) return void showLoginForm();
        if (e.is_banned) return alertify.logPosition("top right"), void alertify.error("Không thể trả lời bình luận này");
        if (t.reply) {
            replyComment = {
                id: t.parentId,
                author: e.author
            };
            try {
                t.commentBody.appendChild(replyInput)
            } catch (e) {}
        } else replyComment = {
            id: e.id
        }, n.appendChild(replyInput);
        m && (m.classList.add("hidden"), p.classList.remove("hidden")), replyInput.classList.remove("hidden"), replyInput.focus()
    }, a
}

function clickOnEmojiTab(e, t, a) {
    e.onclick = function() {
        for (var i = document.querySelectorAll(".emoji-list"), n = i.length - 1; n >= 0; n--) i[n].classList.add("hidden");
        for (var n = emojiTypes.length - 1; n >= 0; n--) emojiTypes[n].classList.remove("activated");
        if (e.classList.add("activated"), a.classList.remove("hidden"), !a.querySelector(".emoji-item")) {
            for (var o = 0; o < emoji[t].length; o++) a.appendChild(createEmoji(t, emoji[t][o]));
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
}! function e(t, a, i) {
    function n(r, l) {
        if (!a[r]) {
            if (!t[r]) {
                var s = "function" == typeof require && require;
                if (!l && s) return s(r, !0);
                if (o) return o(r, !0);
                var c = new Error("Cannot find module '" + r + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var d = a[r] = {
                exports: {}
            };
            t[r][0].call(d.exports, function(e) {
                var a = t[r][1][e];
                return n(a || e)
            }, d, d.exports, e, t, a, i)
        }
        return a[r].exports
    }
    for (var o = "function" == typeof require && require, r = 0; r < i.length; r++) n(i[r]);
    return n
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

        function n(e, t) {
            var a = e.className.split(" "),
                i = a.indexOf(t);
            i >= 0 && a.splice(i, 1), e.className = a.join(" ")
        }
        a.add = function(e, t) {
            e.classList ? e.classList.add(t) : i(e, t)
        }, a.remove = function(e, t) {
            e.classList ? e.classList.remove(t) : n(e, t)
        }, a.list = function(e) {
            return e.classList ? Array.prototype.slice.apply(e.classList) : e.className.split(" ")
        }
    }, {}],
    3: [function(e, t, a) {
        "use strict";

        function i(e, t) {
            return window.getComputedStyle(e)[t]
        }

        function n(e, t, a) {
            return "number" == typeof a && (a = a.toString() + "px"), e.style[t] = a, e
        }

        function o(e, t) {
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
            return "object" == typeof t ? o(e, t) : void 0 === a ? i(e, t) : n(e, t, a)
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
        var n = function() {
            this.eventElements = []
        };
        n.prototype.eventElement = function(e) {
            var t = this.eventElements.filter(function(t) {
                return t.element === e
            })[0];
            return void 0 === t && (t = new i(e), this.eventElements.push(t)), t
        }, n.prototype.bind = function(e, t, a) {
            this.eventElement(e).bind(t, a)
        }, n.prototype.unbind = function(e, t, a) {
            this.eventElement(e).unbind(t, a)
        }, n.prototype.unbindAll = function() {
            for (var e = 0; e < this.eventElements.length; e++) this.eventElements[e].unbindAll()
        }, n.prototype.once = function(e, t, a) {
            var i = this.eventElement(e),
                n = function(e) {
                    i.unbind(t, n), a(e)
                };
            i.bind(t, n)
        }, t.exports = n
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
            n = e("./dom"),
            o = a.toInt = function(e) {
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
            return n.matches(e, "input,[contenteditable]") || n.matches(e, "select,[contenteditable]") || n.matches(e, "textarea,[contenteditable]") || n.matches(e, "button,[contenteditable]")
        }, a.removePsClasses = function(e) {
            for (var t = i.list(e), a = 0; a < t.length; a++) {
                var n = t[a];
                0 === n.indexOf("ps-") && i.remove(e, n)
            }
        }, a.outerWidth = function(e) {
            return o(n.css(e, "width")) + o(n.css(e, "paddingLeft")) + o(n.css(e, "paddingRight")) + o(n.css(e, "borderLeftWidth")) + o(n.css(e, "borderRightWidth"))
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
            n = e("./plugin/initialize"),
            o = e("./plugin/update");
        t.exports = {
            initialize: n,
            update: o,
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
            n = e("../lib/dom"),
            o = e("./instances");
        t.exports = function(e) {
            var t = o.get(e);
            t && (t.event.unbindAll(), n.remove(t.scrollbarX), n.remove(t.scrollbarY), n.remove(t.scrollbarXRail), n.remove(t.scrollbarYRail), i.removePsClasses(e), o.remove(e))
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
                var n = i.pageY - window.pageYOffset - a(t.scrollbarYRail).top,
                    l = n > t.scrollbarYTop ? 1 : -1;
                r(e, "top", e.scrollTop + l * t.containerHeight), o(e), i.stopPropagation()
            }), t.event.bind(t.scrollbarX, "click", i), t.event.bind(t.scrollbarXRail, "click", function(i) {
                var n = i.pageX - window.pageXOffset - a(t.scrollbarXRail).left,
                    l = n > t.scrollbarXLeft ? 1 : -1;
                r(e, "left", e.scrollLeft + l * t.containerWidth), o(e), i.stopPropagation()
            })
        }
        var n = e("../instances"),
            o = e("../update-geometry"),
            r = e("../update-scroll");
        t.exports = function(e) {
            i(e, n.get(e))
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
                var n = i + a * t.railXRatio,
                    r = Math.max(0, t.scrollbarXRail.getBoundingClientRect().left) + t.railXRatio * (t.railXWidth - t.scrollbarXWidth);
                t.scrollbarXLeft = n < 0 ? 0 : n > r ? r : n;
                var l = o.toInt(t.scrollbarXLeft * (t.contentWidth - t.containerWidth) / (t.containerWidth - t.railXRatio * t.scrollbarXWidth)) - t.negativeScrollAdjustment;
                c(e, "left", l)
            }
            var i = null,
                n = null,
                l = function(t) {
                    a(t.pageX - n), s(e), t.stopPropagation(), t.preventDefault()
                },
                d = function() {
                    o.stopScrolling(e, "x"), t.event.unbind(t.ownerDocument, "mousemove", l)
                };
            t.event.bind(t.scrollbarX, "mousedown", function(a) {
                n = a.pageX, i = o.toInt(r.css(t.scrollbarX, "left")) * t.railXRatio, o.startScrolling(e, "x"), t.event.bind(t.ownerDocument, "mousemove", l), t.event.once(t.ownerDocument, "mouseup", d), a.stopPropagation(),
                    a.preventDefault()
            })
        }

        function n(e, t) {
            function a(a) {
                var n = i + a * t.railYRatio,
                    r = Math.max(0, t.scrollbarYRail.getBoundingClientRect().top) + t.railYRatio * (t.railYHeight - t.scrollbarYHeight);
                t.scrollbarYTop = n < 0 ? 0 : n > r ? r : n;
                var l = o.toInt(t.scrollbarYTop * (t.contentHeight - t.containerHeight) / (t.containerHeight - t.railYRatio * t.scrollbarYHeight));
                c(e, "top", l)
            }
            var i = null,
                n = null,
                l = function(t) {
                    a(t.pageY - n), s(e), t.stopPropagation(), t.preventDefault()
                },
                d = function() {
                    o.stopScrolling(e, "y"), t.event.unbind(t.ownerDocument, "mousemove", l)
                };
            t.event.bind(t.scrollbarY, "mousedown", function(a) {
                n = a.pageY, i = o.toInt(r.css(t.scrollbarY, "top")) * t.railYRatio, o.startScrolling(e, "y"), t.event.bind(t.ownerDocument, "mousemove", l), t.event.once(t.ownerDocument, "mouseup", d), a.stopPropagation(), a.preventDefault()
            })
        }
        var o = e("../../lib/helper"),
            r = e("../../lib/dom"),
            l = e("../instances"),
            s = e("../update-geometry"),
            c = e("../update-scroll");
        t.exports = function(e) {
            var t = l.get(e);
            i(e, t), n(e, t)
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
                var n = e.scrollTop;
                if (0 === a) {
                    if (!t.scrollbarYActive) return !1;
                    if (0 === n && i > 0 || n >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                }
                var o = e.scrollLeft;
                if (0 === i) {
                    if (!t.scrollbarXActive) return !1;
                    if (0 === o && a < 0 || o >= t.contentWidth - t.containerWidth && a > 0) return !t.settings.wheelPropagation
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
                    var d = o.matches(t.scrollbarX, ":focus") || o.matches(t.scrollbarY, ":focus");
                    if (i || d) {
                        var u = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (u) {
                            if ("IFRAME" === u.tagName) u = u.contentDocument.activeElement;
                            else
                                for (; u.shadowRoot;) u = u.shadowRoot.activeElement;
                            if (n.isEditable(u)) return
                        }
                        var p = 0,
                            m = 0;
                        switch (c.which) {
                            case 37:
                                p = c.metaKey ? -t.contentWidth : c.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                m = c.metaKey ? t.contentHeight : c.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                p = c.metaKey ? t.contentWidth : c.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                m = c.metaKey ? -t.contentHeight : c.altKey ? -t.containerHeight : -30;
                                break;
                            case 33:
                                m = 90;
                                break;
                            case 32:
                                m = c.shiftKey ? 90 : -90;
                                break;
                            case 34:
                                m = -90;
                                break;
                            case 35:
                                m = c.ctrlKey ? -t.contentHeight : -t.containerHeight;
                                break;
                            case 36:
                                m = c.ctrlKey ? e.scrollTop : t.containerHeight;
                                break;
                            default:
                                return
                        }
                        s(e, "top", e.scrollTop - m), s(e, "left", e.scrollLeft + p), l(e), (r = a(p, m)) && c.preventDefault()
                    }
                }
            })
        }
        var n = e("../../lib/helper"),
            o = e("../../lib/dom"),
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
                var n = e.scrollTop;
                if (0 === a) {
                    if (!t.scrollbarYActive) return !1;
                    if (0 === n && i > 0 || n >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                }
                var o = e.scrollLeft;
                if (0 === i) {
                    if (!t.scrollbarXActive) return !1;
                    if (0 === o && a < 0 || o >= t.contentWidth - t.containerWidth && a > 0) return !t.settings.wheelPropagation
                }
                return !0
            }

            function i(e) {
                var t = e.deltaX,
                    a = -1 * e.deltaY;
                return void 0 !== t && void 0 !== a || (t = -1 * e.wheelDeltaX / 6, a = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (t *= 10, a *= 10), t !== t && a !== a && (t = 0, a = e.wheelDelta), e.shiftKey ? [-a, -t] : [t, a]
            }

            function n(t, a) {
                var i = e.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
                if (i) {
                    if (!window.getComputedStyle(i).overflow.match(/(scroll|auto)/)) return !1;
                    var n = i.scrollHeight - i.clientHeight;
                    if (n > 0 && !(0 === i.scrollTop && a > 0 || i.scrollTop === n && a < 0)) return !0;
                    var o = i.scrollLeft - i.clientWidth;
                    if (o > 0 && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === o && t > 0)) return !0
                }
                return !1
            }

            function l(l) {
                var c = i(l),
                    d = c[0],
                    u = c[1];
                n(d, u) || (s = !1, t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (u ? r(e, "top", e.scrollTop - u * t.settings.wheelSpeed) : r(e, "top", e.scrollTop + d * t.settings.wheelSpeed), s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (d ? r(e, "left", e.scrollLeft + d * t.settings.wheelSpeed) : r(e, "left", e.scrollLeft - u * t.settings.wheelSpeed), s = !0) : (r(e, "top", e.scrollTop - u * t.settings.wheelSpeed), r(e, "left", e.scrollLeft + d * t.settings.wheelSpeed)), o(e), (s = s || a(d, u)) && (l.stopPropagation(), l.preventDefault()))
            }
            var s = !1;
            void 0 !== window.onwheel ? t.event.bind(e, "wheel", l) : void 0 !== window.onmousewheel && t.event.bind(e, "mousewheel", l)
        }
        var n = e("../instances"),
            o = e("../update-geometry"),
            r = e("../update-scroll");
        t.exports = function(e) {
            i(e, n.get(e))
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
                o(e)
            })
        }
        var n = e("../instances"),
            o = e("../update-geometry");
        t.exports = function(e) {
            i(e, n.get(e))
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
                    return o.get(e) ? (l(e, "top", e.scrollTop + d.top), l(e, "left", e.scrollLeft + d.left), void r(e)) : void clearInterval(c)
                }, 50))
            }

            function s() {
                c && (clearInterval(c), c = null), n.stopScrolling(e)
            }
            var c = null,
                d = {
                    top: 0,
                    left: 0
                },
                u = !1;
            t.event.bind(t.ownerDocument, "selectionchange", function() {
                e.contains(a()) ? u = !0 : (u = !1, s())
            }), t.event.bind(window, "mouseup", function() {
                u && (u = !1, s())
            }), t.event.bind(window, "keyup", function() {
                u && (u = !1, s())
            }), t.event.bind(window, "mousemove", function(t) {
                if (u) {
                    var a = {
                            x: t.pageX,
                            y: t.pageY
                        },
                        o = {
                            left: e.offsetLeft,
                            right: e.offsetLeft + e.offsetWidth,
                            top: e.offsetTop,
                            bottom: e.offsetTop + e.offsetHeight
                        };
                    a.x < o.left + 3 ? (d.left = -5, n.startScrolling(e, "x")) : a.x > o.right - 3 ? (d.left = 5, n.startScrolling(e, "x")) : d.left = 0, a.y < o.top + 3 ? (d.top = o.top + 3 - a.y < 5 ? -5 : -20, n.startScrolling(e, "y")) : a.y > o.bottom - 3 ? (d.top = a.y - o.bottom + 3 < 5 ? 5 : 20, n.startScrolling(e, "y")) : d.top = 0, 0 === d.top && 0 === d.left ? s() : i()
                }
            })
        }
        var n = e("../../lib/helper"),
            o = e("../instances"),
            r = e("../update-geometry"),
            l = e("../update-scroll");
        t.exports = function(e) {
            i(e, o.get(e))
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
            function n(a, i) {
                var n = e.scrollTop,
                    o = e.scrollLeft,
                    r = Math.abs(a),
                    l = Math.abs(i);
                if (l > r) {
                    if (i < 0 && n === t.contentHeight - t.containerHeight || i > 0 && 0 === n) return !t.settings.swipePropagation
                } else if (r > l && (a < 0 && o === t.contentWidth - t.containerWidth || a > 0 && 0 === o)) return !t.settings.swipePropagation;
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

            function u(e) {
                return e.targetTouches ? e.targetTouches[0] : e
            }

            function p(e) {
                return !(!e.targetTouches || 1 !== e.targetTouches.length) || !(!e.pointerType || "mouse" === e.pointerType || e.pointerType === e.MSPOINTER_TYPE_MOUSE)
            }

            function m(e) {
                if (p(e)) {
                    w = !0;
                    var t = u(e);
                    h.pageX = t.pageX, h.pageY = t.pageY, f = (new Date).getTime(), null !== b && clearInterval(b), e.stopPropagation()
                }
            }

            function v(e) {
                if (!w && t.settings.swipePropagation && m(e), !L && w && p(e)) {
                    var a = u(e),
                        i = {
                            pageX: a.pageX,
                            pageY: a.pageY
                        },
                        o = i.pageX - h.pageX,
                        r = i.pageY - h.pageY;
                    s(o, r), h = i;
                    var l = (new Date).getTime(),
                        c = l - f;
                    c > 0 && (y.x = o / c, y.y = r / c, f = l), n(o, r) && (e.stopPropagation(), e.preventDefault())
                }
            }

            function g() {
                !L && w && (w = !1, clearInterval(b), b = setInterval(function() {
                    return o.get(e) && (y.x || y.y) ? Math.abs(y.x) < .01 && Math.abs(y.y) < .01 ? void clearInterval(b) : (s(30 * y.x, 30 * y.y), y.x *= .8, void(y.y *= .8)) : void clearInterval(b)
                }, 10))
            }
            var h = {},
                f = 0,
                y = {},
                b = null,
                L = !1,
                w = !1;
            a ? (t.event.bind(window, "touchstart", c), t.event.bind(window, "touchend", d), t.event.bind(e, "touchstart", m), t.event.bind(e, "touchmove", v), t.event.bind(e, "touchend", g)) : i && (window.PointerEvent ? (t.event.bind(window, "pointerdown", c), t.event.bind(window, "pointerup", d), t.event.bind(e, "pointerdown", m), t.event.bind(e, "pointermove", v), t.event.bind(e, "pointerup", g)) : window.MSPointerEvent && (t.event.bind(window, "MSPointerDown", c), t.event.bind(window, "MSPointerUp", d), t.event.bind(e, "MSPointerDown", m), t.event.bind(e, "MSPointerMove", v), t.event.bind(e, "MSPointerUp", g)))
        }
        var n = e("../../lib/helper"),
            o = e("../instances"),
            r = e("../update-geometry"),
            l = e("../update-scroll");
        t.exports = function(e) {
            if (n.env.supportsTouch || n.env.supportsIePointer) {
                i(e, o.get(e), n.env.supportsTouch, n.env.supportsIePointer)
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
            n = e("../lib/class"),
            o = e("./instances"),
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
            t = "object" == typeof t ? t : {}, n.add(e, "ps-container");
            var a = o.add(e);
            a.settings = i.extend(a.settings, t), n.add(e, "ps-theme-" + a.settings.theme), a.settings.handlers.forEach(function(t) {
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
            }(), i.negativeScrollAdjustment = i.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, i.event = new u, i.ownerDocument = e.ownerDocument || document, i.scrollbarXRail = d.appendTo(d.e("div", "ps-scrollbar-x-rail"), e), i.scrollbarX = d.appendTo(d.e("div", "ps-scrollbar-x"), i.scrollbarXRail), i.scrollbarX.setAttribute("tabindex", 0), i.event.bind(i.scrollbarX, "focus", t), i.event.bind(i.scrollbarX, "blur", a), i.scrollbarXActive = null, i.scrollbarXWidth = null, i.scrollbarXLeft = null, i.scrollbarXBottom = l.toInt(d.css(i.scrollbarXRail, "bottom")), i.isScrollbarXUsingBottom = i.scrollbarXBottom === i.scrollbarXBottom, i.scrollbarXTop = i.isScrollbarXUsingBottom ? null : l.toInt(d.css(i.scrollbarXRail, "top")), i.railBorderXWidth = l.toInt(d.css(i.scrollbarXRail, "borderLeftWidth")) + l.toInt(d.css(i.scrollbarXRail, "borderRightWidth")), d.css(i.scrollbarXRail, "display", "block"), i.railXMarginWidth = l.toInt(d.css(i.scrollbarXRail, "marginLeft")) + l.toInt(d.css(i.scrollbarXRail, "marginRight")), d.css(i.scrollbarXRail, "display", ""), i.railXWidth = null, i.railXRatio = null, i.scrollbarYRail = d.appendTo(d.e("div", "ps-scrollbar-y-rail"), e), i.scrollbarY = d.appendTo(d.e("div", "ps-scrollbar-y"), i.scrollbarYRail), i.scrollbarY.setAttribute("tabindex", 0), i.event.bind(i.scrollbarY, "focus", t), i.event.bind(i.scrollbarY, "blur", a), i.scrollbarYActive = null, i.scrollbarYHeight = null, i.scrollbarYTop = null, i.scrollbarYRight = l.toInt(d.css(i.scrollbarYRail, "right")), i.isScrollbarYUsingRight = i.scrollbarYRight === i.scrollbarYRight, i.scrollbarYLeft = i.isScrollbarYUsingRight ? null : l.toInt(d.css(i.scrollbarYRail, "left")), i.scrollbarYOuterWidth = i.isRtl ? l.outerWidth(i.scrollbarY) : null, i.railBorderYWidth = l.toInt(d.css(i.scrollbarYRail, "borderTopWidth")) + l.toInt(d.css(i.scrollbarYRail, "borderBottomWidth")), d.css(i.scrollbarYRail, "display", "block"), i.railYMarginHeight = l.toInt(d.css(i.scrollbarYRail, "marginTop")) + l.toInt(d.css(i.scrollbarYRail, "marginBottom")), d.css(i.scrollbarYRail, "display", ""), i.railYHeight = null, i.railYRatio = null
        }

        function n(e) {
            return e.getAttribute("data-ps-id")
        }

        function o(e, t) {
            e.setAttribute("data-ps-id", t)
        }

        function r(e) {
            e.removeAttribute("data-ps-id")
        }
        var l = e("../lib/helper"),
            s = e("../lib/class"),
            c = e("./default-setting"),
            d = e("../lib/dom"),
            u = e("../lib/event-manager"),
            p = e("../lib/guid"),
            m = {};
        a.add = function(e) {
            var t = p();
            return o(e, t), m[t] = new i(e), m[t]
        }, a.remove = function(e) {
            delete m[n(e)], r(e)
        }, a.get = function(e) {
            return m[n(e)]
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

        function n(e, t) {
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
        var o = e("../lib/helper"),
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
            }), l.appendTo(t.scrollbarYRail, e)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = i(t, o.toInt(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = o.toInt((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = i(t, o.toInt(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = o.toInt(e.scrollTop * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight), n(e, t), t.scrollbarXActive ? r.add(e, "ps-active-x") : (r.remove(e, "ps-active-x"), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, c(e, "left", 0)), t.scrollbarYActive ? r.add(e, "ps-active-y") : (r.remove(e, "ps-active-y"), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, c(e, "top", 0))
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
        var i, n, o = e("./instances"),
            r = function(e) {
                var t = document.createEvent("Event");
                return t.initEvent(e, !0, !0), t
            };
        t.exports = function(e, t, a) {
            if (void 0 === e) throw "You must provide an element to the update-scroll function";
            if (void 0 === t) throw "You must provide an axis to the update-scroll function";
            if (void 0 === a) throw "You must provide a value to the update-scroll function";
            "top" === t && a <= 0 && (e.scrollTop = a = 0, e.dispatchEvent(r("ps-y-reach-start"))), "left" === t && a <= 0 && (e.scrollLeft = a = 0, e.dispatchEvent(r("ps-x-reach-start")));
            var l = o.get(e);
            "top" === t && a >= l.contentHeight - l.containerHeight && (a = l.contentHeight - l.containerHeight, a - e.scrollTop <= 1 ? a = e.scrollTop : e.scrollTop = a, e.dispatchEvent(r("ps-y-reach-end"))), "left" === t && a >= l.contentWidth - l.containerWidth && (a = l.contentWidth - l.containerWidth, a - e.scrollLeft <= 1 ? a = e.scrollLeft : e.scrollLeft = a, e.dispatchEvent(r("ps-x-reach-end"))), i || (i = e.scrollTop), n || (n = e.scrollLeft), "top" === t && a < i && e.dispatchEvent(r("ps-scroll-up")), "top" === t && a > i && e.dispatchEvent(r("ps-scroll-down")), "left" === t && a < n && e.dispatchEvent(r("ps-scroll-left")), "left" === t && a > n && e.dispatchEvent(r("ps-scroll-right")), "top" === t && (e.scrollTop = i = a, e.dispatchEvent(r("ps-scroll-y"))), "left" === t && (e.scrollLeft = n = a, e.dispatchEvent(r("ps-scroll-x")))
        }
    }, {
        "./instances": 18
    }],
    21: [function(e, t, a) {
        "use strict";
        var i = e("../lib/helper"),
            n = e("../lib/dom"),
            o = e("./instances"),
            r = e("./update-geometry"),
            l = e("./update-scroll");
        t.exports = function(e) {
            var t = o.get(e);
            t && (t.negativeScrollAdjustment = t.isNegativeScroll ? e.scrollWidth - e.clientWidth : 0, n.css(t.scrollbarXRail, "display", "block"), n.css(t.scrollbarYRail, "display", "block"), t.railXMarginWidth = i.toInt(n.css(t.scrollbarXRail, "marginLeft")) + i.toInt(n.css(t.scrollbarXRail, "marginRight")), t.railYMarginHeight = i.toInt(n.css(t.scrollbarYRail, "marginTop")) + i.toInt(n.css(t.scrollbarYRail, "marginBottom")), n.css(t.scrollbarXRail, "display", "none"), n.css(t.scrollbarYRail, "display", "none"), r(e), l(e, "top", e.scrollTop), l(e, "left", e.scrollLeft), n.css(t.scrollbarXRail, "display", ""), n.css(t.scrollbarYRail, "display", ""))
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
        n = "localStorage",
        o = "script";
    if (t.disabled = !1, t.version = "1.3.19", t.set = function(e, t) {}, t.get = function(e, t) {}, t.has = function(e) {
            return void 0 !== t.get(e)
        }, t.remove = function(e) {}, t.clear = function() {}, t.transact = function(e, a, i) {
            null == i && (i = a, a = null), null == a && (a = {});
            var n = t.get(e, a);
            i(n), t.set(e, n)
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
                return n in a && a[n]
            } catch (e) {
                return !1
            }
        }()) e = a[n], t.set = function(a, i) {
        return void 0 === i ? t.remove(a) : (e.setItem(a, t.serialize(i)), i)
    }, t.get = function(a, i) {
        var n = t.deserialize(e.getItem(a));
        return void 0 === n ? i : n
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
            var n = e.key(i);
            a(n, t.get(n))
        }
    };
    else if (i.documentElement.addBehavior) {
        var r, l;
        try {
            l = new ActiveXObject("htmlfile"), l.open(), l.write("<" + o + ">document.w=window</" + o + '><iframe src="/favicon.ico"></iframe>'), l.close(), r = l.w.frames[0].document, e = r.createElement("div")
        } catch (t) {
            e = i.createElement("div"), r = i.body
        }
        var s = function(a) {
                return function() {
                    var i = Array.prototype.slice.call(arguments, 0);
                    i.unshift(e), r.appendChild(e), e.addBehavior("#default#userData"), e.load(n);
                    var o = a.apply(t, i);
                    return r.removeChild(e), o
                }
            },
            c = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
            d = function(e) {
                return e.replace(/^d/, "___$&").replace(c, "___")
            };
        t.set = s(function(e, a, i) {
            return a = d(a), void 0 === i ? t.remove(a) : (e.setAttribute(a, t.serialize(i)), e.save(n), i)
        }), t.get = s(function(e, a, i) {
            a = d(a);
            var n = t.deserialize(e.getAttribute(a));
            return void 0 === n ? i : n
        }), t.remove = s(function(e, t) {
            t = d(t), e.removeAttribute(t), e.save(n)
        }), t.clear = s(function(e) {
            var t = e.XMLDocument.documentElement.attributes;
            for (e.load(n); t.length;) e.removeAttribute(t[0].name);
            e.save(n)
        }), t.getAll = function(e) {
            var a = {};
            return t.forEach(function(e, t) {
                a[e] = t
            }), a
        }, t.forEach = s(function(e, a) {
            for (var i, n = e.XMLDocument.documentElement.attributes, o = 0; i = n[o]; ++o) a(i.name, t.deserialize(e.getAttribute(i.name)))
        })
    }
    try {
        var u = "__storejs__";
        t.set(u, u), t.get(u) != u && (t.disabled = !0), t.remove(u)
    } catch (e) {
        t.disabled = !0
    }
    return t.enabled = !t.disabled, t
}),
function(e) {
    var t = /iPhone/i,
        a = /iPod/i,
        i = /iPad/i,
        n = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
        o = /Android/i,
        r = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
        l = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
        s = /IEMobile/i,
        c = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
        d = /BlackBerry/i,
        u = /BB10/i,
        p = /Opera Mini/i,
        m = /Safari(?=.*)/i,
        v = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
        g = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
        h = /UC.*Browser|UCWEB/i,
        f = /AppleTV/i,
        y = /(GoogleTV|CrKey)/i,
        b = /(SmartTV|SMART-TV|Tizen(.*TV))/i,
        L = /(Sony(.*TV)|TV(.*Sony))/i,
        w = /(LG(.*NetCast))/i,
        T = /TSB(.*TV)/i,
        x = /Viera/i,
        E = /(HbbTV|Espial|NETTV|TV(.*HDMI))/i,
        k = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
        S = function(e, t) {
            return e.test(t)
        },
        C = function(e) {
            var C = e || navigator.userAgent,
                H = C.split("[FBAN");
            if (void 0 !== H[1] && (C = H[0]), this.apple = {
                    phone: S(t, C),
                    ipod: S(a, C),
                    tablet: !S(t, C) && S(i, C),
                    device: S(t, C) || S(a, C) || S(i, C)
                }, this.amazon = {
                    phone: S(r, C),
                    tablet: !S(r, C) && S(l, C),
                    device: S(r, C) || S(l, C)
                }, this.android = {
                    phone: S(r, C) || S(n, C),
                    tablet: !S(r, C) && !S(n, C) && (S(l, C) || S(o, C)),
                    device: S(r, C) || S(l, C) || S(n, C) || S(o, C)
                }, this.windows = {
                    phone: S(s, C),
                    tablet: S(c, C),
                    device: S(s, C) || S(c, C)
                }, this.tvu = {
                    apple: S(f, C),
                    google: S(y, C),
                    samsung: S(b, C),
                    sony: S(L, C),
                    lg: S(w, C),
                    toshiba: S(T, C),
                    panasonic: S(x, C),
                    other: S(E, C)
                }, this.other = {
                    blackberry: S(d, C),
                    blackberry10: S(u, C),
                    opera: S(p, C),
                    firefox: S(g, C),
                    chrome: S(v, C),
                    safari: S(m, C),
                    uc: S(h, C),
                    device: S(d, C) || S(u, C) || S(p, C) || S(g, C) || S(v, C)
                }, this.seven_inch = S(k, C), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, this.tv = this.tvu.apple || this.tvu.google || this.tvu.samsung || this.tvu.sony || this.tvu.lg || this.tvu.toshiba || this.tvu.panasonic || this.tvu.other, "undefined" == typeof window) return this
        },
        H = function() {
            var e = new C;
            return e.Class = C, e
        };
    "undefined" != typeof module && module.exports && "undefined" == typeof window ? module.exports = C : "undefined" != typeof module && module.exports && "undefined" != typeof window ? module.exports = H() : "function" == typeof define && define.amd ? define("ismobile", [], e.ismobile = H()) : e.ismobile = H()
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
                    var n = i.length - this.maxLogItems;
                    if (n >= 0)
                        for (var o = 0, r = n + 1; r > o; o++) this.close(i[o], -1)
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
                var n = this.setupLogContainer(),
                    o = document.createElement("div");
                o.className = a || "default", e.logTemplateMethod ? o.innerHTML = e.logTemplateMethod(t) : o.innerHTML = t, "function" == typeof i && o.addEventListener("click", i), n.appendChild(o), setTimeout(function() {
                    o.className += " show"
                }, 10), this.close(o, this.delay)
            },
            setup: function(e) {
                function a(a) {
                    "function" != typeof a && (a = function() {}), n && n.addEventListener("click", function(n) {
                        e.onOkay && "function" == typeof e.onOkay && (r ? e.onOkay(r.value, n) : e.onOkay(n)), a(r ? {
                            buttonClicked: "ok",
                            inputValue: r.value,
                            event: n
                        } : {
                            buttonClicked: "ok",
                            event: n
                        }), t(i)
                    }), o && o.addEventListener("click", function(n) {
                        e.onCancel && "function" == typeof e.onCancel && e.onCancel(n), a({
                            buttonClicked: "cancel",
                            event: n
                        }), t(i)
                    }), r && r.addEventListener("keyup", function(e) {
                        13 === e.which && n.click()
                    })
                }
                var i = document.createElement("div");
                i.className = "alertify hide", i.innerHTML = this.build(e);
                var n = i.querySelector(".ok"),
                    o = i.querySelector(".cancel"),
                    r = i.querySelector("input"),
                    l = i.querySelector("label");
                r && ("string" == typeof this.promptPlaceholder && (l ? l.textContent = this.promptPlaceholder : r.placeholder = this.promptPlaceholder), "string" == typeof this.promptValue && (r.value = this.promptValue));
                var s;
                return "function" == typeof Promise ? s = new Promise(a) : a(), this.parent.appendChild(i), setTimeout(function() {
                    i.classList.remove("hide"), r && e.type && "prompt" === e.type ? (r.select(), r.focus()) : n && n.focus()
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
    playerWrapper = getElement(".player-wrapper"),
    commentList = getElement(".comment-list"),
    commentLoading = getElement(".video-comment .loading"),
    commentMore = getElement(".comment-more"),
    commentEmoticon = getElement(".comment-emoticon"),
    emojiPicker = getElement(".emoji-picker"),
    emojiClose = getElement(".emoji-close"),
    emojiTypes = getAllElements(".emoji-picker-type"),
    commentInput = getElement("#comment-input"),
    replyInput = getElement("#reply-input"),
    commentVideo = getElement(".comment-video"),
    shareVideo = getElement(".share-video"),
    video = {
        id: container.getAttribute("data-id")
    },
    comments = [],
    replyComment = {},
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
    cachedError = [],
    cachedTry = [];
try {
    store.forEach(function(e, t) {
        t.submitted && (new Date).getTime() - t.submitted > 3e5 && store.remove(e)
    })
} catch (e) {}
var videoData = {
    id: container.getAttribute("data-id"),
    creator: container.getAttribute("data-creator-id"),
    published: container.getAttribute("data-published")
};
if (videoData.published.length > 10 || videoData.creator == _GLOBAL._USER_ID || parseInt(_GLOBAL._USER_ROLE) < 4) {
    if (createPlayer(), videoData.published.length < 10) {
        var notice = document.createElement("div");
        notice.className = "player-notice", notice.innerText = "VIDEO CHƯA ĐƯỢC DUYỆT, CHỈ MÌNH BẠN XEM ĐƯỢC", player.el_.appendChild(notice)
    }
} else player.el_.classList.add("player-blocked"), player.el_.innerHTML = '<div class="player-error-display"><i class="icon-alert"></i><span class="player-error-message">VIDEO NÀY CHƯA ĐƯỢC CLIPANIME DUYỆT</span></div>';
commentEmoticon.onclick = function() {
    if (!_GLOBAL._IS_LOGGED_IN) return void showLoginForm();
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
}, commentVideo.onclick = function() {
    commentInput.focus()
}, shareVideo.onclick = function() {
    console.log("shareVideo"), window.open("https://www.facebook.com/sharer/sharer.php?u=https://clipanime.com/video/" + video.id)
}, commentInput.onclick = function() {
    if (!_GLOBAL._IS_LOGGED_IN) return void showLoginForm()
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
getComments();