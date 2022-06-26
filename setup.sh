echo 'Start to download packages.zipun'
gdown --fuzzy https://drive.google.com/file/d/1sqoFRA-rcPOwaxExUUiWsFELWudITARJ/view\?usp\=sharing
echo 'unzip ./packages.zip'
unzip ./packages.zip
rm -f packages.zip
echo 'Done'