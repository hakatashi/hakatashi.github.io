---
layout: post
title: HTML中でのtbodyの扱い
categories: HTML
---
テスト投稿なので本当にどうでもいい話ですが、ちょっとあれっと思ったので。

<!-- more -->

# 発端

後輩の書いたHTML5を見たら、

    <table><tr>
    <td>
    うにゃうにゃ
    </td>
    </tr></table>

みたいな部分があって、こりゃいかんだろと思って[W3C Validator](http://validator.w3.org/)
にかけてみました。

すると、ちゃんと通るじゃないですか。なんだこりゃ。

# HTML5では`tbody`は必須ではない

仕様を調べたところ、
[W3C HTML5 Candidate Recommendation](http://www.w3.org/TR/html5/tabular-data.html#the-table-element)
に、次のようにあります。

> Content model:
> In this order: optionally a caption element, followed by zero or more colgroup elements,
> followed optionally by a thead element, followed optionally by a tfoot element,
> *followed by either zero or more tbody elements or one or more tr elements*,
> followed optionally by a tfoot element (but there can only be one tfoot element child in total),
> optionally intermixed with one or more script-supporting elements.

ありゃ。別にtableの直下にtdを置いても問題ないのか。
