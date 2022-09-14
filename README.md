# kusamaacid.com

<br />

## Environment variables

```
REACT_APP_KUSAMA_BUCKET_PILLS=<S3_BUCKET>/acid_pills
REACT_APP_KUSAMA_BUCKET_BANNERS=<S3_BUCKET>/banners
REACT_APP_KUSAMA_BUCKET_PILLS_THUMBNAILS=<S3_BUCKET>/acid-pills-thumbnails
REACT_APP_KUSAMA_BUCKET_SMILEY_PNG=<S3_BUCKET>/smiley/drive-download-20220905T213246Z-001
REACT_APP_KUSAMA_BUCKET_SMILEY_VIDEOS=<S3_BUCKET>/smiley/drive-download-20220905T213312Z-001
REACT_APP_KUSAMA_BUCKET_SMILEY_BANNERS=<S3_BUCKET>/smiley/banners
REACT_APP_KUSAMA_BUCKET_ALL=<S3_BUCKET>/all
REACT_APP_KUSAMA_OLD_SITE=https://acidpilsnft.tempurl.host
```


## How to add one page

add on config routes:
https://github.com/palloncino/kusama-acid/blob/3dc6ec272a895d37bdb5aa363198ae7bf267d94f/src/settings.json#L2

add path here:
https://github.com/palloncino/kusama-acid/blob/b5183c44073cfa2c7b6eea9ca72b04c6034d108b/src/pages/FrameBuilder/index.tsx#L23

amend type here:
https://github.com/palloncino/kusama-acid/blob/3dc6ec272a895d37bdb5aa363198ae7bf267d94f/src/interfaces/index.ts#L3

remove header if needed:
https://github.com/palloncino/kusama-acid/blob/ebea6e57178748fe823f0eea36eae79b6020cb1e/src/pages/FrameBuilder/index.tsx#L13