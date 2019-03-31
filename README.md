# hello_joy_front_end_challenge
Hosted application is live here:   http://206.81.2.122/#/

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

Written with vue-cli, I had originally intended to write it in react-native as I know that's what you guys are using at HelloJoy, but in the interest of doing this in a timely and more efficient manner I stuck with what I'm most familiar with to ensure I could deliver a project that I'm confident in.

It looks like you guys have some kind of algorithm generating the unique ids for each completed assessment, I opted to stick with a random uuid from a third party library rather than try and mimic it exactly.

I used a few dependancies specific to Vue, including router/vuex/vuetify/axios/lodash as they mimic similar features in react apps, over-engineered for this particular challenge for sure but I figured this way it would give you a better idea of how I structure my apps in a component/view architecture.

There were a few pieces I opted to merely mimic, such as the login functionality.  Refreshing the page/app will clear the global state within vuex and "log the user out", clicking on the correct user profile (not sure if your current app has different user profiles or not but I felt this was an easy way of allowing you to easily test either test user).  I believe I've delivered on every requirement outlined in the challenge and I'm happy to explain any other design choices that you may have.
