import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const phoneList = getPhoneData();

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App phoneList={phoneList} />
  </Provider>
  , document.querySelector('.container-fluid'));


function getPhoneData() {
    return [
        {
            "_id": "motorola-xoom-with-wi-fi",
            "age": 0,
            "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
            "name": "Motorola XOOM™ with Wi-Fi",
            "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
        },
        {
            "_id": "motorola-xoom",
            "age": 1,
            "imageUrl": "img/phones/motorola-xoom.0.jpg",
            "name": "MOTOROLA XOOM™",
            "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
        },
        {
            "_id": "motorola-atrix-4g",
            "age": 2,
            "carrier": "AT&amp;T",
            "imageUrl": "img/phones/motorola-atrix-4g.0.jpg",
            "name": "MOTOROLA ATRIX™ 4G",
            "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
        },
        {
            "_id": "dell-streak-7",
            "age": 3,
            "imageUrl": "img/phones/dell-streak-7.0.jpg",
            "name": "Dell Streak 7",
            "snippet": "Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small enough to carry around, big enough to gather around."
        },
        {
            "_id": "samsung-gem",
            "age": 4,
            "carrier": "Cellular South",
            "imageUrl": "img/phones/samsung-gem.0.jpg",
            "name": "Samsung Gem™",
            "snippet": "The Samsung Gem™ brings you everything that you would expect and more from a touch display smart phone – more apps, more features and a more affordable price."
        },
        {
            "_id": "dell-venue",
            "age": 5,
            "carrier": "Dell",
            "imageUrl": "img/phones/dell-venue.0.jpg",
            "name": "Dell Venue",
            "snippet": "The Dell Venue; Your Personal Express Lane to Everything"
        },
        {
            "_id": "nexus-s",
            "age": 6,
            "carrier": "Best Buy",
            "imageUrl": "img/phones/nexus-s.0.jpg",
            "name": "Nexus S",
            "snippet": "Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet."
        },
        {
            "_id": "lg-axis",
            "age": 7,
            "carrier": "Cellular South",
            "imageUrl": "img/phones/lg-axis.0.jpg",
            "name": "LG Axis",
            "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens"
        },
        {
            "_id": "samsung-galaxy-tab",
            "age": 8,
            "imageUrl": "img/phones/samsung-galaxy-tab.0.jpg",
            "name": "Samsung Galaxy Tab™",
            "snippet": "Feel Free to Tab™. The Samsung Galaxy Tab™ brings you an ultra-mobile entertainment experience through its 7” display, high-power processor and Adobe® Flash® Player compatibility."
        },
        {
            "_id": "samsung-showcase-a-galaxy-s-phone",
            "age": 9,
            "carrier": "Cellular South",
            "imageUrl": "img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
            "name": "Samsung Showcase™ a Galaxy S™ phone",
            "snippet": "The Samsung Showcase™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance, even outdoors"
        },
        {
            "_id": "droid-2-global-by-motorola",
            "age": 10,
            "carrier": "Verizon",
            "imageUrl": "img/phones/droid-2-global-by-motorola.0.jpg",
            "name": "DROID™ 2 Global by Motorola",
            "snippet": "The first smartphone with a 1.2 GHz processor and global capabilities."
        },
        {
            "_id": "droid-pro-by-motorola",
            "age": 11,
            "carrier": "Verizon",
            "imageUrl": "img/phones/droid-pro-by-motorola.0.jpg",
            "name": "DROID™ Pro by Motorola",
            "snippet": "The next generation of DOES."
        },
        {
            "_id": "motorola-bravo-with-motoblur",
            "age": 12,
            "carrier": "AT&amp;T",
            "imageUrl": "img/phones/motorola-bravo-with-motoblur.0.jpg",
            "name": "MOTOROLA BRAVO™ with MOTOBLUR™",
            "snippet": "An experience to cheer about."
        },
        {
            "_id": "motorola-defy-with-motoblur",
            "age": 13,
            "carrier": "T-Mobile",
            "imageUrl": "img/phones/motorola-defy-with-motoblur.0.jpg",
            "name": "Motorola DEFY™ with MOTOBLUR™",
            "snippet": "Are you ready for everything life throws your way?"
        },
        {
            "_id": "t-mobile-mytouch-4g",
            "age": 14,
            "carrier": "T-Mobile",
            "imageUrl": "img/phones/t-mobile-mytouch-4g.0.jpg",
            "name": "T-Mobile myTouch 4G",
            "snippet": "The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi."
        },
        {
            "_id": "samsung-mesmerize-a-galaxy-s-phone",
            "age": 15,
            "carrier": "US Cellular",
            "imageUrl": "img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg",
            "name": "Samsung Mesmerize™ a Galaxy S™ phone",
            "snippet": "The Samsung Mesmerize™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance,even outdoors"
        },
        {
            "_id": "sanyo-zio",
            "age": 16,
            "carrier": "Sprint",
            "imageUrl": "img/phones/sanyo-zio.0.jpg",
            "name": "SANYO ZIO",
            "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
        },
        {
            "_id": "samsung-transform",
            "age": 17,
            "imageUrl": "img/phones/samsung-transform.0.jpg",
            "name": "Samsung Transform™",
            "snippet": "The Samsung Transform™ brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed “Sprint ID Service Pack”."
        },
        {
            "_id": "t-mobile-g2",
            "age": 18,
            "imageUrl": "img/phones/t-mobile-g2.0.jpg",
            "name": "T-Mobile G2",
            "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network. Get the information you need, faster than you ever thought possible."
        },
        {
            "_id": "motorola-charm-with-motoblur",
            "age": 19,
            "imageUrl": "img/phones/motorola-charm-with-motoblur.0.jpg",
            "name": "Motorola CHARM™ with MOTOBLUR™",
            "snippet": "Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service."
        }
    ];
}