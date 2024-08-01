
```
kickitweb
├─ .DS_Store
├─ .eslintrc.js
├─ .gitignore
├─ .prettierignore
├─ .storybook
│  ├─ main.ts
│  └─ preview.ts
├─ LICENSE
├─ app
│  ├─ error.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ opengraph-image.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  ├─ sitemap.ts
│  └─ store
│     ├─ [page]
│     │  ├─ opengraph-image.tsx
│     │  └─ page.tsx
│     ├─ api
│     │  └─ revalidate
│     ├─ product
│     │  └─ [handle]
│     │     └─ page.tsx
│     └─ search
│        ├─ [collection]
│        │  ├─ opengraph-image.tsx
│        │  └─ page.tsx
│        ├─ loading.tsx
│        └─ page.tsx
├─ components
│  ├─ BlockRenderer
│  │  ├─ BlockRenderer.js
│  │  └─ index.js
│  ├─ Core
│  │  ├─ Column
│  │  │  ├─ Column.js
│  │  │  └─ index.js
│  │  ├─ Columns
│  │  │  ├─ Columns.js
│  │  │  └─ index.js
│  │  ├─ Cover
│  │  │  ├─ Cover.js
│  │  │  └─ index.js
│  │  ├─ Gallery
│  │  │  ├─ Gallery.js
│  │  │  └─ index.js
│  │  ├─ Group
│  │  │  ├─ Group.js
│  │  │  └─ index.js
│  │  ├─ Heading
│  │  │  ├─ Heading.js
│  │  │  └─ index.js
│  │  ├─ Input
│  │  │  ├─ Input.js
│  │  │  └─ index.js
│  │  ├─ List
│  │  │  ├─ List.js
│  │  │  ├─ ListItem
│  │  │  │  ├─ ListItem.js
│  │  │  │  └─ index.js
│  │  │  └─ index.js
│  │  ├─ Paragraph
│  │  │  ├─ Paragraph.js
│  │  │  └─ index.js
│  │  ├─ Query
│  │  │  ├─ Query.js
│  │  │  └─ index.js
│  │  ├─ Spacer
│  │  │  ├─ Spacer.js
│  │  │  └─ index.js
│  │  └─ Textarea
│  │     ├─ Textarea.js
│  │     └─ index.js
│  ├─ Custom
│  │  ├─ Benefits
│  │  │  ├─ Benefits.js
│  │  │  └─ index.js
│  │  ├─ ButtonLink
│  │  │  ├─ ButtonLink.js
│  │  │  └─ index.js
│  │  ├─ BuyingPoint
│  │  │  ├─ BuyingPoint.js
│  │  │  └─ index.js
│  │  ├─ Calendly
│  │  │  ├─ Calendly.js
│  │  │  └─ index.js
│  │  ├─ CallToActionBar
│  │  │  ├─ CallToActionBar.js
│  │  │  ├─ CallToActionBar.stories.js
│  │  │  └─ index.js
│  │  ├─ CallToActionButton
│  │  │  ├─ CallToActionButton.js
│  │  │  ├─ CallToActionButton.stories.js
│  │  │  └─ index.js
│  │  ├─ Card
│  │  │  ├─ Card.js
│  │  │  └─ index.js
│  │  ├─ Carousel
│  │  │  ├─ Carousel.js
│  │  │  ├─ CarouselItem
│  │  │  │  ├─ CarouselItem.js
│  │  │  │  └─ index.js
│  │  │  └─ index.js
│  │  ├─ Faq
│  │  │  ├─ Faq.js
│  │  │  └─ index.js
│  │  ├─ Features
│  │  │  ├─ Features.js
│  │  │  └─ index.js
│  │  ├─ G_Reviews
│  │  │  ├─ G_Reviews.js
│  │  │  └─ index.js
│  │  ├─ HeadingLabel
│  │  │  ├─ HeadingLabel.js
│  │  │  └─ index.js
│  │  ├─ Highlights
│  │  │  ├─ Highlights.js
│  │  │  └─ index.js
│  │  ├─ IDDiv
│  │  │  ├─ IDDiv.js
│  │  │  └─ index.js
│  │  ├─ ImageHighlight
│  │  │  ├─ ImageHighlight.js
│  │  │  └─ index.js
│  │  ├─ ImageText
│  │  │  ├─ ImageText.js
│  │  │  └─ index.js
│  │  ├─ Label
│  │  │  ├─ Label.js
│  │  │  └─ index.js
│  │  ├─ Logos
│  │  │  ├─ Logos.js
│  │  │  └─ index.js
│  │  ├─ MiniCover
│  │  │  ├─ MiniCover.js
│  │  │  └─ index.js
│  │  ├─ PricingBlock
│  │  │  ├─ PricingBlock.js
│  │  │  └─ index.js
│  │  ├─ ScrollingBullets
│  │  │  ├─ ScrollingBullets.js
│  │  │  └─ index.js
│  │  ├─ ServiceHighlights
│  │  │  ├─ ServiceHighlights.js
│  │  │  └─ index.js
│  │  ├─ Services
│  │  │  ├─ Services.js
│  │  │  └─ index.js
│  │  ├─ ShowScroll
│  │  │  ├─ ShowScroll.js
│  │  │  └─ index.js
│  │  └─ Tile
│  │     ├─ Tile.js
│  │     └─ index.js
│  ├─ GravityForms
│  │  ├─ GravityForm.tsx
│  │  ├─ GravityFormsField.tsx
│  │  ├─ GravityFormsFields
│  │  │  ├─ AddressField.tsx
│  │  │  ├─ CheckboxField.tsx
│  │  │  ├─ DateField.tsx
│  │  │  ├─ EmailField.tsx
│  │  │  ├─ GravityFormComponent.js
│  │  │  ├─ MultiSelectField.tsx
│  │  │  ├─ NameField.tsx
│  │  │  ├─ NumberField.tsx
│  │  │  ├─ PhoneField.tsx
│  │  │  ├─ RadioField.tsx
│  │  │  ├─ SelectField.tsx
│  │  │  ├─ TextAreaField.tsx
│  │  │  ├─ TextField.tsx
│  │  │  ├─ TimeField.tsx
│  │  │  ├─ WebsiteField.tsx
│  │  │  └─ index.js
│  │  └─ GravityFormsForm.tsx
│  ├─ Page
│  │  ├─ Footer
│  │  │  ├─ Footer.js
│  │  │  └─ index.js
│  │  ├─ MainMenu
│  │  │  ├─ MainMenu.js
│  │  │  └─ index.js
│  │  ├─ Page.js
│  │  └─ index.js
│  ├─ carousel.tsx
│  ├─ cart
│  │  ├─ actions.ts
│  │  ├─ add-to-cart.tsx
│  │  ├─ close-cart.tsx
│  │  ├─ delete-item-button.tsx
│  │  ├─ edit-item-quantity-button.tsx
│  │  ├─ index.tsx
│  │  ├─ modal.tsx
│  │  └─ open-cart.tsx
│  ├─ grid
│  │  ├─ index.tsx
│  │  ├─ three-items.tsx
│  │  └─ tile.tsx
│  ├─ icons
│  │  └─ logo.tsx
│  ├─ label.tsx
│  ├─ loading-dots.tsx
│  ├─ logo-square.tsx
│  ├─ opengraph-image.tsx
│  ├─ price.tsx
│  ├─ product
│  │  ├─ gallery.tsx
│  │  ├─ product-description.tsx
│  │  └─ variant-selector.tsx
│  └─ prose.tsx
├─ fonts
│  └─ Inter-Bold.ttf
├─ generated
│  └─ graphql.ts
├─ hooks
│  └─ useGravityForm.tsx
├─ lib
│  ├─ cleanAndTransformBlocks.js
│  ├─ client.js
│  ├─ constants.ts
│  ├─ fonts.js
│  ├─ getPageStaticProps.js
│  ├─ gravity-forms.tsx
│  ├─ imageFormat.js
│  ├─ mapACFRepeater.js
│  ├─ mapMainMenuItems.js
│  ├─ registry.tsx
│  ├─ relativeToAbsoluteUrls.js
│  ├─ shopify
│  │  ├─ fragments
│  │  │  ├─ cart.ts
│  │  │  ├─ image.ts
│  │  │  ├─ product.ts
│  │  │  └─ seo.ts
│  │  ├─ index.ts
│  │  ├─ mutations
│  │  │  └─ cart.ts
│  │  ├─ queries
│  │  │  ├─ cart.ts
│  │  │  ├─ collection.ts
│  │  │  ├─ menu.ts
│  │  │  ├─ page.ts
│  │  │  └─ product.ts
│  │  └─ types.ts
│  ├─ theme.js
│  ├─ type-guards.ts
│  └─ utils.ts
├─ next-env.d.ts
├─ next-sitemap.config.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ 404.js
│  ├─ 500.js
│  ├─ [...slug].js
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ api
│  │  ├─ exit-preview.ts
│  │  ├─ get-form.js
│  │  ├─ program-search.js
│  │  └─ submit-form.js
│  └─ index.tsx
├─ pnpm-lock.yaml
├─ postcss.config.js
├─ prettier.config.js
├─ public
│  ├─ Xmark.png
│  ├─ alt-logo.png
│  ├─ checkbox.png
│  ├─ cover.png
│  ├─ dropdown-accent.svg
│  ├─ favicon
│  │  ├─ android-chrome-192x192.png
│  │  ├─ android-chrome-512x512.png
│  │  ├─ apple-touch-icon.png
│  │  ├─ favicon-16x16.png
│  │  ├─ favicon-32x32.png
│  │  ├─ favicon.ico
│  │  └─ favicon.png
│  ├─ google-logo.png
│  ├─ image 1.png
│  ├─ logo.png
│  ├─ logo.svg
│  ├─ opengraph-default.png
│  ├─ robots.txt
│  ├─ sitemap-0.xml
│  └─ sitemap.xml
├─ site.config.js
├─ stories
│  ├─ Button.stories.ts
│  ├─ Button.tsx
│  ├─ Configure.mdx
│  ├─ Header.stories.ts
│  ├─ Header.tsx
│  ├─ Page.stories.ts
│  ├─ Page.tsx
│  ├─ assets
│  │  ├─ accessibility.png
│  │  ├─ accessibility.svg
│  │  ├─ addon-library.png
│  │  ├─ assets.png
│  │  ├─ avif-test-image.avif
│  │  ├─ context.png
│  │  ├─ discord.svg
│  │  ├─ docs.png
│  │  ├─ figma-plugin.png
│  │  ├─ github.svg
│  │  ├─ share.png
│  │  ├─ styling.png
│  │  ├─ testing.png
│  │  ├─ theming.png
│  │  └─ tutorials.svg
│  ├─ button.css
│  ├─ header.css
│  └─ page.css
├─ styles
│  └─ index.css
├─ tailwind.config.js
└─ tsconfig.json

```
```
kickitweb
├─ .DS_Store
├─ .eslintrc.js
├─ .prettierignore
├─ .storybook
│  ├─ main.ts
│  └─ preview.ts
├─ LICENSE
├─ README.md
├─ app
│  ├─ error.tsx
│  ├─ favicon.ico
│  ├─ globals.css
│  ├─ opengraph-image.tsx
│  ├─ robots.ts
│  ├─ sitemap.ts
│  ├─ store
│  │  ├─ [page]
│  │  │  ├─ opengraph-image.tsx
│  │  │  └─ page.tsx
│  │  ├─ api
│  │  │  └─ revalidate
│  │  ├─ product
│  │  │  └─ [handle]
│  │  │     └─ page.tsx
│  │  └─ search
│  │     ├─ [collection]
│  │     │  ├─ opengraph-image.tsx
│  │     │  └─ page.tsx
│  │     ├─ loading.tsx
│  │     └─ page.tsx
│  └─ storepage.tsx
├─ components
│  ├─ BlockRenderer
│  │  ├─ BlockRenderer.js
│  │  └─ index.js
│  ├─ Core
│  │  ├─ Column
│  │  │  ├─ Column.js
│  │  │  └─ index.js
│  │  ├─ Columns
│  │  │  ├─ Columns.js
│  │  │  └─ index.js
│  │  ├─ Cover
│  │  │  ├─ Cover.js
│  │  │  └─ index.js
│  │  ├─ Gallery
│  │  │  ├─ Gallery.js
│  │  │  └─ index.js
│  │  ├─ Group
│  │  │  ├─ Group.js
│  │  │  └─ index.js
│  │  ├─ Heading
│  │  │  ├─ Heading.js
│  │  │  └─ index.js
│  │  ├─ Input
│  │  │  ├─ Input.js
│  │  │  └─ index.js
│  │  ├─ List
│  │  │  ├─ List.js
│  │  │  ├─ ListItem
│  │  │  │  ├─ ListItem.js
│  │  │  │  └─ index.js
│  │  │  └─ index.js
│  │  ├─ Paragraph
│  │  │  ├─ Paragraph.js
│  │  │  └─ index.js
│  │  ├─ Query
│  │  │  ├─ Query.js
│  │  │  └─ index.js
│  │  ├─ Spacer
│  │  │  ├─ Spacer.js
│  │  │  └─ index.js
│  │  └─ Textarea
│  │     ├─ Textarea.js
│  │     └─ index.js
│  ├─ Custom
│  │  ├─ Benefits
│  │  │  ├─ Benefits.js
│  │  │  └─ index.js
│  │  ├─ ButtonLink
│  │  │  ├─ ButtonLink.js
│  │  │  └─ index.js
│  │  ├─ BuyingPoint
│  │  │  ├─ BuyingPoint.js
│  │  │  └─ index.js
│  │  ├─ Calendly
│  │  │  ├─ Calendly.js
│  │  │  └─ index.js
│  │  ├─ CallToActionBar
│  │  │  ├─ CallToActionBar.js
│  │  │  ├─ CallToActionBar.stories.js
│  │  │  └─ index.js
│  │  ├─ CallToActionButton
│  │  │  ├─ CallToActionButton.js
│  │  │  ├─ CallToActionButton.stories.js
│  │  │  └─ index.js
│  │  ├─ Card
│  │  │  ├─ Card.js
│  │  │  └─ index.js
│  │  ├─ Carousel
│  │  │  ├─ Carousel.js
│  │  │  ├─ CarouselItem
│  │  │  │  ├─ CarouselItem.js
│  │  │  │  └─ index.js
│  │  │  └─ index.js
│  │  ├─ Faq
│  │  │  ├─ Faq.js
│  │  │  └─ index.js
│  │  ├─ Features
│  │  │  ├─ Features.js
│  │  │  └─ index.js
│  │  ├─ G_Reviews
│  │  │  ├─ G_Reviews.js
│  │  │  └─ index.js
│  │  ├─ HeadingLabel
│  │  │  ├─ HeadingLabel.js
│  │  │  └─ index.js
│  │  ├─ Highlights
│  │  │  ├─ Highlights.js
│  │  │  └─ index.js
│  │  ├─ IDDiv
│  │  │  ├─ IDDiv.js
│  │  │  └─ index.js
│  │  ├─ ImageHighlight
│  │  │  ├─ ImageHighlight.js
│  │  │  └─ index.js
│  │  ├─ ImageText
│  │  │  ├─ ImageText.js
│  │  │  └─ index.js
│  │  ├─ Label
│  │  │  ├─ Label.js
│  │  │  └─ index.js
│  │  ├─ Logos
│  │  │  ├─ Logos.js
│  │  │  └─ index.js
│  │  ├─ MiniCover
│  │  │  ├─ MiniCover.js
│  │  │  └─ index.js
│  │  ├─ PricingBlock
│  │  │  ├─ PricingBlock.js
│  │  │  └─ index.js
│  │  ├─ ScrollingBullets
│  │  │  ├─ ScrollingBullets.js
│  │  │  └─ index.js
│  │  ├─ ServiceHighlights
│  │  │  ├─ ServiceHighlights.js
│  │  │  └─ index.js
│  │  ├─ Services
│  │  │  ├─ Services.js
│  │  │  └─ index.js
│  │  ├─ ShowScroll
│  │  │  ├─ ShowScroll.js
│  │  │  └─ index.js
│  │  └─ Tile
│  │     ├─ Tile.js
│  │     └─ index.js
│  ├─ GravityForms
│  │  ├─ GravityForm.tsx
│  │  ├─ GravityFormsField.tsx
│  │  ├─ GravityFormsFields
│  │  │  ├─ AddressField.tsx
│  │  │  ├─ CheckboxField.tsx
│  │  │  ├─ DateField.tsx
│  │  │  ├─ EmailField.tsx
│  │  │  ├─ GravityFormComponent.js
│  │  │  ├─ MultiSelectField.tsx
│  │  │  ├─ NameField.tsx
│  │  │  ├─ NumberField.tsx
│  │  │  ├─ PhoneField.tsx
│  │  │  ├─ RadioField.tsx
│  │  │  ├─ SelectField.tsx
│  │  │  ├─ TextAreaField.tsx
│  │  │  ├─ TextField.tsx
│  │  │  ├─ TimeField.tsx
│  │  │  ├─ WebsiteField.tsx
│  │  │  └─ index.js
│  │  └─ GravityFormsForm.tsx
│  ├─ Page
│  │  ├─ Footer
│  │  │  ├─ Footer.js
│  │  │  └─ index.js
│  │  ├─ MainMenu
│  │  │  ├─ MainMenu.js
│  │  │  └─ index.js
│  │  ├─ Page.js
│  │  └─ index.js
│  ├─ carousel.tsx
│  ├─ cart
│  │  ├─ actions.ts
│  │  ├─ add-to-cart.tsx
│  │  ├─ close-cart.tsx
│  │  ├─ delete-item-button.tsx
│  │  ├─ edit-item-quantity-button.tsx
│  │  ├─ index.tsx
│  │  ├─ modal.tsx
│  │  └─ open-cart.tsx
│  ├─ grid
│  │  ├─ index.tsx
│  │  ├─ three-items.tsx
│  │  └─ tile.tsx
│  ├─ icons
│  │  └─ logo.tsx
│  ├─ label.tsx
│  ├─ loading-dots.tsx
│  ├─ logo-square.tsx
│  ├─ opengraph-image.tsx
│  ├─ price.tsx
│  ├─ product
│  │  ├─ gallery.tsx
│  │  ├─ product-description.tsx
│  │  └─ variant-selector.tsx
│  └─ prose.tsx
├─ fonts
│  └─ Inter-Bold.ttf
├─ generated
│  └─ graphql.ts
├─ hooks
│  └─ useGravityForm.tsx
├─ lib
│  ├─ cleanAndTransformBlocks.js
│  ├─ client.js
│  ├─ constants.ts
│  ├─ fonts.js
│  ├─ getPageStaticProps.js
│  ├─ gravity-forms.tsx
│  ├─ imageFormat.js
│  ├─ mapACFRepeater.js
│  ├─ mapMainMenuItems.js
│  ├─ registry.tsx
│  ├─ relativeToAbsoluteUrls.js
│  ├─ shopify
│  │  ├─ fragments
│  │  │  ├─ cart.ts
│  │  │  ├─ image.ts
│  │  │  ├─ product.ts
│  │  │  └─ seo.ts
│  │  ├─ index.ts
│  │  ├─ mutations
│  │  │  └─ cart.ts
│  │  ├─ queries
│  │  │  ├─ cart.ts
│  │  │  ├─ collection.ts
│  │  │  ├─ menu.ts
│  │  │  ├─ page.ts
│  │  │  └─ product.ts
│  │  └─ types.ts
│  ├─ theme.js
│  ├─ type-guards.ts
│  └─ utils.ts
├─ next-env.d.ts
├─ next-sitemap.config.js
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ 404.js
│  ├─ 500.js
│  ├─ [...slug].js
│  ├─ _app.tsx
│  ├─ _document.tsx
│  ├─ api
│  │  ├─ exit-preview.ts
│  │  ├─ get-form.js
│  │  ├─ program-search.js
│  │  └─ submit-form.js
│  └─ index.tsx
├─ pnpm-lock.yaml
├─ postcss.config.js
├─ prettier.config.js
├─ public
│  ├─ Xmark.png
│  ├─ alt-logo.png
│  ├─ checkbox.png
│  ├─ cover.png
│  ├─ dropdown-accent.svg
│  ├─ favicon
│  │  ├─ android-chrome-192x192.png
│  │  ├─ android-chrome-512x512.png
│  │  ├─ apple-touch-icon.png
│  │  ├─ favicon-16x16.png
│  │  ├─ favicon-32x32.png
│  │  ├─ favicon.ico
│  │  └─ favicon.png
│  ├─ google-logo.png
│  ├─ image 1.png
│  ├─ logo.png
│  ├─ logo.svg
│  ├─ opengraph-default.png
│  ├─ robots.txt
│  ├─ sitemap-0.xml
│  └─ sitemap.xml
├─ site.config.js
├─ stories
│  ├─ Button.stories.ts
│  ├─ Button.tsx
│  ├─ Configure.mdx
│  ├─ Header.stories.ts
│  ├─ Header.tsx
│  ├─ Page.stories.ts
│  ├─ Page.tsx
│  ├─ assets
│  │  ├─ accessibility.png
│  │  ├─ accessibility.svg
│  │  ├─ addon-library.png
│  │  ├─ assets.png
│  │  ├─ avif-test-image.avif
│  │  ├─ context.png
│  │  ├─ discord.svg
│  │  ├─ docs.png
│  │  ├─ figma-plugin.png
│  │  ├─ github.svg
│  │  ├─ share.png
│  │  ├─ styling.png
│  │  ├─ testing.png
│  │  ├─ theming.png
│  │  └─ tutorials.svg
│  ├─ button.css
│  ├─ header.css
│  └─ page.css
├─ styles
│  └─ index.css
├─ tailwind.config.js
└─ tsconfig.json

```