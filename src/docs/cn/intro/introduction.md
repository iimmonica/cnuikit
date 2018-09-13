# 介绍

<p class="uk-text-lead">熟悉 UIkit 的基本设置和概述。</p>

首先，您需要下载 UIkit。 有关 CDN 的其他软件包和链接，请访问[安装指南](installation.md)以了解更多信息。

<a class="uk-button uk-button-primary" href="https://getuikit.com/download">下载 UIkit</a>

***

## 包内容

Zip 文件包含已编译的 CSS  和JavaScript 文件，这是您入门所需的一切。稍后，您可能希望自己[安装和编译 UIkit](installation.md)，并创建自己的 [UIkit 主题](less.md)。

| 文件夹 | 描述                                               |
|:-------|:--------------------------------------------------|
| `/css` | 包含 UIkit CSS 和一个 RTL 版本。                    |
| `/js`  | 包含 UIkit JavaScript 和 Icon Library JavaScript。 |

***

## HTML 标记

将已编译和压缩的 CSS 和 JavaScript 添加到HTML5文档的 `<head>` 元素中。同时还有 UIkit 图标库。基本设置就这些了。

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Title</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="css/uikit.min.css" />
        <script src="js/uikit.min.js"></script>
        <script src="js/uikit-icons.min.js"></script>
    </head>
    <body>
    </body>
</html>
```

将 UIkit 包含到文档中后，请查看可用组件，然后您就可以在页面 `<body>` 元素内创建自己的标记代码了。

***

## 编辑器 UIkit 代码补全

如果您有一个可靠的代码编辑器，例如 [Sublime Text](https://www.sublimetext.com/) 或 [Atom](https://atom.io/)，则使用 UIkit 代码补全效果最佳。为了提高效率，我们建议您为自己喜欢的 IDE 或代码编辑器安装一个自动补全的插件。这节省了大量时间，因为您不必查找就可以键入所有 UIkit 类和标记。

- [Sublime Text 3 自动补全插件](https://github.com/uikit/uikit-sublime)
- [Atom 自动补全插件](https://atom.io/packages/uikit-atom)

***

## 浏览器支持

下表列出了 UIkit 测试过的浏览器版本。“最新”意味着它可以在该浏览器的所有最新版本上正常运行。近年来随着许多浏览器转向滚动发布策略，将浏览器支持固定到特定版本变得有点麻烦。总之：UIkit几乎适用于任何现代浏览器。

<div class="uk-child-width-1-3 uk-child-width-expand@s uk-text-center" uk-grid uk-height-match="> * > div">
    <div>
        <div class="uk-flex uk-flex-center uk-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome.svg?sanitize=true" width="50" alt="Chrome">
        </div>
        <p>Latest</p>
    </div>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox.svg?sanitize=true" width="50" alt="Firefox">
        </div>
        <p>Latest</p>
    </div>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge.svg?sanitize=true" width="50" alt="Edge">
        </div>
        <p>Latest</p>
    </div>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11.svg?sanitize=true" width="50" alt="IE">
        </div>
        <p>11+</p>
    </div>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios.svg?sanitize=true" width="50" alt="Safari">
        </div>
        <p>9.1+</p>
    </div>
    <div>
        <div class="uk-flex uk-flex-center uk-flex-middle">
            <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera.svg?sanitize=true" width="50" alt="Opera">
        </div>
        <p>Latest</p>
    </div>
</div>
