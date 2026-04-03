import i18next from 'i18next';
import { initReactI18next } from 'react-i18next'

i18next
    .use(initReactI18next)
    .init({
    fallbackLng: 'en',
    lng: 'de',
    resources: {
        en:{
            translation: {
                navbar:{
                    home: "Home",
                    profile: "Profile",
                    tests: "Tests"
                },

                helloWorld: {
                    greeting: "Hello Focus Bear!",
                    joke: "...Or is that"
                },
                counters:{
                    start: "Click to count",
                    click_one: "{{count,number}} click",
                    click_other: "{{count, number}} clicks",
                },
                error:{
                    header: "Error",
                    404: "Site not found",
                    unknown: "Huh. Don't know what happened there."
                }
            },
        },
        de:{
            translation: {
                navBar:{
                    home: "Startseite",
                    profile: "Profilseite",
                    tests: "Tests"
                },
                helloWorld: {
                    greeting: "Hallo Focus Bear!",
                    joke: "...Oder ist das"
                },
                counters:{
                    start: "Klicken zum Zählen",
                    click_one: "{{count,number}} klick",
                    click_other: "{{count, number}} klicks",
                },
                error:{
                    header: "Fehler",
                    404: "Seite nicht gefunden",
                    unknown: "Hmm. Ich weiß nicht, was passiert ist."                
                }
            },
        }
    }
});

//console.log(i18next.t('counters.count',{count: 1}));
