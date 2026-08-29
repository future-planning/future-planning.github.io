# おおもり整体院 Webサイト

完全予約制「フルオーダー施術」の整体院、おおもり整体院の公式サイトです。
静的サイトとして GitHub Pages で公開しています。

- 公開URL: https://seitai.mart-tokyo.com/
- ホスティング: GitHub Pages（`main` ブランチのルートを公開）
- 独自ドメイン: `CNAME` で `seitai.mart-tokyo.com` を指定

## ページ構成

| ファイル | 内容 |
| --- | --- |
| `index.html` | トップページ（コンセプト／メニュー・料金／スタッフ／アクセス） |
| `dailycare.html` | 習慣ケアページ（セルフケア紹介・オンラインショップ導線） |

`dailycare.html` はトップページからリンクしていない独立ページです。QRコードや直接URLでの案内用です。

## ファイル構成

```
.
├── CNAME              # 独自ドメイン設定（GitHub Pages が参照）
├── index.html         # トップページ
├── dailycare.html     # 習慣ケアページ
├── manipulative.css   # index.html 用スタイル
├── manipulative.js    # index.html 用スクリプト（スムーススクロール／ハンバーガーメニュー）
└── img/               # 画像素材
```

`index.html` は jQuery + 自前のCSS、`dailycare.html` は Tailwind CSS（CDN）+ Lucide アイコンで作られており、それぞれ独立しています。

## 外部サービスへの導線

- ご予約: ホットペッパービューティー / Googleフォーム
- オンラインショップ: Shopify（online-mart-tokyo）

## 更新方法

ビルド手順はありません。HTML／CSS／画像を直接編集します。

```bash
git clone https://github.com/future-planning/future-planning.github.io.git
cd future-planning.github.io
```

ローカル確認はブラウザで `index.html` を開くか、簡易サーバーを起動します。

```bash
python3 -m http.server 8000
```

`main` ブランチに push すると GitHub Pages が自動で公開を更新します（反映まで数分かかる場合があります）。

## 注意事項

- `CNAME` は独自ドメインの設定ファイルです。削除するとカスタムドメインでの公開が解除されます。
