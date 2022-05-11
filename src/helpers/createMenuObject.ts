type MenuOptions = '' | 'all' | 'dogs' | 'cats'| 'fishes';

export const createMenuObject = (activeMenu: MenuOptions) => {
    let rtObj = {
        all: false,
        dogs: false,
        cats: false,
        fishes: false
    }

    if(activeMenu !== ''){
        rtObj[activeMenu] = true
    }

    return rtObj;
}