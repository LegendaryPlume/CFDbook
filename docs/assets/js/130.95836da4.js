(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{460:function(a,s,e){"use strict";e.r(s);var t=e(12),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),s("p",[a._v("chage（change）修改用户密码过期信息。")]),a._v(" "),s("p",[a._v("chage 可以更改密码修改之间的天数和上次更改密码的日期。系统使用此信息来确定用户何时必须修改其密码。")]),a._v(" "),s("p",[a._v("chage 也可以设置帐户的过期时间。")]),a._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" LOGIN\n")])])]),s("p",[a._v("LOGIN 为用户名。")]),a._v(" "),s("p",[a._v("如果没有选择任何选项，chage 将以交互方式运行，提示用户所有字段的当前值。 输入新值以更改字段，或将该行留空以使用当前值。 当前值显示在中括号 [] 内。")]),a._v(" "),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("-d, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--lastday")]),a._v(" LAST_DAY\n  将最近一次密码设置时间设为 LAST_DAY。LAST_DAY 可以是距离 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1970")]),a._v(" 年 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" 月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" 日后的天数，也可以是 YYYY-MM-DD 格式的日期。如果 LAST_DAY 为 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" 表示用户在下次登录时必须更改密码。\n-E, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--expiredate")]),a._v(" EXPIRE_DATE\n  将帐户过期时间设为指定日期。EXPIRE_DATE 可以是距离 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1970")]),a._v(" 年 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" 月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" 日后的天数，也可以是 YYYY-MM-DD 格式的日期。如果 EXPIRE_DATE 为 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),a._v(" 则表示账户永不过期。\n-h, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n  显示此帮助信息并退出。\n-i, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--iso8601")]),a._v("\n  打印日期时，使用 YYYY-MM-DD 格式。\n-I, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--inactive")]),a._v(" INACITVE\n  设置密码过期后帐户被锁定前不活动的天数。如果 INACITVE 为 -1，表示账户永不会被锁定。\n-l, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--list")]),a._v("\n  显示帐户年龄信息。\n-m, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mindays")]),a._v(" MIN_DAYS\n  将两次改变密码之间相距的最小天数设为 MIN_DAYS。此字段为 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" 表示用户可以随时更改其密码。\n-M, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--maxdays")]),a._v(" MAX_DAYS\n  将两次改变密码之间相距的最大天数设为 MAX_DAYS。此字段为 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),a._v(" 表示取消检查密码的有效性。\n-R, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--root")]),a._v(" CHROOT_DIR\n  在 CHROOT_DIR 目录中应用更改并使用 CHROOT_DIR 目录中的配置文件。 仅支持绝对路径。\n-W, "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--warndays")]),a._v(" WARN_DAYS\n  将密码过期警告天数设为 WARN_DAYS。\n")])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),s("p",[a._v("（1）显示账户年龄信息。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" root\nLast password change      "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" Nov "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("27")]),a._v(", "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("\nPassword expires          "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" never\nPassword inactive         "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" never\nAccount expires           "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" never\nMinimum number of days between password change    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nMaximum number of days between password change    "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("99999")]),a._v("\nNumber of days of warning before password expires "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v("\n")])])]),s("p",[a._v("（2）设置两次更改密码之间相距的最大天数。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-M")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("180")]),a._v(" root\n")])])]),s("p",[a._v("（3）设置两次改变密码之间相距的最小天数。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v(" root\n")])])]),s("p",[a._v("（4）强制用户登录时修改口令。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" tom\n")])])]),s("p",[a._v("-d 后面如果接数字的话是从1970年1月1日累加，如"),s("code",[a._v("chage -d 5 tom")]),a._v("修改时间就变成1970年1月6日。也可以直接接日期如"),s("code",[a._v("chage -d 2023-02-18 tom")]),a._v("密码修改时间就变成了2023年2月18日。")]),a._v(" "),s("p",[a._v("-d 后面如果接 0 表示用户在下次登录时必须更改密码。")]),a._v(" "),s("p",[a._v("（5）设置账户的过期时间。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2023-09-30'")]),a._v(" tom\n")])])]),s("p",[a._v("如果想设置为永久有效，则 -E 后跟 -1。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-E")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-1")]),a._v(" tom\n")])])]),s("p",[a._v("（6）设置密码过期前多少天开始提醒。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-W")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("7")]),a._v(" tom\n")])])]),s("p",[a._v("（7）设置账户密码过期后账户被锁定前的不活跃天数。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" tom\n")])])]),s("p",[a._v("（8）一个综合实例。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("chage "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-M")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("90")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-W")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("15")]),a._v(" tom\n")])])]),s("p",[a._v("设置用户随时都可修改密码且密码最高有效期为 90 天。在密码失效前，提前 15 天发出警告提醒。")]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/chage.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("chage(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),a._v(" "),s("Vssue",{attrs:{title:"chage"}})],1)}),[],!1,null,null,null);s.default=r.exports}}]);