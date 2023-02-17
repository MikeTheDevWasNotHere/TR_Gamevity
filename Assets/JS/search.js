let jsonData = `[
    {
        "Name": "Crossy Road",
		"Type": "Arcade",
		"Preview": "https://static.wikia.nocookie.net/crossyroad/images/8/8e/Crossy-road-header.png/revision/latest?cb=20150405070413",
		"Open": "NA",
        "Date": "2/17/23",
        "Time": "11:53 AM",
        "Status": "C0",
		"ID": "NA"
    },
    {
        "Name": "Tower Blocks",
		"Type": "Strategy",
		"Preview": "https://ibb.co/bRbbg2T",
		"Open": "NA",
        "Date": "2/17/23",
        "Time": "11:54 AM",
        "Status": "C0",
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

        if (
            obj.Name.toLowerCase().includes(input)   || 
            obj.Type.toLowerCase().includes(input)   || 
            obj.Time.toLowerCase().includes(input)   || 
            obj.Date.toLowerCase().includes(input)   ||
            obj.Status.toLowerCase().includes(input)
        ) {
            const elem = document.createElement("p")
            elem.innerHTML = `
                <div class='bg-white p-8 rounded-lg shadow-md flex max-w-lg'>
                    <div class='w-1/2'>
                        <h1 class='text-gray-900 text-xl font-black '>${obj.Name}</h1>

                    <div class='flex my-6'>
                        <p class='text-gray-600 text-center mr-8'>${obj.Type} <span class='text-gray-400 block text-xs'>Type</span></p>
                        <p class='text-gray-600 text-center'>${obj.Status} <span class='text-gray-400 block text-xs'>Status</span></p>
                    </div>

                        <button class='py-1 text-sm px-6 bg-green-500 text-white rounded'>Play</button>
                    </div>

                        <img class='w-1/2 h-auto' src='${obj.Preview}' alt=''>
                    </div>
		    
		    <br>
                `
            x.appendChild(elem)
        }
    }
}
