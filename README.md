# EasyMotion Plugin

## Description

EasyMotion Plugin for jQuery is the simple way to add animation to any HTML object on your website when it appears on scrolling. This plugin includes different types of animation: fade, left, right, top and bottom appearing, scaling and rotations. It also provides extra settings for animation time and appearing offset.

## Installation and usage

1. Download the plugin to your website folder (or create subfolder).

2. Add the following line between `<head>..</head>` tags and replace the */file-path/* with the real path to the file **easymotion.js**:
```
<script src="/file-path/easymotion.js"></script>
```
If you don't use jQuery library add one more line between `<head>..</head>` tags and replace the */file-path/* with the real path to the file **jquery.min.js**:
```
<script src="/file-path/jquery.min.js"></script>
```
3. Add html attribute animation to any object you want to animate appearing on scrolling:
```
<h2 animation="scale">...</h2>
<div animation="fade">...</div>
<img src="image.jpg" animation="rotate">
<p animation="left-to-right">...</p>
```
4. Check extra settings if you have a special demands.

## Animation types

`animation="fade"` - Fading appearing effect

`animation="scale"` - Scaling appearing effect

`animation="rotate"` - Rotation appearing effect

`animation="rotate-c"` - Clockwise rotation appearing effect

`animation="scale-rotate"` - Scaling and rotation appearing effect

`animation="left-to-right"` - Appearing from left to right effect

`animation="right-to-left"` - Appearing from right to left effect

`animation="bottom-to-top"` - Appearing from bottom to top effect

`animation="top-to-bottom"` - Appearing from top to bottom effect

## Extra settings

#### Animation time
You can control the animation time by adding one more HTML attribute animation-time=" " to the animated element (1000 = 1 second):
```
<div animation="scale" animation-time="2500">...</div>
```
#### Animation offset
Adjust the animation offset appearing on scrolling by adding HTML attribute animation-offset=" " to the animated element:
```
<div animation="fade" animation-offset="300">...</div>
```
## Limitations

For `<span>` elements works only the fade animation type.
If you want to animate a bottom page element (page footer) don't forget to add `animation-offset="0"` attribute.
