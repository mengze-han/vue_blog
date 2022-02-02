(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{419:function(a,t,e){"use strict";e.r(t);var s=e(56),i=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h3",{attrs:{id:"_1-下载子系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载子系统"}},[a._v("#")]),a._v(" 1.下载子系统")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-406b132777749578.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-759da722a6f05673.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),e("h3",{attrs:{id:"_2-安装必要软件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装必要软件"}},[a._v("#")]),a._v(" 2.安装必要软件")]),a._v(" "),e("p",[a._v("0."),e("a",{attrs:{href:"https://www.linuxidc.com/Linux/2017-11/148627.htm",target:"_blank",rel:"noopener noreferrer"}},[a._v("更换软件源"),e("OutboundLink")],1),a._v("\nhttps://mirrors.tuna.tsinghua.edu.cn/help/ubuntu/\n1.安装build-essential")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo apt-get install build-essential\n")])])]),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-78cca69c80437e10.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),e("p",[a._v("安装完之后发现gcc和g++都是5.4版本的，需要进行更新。\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-077bb0fbf917c7cf.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),e("p",[a._v("2.升级gcc, g++\n首先添加ppa到库")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("sudo add-apt-repository ppa:ubuntu-toolchain-r/test\nsudo apt-get update\nsudo apt-get install g++-8\n")])])]),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-67806fc2235cede0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),a._v("\n接下来使用管理员权限更新一下。")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-8 53 \\\n--slave /usr/bin/g++ g++ /usr/bin/g++-8 \\\n--slave /usr/bin/gcc-ar gcc-ar /usr/bin/gcc-ar-8 \\\n--slave /usr/bin/gcc-nm gcc-nm /usr/bin/gcc-nm-8 \\\n--slave /usr/bin/gcc-ranlib gcc-ranlib /usr/bin/gcc-ranlib-8\n")])])]),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-42a28db55856a4fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),e("p",[a._v("3.安装anaconda")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://www.anaconda.com/distribution/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网"),e("OutboundLink")],1),a._v("或者"),e("a",{attrs:{href:"https://mirrors.tuna.tsinghua.edu.cn/help/anaconda/",target:"_blank",rel:"noopener noreferrer"}},[a._v("清华镜像"),e("OutboundLink")],1),a._v("下载anaconda")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-e77fc35b6452e09e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),e("p",[a._v("配置环境变量")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("\necho 'export PATH=\"~/anaconda3/bin:$PATH\"' >> ~/.bashrc\nsource ~/.bashrc\n")])])]),e("p",[a._v("安装成功\n"),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-bb6f3572fdf47e9f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),a._v(" "),e("img",{attrs:{src:"https://upload-images.jianshu.io/upload_images/5415189-824afee4b835411e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),a._v(" "),e("p",[a._v("https://www.jianshu.com/p/fe327b72fa31\n4.vscode配置终端")])])}),[],!1,null,null,null);t.default=i.exports}}]);