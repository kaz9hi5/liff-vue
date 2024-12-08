#!/usr/bin/bash

source ~/.bashrc
cd ~/liff-vue

# setup pem file
/usr/bin/cp -p ~/.acme.sh/'*.hi5kazjp-amz.com_ecc'/*.pem .cert/.

#
logf='../logs/'`date '+%Y%m%d'.log`
#/usr/bin/nohup /usr/local/bin/yarn serve &>> ${logf} &

exit 0
