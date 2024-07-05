# custom build in vercel

if [[ $VERCEL_GIT_COMMIT_REF == "develop"  ]] ; then 
  npm run build:develop
elif [[ $VERCEL_GIT_COMMIT_REF == "release"  ]] ; then 
  npm run build:staging
else 
  npm run build:production
fi