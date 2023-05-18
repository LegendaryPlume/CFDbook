(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{374:function(n,t,s){"use strict";s.r(t);var a=s(10),e=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h2",{attrs:{id:"_1-命令简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令简介"}},[n._v("#")]),n._v(" 1.命令简介")]),n._v(" "),t("p",[n._v("less 是常用的文本文件阅读工具，类似于 more 但更强大。")]),n._v(" "),t("p",[n._v("less 主要用于浏览大文件，加载文件时不会读取整个文件，相比于 vim 或 nano 等文本编辑器，启动会更快。")]),n._v(" "),t("h2",{attrs:{id:"_2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令格式"}},[n._v("#")]),n._v(" 2.命令格式")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("ps [OPTIONS] [FILE]...\n")])])]),t("h2",{attrs:{id:"_3-选项说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-选项说明"}},[n._v("#")]),n._v(" 3.选项说明")]),n._v(" "),t("p",[n._v("使用 less 命令选项需要注意以下几点：")]),n._v(" "),t("p",[n._v("（1）长命令选项可以简写，比如 --quit-at-eof 可以写作 --quit，但不能写作 --qui，因为与 --quiet 选项存在二义性。")]),n._v(" "),t("p",[n._v("（2）大写的长命令选项与与同名的小写的长命令选项作用不同，--QUIT-AT-EOF 不等于 --quit-at-eof。")]),n._v(" "),t("p",[n._v("（3）大写的长命令选项书写时可以只将首字母大写，其余小写，比如 --QUIT-AT-EOF 可以写作 --Quit-at-eof。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('-?, --help\n\t显示帮助信息，等于交互式命令 h\n-a, --search-skip-screen\n\t向前搜索默认从当前屏幕的首行开始，向后搜索默认从当前屏幕的末行开始。该选项使得向前搜索从屏幕末行的下一行开始，向后搜索从当前屏幕首行的前一行开始，即跳过屏幕内容。重复搜索命令 n 或 N 不受该选项影响\n-A, --SEARCH-SKIP-SCREEN\n\t向前搜索跳过屏幕首行到目标行，向后搜索跳过屏幕末行到目标行。重复搜索命令 n 或 N 受该选项影响\n-bN, --buffers=N\n\t设置缓冲区的大小为 N，单位 KB。如果 N 为 -1，表示缓冲区大小没有限制\n-B, --auto-buffers\n\t默认情况下，如果数据是从管道读取，缓存大小按照所需数据大小自动分配，如果管道数据较大，会导致大量内存被占用。-B 选项将关闭缓存的自动分配，采用 64K 或者 -b 选项指定的大小。警告：使用 -B 可能会导致错误的显示，因为只有最近查看的管道数据部分保留在内存中；任何以前的数据都会丢失\n-d, --dumb\n\t如果终端是哑终端（dumb terminal），则抑制错误消息的正常显示\n-e, --quit-at-eof\n\t当 less 第二次到达文件末尾时，自动退出。默认情况需要 q 命令\n-E, --QUIT-AT-EOF\n\t当 less 第已次到达文件末尾时，自动退出。默认情况需要 q 命令\n-f, --force\n\t强迫打开特殊文件，例如外围设备代号、目录和二进制文件\n-F, --quit-if-one-screen\n\t如果文件全部内容可以在一个屏幕内显示，less 自动退出\n-g, --hilite-search\n\t不加亮显示搜索到的所有关键词，仅显示当前显示的关键字，以提高显示速度\n-G, --HILITE-SEARCH\n\t不加亮显示搜索到的关键词，当前显示的关键字也不加亮\n--old-bot\n\t恢复到旧的屏幕底部。如果长行在到达终端边界时没有正确换行时可能需要该选项\n-hN, --max-back-scroll=N\n\t指定向后滚动的行数为 N\n-i, --ignore-case\n\t搜索时忽略大小写。如果正则表达式中包含大写字母则不忽略\n-I, --IGNORE-CASE\n\t搜索时忽略大小写。如果正则表达式中包含大写字母也忽略\n-jN, --jump-target=n\n\t指定屏幕中搜索的开始行。N 可以是正数（1 屏幕的第一行，2 屏幕的第二行），也可以是负数（-1 屏幕的倒数第一行，-2 屏幕的倒数第二行），还可以是分数（.5 屏幕的中间行，.3 屏幕的十分之三行）\n-kFILE or --lesskey-file=FILE\n\t将指定的文件作为 lesskey 文件。-k 选项可以出现多次\n-K, --quit-on-intr\n\t使 less 遇到 SIGINT 信号（Ctrl + C）时以状态码 2 立即退出\n-L, --no-lessopen\n\t忽略环境变量 LESSOPEN\n-m, --long-prompt\n\t显示类似 more 命令的百分比\n-M, --LONG-PROMPT\n\t显示类似 more 命令的百分比，此外还显示屏幕内容的行范围\n-n, --line-numbers\n\t不使用行号，以提高效率（缺省行为）。\n-N, --LINE-NUMBERS\n\t显示行号\n-oFILE, --log-file=FILE\n\t将输入的数据拷贝至指定的文件。一般输入的文件是个管道时使用该选项。如果指定的文件已经存在，则覆盖写入前请求二次确认\n-OFILE, --LOG-FILE=FILE\n\t类似于 -o 选项，不同的是覆盖写入已经存在的文件前不请求二次确认\n-pPATTERN or --pattern=PATTERN\n\t搜索符合指定模式的内容，等同于选项 +/PATTERN\n-PPROMPT, --prompt=PROMPT\n\t更改提示的内容为指定的内容。这个选项通常放在 LESS 环境变量中，而不是出现在命令行选项。该选项必须是 LESS 变量的最后一个选项，或者以美元符号终止。比如 -Ps 后面跟一个字符串会将默认（简短）提示符更改为该字符串。-Pm 改变选项 -m 的提示。-PM 更改 -M 的提示。-Ph 改变帮助内容的提示。-P= 更改由 = 命令打印的消息。-Pw 更改在等待数据时打印的消息（在 F 命令中）\n-q, --quiet, --silent\n\t导致适度的“静音”操作。比如如果试图滚动到文件末尾之后或文件开头之前，则不响终端铃\n-Q, --QUIET, --SILENT\n\t完全静音，终端铃永远不会响\n-r, --raw-control-chars\n\t显示原始的控制字符。比如 ^@ 表示空字符，^A 表示字符SOH（start of headline）。警告：使用该选项后不能保证终端能够正常的显示文件内容，因为终端依赖控制字符来格式化文件内容\n-R, --RAW-CONTROL-CHARS\n\t与 -r 类似，但只有 ANSI颜色转义序列以原始形式输出。与 -r 不同的是，屏幕外观在大多数情况下都得到了正确的维护\n-s, --squeeze-blank-lines\n\t显示连续空行为一行\n-S, --chop-long-lines\n\t显示长行时进行截断（chop）而不是换行（wrap）\n-tTAG, --tag=TAG\n\t指明标签\n-TTAGSFILE or --tag-file=TAGSFILE\n\t指明标签文件\n-u, --underline-special\n\t退格与回车作为可打印字符对待\n-U, --UNDERLINE-SPECIAL\n\t退格与回车作为控制字符对待\n-V, --version\n\t显示版本信息并退出\n-w, --hilite-unread\n\t临时高亮显示下一页的第一个新行\n-W, --HILITE-UNREAD\n\t类似于 -w，但在任何大于一行的向前移动命令之后，临时高亮显示第一个新行\n-xN,... or --tabs=N,...\n\t设置 tab 的位置\n-X, --no-init\n\t禁止向终端发送 termcap 初始化和去初始化字符串。如果删除初始化字符串做了一些不必要的事情，比如清除屏幕，这有时是可取的\n-yN, --max-forw-scroll=N\n\t指定向前滚动的最大行数\n-[z]N, --window=N\n\t指定滚动一屏所能的滚动的行数。如果 N 是负数，表示全屏能够显示的行数减去 N\n-"CC, --quotes=CC\n\t更改文件名引用字符。如果您试图命名一个包含空格和引号字符的文件，这可能是必要的\n-~, --tilde\n\t文件结束后的行通常显示为单个波浪线(~)。此选项使文件结束后的行显示为空行\n-#, --shift\n\t指定要在 RIGHTARROW 和 LEFTARROW 命令中水平滚动的默认位置数。如果指定的数字为零，则将默认位置数设置为屏幕宽度的一半。或者，可以将数字指定为屏幕宽度的分数，以小数点开始:.5是屏幕宽度的一半，.3是屏幕宽度的三分之三，以此类推。如果将数字指定为分数，则在调整终端窗口的大小时将重新计算滚动条位置的实际数量，从而使实际滚动条保持在屏幕宽度的指定分数\n--follow-name\n\t通常，如果在执行 F 命令时重命名输入文件，less 将继续显示原始文件的内容，尽管它的名称发生了更改。如果指定了——following -name，那么在F命令期间less将定期尝试按名称重新打开文件。如果重新打开成功，并且文件与原始文件不同(这意味着创建的新文件与原始文件(现在重命名)同名)，less将显示新文件的内容\n--no-keypad\n\t禁止向终端发送键盘初始化和反初始化字符串。如果小键盘字符串使数字小键盘的行为不受欢迎，这有时是有用的\n--use-backslash\n\t这个选项改变了后面选项的解释。在 --use-backslash 选项之后，删除选项字符串中的任何反斜杠，并按字面意思处理后面的字符。这允许在选项字符串中包含美元符号\n--\n\t该选项标识命令行选项的结束，之后的参数被解释为文件名，当在文件名的首字符是 - 或这 + 时需要使用该选项\n+\n\t如果命令行选项以 + 开头，则将该选项的其余部分视为初始命令。比如 +G 表示跳转至文件末尾，+/XYZ 表示跳转至匹配 XYZ 的第一行，+NUM 表示从文件第 NUM 行开始显示；如果选项以 ++ 开头，则初始命令将应用于所查看的每个文件，而不仅仅是第一个文件\n')])])]),t("p",[n._v("实际上，less 的命令行选项很少使用，浏览文件时常用的是交互式命令。")]),n._v(" "),t("h2",{attrs:{id:"_4-交互式命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-交互式命令"}},[n._v("#")]),n._v(" 4.交互式命令")]),n._v(" "),t("p",[n._v("以下描述中，^X 表示 control-X，ESC 表示退出键，比如 ESC-v 表示两个字符序列，先是 ESC，然后是 v。如果忘记命令，可以键入 h 或 H 查看命令的帮助信息。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("SPACE, ^V, f, ^F\n\t向前滚动 N 行，N 默认等于窗口大小。可以使用 -z 选项指定 N 的大小，生效多次；也可以在键入前输入数值 N，生效一次\nz\n\t类似于 SPACE。可以使用 -z 选项指定 N 的大小，生效多次；也可以在键入前输入数值 N，生效多次\nESC-SPACE\n\t先键入 ESC，再键入 SPACE，表示即使到达文件尾部仍然向前滚动一页\nENTER, RETURN, ^N, e, ^E, j, ^J\n\t向前滚动 N 行，默认为 1。键入前可先输入数值 N，只对当前动作有效\nd, ^D\n\t向前滚动 N 行，默认为屏幕一半。键入前可先输入数值 N，对当前与后续的 d 或 u 命令均有效，生效多次\nb, ^B, ESC-v\n\t向后滚动 N 行，默认为屏幕大小，可以使用 -z 选项指定 N 的大小，生效多次；也可以在键入前输入数值 N，生效一次\nw\n\t类似于 ESC-v。键入前输入数值 N，生效多次\ny, ^Y, ^P, k, ^K\n\t向后滚动 N 行，默认为 1。键入前可先输入数值 N，只对当前动作有效\nu, ^U\n\t向后滚动 N 行，默认为屏幕一半。键入前可先输入数值 N，对当前与后续的 d 或 u 命令均有效，生效多次\nESC-), RIGHTARROW\n\t向右滚动 N 个字符，N 默认等于屏幕宽度的一半。键入前可先输入数值 N，对当前与后续的 RIGHTARROW 命令均有效，生效多次\nESC-(, LEFTARROW\n\t向右滚动 N 个字符，N 默认等于屏幕宽度的一半。键入前可先输入数值 N，对当前与后续的 LEFTARROW 命令均有效，生效多次\nr, ^R, ^L\n\t刷新屏幕\nR\n\t刷新屏幕，放弃缓存内容。在文件被修改时有用\nF\n\t向前滚动，即使到达了文章尾部。当文件不断增长时该命令可以查看新增的内容，类似于 tail -f 命令\nESC-F\n\t与 F 类似，但是一旦找到与最后一个搜索模式匹配的行，就会按下终端铃并停止向前滚动\ng, <, ESC-<\n\t跳转到第 N 行，默认为文件首行。键入前可先输入数值 N，生效一次\nG, >, ESC->\n\t跳转到第 N 行，默认为文件末行。键入前可先输入数值 N，生效一次\np, %\n\t跳转到文件的位置 N% 处。N 应该在 0 到 100 之间，可能包含一个小数点\nP\n\t跳转到文件中字节偏移为 N 所在的行\n{\n\t如果屏幕的顶行出现左花括号，{ 命令将转到匹配的右花括号。匹配的右花括号将位于屏幕的末行。如果在顶行上有多个左花括号，则可以使用数字 N 来指定该行上的第 N 个括号\n}\n\t如果屏幕的末行出现右花括号，} 命令将转到匹配的左花括号。匹配的左花括号将位于屏幕的顶部。如果在末行上有多个右花括号，则可以使用数字 N 来指定该行上的第 N 个括号\n(\n\t类似 { 命令，但它适用于圆括号而不是花括号\n)\n\t类似 } 命令，但它适用于圆括号而不是花括号\n[\n\t类似 { 命令，但它适用于方括号而不是花括号\n]\n\t类似 } 命令，但它适用于方括号而不是花括号\nESC-^F\n\t后跟两个字符，作用类似于 {，但分别使用这两个字符作为开括号和闭括号。例如，ESC-^F < > 可用于向前移动到与顶行的 < 匹配的 >\nESC-^B\n\t后跟两个字符，作用类似于 }，但分别使用这两个字符作为开括号和闭括号。例如，ESC-^B < > 可用于向后移动到与末行的 < 匹配的 <\nm\n\t后跟任意小写字母，用该字母标记当前位置\n'\n\t(单引号)。后跟任何小写字母，返回到先前用该字母标记的位置。后跟另一个单引号，返回执行最后一个移动命令的位置。后面跟着 ^ 或 $，分别跳转到文件的开头和结尾。在检查新文件时，将保留标记，因此 ' 命令可用于在输入文件之间切换\n^X^X\n\t等于 ' 命令\n/PATTERN\n\t向前搜索包含指定模式的第 N 行，N 默认为 1。从屏幕首行开始搜索。在 PATTERN 前输入指定特殊字符可以控制搜索的行为。主要有：\n\t^N 或 ! 搜索不包含 PATTERN 的行\n\t^E 或 * 搜索多个文件。如果当前文件没有匹配的行，搜索 less 命令行指定的下一个文件\n\t^F 或 @ 命令行列表中第一个文件的第一行开始搜索，不管当前屏幕上显示的是什么，也不管 -a 或 -j 选项的设置是什么\n\t^K 突出显示与当前屏幕上的模式匹配的任何文本，但不要移动到第一个匹配项（保持当前位置）\n\t^R 不要解释正则表达式元字符;也就是说，做一个简单的文本比较\n?PATTERN\n\t向后搜索包含模式的第 N 行，N 默认为 1。从屏幕首行的前一行开始搜索。在 PATTERN 前输入指定特殊字符可以控制搜索的行为。主要有：\n\t^N 或 ! 搜索不包含 PATTERN 的行\n\t^E 或 * 搜索多个文件。如果搜索到达当前文件的开头，但没有找到匹配项，那么搜索将继续在命令行列表中的前一个文件中进行\n\t^F 或 @ 从命令行列表中最后一个文件的最后一行开始搜索，不管当前屏幕上显示的是什么，也不管 -a 或 -j 选项的设置是什么\n\t^K  等于前向搜索\n\t^R  等于前向搜索\nESC-/PATTERN\n\t等于 /*\nESC-?PATTERN\n\t等于 ?*\nn\n\t跳转到下一个匹配项\nN\n\t跳转到前一个匹配项\n&pattern\n\t只显示符合模式的行，与模式不匹配的行将不显示\n:e [filename]\n\t打开另一个文件\n^X^V, E\n\t等同于 :e\n:n\n\t检查下 N 个文件（从命令行中给定的文件列表）；N 默认为 1，可以在键入命令前输入 N\n:p\n\t检查前 N 个文件（从命令行中给定的文件列表）；N 默认为 1，可以在键入命令前输入 N\n:x\n\t检查第 N 个文件（从命令行中给定的文件列表）；N 默认为 1，可以在键入命令前输入 N\n:d\n\t从文件列表中删除当前文件\nt\n\t跳到下一个标签\nT\n\t跳到上一个标签\n=, ^G, :f\n\t打印有关正在查看的文件的一些信息，包括它的名称、行号和显示底线的字节偏移量。如果可能的话，打印文件的长度、文件中的行数和最后显示行至首行占文件的百分比\n-\n\t后跟命令行选项字母，这将更改该选项的设置并打印一条描述新设置的消息\n--\n\t类似于命令 -，但是后跟长选项的名称\n-+\n\t后面跟着一个命令行选项字母，这将把选项重置为默认设置，并打印一条描述新设置的消息\n--+\n\t类似于命令 -+，但是后跟长选项的名称\n-!\n\t后面跟着一个命令行选项字母，这将把选项重置为其默认设置的“反面”，并打印一条描述新设置的消息。这不适用于数值或字符串值选项\n--!\n\t类似于命令 -!，但是后跟长选项的名称\n_\n\t下划线，后跟命令行选项字母后，将打印一条描述该选项当前设置的消息。选项的设置没有改变\n__\n\t两个下划线，类似于命令 _，但是后跟长选项的名称\n+CMD\n\t使指定的命令 CMD 在每次检查新文件时执行\nV\n\t显示 less 的版本号\nq, Q, :q, :Q, ZZ\n\t退出\nv\n\t启动编辑器编辑当前文件，默认为 vim。可通过环境变量 VISUAL 或 EDITOR 指定\n! shell-command\n\t执行 Shell 命令\n| <m> shell-command\n\t将当前屏幕的第一行到 <m> 指定的位置作为管道的内容传送给 Shell 命令。m 可以是 ^（文件开始位置）、$（文件结束位置）、点号 . 或换行（当前屏幕的内容）\ns FILENAME\n\t将输入保存到文件中。这只在输入是管道而不是普通文件时才有效\n")])])]),t("p",[n._v("如此繁多的交互式命令，常用的并不多，符合二八定律，记住下面这些命令足以应对日常浏览需求。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("ENTER 向前滚动一行\ny 向后滚动一行\n\nd 向前滚动半屏\nu 向后滚动半屏\n\nf 向前滚动一屏\nb 向后滚动一屏\n\ng 跳转到文件首行\nG 跳转到文件末行\n\n/PATTERN 向前搜索指定内容\nn 跳转到下一个匹配项\nN 跳转到前一个匹配项\n\nh 显示帮助信息\nq 退出\n")])])]),t("p",[n._v("注意，如果环境变量 LESSSECURE 设置为 1，表示 less 运行在安全模式下，某些特性无法使用：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("! 执行 Shell 命令\n| 管道命令\n:e 打开新文件命令\nv 编辑命令\ns 保存命令\n-k 使用 lesskey 文件\n文件名中包含星号\n文件名自动补全\n")])])]),t("h1",{attrs:{id:"_5-常用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-常用示例"}},[n._v("#")]),n._v(" 5.常用示例")]),n._v(" "),t("p",[n._v("（1）查看文件，同时显示行号。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("less -N /etc/passwd\n\n1 root:x:0:0:root:/root:/bin/bash\n2 bin:x:1:1:bin:/bin:/sbin/nologin\n3 daemon:x:2:2:daemon:/sbin:/sbin/nologin\n...\n")])])]),t("p",[n._v("（2）执行命令，然后分页显示。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("ps -ef | less -N\n")])])]),t("p",[n._v("（3）浏览多个文件。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("less a.txt b.txt\n")])])]),t("p",[n._v("在浏览 a.txt 时，输入 :n 后，切换到 b.txt，输入 :p 后，切换回 a.txt。也可以使用 :e 命令打开另一个文件。")]),n._v(" "),t("p",[n._v("（4）从首行开始向前搜索。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("g : 跳转到首行\n/ : 使用模式进行搜索，并跳转到下一个匹配文本行\nn : 向前跳转到下一个匹配文本行\nN : 向后跳转到下一个匹配文本行\n\n# 或者。无需事先跳转到文件首行\n/@PATTERN：先输入 /，再输入 @，后输入搜索模式，最后回车\n")])])]),t("p",[n._v("（5）从末行开始向后搜索。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("G : 跳转到末行\n? : 使用一个模式进行搜索，并跳转到下一个匹配文本行\nn : 向后跳转到下一个匹配文本行\nN : 向前跳转到下一个匹配文本行\n\n# 或者。无需事先跳转到文件末行\n?@PATTERN：先输入 ?，再输入 @，后输入搜索模式，最后回车\n")])])]),t("p",[n._v("（6）打开文件时跳转到指定行 NUM。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("less -N +NUM FILE\n")])])]),t("p",[n._v("（7）查看 less 帮助信息。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("less -?\n")])])]),t("hr"),n._v(" "),t("h1",{attrs:{id:"参考文献"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考文献"}},[n._v("#")]),n._v(" 参考文献")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://man7.org/linux/man-pages/man1/less.1.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("less(1) - Linux manual page - man7.org"),t("OutboundLink")],1),n._v(" "),t("a",{attrs:{href:"https://blog.csdn.net/dengjin20104042056/article/details/95930905",target:"_blank",rel:"noopener noreferrer"}},[n._v("【Linux】一步一步学Linux——less命令(40)"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=e.exports}}]);