---
layout: post
title: Base16を使おう
categories: coding
---
![GVim-Base16-isotope](/img/figure/GVim-Base16-isotope.png)

博多市です。

自分もデザインをやる人間のはしくれ。
コーディングする際のエディタの見た目はこだわろうと考えているのですが、
どうにも悩ましいのがカラースキームです。
複数のエディタで同じカラースキームを使いたいけど、
いちいち設定するのは非常に面倒くさい。

そこで、さまざまなエディタに対応したカラースキーム、
[Base16](https://github.com/chriskempson/base16)を紹介します。

<!-- more -->

# Base16とは?

Base16は、基調となる8つの色とアクセントとなる8つの色、合わせて16個の色をスキームとして定め、
テンプレートにより設定ファイルの生成を容易にした、カラースキームとテンプレートの集合体です。

Base64とは特に関係ありません。

# カラースキーム

まあ、なにはともあれ、[デモ](http://chriskempson.github.io/base16/)を見てみてください。

現在、

* 3024
* Atelier Dune
* Atelier Forest
* Atelier Health
* Atelier Lakeside
* Atelier Seaside
* Bespin
* Bright
* Chalk
* Default
* Eighties
* Flat
* Grayscale
* Greenscreen
* Isotope
* London Tube
* Marrakesh
* Mocha
* Monokai
* Ocean
* Paraiso
* Pop
* Railscasts
* Shapeshifter
* Solarized
* Tomorrow
* Twilight

のカラースキームが提供されています。

# 使い方

## 各種リポジトリからインストール

各所で、Base16のローカライズされた実装が配布されているので、
それを引っ張ってきます。
Vimの場合は、[base16-vim](https://github.com/chriskempson/base16-vim)で配布されています。
(すみません、Vimのあれこれは詳しくないので勘弁を…)

適当なフォルダにクローンして、

    git clone https://github.com/chriskempson/base16-vim.git

ユーザーの`colors`フォルダにコピーします。

    cp base16-vim/colors ~/.vim/colors -R

で、`.vimrc`にカラースキームを設定します。`base16-default`のdarkを使う場合、以下のようにします。

    set background=dark
    colorscheme base16-default

## 自分でビルドする

[base16-builder](https://github.com/chriskempson/base16-builder)でビルダーが提供されているので、
最新の情報を使用したい場合や、独自のカラースキームを使用したい場合はこれを使いましょう。
対応していないアプリケーションにも、自分で実装を書いてスキームを適用することができます。

ビルダーは、YAMLで書かれたカラースキームと、eRubyで書かれたテンプレートファイルで構成されています。
Readmeを読めばすぐわかりますが、

    ruby base16

を実行すると、`output`ディレクトリにカラースキームの設定ファイルが生成され、
アプリケーションで使うことができます。

また、自分はWindowsでサクラエディタとGVimを主に使用しているのですが、
サクラエディタ用の設定ファイルが見つからなかったので自作しました。
[hakatashi/base16-builder](https://github.com/hakatashi/base16-builder/tree/master/templates/sakura)
に置いてあります。

![sakura-Base16-tomorrow](/img/figure/sakura-Base16-tomorrow.png)

まあ、こんな感じになります。
