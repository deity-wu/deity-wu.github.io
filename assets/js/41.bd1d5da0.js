(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{398:function(t,a,s){"use strict";s.r(a);var e=s(43),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"git生成多个公钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#git生成多个公钥"}},[t._v("#")]),t._v(" Git生成多个公钥")]),t._v(" "),s("blockquote",[s("p",[t._v("需求背景：我有一个 github 账户用来维护个人的博客，公司用的是 gitlab ，两个账号的邮箱不同，无法公用一个公钥文件。因此得创建多个公钥不会导致项目的 git 冲突。")])]),t._v(" "),s("h3",{attrs:{id:"创建文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建文件"}},[t._v("#")]),t._v(" 创建文件")]),t._v(" "),s("p",[t._v("进入文件夹："),s("code",[t._v("cd ~/.ssh")]),t._v("，生成 ssh key："),s("code",[t._v('ssh-keygen -t rsa -C "your_email@example.com"')]),t._v("。")]),t._v(" "),s("p",[t._v("输入该命令后有连续的三个提示输入，第一个是你要创建的 ssh key 的文件名。我们就是通过第一个命令来创建不同的秘钥文件（如果不指定文件名会自动覆盖）。第二和第三次输入为秘钥口令，一般不填，直接回车。")]),t._v(" "),s("p",[t._v("这里我设置公司的公钥文件名为 id_rsa（默认文件名） ，自己的公钥文件名为 id_rsa_linhe_github 。这样就会根据公司邮箱和个人邮箱生成对应文件。")]),t._v(" "),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("p",[t._v("找到 key 所在的地方（我习惯用 everything 直接搜本地磁盘），创建 config 文件（无后缀），添加以下内容：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("Host github.com\nIdentityFile ~/.ssh/id_rsa_linhe_github\nUser your_email@example.com\n\n# 多个公钥可在后面继续添加其他配置\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("注意默认的 id_rsa 不需要配置。")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("字段")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Host")]),t._v(" "),s("td",[t._v("远程主机地址")])]),t._v(" "),s("tr",[s("td",[t._v("IdentityFile")]),t._v(" "),s("td",[t._v("私钥的文件路径及文件名称")])]),t._v(" "),s("tr",[s("td",[t._v("User")]),t._v(" "),s("td",[t._v("用户")])]),t._v(" "),s("tr",[s("td",[t._v("Port")]),t._v(" "),s("td",[t._v("远程主机上连接的端口号")])]),t._v(" "),s("tr",[s("td",[t._v("HostName")]),t._v(" "),s("td",[t._v("要登录的真实主机名。数字IP地址也是允许的")])])])]),t._v(" "),s("h3",{attrs:{id:"复制公钥到服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#复制公钥到服务器"}},[t._v("#")]),t._v(" 复制公钥到服务器")]),t._v(" "),s("p",[t._v("打开 github 或 gitlab 的设置，找到 SSH keys 配置项，然后将公钥文件中的内容复制到这里就 ok 了。")]),t._v(" "),s("h3",{attrs:{id:"其他"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[t._v("#")]),t._v(" 其他")]),t._v(" "),s("p",[t._v("一般来说，一台电脑要同时处理不用的 git 服务器，我们会使用不用的用户名。所以除了在初始化 git 时通过以下配置生成全局用户名和邮箱外，可能也需要在私有项目下配置项目下的用户名和邮箱，使用类似下面的命令，只是省略 "),s("code",[t._v("--global")]),t._v(" 就可以了。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('$ git config --global user.name "John Doe"\n$ git config --global user.email johndoe@example.com\n')])])]),s("Vssue",{attrs:{title:t.$title}})],1)}),[],!1,null,null,null);a.default=_.exports}}]);