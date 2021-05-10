// root index.html file
import {Modal} from './UI/Modal';

class PlaceFinder{
    // managing all buttons

    constructor(){
        const addressForm = document.querySelector('form');
        const locateUserBtn = document.getElementById('locate-btn');

        locateUserBtn.addEventListener('click', this.locateUserHandler);
        addressForm.addEventListener('submit', this.findAddressHandler);
    }

    locateUserHandler(){
        if(!navigator.geolocation){
            alert('Location feature is not supported by your browser, please use more modern browser or add the address manually!');
            return;
        }

        const modal = new Modal('loading-modal-content', 'Loading location - please wait');
        modal.show();

        navigator.geolocation.getCurrentPosition(
        successresult => {
            modal.hide()
            const coordinates = {
                lat: successresult.coords.latitude,
                lang: successresult.coords.longitude
            };
            console.log(coordinates);
        }, error => {
            modal.hide();
            alert('Could not locate you, please enter and address manually!')
        })
    }

    findAddressHandler(){

    }
}

new PlaceFinder();