#!/bin/bash
set -e

DIST_DIR="./out"
BUCKET_NAME="www.scottmilewski.com"

aws s3 sync $DIST_DIR s3://$BUCKET_NAME

aws cloudfront create-invalidation --distribution-id E2U6HGRYYW64NC --paths "/*"

aws cloudfront create-invalidation --distribution-id E3BVWNPAAF8BDR --paths "/*"