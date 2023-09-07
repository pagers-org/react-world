#!/usr/bin/env sh

YARN="$(yarn global bin)";

if [ $YARN == '' ]; then
  echo 'yarn command not found';
  exit 0;
fi;

str_arr=();
str_arr+=('#!/usr/bin/env sh');
str_arr+=('');
str_arr+=('export PATH="'$YARN':$PATH"');

idx=0;
for i in "${str_arr[@]}"
do
  if [ $idx -eq 0 ]; then
    echo $i > ./.husky/common.sh;
  else
    echo $i >> ./.husky/common.sh;
  fi;

  let idx+=1;
done;

chmod a+x ./.husky/common.sh;
chmod a+x ./.husky/commit-msg;
chmod a+x ./.husky/pre-commit;

exit 0;