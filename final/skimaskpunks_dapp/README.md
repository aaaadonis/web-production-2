
```json
{
  "CONTRACT_ADDRESS": "0x827acb09a2dc20e39c9aad7f7190d9bc53534192",
  "SCAN_LINK": "",
  "NETWORK": {
    "NAME": "Ethereum",
    "SYMBOL": "ETH",
    "ID": 137
  },
  "NFT_NAME": "Ski Mask Punks",
  "SYMBOL": "SMP",
  "MAX_SUPPLY": 1000,
  "WEI_COST": 75000000000000000,
  "DISPLAY_COST": 0.075,
  "GAS_LIMIT": 285000,
  "MARKETPLACE": "Opeansea",
  "MARKETPLACE_LINK": "https://opensea.io/collection/ski-mask-punks",
  "SHOW_BACKGROUND": true
}
```

Make sure you copy the contract ABI from remix and paste it in the `public/config/abi.json` file.
(follow the youtube video if you struggle with this part).

Now you will need to create and change 2 images and a gif in the `public/config/images` folder, `bg.png`, `example.gif` and `logo.png`.

Next change the theme colors to your liking in the `public/config/theme.css` file.

```css
:root {
  --primary: #ebc908;
  --primary-text: #1a1a1a;
  --secondary: #ff1dec;
  --secondary-text: #ffffff;
  --accent: #ffffff;
  --accent-text: #000000;
}
```

Now you will need to create and change the `public/favicon.ico`, `public/logo192.png`, and
`public/logo512.png` to your brand images.

Remember to update the title and description the `public/index.html` file

```html
<title>Ski Mask Punks</title>
<meta name="description" content="Mint your Ski Mask Punks NFT" />
```

Also remember to update the short_name and name fields in the `public/manifest.json` file

```json
{
  "short_name": "SMP",
  "name": "Ski Mask Punks"
}
```

