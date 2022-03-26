# Medicine-mobile-app
This is our Capstone project in Biomedical Engineering at International University. 

We used JavaScript and [React Native](https://reactnative.dev) for developing this project.

## Setup requirements
### 1. Install [Nodejs](https://reactnative.dev)
After installing, verify:

`node -v`

*Expeted output:* v16.14.2 (depend on your version).

`npm -v`

*Expeted output:* 8.5.0 (depend on your version).

### 2. Install Expo-CLI and Yarn
[Expo-CLI]("https://docs.expo.dev/workflow/expo-cli/") is a command line app that is the main interface between a developer and Expo tools for developing and publising app.

[Yarn]("https://yarnpkg.com") is a package manager that doubles down as project manager.

`npm install -g expo-cli yarn`

After installing, verify:

`yarn -v`

*Expeted output:* 1.22.18 (depend on your version).

`react-native -v`

*Expeted output:* react-native-cli: 2.0.1 react-native: 0.67.4 (depend on your version).

`expo --version`
*Expeted output:* 5.3.0 (depend on your version).

#### Note: 
If you get error like `expo: command not found` or `react-native comand not found`, please following my resolve:

If you got full error like `-bash: expo: command not found` to resolve this:
+ Check PATH: `echo $PATH`, the output you will not see *.npm-global*.
+ Add PATH and activate bash_profile: `export PATH=$PATH:~/.npm-global/bin` and `source ~/.bash_profile`.
+ Check PATH again: `echo $PATH`, you will see *.npm-global*.

If you get error like `zsh: command not found` to resolve this:
+ Open *.zshrc*: `open ~/.zshrc`.
+ Add in *.zshrc:* `export PATH=$PATH:~/.npm-global/bin`, save it and exit.
+ Check PATH: `echo $PATH`, you will see *.npm-global*.


## 3. Getting start
Follow [here](./getting-start/README.md) to getting start.

## 4. node_modules
*node_modules* contains all packes dependency of your app project. You can create this again by `yarn install`.

If you want to add some new in react-native like [React Navigation](https://reactnavigation.org/docs/getting-started/) you can add this into *node_modules*.

`yarn add @react-navigation/native`

After adding, you can see *native* folder in *node_modules/@react-navigation/native*.
