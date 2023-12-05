(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{449:function(a,t,e){"use strict";e.r(t);var s=e(12),n=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[a._v("#")]),a._v(" 1.命令简介")]),a._v(" "),t("p",[a._v("chown 用来改变文件或目录的属主（owner）和所属用户组（group）。")]),a._v(" "),t("p",[a._v("chown 仅限超级用户 root 使用，普通用户没有权限改变文件属主及所属组。")]),a._v(" "),t("p",[a._v("该命令通过改变文件的属主或所属用户组可以向某个用户授权。属主可以是用户名或用户 ID，用户组可以是组名或组 ID。文件名是由空格分隔的文件列表，在文件名中可以包含通配符。")]),a._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[a._v("#")]),a._v(" 2.命令格式")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("chown [OPTION]... [OWNER][:[GROUP]] FILE...\nchown [OPTION]... --reference=RFILE FILE...\n")])])]),t("p",[a._v("在指定属主与所属用户组时有如下几种情况：\n（1）如果只指定了属主，则只改变每个给定文件的属主，不会更改文件的用户组；\n（2）如果属主后面跟一个冒号和用户组，则文件所属的用户组也将被更改；\n（3）如果用户名后面有冒号但没有组名，则该用户将成为文件的属主，并且文件属组将更改为该用户的登录组；\n（4）如果给定冒号和组名，但省略了属主，则只更改所属组。这种情况，chown 的功能等同于 chgrp；\n（5）如果只给定一个冒号，或者整个操作数为空，则属主和用户组都不会更改。")]),a._v(" "),t("p",[a._v("注意，OWNER 与 GROUP 之间的冒号可以使用点号替代。")]),a._v(" "),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[a._v("#")]),a._v(" 3.选项说明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("-c, --changes\n\t 输出效果类似 verbose 模式，但只在有更改生效时才显示。\n-f, --silent, --quiet\n\t忽略大部分错误信息。\n-v, --verbose\n\t显示指令详细的执行过程\n--dereference\n\t修改符号链接指向的实际文件的属主和所属用户组，而不是符号链接文件本身。为默认选项\n-h, --no-dereference\n\t修改符号链接文件本身的属主和所属用户组。作用与 --dereference 相反\n--from=CURRENT_OWNER:CURRENT_GROUP\n\t只有当文件的属主和所属组符合选项所指定的才更改。CURRENT_OWNER 和 CURRENT_GROUP 可以省略，这时省略的属性就不需要进行匹配\n--no-preserve-root\n\t不特殊对待根目录 /。为默认选项\n--preserve-root\n\t不允许在根目录 /上递归操作\n--reference=RFILE\n\t使用指定的文件 RFILE 的属主和所属用户组，而非指定值\n-R, --recursive\n\t递归处理所有的文件及子目录\n\t\n以下三个选项 -H、-L 和 -P 与 -R 配合使用，用于递归操作时确定遍历的方式：\n-H\n\t如果命令行参数是一个符号链接指向一个目录，则遍历它\n-L\n\t遍历每一个符号链接指向的目录\n-P\n\t不遍历任何符号链接（缺省选项）。\n\n--help\n\t显示帮助信息\n--version\n\t显示版本信息\n")])])]),t("h2",{attrs:{id:"_4-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[a._v("#")]),a._v(" 4.常用示例")]),a._v(" "),t("p",[a._v("（1）只修改文件属主为 root。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" root FILE\n")])])]),t("p",[a._v("注意，指定的属主必须是系统合法用户，可以查看文件 /etc/passwd 确定当前系统有哪些用户。")]),a._v(" "),t("p",[a._v("（2）修改文件属主和用户组均为 root。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" root:root FILE\n")])])]),t("p",[a._v("（3）只修改文件所属组为 root。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" :root FILE\n")])])]),t("p",[a._v("（4）递归修改所有的文件及子目录属主和所属组为 root。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" root:root /DIR\n")])])]),t("p",[a._v("（5）显示修改的动作，使用 -v 冗余模式输出。")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chown")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-vR")]),a._v(" root:root /DIR\n")])])]),t("h2",{attrs:{id:"_5-用户与组相关配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-用户与组相关配置文件"}},[a._v("#")]),a._v(" 5.用户与组相关配置文件")]),a._v(" "),t("p",[a._v("Linux 与用户和组的定义相关的配置文件有：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("/etc/passwd 用户信息\n/etc/shadow 用户口令及其相关属性\n/etc/group 用户组信息\n/etc/gshadow 用户组口令及其相关属性\n")])])]),t("h3",{attrs:{id:"etc-passwd-7-列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-passwd-7-列"}},[a._v("#")]),a._v(" /etc/passwd（7 列）")]),a._v(" "),t("p",[a._v("/etc/passwd 用来保存用户名称、ID、属组 ID、家目录等信息。")]),a._v(" "),t("p",[a._v("每行格式如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("用户名:口令:用户标识号:组标识号:注释性描述:主目录:默认Shell\n")])])]),t("p",[a._v("示例内容如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cat /etc/passwd\nroot:x:0:0:root:/root:/bin/bash\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\nadm:x:3:4:adm:/var/adm:/sbin/nologin\n...\n")])])]),t("p",[a._v("在 passwd 文件中，第一行内容是超级用户 root 行，可以看到它的 uid 和 gid 都为 0。为了方便理解，下面给出各字段的描述：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('字段1：用户名，这是用户登录时使用的账户名称，在系统中是唯一的，不能重名\n字段2：密码占位符 x；早期的 Unix 系统中，该字段是存放账户密码的，由于安全原因，后来把这个密码字段内容移到 /etc/shadow 中了\n字段3：UID；范围是 0-65535\n字段4：用户主组的 ID，范围是 0-65535。当添加用户时，默认情况下会同时建立一个与用户同名且 GID 与 UID 相同的组。用户所属的其它用户组定义在文件 /etc/group\n字段5：用户说明；这个字段是对这个账户的说明\n字段6：宿主目录；用户登录后首先进入的目录，一般为 "/home/用户名" 这样的目录\n字段7：登录 Shell   当前用户登录后所使用的 Shell，在 Centos/RHEL 系统中，默认的 Shell 是 Bash；如果不希望用户登登系统，可以通过 usermod 或者手动修改 passwd 设置，将该字段设置为 /sbin/nologin 即可。出于安全考虑，大多数内置系统账户都是 /sbin/nologin，表示禁止登录系统\n')])])]),t("h3",{attrs:{id:"etc-shadow-9-列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-shadow-9-列"}},[a._v("#")]),a._v(" /etc/shadow（9 列）")]),a._v(" "),t("p",[a._v("/etc/shadow 用于保存加密后的用户口令相关信息，只有 root 用户拥有读写权限。")]),a._v(" "),t("p",[a._v("每行格式如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("用户名:加密口令:最后一次修改时间:最小时间间隔:最大时间间隔:警告时间:不活动时间:失效时间:保留字段\n")])])]),t("p",[a._v("示例内容如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("root:$6$25KI3rub$BK5ef2iaxtl0Jn7lofKk9xZDrOU6aamefgIDKlHUycqUvU/lF1XdcQa4Bz53vGmnTh/kV/T1DLtdIRxxVKj8M.:17403:0:99999:7:::\nbin:*:16973:0:99999:7:::\ndaemon:*:16973:0:99999:7:::\nadm:*:16973:0:99999:7:::\n...\n")])])]),t("p",[a._v("下面是每个字段的详细含义：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("第一列：用户名。与 /etc/passwd 文件中的用户名有相同的含义\n第二列：加密口令。存放的是加密后的用户口令字串，如果此字段是“*”、“!”、“x”等字符，则对应的用户不能登录系统\n第三列：最后一次修改时间。表示从某个时间起，到用户最近一次修改口令的间隔天数。可以通过 passwd 来修改用户的密码，然后查看 /etc/shadow 中此字段的变化\n第四列：最小时间间隔。 表示两次修改密码之间的最小时间间隔。\n第五列：最大时间间隔。表示两次修改密码之间的最大时间间隔，这个设置能增强管理员管理用户的时效性。\n第六列：警告时间。表示从系统开始警告用户到密码正式失效之间的天数。\n第七列：不活动时间。此字段表示用户口令作废多少天后，系统会禁用此用户，也就是说系统不再让此用户登录，也不会提示用户过期，是完全禁用。\n第八列：失效时间。表示该用户的帐号生存期，超过这个设定时间，帐号失效，用户就无法登录系统了。如果这个字段的值为空，帐号永久可用。\n第九列：保留字段： linux的保留字段，目前为空，以备linux日后发展之用。\n")])])]),t("h3",{attrs:{id:"etc-group-4-列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-group-4-列"}},[a._v("#")]),a._v(" /etc/group（4 列）")]),a._v(" "),t("p",[a._v("/etc/group 保存了用户组的相关信息。通过查询该文件，可查看某个用户属于哪些组。")]),a._v(" "),t("p",[a._v("每行格式如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("组名:口令:组标识号:组内用户列表\n")])])]),t("p",[a._v("示例内容如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("root:x:0:\nbin:x:1:\ndaemon:x:2:\n...\n")])])]),t("p",[a._v("每个字段的详细含义：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("组名：用户组的名称，由字母或数字构成。与 /etc/passwd 中的用户名一样，组名不能重复。\n口令：存放的是用户组加密后的口令字串，密码默认设置在 /etc/gshadow 文件中，而在这里用 “x” 代替，linux 系统下默认的用户组都没有口令，可以通过 gpasswd 来给用户组添加密码。\n组标识号：即 GID，与 /etc/passwd 中的组标识号对应。\n组内用户列表： 显示属于这个组的所有用户，多个用户之间用逗号分隔。\n")])])]),t("h3",{attrs:{id:"etc-gshdow-4-列"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#etc-gshdow-4-列"}},[a._v("#")]),a._v(" /etc/gshdow（4 列）")]),a._v(" "),t("p",[a._v("/etc/gshdow 保存了组密码及其相关属性。")]),a._v(" "),t("p",[a._v("每行格式如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("群组名称：群组密码：组管理员列表：以当前组为附加组的用户列表\n")])])]),t("p",[a._v("示例内容如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("root:::\nbin:::\ndaemon:::\ntcpdump:!::\nmysql:!::\n...\n")])])]),t("p",[a._v("各个字段详细含义如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("组名称： 组名称，不能重复\n组密码：为空，表示只有组内用户可以获取组权限。为 ! 或者 * 表示用户无法通过组密码获取组权限\n组管理员列表： 组管理员的列表，能够更改组密码和成员\n以当前组为附加组的用户列表： 以逗号分隔的用户名列表，如果为空，表示用户名与组名相同，即该组是同名用户的主组\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[a._v("#")]),a._v(" 参考文献")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/chown.1.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("chown(1) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man5/passwd.5.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("passwd(5) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man5/shadow.5.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("shadow(5) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man5/group.5.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("group(5) - Linux manual page - man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"http://man7.org/linux/man-pages/man5/gshadow.5.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("gshadow(5) - Linux manual page -man7.org"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/dengjin20104042056/article/details/98666179",target:"_blank",rel:"noopener noreferrer"}},[a._v("【Linux】一步一步学Linux——chown命令(112)"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/zhongguiyao/p/9165917.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("Linux系统的用户和用户组管理"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/humanking7/article/details/84001125#11__etcpasswd__17_24",target:"_blank",rel:"noopener noreferrer"}},[a._v("[Linux]用户和组相关配置文件介绍(共7个文件)"),t("OutboundLink")],1)]),a._v(" "),t("Vssue",{attrs:{title:"chown"}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);