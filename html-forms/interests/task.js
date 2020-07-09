const onChange = ({target}) => {
    updateChildren(target);
    updateParents(target);
}

const updateChildren = (el) => {
    const {checked} = el; 
    getChildren(el).forEach(child => {
        child.checked = checked; 
        child.indeterminate = false;
    });
}

const updateParents = (parent) => {
    while (parent = getParent(parent)) { 
        let children = getChildren(parent); 
        let checked = [...children]
            .filter(child => child.checked).length; 
        parent.checked = (checked === children.length); 
        parent.indeterminate = checked && !parent.checked;
    }
}

const getChildren = (el) => { 
    el = el.closest('li');
    el = el && el.querySelector('ul');
    return el && el.querySelectorAll('input[type="checkbox"]') || [];
}

const getParent = (el) => { 
    el = el.closest('ul');
    el = el && el.closest('li');
    return el && el.querySelector('input[type="checkbox"]');
}
document.addEventListener('change', onChange);
