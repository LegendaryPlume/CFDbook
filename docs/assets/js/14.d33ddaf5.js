(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{347:function(a,s,t){"use strict";t.r(s);var e=t(12),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),s("p",[a._v("eval（evaluate）连接参数构造命令并执行，为内建命令。")]),a._v(" "),s("p",[a._v("使用空格分隔每个参数，如果参数中含有变量，则替换为变量值，然后再将构造的命令交由 Shell 解释执行。它通常用于动态生成和执行命令，或者将字符串解释为可执行的 Shell 代码。")]),a._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("ARG"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("p",[a._v("eval 的返回值是其后面命令的退出状态。如果没有参数或只有空参数，eval 返回 0。")]),a._v(" "),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),s("p",[a._v("None。")]),a._v(" "),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),s("p",[a._v("（1）回显简单变量。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("foo\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NAME")]),a._v("\nfoo\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# echo 前添加 eval 也可以")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$NAME")]),a._v("\nfoo\n")])])]),s("p",[a._v("（2）先替换变量再执行命令。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" test.txt\nHello World"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("command")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"cat test.txt"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$command")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" test.txt\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$command")]),a._v("\nHello World"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n")])])]),s("p",[a._v("（3）获取传给脚本或函数的最后一个参数。")]),a._v(" "),s("p",[a._v("使用特殊字符 "),s("code",[a._v("$#")]),a._v(" 表示传递给脚本或函数的参数个数，使用"),s("code",[a._v("$n")]),a._v("获取参数，n 为数字，"),s("code",[a._v("$1")]),a._v(" 表示第一个参数，"),s("code",[a._v("$2")]),a._v(" 表示第二个参数，所以"),s("code",[a._v("$$#")]),a._v("表示最后一个参数。")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" test.sh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#!/usr/bin/bash")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$$")]),a._v("#\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("eval")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("echo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$$")]),a._v("#\n\n./test.sh firstarg lastarg\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$2")]),a._v("\nlastarg\n")])])]),s("hr"),a._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://www.man7.org/linux/man-pages/man1/bash.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("bash(1) - Linux manual page - man7.org"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/baidu_37964071/article/details/80930704",target:"_blank",rel:"noopener noreferrer"}},[a._v("``和$()的区别及eval详解 - CSDN"),s("OutboundLink")],1)]),a._v(" "),s("Vssue",{attrs:{title:"eval-builtin"}})],1)}),[],!1,null,null,null);s.default=n.exports}}]);