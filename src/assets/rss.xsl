<xsl:stylesheet version="3.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8"/>
<xsl:template match="/">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
<title><xsl:value-of select="/rss/channel/title"/> (RSS Feed)</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>
<meta name="color-scheme" content="dark light"/>
<style><![CDATA[
*,*::before,*::after{box-sizing:border-box}
*{margin:0}
html{font:100%/1.5 sans-serif}
body{max-width:56ch;margin:0 auto;padding:1.5em 25px 3em}
summary{width:max-content;margin-left:auto;cursor:default}
header{margin:1.5em 0 0 -20px;padding-left:15px;border-left:5px solid}
h1{font-size:150%;line-height:1.2}
li,header p{font-size:125%;line-height:1.2}
time{display:block;font-size:80%;line-height:1.5}
nav a{float:left;margin-right:1ch}
div{margin:0 -20px;padding:1.5em 19px;border:1px solid;border-radius:5px}
input{display:block;width:100%;padding:.5em;border:1px solid;font:inherit}
ul{margin:0 -20px;padding:0 20px}
header,ul{margin-top:3em}
div,p{margin-top:1.5em}
li{margin-top:1.2em}
header p,div p:first-child{margin-top:0}
li span{display:none}
]]></style>
</head>
<body>
<nav><a href="https://cssence.com/">CSSence.com</a></nav>
<details>
<summary>Web Feed</summary>
<div>
<p><strong>This is a web feed,</strong> also known as an RSS feed. <strong>Subscribe</strong> by copying the <label for="url">feed URL</label> below or from the address bar into your newsreader.</p>
<p><input id="url" name="url" type="text" readonly="readonly"><xsl:attribute name="value"><xsl:value-of select="/rss/channel/link"/></xsl:attribute></input></p>
<p>Visit <a href="https://aboutfeeds.com">About Feeds</a> to get started with newsreaders and subscribing. It’s free.</p>
</div>
</details>
<header>
<h1><xsl:value-of select="/rss/channel/title"/></h1>
<p><xsl:value-of select="/rss/channel/description"/></p>
</header>
<ul>
<xsl:for-each select="/rss/channel/item">
<li><a><xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute><xsl:value-of select="title"/></a><span>, </span><time><xsl:value-of select="substring(pubDate, 6, 11)"/></time></li>
</xsl:for-each>
</ul>
</body>
</html>
</xsl:template>
</xsl:stylesheet>
