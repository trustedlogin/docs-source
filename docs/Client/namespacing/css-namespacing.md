---
title: CSS Namespacing
sidebar: auto
sidebar_position: 3
---
# Namespacing CSS Files

TrustedLogin CSS files are namespaced so that they don't conflict with other plugins or themes that are using TrustedLogin. To namespace the files, you can use the `build-sass` script included with the TrustedLogin client inside the `bin/` directory. 

The `build-sass` script accepts the following arguments:

- `--namespace`: The namespace to use for the CSS files. This is required.
- `--assets_dir`: The path to the TrustedLogin client directory, used locate the SCSS source files. Optional. Default: `(vendor-namespaced|vendor-prefixed)/trustedlogin/client/src/assets/`.
- `--export_dir`: The path to the output directory where the generated CSS will be saved. Optional. Default: to `(vendor-namespaced|vendor-prefixed)/trustedlogin/client/src/assets/`.

The default way to namespace files is [as a Composer script](/Client/01-intro.md), but this may not work with your build process: the default implementation shown adds the required SCSS package (`scssphp/scssphp`) to the `require-dev` array, which may not work with your release flow. If you move `scssphp/scssphp` to the `require` array, the scssphp library will be included in your autoloader, which adds bloat for something that should be used one-time.

:::info
### When you see `ProBlockBuilder`, make sure to replace with your own namespace! {#when-you-see-problockbuilder-make-sure-to-replace-with-your-own-namespace}
In the examples below, we're going to pretend your plugin or theme is named "Pro Block Builder" and your business is named Widgets, Co. These should not be the names you use—make sure to update the sample code below to match your business and plugin/theme name!
:::

Here are alternate ways to namespace the CSS files:

## Manually namespacing the CSS files {#manually-namespacing-the-css-files}

If you'd like to manually namespace the CSS files (for instance, in a GitHub Actions workflow), first `cd` into your plugin or theme directory. Then use the following command (update it to match your namespace and path to TrustedLogin client directory):

```bash
php vendor-namespaced/trustedlogin/client/bin/build-sass --namespace=ProBlockBuilder
```

This will generate the namespaced CSS files in the `vendor-namespaced/trustedlogin/client/src/assets/` directory. You can then copy the files to your plugin or theme directory.

If this fails with a message `command not found: php`, then PHP isn't installed on your machine. [Install PHP](https://www.php.net/manual/en/install.php) and try again.

## Namespacing via an SCSS mixin {#namespacing-via-an-scss-mixin}

If you'd like to use an SCSS mixin to namespace CSS files, you can use the following code:

```scss
@import "vendor-namespaced/trustedlogin/client/src/assets/src/variables"; // Variables used in the mixins (all !default)
@import "vendor-namespaced/trustedlogin/client/src/assets/src/auth"; // Mixins for authentication screen
@import "vendor-namespaced/trustedlogin/client/src/assets/src/buttons"; // Mixins for buttons
@import "vendor-namespaced/trustedlogin/client/src/assets/src/global";

$namespace: "ProBlockBuilder";

@include trustedlogin-auth( $namespace );
@include trustedlogin-button( $namespace );
```
