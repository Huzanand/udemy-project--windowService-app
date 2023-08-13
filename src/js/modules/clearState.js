const clearState = (obj) => {
    for (let key in obj){
        if (obj[key] && (obj[key] === 0 || obj[key] !== '')){
            obj[key] = '';
        }    
    }

    document.querySelectorAll('.checkbox').forEach(box => {
        box.checked = false;
    });

    function getStartState(elem, prop) {
        elem.forEach((item, i) => {
            switch(item.nodeName) {
                case 'SPAN':{
                    obj[prop] = 0;
                    break;
                }
                case 'SELECT':{
                    obj[prop] = item.value;
                    break;
                }
            };
        })
    }

    getStartState(document.querySelectorAll('.balcon_icons_img'), 'form');
    getStartState(document.querySelectorAll('#height'), 'height');
    getStartState(document.querySelectorAll('#width'), 'width');
    getStartState(document.querySelectorAll('#view_type'), 'type');
    getStartState(document.querySelectorAll('.checkbox'), 'profile');
}

export default clearState;