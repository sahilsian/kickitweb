const mapACFRepeater = (data) => {
    let items = [];
    let i = 0;
    while (data[`item_${i}_title`]) {
        items.push({
            title: data[`item_${i}_title`],
            description: data[`item_${i}_description`],
            image: data[`item_${i}_image`],
            subtitle: data[`item_${i}_sub_title`]
        });
        i++;
    }

    return items;
}

export default mapACFRepeater