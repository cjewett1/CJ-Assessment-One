document.querySelector('.toggle-icon').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
    });

import {ref, get} from 'firebase/database';
import {db} from './libs/firebaseConfig';


async function pageInit(){

const productRef = ref(db, 'products/')
const dataSnapShot = await get(productRef)
// get to the data from the snapshot
//val()
console.log(dataSnapShot.val())

}

pageInit()


