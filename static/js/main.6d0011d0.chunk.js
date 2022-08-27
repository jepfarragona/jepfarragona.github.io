(this.webpackJsonpabout = this.webpackJsonpabout || []).push([
	[0], {
		13: function(e, t, n) {
			e.exports = n(23)
		},
		18: function(e, t, n) {},
		23: function(e, t, n) {
			"use strict";
			n.r(t);
			var o = n(0),
				c = n.n(o),
				a = n(2),
				i = n.n(a),
				s = (n(18), n(11)),
				r = function() {
					var e = new Date,
						t = e.getHours(),
						n = e.getMinutes(),
						o = e.getSeconds();
					return "".concat(t).concat(n < 10 ? ":0" : ":").concat(n).concat(o < 10 ? ":0" : ":").concat(o)
				},
				l = ["Hi! ".concat("Welcome", "."), {
					type: "system",
					label: "System",
					content: "cd ".concat("C:/About me/Profile")
				}, {
					type: "system",
					label: "System",
					content: "Thanks for your visit, let me introduce myself."
				}, {
					time: r(),
					type: "info",
					label: "Name:",
					content: "Jepf Arragona"
				}, {
					time: r(),
					type: "info",
					label: "Sex:",
					content: "Male"
				}, {
					time: r(),
					type: "info",
					label: "Age:",
					content: "25"
				}, {
					time: r(),
					type: "info",
					label: "Email:",
					content: "jepfarragona@gmail.com"
				}],
				p = {
					dynamicList: {
						intro: {
							description: "Introducting myself again.",
							run: function(e) {
								var t = 0;
								return new Promise((function(n) {
									var o = setInterval((function() {
										e(l[t]), t++, l[t] || (clearInterval(o), n({
											type: "success",
											label: "Done",
											content: "Myself introduction is over!"
										}))
									}), 500)
								}))
							}
						},
						echo: {
							description: "Echoes input.",
							run: function(e, t) {
								return new Promise((function(n) {
									e({
										time: r(),
										label: "Echo",
										type: "success",
										content: t
									}), n({
										type: "success",
										label: "",
										content: ""
									})
								}))
							}
						},
						open: {
							description: "Open a specified url in a new tab.",
							run: function(e, t) {
								return new Promise((function(n) {
									t ? t.startsWith("http") ? (e({
										type: "success",
										label: "Success",
										content: "Opening"
									}), window.open(t, "_blank"), n({
										type: "success",
										label: "Done",
										content: "Page Opened!"
									})) : n({
										type: "error",
										label: "Error",
										content: "Please add `http` prefix!"
									}) : n({
										type: "error",
										label: "Error",
										content: "a url is required!"
									})
								}))
							}
						},
						gallery: {
							description: "Open my gallery in a new tab.",
							run: function(e) {
								return new Promise((function(t) {
									e({
										type: "success",
										label: "Success",
										content: "Opening"
									}), window.open("https://jepfarragona.github.io/gallery", "_blank"), t({
										type: "success",
										label: "Done",
										content: ":)"
									})
								}))
							}
						},
						fvck: {
							description: "Open at your own risk :P",
							run: function(e) {
								return new Promise((function(t) {
									e({
										type: "warning",
										label: "Success",
										content: "Opening"
									}), window.open("https://pornhub.com", "_blank"), t({
										type: "warning",
										label: "Done",
										content: "Page Opened!"
									})
								}))
							}
						},
						music: {
							description: "Open my favorite spotify music in a new tab.",
							run: function(e) {
								return new Promise((function(t) {
									e({
										type: "success",
										label: "Success",
										content: "Opening"
									}), window.open("https://open.spotify.com/playlist/0tS5Hi8YTmVuvqU29O3ugc?si=b60298e9c98341cb", "_blank"), t({
										type: "success",
										label: "Done",
										content: "Action Completed!"
									})
								}))
							}
						}
					},
					staticList: {
						contact: {
							description: "Return a list of my contact information.",
							list: [{
								type: "info",
								label: "Email:",
								content: "jepfarragona@gmail.com"
							}, {
								type: "info",
								label: "Github:",
								content: "https://github.com/jepfarragona"
							}, {
								type: "info",
								label: "Facebook:",
								content: "https://facebook.com/jepf.arragona"
							}, {
								type: "info",
								label: "Telegram:",
								content: "https://t.me/sleak"
							}, {
							type: "info",
								label: "Skype:",
								content: "iamzildjian"
							}]
						},
						skill: {
							description: "Return a list of my skills and my rating of them.",
							list: [{
								type: "success",
								label: "A",
								content: "\xb7 JavaScript 90/100"
							}, {
								type: "success",
								label: "A",
								content: "\xb7 TypeScript 90/100"
							}, {
								type: "success",
								label: "A",
								content: "\xb7 Go 80/100"
							}, {
								type: "success",
								label: "A",
								content: "\xb7 Java 80/100"
							}, {
								type: "success",
								label: "A",
								content: "\xb7 Kotlin 80/100"
							}, {
								type: "warning",
								label: "B",
								content: "\xb7 Python 70/100"
							}, {
								type: "warning",
								label: "B",
								content: " C 70/100"
							}, {
								type: "warning",
								label: "B",
								content: "\xb7 Shell 70/100"
							}, {
								type: "error",
								label: "C",
								content: " C# 60/100"
							}, {
								type: "error",
								label: "C",
								content: "\xb7 Rust 60/100"
							}, {
								type: "error",
								label: "C",
								content: "\xb7 Scala 60/100"
							}, {
								type: "error",
								label: "C",
								content: "\xb7 Lua 60/100"
							}, {
								type: "error",
								label: "C",
								content: "\xb7 Haskell 60/100"
							}, {
								type: "error",
								label: "C",
								content: "\xb7 Ruby 60/100"
							}, {
								type: "black",
								label: "D",
								content: "\xb7 CSS -999/100"
							}]
						},
						anime: {
							description: "Return a list of anime that I have watched.",
							list: [' 《 Hunter x Hunter 》',
      ' 《 One Piece 》',
      ' 《 7 Deadly Sins 》',
      ' 《 DragonBall 》',
      ' 《 Naruto 》',
      ' 《 Ghost Fighter 》',
      ' 《 Flame of Recca 》',
      ' 《 Slamdunk 》',
      ' 《 Zenki 》',
      ' 《 Yaiba 》',
      ' 《 Ranma 1/2 》',
      ' 《 Voltes V 》',
      ' 《 Shin Chan 》',
      ' 《  Ben Ten 》',
      ' 《 Adventure Time 》']
						},
						movie: {
							description: "Return a list of movies that I have watched.",
							list: [' 《 Peaky Blinders 》',
      ' 《 Money Heist 》',
      ' 《 Lucifer 》',
      ' 《 Prison Break 》',
      ' 《 Constantine 》',
      ' 《 Squid Game 》',
      ' 《 All of Us Are Dead 》',
      ' 《 Midway 》',
      ' 《 The Green Mile 》',
      ' 《 Cast Away 》',
      ' 《 Forest Gump 》',
      ' 《 All the Bright Places 》',
      ' 《 How to Lose a Guy in 10 Days 》',
      ' 《 What is your Number 》',
      ' 《 The Ugly Truth 》',
      ' 《 Friends With Benefits》',
      ' 《 Wedding Crashers 》',
      ' 《 Valentines Day 》',
      ' 《 White Chicks 》',
      ' 《 The Notebook 》',
      ' 《 No String Attached 》',
      ' 《 The Girl Next Door 》',
      ' 《 The Terminal 》',
      ' 《 Stranded 》',
      ' 《 Catch and Release 》',
      ' 《 50 First Dates 》',
      ' 《 Serendipity 》',
      ' 《 Big Daddy 》',
      ' 《 Nick and Norrah Infinite Playlist 》',
      ' 《 Good Luck Chuck 》',
      ' 《 The Holiday 》',
      ' 《 Click 》',
      ' 《 2012 》']
						}
					}
				};
			i.a.render(c.a.createElement(c.a.StrictMode, null, c.a.createElement(s.a, {
				className: "fade",
				cmd: p,
				config: {
					prompt: "\u279c  ~ ",
					version: "1.0.0",
					initialDirectory: "React Terminal",
					bootCmd: "intro"
				}
			})), document.getElementById("app"));
			var u = document.querySelectorAll(".fade");
			window.addEventListener("DOMContentLoaded", (function() {
				u.forEach((function(e) {
					return e.classList.add("in")
				}))
			})), window.addEventListener("beforeunload", (function() {
				u.forEach((function(e) {
					return e.classList.remove("in")
				}))
			}))
		}
	},
	[
		[13, 1, 2]
	]
]);
//# sourceMappingURL=main.6d0011d0.chunk.js.map