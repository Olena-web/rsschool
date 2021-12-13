import noUiSlider from '../node_modules/nouislider/dist/nouislider';

export default noUiSlider;
export function createSlider (){
const slider = document.getElementById('slider') as HTMLDivElement;
const sliderTwo = document.getElementById('slider-two') as HTMLDivElement;
noUiSlider.create(slider, {
    start: [20, 80], 
    connect: true,
    range: {
        'min': 0,
        'max': 100
    },
   
});
noUiSlider.create(sliderTwo, {
    start: [20, 80], 
    connect: true,
    range: {
        'min': 0,
        'max': 100
    }
    
});
}
createSlider ();