(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{487:function(a,t,s){"use strict";s.r(t);var e=s(12),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("reboot 用于重启主机。")]),a._v(" "),t("p",[a._v("poweroff、reboot 和 halt 可分别用于关机、重启或停止机器。这三个命令拥有相同的选项。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("poweroff [OPTIONS]\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("-d, --no-wtmp\n\t重启系统时，不将操作写入日志文件“/var/log/wtmp”。\n-f, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--force")]),a._v("\n\t强制重启操作系统。\n-n, --no-sync\n\t重启操作系统前不同步硬盘/存储介质。\n-w, --wtmp-only\n\t不真重启系统，仅在日志文件“/var/log/wtmp”中写入 wtmp 重启条目。\n-p, "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--poweroff")]),a._v("\n\t不管调用 poweroff、reboot 和 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v(" 中的哪一个，都要切断主机电源。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n\t显示帮助信息。\n"),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--halt")]),a._v("\n\t不管调用 poweroff, "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" 和 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v(" 中的哪一个，都要停止机器。\n--no-wall\n\t请勿在 poweroff, "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" 或 "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("halt")]),a._v(" 前发送留言。\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("（1）重启。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v("\n")])])]),t("p",[a._v("（2）模拟重开机。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-w")]),a._v("\n")])])]),t("p",[a._v("（3）不记录此次重启情况。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])])]),t("p",[a._v("（4）重启系统前不发送留言。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" --no-wall\n")])])]),t("p",[a._v("（5）关闭操作系统前不同步硬盘/存储介质。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-n")]),a._v("\n")])])]),t("p",[a._v("（6）强制执行 reboot。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("reboot")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man8/reboot.8.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("reboot(8) — Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("Vssue",{attrs:{title:"reboot"}})],1)}),[],!1,null,null,null);t.default=r.exports}}]);