const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');
var arr = [];
let draggedItem = null;
let chimken=0;
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

	// for (let j = 0; j < lists.length; j ++) {
		const list = lists[0];

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

		list.addEventListener('drop', function (e) {
            // console.log('drop');
            // console.log(draggedItem.innerText);
            this.append(draggedItem);
            arr.push(draggedItem.innerText);
            console.log(arr);
            for(let k in arr) {
                console.log(arr[k]);
                if (arr[k]=="chicken")
                    {
                        chimken++;
                    }
    
            }
            console.log(chimken+"isssss lob");


            if(chimken!=0){
                    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`)
                    .then((resgrr) => resgrr.json())
                    .then(data1 => {
                        let output = ``;
                        console.log("GRRRRRRRRR");
                        for(let j in data1.meals)
                        {
                            output+=`<div class="card rounded bg-danger mb-2 rounded" style="width: 18rem;">
                            <div class="card-body">
                              <h5 class="card-title">Chicken</h5>
                              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                              <p class="card-text"><li>Meal : ${data1.meals[j].strMeal} </li>
                              <li>ID : ${data1.meals[j].idMeal} </li></p>
                              <a href="#" class="card-link">Card link</a>
                              <a href="#" class="card-link">Another link</a>
                            </div>
                          </div>
                               
                          `
                        }
        document.getElementById('data').innerHTML = output;
                    })
        
        
                
            }






            // console.log(arr);
			this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
        });

    }


// }

        
        

        


