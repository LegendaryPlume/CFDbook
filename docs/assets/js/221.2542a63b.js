(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{555:function(t,s,a){"use strict";a.r(s);var n=a(12),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"_1-命令简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[t._v("#")]),t._v(" 1.命令简介")]),t._v(" "),s("p",[t._v("route 命令用于显示和操作 IP 路由表。")]),t._v(" "),s("p",[t._v("要实现两个不同的子网之间的通信，需要一台连接两个网络的路由器，或者同时位于两个网络的网关来实现。在 Linux 系统中，设置路由通常是为了解决以下问题：该 Linux 系统在一个局域网中，局域网中有一个网关，能够让机器访问 Internet，那么就需要将这台机器的 IP 地址设置为 Linux 机器的默认路由。")]),t._v(" "),s("p",[t._v("要注意的是，直接在命令行下执行 route 命令来添加路由，不会永久保存，当网卡重启或者机器重启之后，该路由就失效了；可以在 /etc/rc.d/rc.local 中添加 route 命令，作为开机启动命令来保证该路由设置永久有效。")]),t._v(" "),s("h2",{attrs:{id:"_2-命令格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[t._v("#")]),t._v(" 2.命令格式")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("route "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-CFvnNee"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-A FAMILY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-4"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nroute "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-A FAMILY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  TARGET  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("netmask  NM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gw GW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("metric N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mss M"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("window W"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("irtt I"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("reject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("mod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dyn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("reinstate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" IF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nroute "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-A FAMILY "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" -6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" del "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-net"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("-host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" TARGET "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("gw GW"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("netmask NM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("metric N"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("dev"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" IF"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\nroute "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-V"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("-h"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("--help"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("第一行格式用于查看路由表；\n第二行格式用于添加一条路由；\n第三行格式用于删除一条路由；\n第四行格式用于查看版本与帮助信息。")]),t._v(" "),s("h2",{attrs:{id:"_3-选项说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[t._v("#")]),t._v(" 3.选项说明")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("-A FAMILY\n    指定的地址族。FAMILY 可取值 inet、inet6 等。-4 等同于 -A inet，-6 等同于 -A inet6\n-C\n\t操作内核的路由缓存\n-F\n    操作内核的 FIB（Forwarding Information Base） 路由表。默认选项\n-e\n    用 netstat(8) 的格式来显示路由表。-ee 将用路由表中的所有参数生成一个很长的行\n-host\n    路由目标为主机\n-n\n    以数字地址代替主机或网络名。此项对试图检测对域名服务器进行路由发生故障的原因非常有用\n-net\n    路由目标为网络\n-v\n\t开启冗余模式\ndel\n    删除一条路由\nadd\n    添加一条路由\nTARGET\n    指定目标网络或主机。可以用点分十进制形式的 IP 地址或主机/网络名\nnetmask NM\n    为添加的路由指定网络掩码\ngw GW\n    为发往目标网络/主机的任何分组指定网关。注意：指定的网关首先必须是可达的，也就是说必须为该网关预先指定一条静态路由。如果你为本地接口之一指定这个网关地址的话，那么此网关地址将用于决定此接口上的分组将如何进行路由。这是 BSD 风格所兼容的\nmetric M\n    把选路表中的 metric 字段值设为 M。metric 表示路由跳数\nmss M\n   设置最大传输单元 MTU\nwindow W\n    把基于此路由之上的连接的 TCP 窗口长度设为 W 字节。这通常只用于 AX.25 网络和不能处理背靠背帧的设备\nirtt I\n    把基于此路由之上的 TCP 连接的初始往返时间设为 I 毫秒（1-12000）。这通常也只用于 AX.25 网络。如果省略此选项，则使用 RFC1122 的缺省值 300ms\nreject\n    设置一条阻塞路由以使一条路由查找失败。这用于在使用缺省路由前先屏蔽掉一些网络。但这并不起到防火墙的作用\nmod, dyn, reinstate\n    设置一条动态或更改过的路由。这些标志通常只由路由进程来设置。这只用于诊断目的\ndev IF\n    强制使路由与指定的设备关联，否则内核会自己决定使用相应的设备（通常检查已存在的路由、设备说明和已加入路由的设备)。在多数正常的网络上无需使用该选项。如果 dev IF 是命令行上最后一个选项，那么可以省略关键字 dev\n")])])]),s("h2",{attrs:{id:"_4-常用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用示例"}},[t._v("#")]),t._v(" 4.常用示例")]),t._v(" "),s("p",[t._v("（1）显示当前路由表。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("Kernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\ndefault         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(".0.0       UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.0     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".240.0   U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.0        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(".0.0       UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.64")]),t._v(".0.0      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.192")]),t._v(".0.0     UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\nlink-local      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".0.0     U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1002")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".0.0      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.240")]),t._v(".0.0     UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".0.0     UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".10.0    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0   U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" docker0\n")])])]),s("p",[t._v("上面的输出中，有两行值得注意：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("default         9.134.112.1     0.0.0.0         UG    0      0        0 eth1\n\t表示数据传送目的是访问 Internet，则由接口 eth1 将数据包发送到网关 9.134.112.1\n9.134.112.0     0.0.0.0         255.255.240.0   U     0      0        0 eth1\n\t表示主机所在网络的地址为 9.134.112.0，若数据传送目标是在本局域网内通信，则可直接通过 eth1 转发数据包\n")])])]),s("p",[t._v("Destination 表示目标网络或主机地址；\nGateway 表示网关地址，如果是 * 表示未设置；\nGenmask 表示目标网络的网络掩码；目标是主机对应 255.255.255.255，默认路由对应 0.0.0.0；\nFlags 为路由状态标志，含义如下：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("U 路由当前为启动状态（Up ）\nH 目标为主机（Host）\nG 使用网关（Gateway）路由\nR 恢复（Reinstate ）动态路由的路由\nD 由守护进程或导向器动态（Dynamically）安装\nM 由路由守护程序或导向器动态修改（Modified）\nA 由 addrconf 安装\nC 缓存（Cache）项\n! 路由当前为关闭状态\n")])])]),s("p",[t._v("Metric 表示与目标的距离，通常以跳数计算；\nRef 表示此路由的引用数（Linux 内核中不使用）；\nUse 表示查找路由的计数。根据 -F 和 -C 的使用，这将是路由缓存未命中（-F）或命中（-C）；\nIface 表示将此路由的数据包发送到的接口。")]),t._v(" "),s("p",[t._v("（2）以数字地址代替主机或网络名。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("route "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v("\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(".0.0       UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.0     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".240.0   U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.0")]),t._v(".0.0        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(".0.0       UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100.64")]),t._v(".0.0      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.192")]),t._v(".0.0     UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("169.254")]),t._v(".0.0     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".0.0     U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1002")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.16")]),t._v(".0.0      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.240")]),t._v(".0.0     UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".0.0     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.1     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".0.0     UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),t._v(".10.0    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.255")]),t._v(".255.0   U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" docker0\n")])])]),s("p",[t._v("（3）添加一条路由。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("route "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.0 netmask "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(".0.0 dev lo\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看设置后的结果")]),t._v("\nroute "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" lo\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.0       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("255.0")]),t._v(".0.0       U     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" lo\n")])])]),s("p",[t._v("使用 netmask 255.0.0.0 添加与 lo 设备相关联的回环路由项。")]),t._v(" "),s("p",[t._v("（4）屏蔽一条路由。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("route "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0 netmask "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240.0")]),t._v(".0.0 reject\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看设置后的结果")]),t._v("\nroute "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0       -               "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240.0")]),t._v(".0.0       "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      -        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" -\n")])])]),s("p",[t._v("（5）删除一条路由。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("route del "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-net")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("224.0")]),t._v(".0.0 netmask "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240.0")]),t._v(".0.0 reject\n")])])]),s("p",[t._v("（6）添加默认网关。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("route "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" default gw "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.2\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看设置后的结果")]),t._v("\nroute "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.2\ndefault         "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.2     "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),t._v(".0.0         UG    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" eth1\n")])])]),s("p",[t._v("（7）删除默认网关。")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("route del default gw "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("9.134")]),t._v(".112.2\n")])])]),s("h2",{attrs:{id:"_5-路由类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-路由类型"}},[t._v("#")]),t._v(" 5.路由类型")]),t._v(" "),s("h3",{attrs:{id:"主机路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主机路由"}},[t._v("#")]),t._v(" 主机路由")]),t._v(" "),s("p",[t._v("主机路由是路由选择表中指向单个 IP 地址或主机名的路由记录。主机路由的 Flags 字段为 H。例如，在下面的示例中，本地主机通过 IP 地址 192.168.1.1 的网关到达 IP地址为 10.0.0.10 的主机。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Destination\tGateway\t\tGenmask\t\t\tFlags\tMetric\tRef\tUse\tIface\n10.0.0.10\t192.168.1.1\t255.255.255.255\tUH\t\t0\t\t0   0\teth0\n")])])]),s("h3",{attrs:{id:"网络路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络路由"}},[t._v("#")]),t._v(" 网络路由")]),t._v(" "),s("p",[t._v("网络路由是代表主机可以到达的网络。网络路由的 Flags 字段为 N。例如，在下面的示例中，本地主机将发送到网络 192.19.12.0 的数据包转发到 IP 地址为 192.168.1.1 的路由器。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Destination   Gateway\t\tGenmask \t\tFlags\tMetric\tRef\tUse\tIface\n192.19.12     192.168.1.1   255.255.255.0   UN\t\t0       0\t0\teth0\n")])])]),s("h3",{attrs:{id:"默认路由"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#默认路由"}},[t._v("#")]),t._v(" 默认路由")]),t._v(" "),s("p",[t._v("当主机不能在路由表中查找到目标主机的 IP 地址或网络路由时，数据包就被发送到默认路由（默认网关）上。默认路由的 Flags 字段为 G。例如，在下面的示例中，默认路由是 IP 地址为 192.168.1.1 的路由器。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Destination\tGateway\t\t\tGenmask\t\tFlags\tMetric\tRef\tUse\tIface\ndefault\t\t192.168.1.1\t\t0.0.0.0\t\tUG\t\t0       0\t0   eth0\n")])])]),s("hr"),t._v(" "),s("h2",{attrs:{id:"参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[t._v("#")]),t._v(" 参考文献")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.man7.org/linux/man-pages/man8/route.8.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("route(8)  - Linux manual page - man7.org"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/peida/archive/2013/03/05/2943698.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("博客园.每天一个linux命令（53）：route命令"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/dengjin20104042056/article/details/100008525",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN.【Linux】一步一步学Linux——route命令(169)"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/chenlycly/article/details/52141854",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSDN.linux 路由表设置 之 route 指令详解"),s("OutboundLink")],1)]),t._v(" "),s("Vssue",{attrs:{title:"route"}})],1)}),[],!1,null,null,null);s.default=e.exports}}]);