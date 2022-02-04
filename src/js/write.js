document.querySelector('.toggle-icon').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
    });

import {ref, push} from 'firebase/database';

import {db} from './libs/firebaseConfig';

document.forms['writeToRTD'].addEventListener("submit", onWriteData);

//Event handler function
function onWriteData(e) {
    e.preventDefault()
     //Takes what is written in the form.
    const data = e.target.elements['writeUserData'].value.trim();

    //connection to document location where we want to write the data.
    const docRef = ref(db, 'products/')

    // write the data
    const newRef = push(docRef, {
        name:data

    })

}
