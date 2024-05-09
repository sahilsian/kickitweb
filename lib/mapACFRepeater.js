const mapACFRepeater = (data) => {
    const items = [];
    const numOfItems = data.item || data.title || 0;
    for (let i = 0; i < numOfItems; i++) {
        const item = {};
        for (const key in data) {
            if (key.startsWith(`item_${i}_`)) {
                const propertyName = key.replace(`item_${i}_` , '');
                item[propertyName] = data[key];
            }

            if (key.startsWith(`title_${i}_`)) {
                const propertyName = key.replace(`title_${i}_` , '');
                item[propertyName] = data[key];
            }
        }
        items.push(item);
    }
    return items;
}

export default mapACFRepeater;