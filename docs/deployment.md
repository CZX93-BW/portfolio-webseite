# Deployment and troubleshooting

I deploy the portfolio as an Angular production build on PHP-enabled IONOS webspace. The build can be prepared locally. The actual domain target and file transfer account are checked in the hosting configuration before files are uploaded.

## Prepare the release

With dependencies installed from the lockfile, run the production build from the repository root.

```sh
npm run build
```

Production is the default build configuration. Generated JavaScript and CSS receive hashed filenames. Files from `public/`, including the catalogue, fonts, PHP endpoint and hidden Apache configuration, are copied into `dist/portfolio-webseite/browser/`. I use the new build output when preparing an upload so that the referenced portrait and all project previews are included. [Angular configuration](../angular.json)

Build budgets are configured separately for the initial bundle and individual component styles. For a component stylesheet the warning threshold is 15 kB and the error threshold is 25 kB. I read the affected path and severity in the build output when assessing a release.

## Upload over SFTP

1. Confirm the portfolio domain's document root in IONOS. An account restricted to that directory may show it as `/`. Check the files already present to distinguish it from a project subdomain.
2. Download a backup of the current release to a separate local directory, including `.htaccess`, `contact.php`, the current entry page and its referenced assets.
3. Upload the **contents** of the build's `browser/` directory. Transfer bundles, assets, catalogue, PHP and Apache configuration first. Keep older hashed assets available during the transfer.
4. Check the transfer queue for failed files, then upload `index.html` last. The entry page can now reference the uploaded bundle names.
5. If rollback is needed, restore the matching files from the backup and publish its entry page last. Check the legal routes and contact endpoint again.

## What Apache handles

Existing files and directories are served directly. Other paths are rewritten to `index.html` so Angular can resolve a direct request such as `/legal-notice`. The file `contact.php` must sit beside the entry page and be executed by the host. With `mod_headers` available, `index.html` and `projects.json` are marked for cache revalidation. The HTTPS redirect is checked separately in the hosting configuration. [Apache configuration](../public/.htaccess)

## Verify the live release

I compare the generated script filename in the local and live entry pages, then check the files the page actually requests. On Windows the first two commands show the bundle references. The last two show the HTTP response and a direct legal route.

```cmd
findstr /i "main-" dist\portfolio-webseite\browser\index.html
curl.exe -fsS https://bastian-wollny.de/ | findstr /i "main-"
curl.exe -I http://bastian-wollny.de/
curl.exe -I https://bastian-wollny.de/privacy-policy
```

A matching filename identifies the frontend bundle. The separately served catalogue and images are checked in the browser. I open both legal URLs directly, reload them, switch languages, open both project dialogs and send a contact message. Receipt is checked in the destination mailbox. The [release checklist](../README.md#quality-checklist) also covers keyboard navigation, form feedback and mobile layout.

## Troubleshooting

| Symptom | First check |
| --- | --- |
| Homepage is available, but a legal URL returns 404 on reload | Check the domain root, the uploaded hidden `.htaccess` and Apache rewrite support. |
| A project preview is missing or the list is empty | Open `/data/projects.json`, check its content and follow the exact case-sensitive image path it contains. |
| The previous frontend is still visible | Compare the local and live entry pages, check revalidation headers and confirm the new bundle was uploaded to the same directory. |
| The form receives HTML instead of JSON | Check the response body and the URL of the request. A missing `contact.php` may have fallen through to the Angular entry page. |
| The form fails for one address or delivery is delayed | Check the HTTP status against the [contact contract](contact.md). For a mail transport error, inspect the hosting error log. For an accepted message, check inbox and spam separately. |

[Back to the documentation index](../README.md#technical-documentation)
