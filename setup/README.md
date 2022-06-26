# Healthcare Individual Smartcard (HI card)
This is our Capstone Project in **Biomedical Engineering** Deparmant in **International University - VNU-HCM**. 

## 1. Install prerequirements
- If you still not install `Nodejs`, `React Native` and `Expo` before. Please read our instruction [here](https://github.com/DatacollectorVN/React-Native-Tutorial).
- Have an acoount Googl Cloud Platform (GCP).

## 2. Setting up
- Clone this repository
```bash
git clone https://github.com/DatacollectorVN/Healthcare-Individual-Smartcard.git
cd Healthcare-Individual-Smartcard
```
- If you have `Python` environment from your local follow this step below. If not, you download zip file [here](https://drive.google.com/file/d/1sqoFRA-rcPOwaxExUUiWsFELWudITARJ/view\?usp\=sharing).
```bash
pip install gdown
bash setup.sh
```

## 3. Getting start
- Configure project, change the values inside `< >` in `src-medicine-app/Profile.js` and `src-medicine-app/QRScanner.js` to update the user profile (You can update more than 3 users)
- Get GOOGLE_API_KEY. You must enable 2 services in GCP (`Directions API` and `Places API`) and create `API Key`. Then replace the `API key` in `<GOOGLE_API_KEY>` of `src-medicine-app/SearchNearBy.js` and `src-medicine-app/MapDirection.js`.
- Start app.
```bash
yarn start
```
 