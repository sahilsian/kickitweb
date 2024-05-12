const mapACFRepeater = (data) => {
    const items = [];
    const numOfItems = data.item >=0 && data.item || data.items >=0 && data.items || data.title >=0 && data.title || data.checklist >=0 && data.checklist || data.featuresarray >=0 && data.featuresarray || 0;
    for (let i = 0; i < numOfItems; i++) {
        const item = {};
        for (const key in data) {
            if (key.startsWith(`item_${i}_`)) {
                const propertyName = key.replace(`item_${i}_` , '');
                item[propertyName] = data[key];
            }

            if (key.startsWith(`items_${i}_`)) {
                const propertyName = key.replace(`items_${i}_` , '');
                item[propertyName] = data[key];
            }

            if (key.startsWith(`checklist_${i}_`)) {
                const propertyName = key.replace(`checklist_${i}_` , '');
                item[propertyName] = data[key];
            }

            if (key.startsWith(`title_${i}_`)) {
                const propertyName = key.replace(`title_${i}_` , '');
                item[propertyName] = data[key];
            }

            if (key.startsWith(`featuresarray_${i}_`)) {
                const propertyName = key.replace(`featuresarray_${i}_` , '');
                item[propertyName] = data[key];
            }
        }
        items.push(item);
    }
    return items;
}

export default mapACFRepeater;