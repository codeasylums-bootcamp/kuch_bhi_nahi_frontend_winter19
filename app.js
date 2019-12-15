const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;

for (let i = 0; i < list_items.length; i++) {
	const item = list_items[i];

	item.addEventListener('dragstart', function () {
        draggedItem = item;
        // console.log(item.innerText);
		// setTimeout(function () {
		// 	item.style.display = 'none';
		// }, 0)
	});

	item.addEventListener('dragend', function () {
		setTimeout(function () {
			draggedItem.style.display = 'block';
			draggedItem = null;
		}, 0);
	})

	for (let j = 0; j < lists.length; j ++) {
		const list = lists[j];

		list.addEventListener('dragover', function (e) {
			e.preventDefault();
		});
		
		list.addEventListener('dragenter', function (e) {
			e.preventDefault();
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.2)';
		});

		list.addEventListener('dragleave', function (e) {
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
        var arr = [];
		list.addEventListener('drop', function (e) {
            console.log('drop');
            console.log(draggedItem.innerText);
            this.append(draggedItem);
            // arr.push(draggedItem);
            // console.log(arr);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
		});
	}
}