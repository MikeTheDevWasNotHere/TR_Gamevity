let jsonData = `[
    {
        "Name": "Crossy Road",
		"Type": "Arcade",
		"Preview": "https://static.wikia.nocookie.net/crossyroad/images/8/8e/Crossy-road-header.png/revision/latest?cb=20150405070413",
		"Open": "NA",
		"Added": "2/17/23 11:29:AM",
		"ID": "NA"
    },
    {
        "Name": "Tower Blocks",
		"Type": "Strategy",
		"Preview": "https://ibb.co/bRbbg2T",
		"Open": "NA",
		"Added": "2/17/23 11:37:AM",
		"ID": "NA"
    }
]`

let data = JSON.parse(jsonData)

function search_jsonData() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.querySelector('#list-holder');
    x.innerHTML = ""

    for (i = 0; i < data.length; i++) {
        let obj = data[i];

        if (obj.Name.toLowerCase().includes(input) || obj.Type.toLowerCase().includes(input) || obj.Added.toLowerCase().includes(input)) {
            const elem = document.createElement("p")
            elem.innerHTML = `${obj.Name} - ${obj.Type} - ${obj.Added}`
            x.appendChild(elem)
        }
    }
}