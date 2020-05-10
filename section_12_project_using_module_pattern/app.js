// Storage Controller

// Item Controller
const ItemCtrl = (function () {
    // Item Constructor
    const Item = function (id, name, calories) {
        this.id = id;
        this.name = name;
        this.calories = calories;
    }

    // Data Structure / State
    const state = {
        items: [
            // {id: 0, name: 'Steak Dinner', calories: 1200},
            // {id: 1, name: 'Cookie', calories: 300},
            // {id: 2, name: 'Soft Drink', calories: 2500}
        ],
        currentItem: null,
        totalCalories: 0
    }

    // Public Methods
    return {
        getItems: function () {
            return state.items;
        },
        logState: function () {
            return state;
        },
        addItem: function (name, calories) {
            let ID;
            if (state.items.length > 0) {
                ID = state.items[state.items.length - 1].id + 1;
            } else {
                ID = 0;
            }

            calories = parseInt(calories);

            const newItem = new Item(ID, name, calories);
            state.items.push(newItem);

            return newItem;
        },
        getTotalCalories: function () {
            let total = 0;

            state.items.forEach(function (item) {
                total += item.calories;
            });

            state.totalCalories = total;
            return state.totalCalories;
        },
        getItemById: function (id) {
            return state.items.find(function (item) {
                return item.id === id;
            })
        },
        setCurrentItem: function (item) {
            state.currentItem = item;
        },
        getCurrentItem: function () {
            return state.currentItem;
        },
        updateItem: function (name, calories) {
            calories = parseInt(calories);

            let found = null;
            state.items.forEach(function (item) {
                if (item.id === state.currentItem.id) {
                    item.name = name;
                    item.calories = calories;
                    found = item;
                }
            });

            return found;
        },
        deleteItem: function (id) {
            const ids = state.items.map(function (item) {
                return item.id;
            });

            const index = ids.indexOf(id);

            state.items.splice(index, 1);
        },
        clearAllItems: function () {
            state.items = [];
        }
    };

})();
// UI Controller
const UICtrl = (function () {
    const UISelectors = {
        itemList: '#item-list',
        addBtn: '.add-btn',
        itemNameInput: '#item-name',
        itemCalorieInput: '#item-calories',
        totalCalories: '.total-calories',
        updateBtn: '.update-btn',
        deleteBtn: '.delete-btn',
        backBtn: '.back-btn',
        listItems: '#item-list li',
        clearAllBtn: '.clear-btn'
    }
    // public methods
    return {
        populateItemList: function (items) {
            let html = '';

            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                <a href="#" class="secondary-content">
                  <i class="edit-item fa fa-pencil"></i>
                </a>
              </li>`;
            });

            // Insert List Item
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        getSelectors: function () {
            return UISelectors;
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                calories: document.querySelector(UISelectors.itemCalorieInput).value
            }
        },
        addListItem: function (item) {
            const li = document.createElement('li');
            li.className = 'collection-item';
            li.id = `item-${item.id}`;

            li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>`;

            document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
        },
        updateListItem: function (item) {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            listItems = Array.from(listItems);

            listItems.forEach(function (listItem) {
                const itemID = listItem.getAttribute('id');
                console.log(itemID);
                if (itemID === `item-${item.id}`) {
                    document.querySelector(`#${itemID}`).innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
                    <a href="#" class="secondary-content">
                      <i class="edit-item fa fa-pencil"></i>
                    </a>`;
                }
            });
        },
        deleteListItem: function (id) {
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);

            item.remove();
        },
        clearFields: function () {
            document.querySelector(UISelectors.itemNameInput).value = '';
            document.querySelector(UISelectors.itemCalorieInput).value = '';
        },
        showTotalCalories: function (totalCalories) {
            document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
        },
        clearEditState: function () {
            UICtrl.clearFields();
            document.querySelector(UISelectors.updateBtn).style.display = 'none';
            document.querySelector(UISelectors.deleteBtn).style.display = 'none';
            document.querySelector(UISelectors.backBtn).style.display = 'none';
            document.querySelector(UISelectors.addBtn).style.display = 'inline';
        },
        showEditState: function () {
            document.querySelector(UISelectors.updateBtn).style.display = 'inline';
            document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
            document.querySelector(UISelectors.backBtn).style.display = 'inline';
            document.querySelector(UISelectors.addBtn).style.display = 'none';
        },
        addItemToForm: function () {
            document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
            document.querySelector(UISelectors.itemCalorieInput).value = ItemCtrl.getCurrentItem().calories;
            UICtrl.showEditState();
        },
        clearAllItems: function () {
            let listItems = document.querySelectorAll(UISelectors.listItems);

            listItems = Array.from(listItems);

            listItems.forEach(function (item) {
                item.remove();
            });
        }
    };
})();
// Main Controller
const App = (function (ItemCtrl, UICtrl) {
    const loadEventListeners = function () {
        const UISelectors = UICtrl.getSelectors();

        document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

        document.addEventListener('keypress', function (e) {
            if (e.keycode === 13 || e.which === 13) {
                e.preventDefault();
                return false;
            }
        });

        // Edit Icon click
        document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

        // Update Item
        document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

        document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

        document.querySelector(UISelectors.backBtn).addEventListener('click', function (e) {
            e.preventDefault();
            UICtrl.clearEditState();
        });

        document.querySelector(UISelectors.clearAllBtn).addEventListener('click', clearAllItemsClick);
    }

    const itemAddSubmit = function (e) {
        e.preventDefault()

        const input = UICtrl.getItemInput();

        if (input.name !== '' && input.calories !== '') {
            const newItem = ItemCtrl.addItem(input.name, input.calories);

            UICtrl.addListItem(newItem);

            const totalCalories = ItemCtrl.getTotalCalories();

            UICtrl.showTotalCalories(totalCalories);
            UICtrl.clearFields();
        }
    }

    const itemEditClick = function (e) {
        e.preventDefault();
        if (e.target.classList.contains('edit-item')) {
            const liId = e.target.parentNode.parentNode.id;

            const liIdArr = liId.split('-');

            const itemId = parseInt(liIdArr[1]);

            const itemToEdit = ItemCtrl.getItemById(itemId);

            ItemCtrl.setCurrentItem(itemToEdit);

            // Add Item To Form
            UICtrl.addItemToForm();
        }
    }

    const itemUpdateSubmit = function (e) {
        e.preventDefault();

        const input = UICtrl.getItemInput();

        const updatedItem = ItemCtrl.updateItem(input.name, input.calories);

        // Update UI
        UICtrl.updateListItem(updatedItem);

        const totalCalories = ItemCtrl.getTotalCalories();

        UICtrl.showTotalCalories(totalCalories);
        UICtrl.clearEditState();
    }

    const itemDeleteSubmit = function (e) {
        e.preventDefault();

        const currentItem = ItemCtrl.getCurrentItem();

        UICtrl.deleteListItem(currentItem.id);

        ItemCtrl.deleteItem(currentItem.id);

        const totalCalories = ItemCtrl.getTotalCalories();

        UICtrl.showTotalCalories(totalCalories);
        UICtrl.clearEditState();
    }

    const clearAllItemsClick = function (e) {
        e.preventDefault();
        ItemCtrl.clearAllItems();

        UICtrl.clearAllItems();

        const totalCalories = ItemCtrl.getTotalCalories();

        UICtrl.showTotalCalories(totalCalories);
    }


    // Public Methods
    return {
        init: function () {
            UICtrl.clearEditState();

            const items = ItemCtrl.getItems();

            UICtrl.populateItemList(items);

            const totalCalories = ItemCtrl.getTotalCalories();

            UICtrl.showTotalCalories(totalCalories);

            // Load Event Listenrs
            loadEventListeners();
        }
    };
})(ItemCtrl, UICtrl);

// Initialize App
App.init();