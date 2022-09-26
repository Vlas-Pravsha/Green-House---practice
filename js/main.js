const selectElements = document.querySelectorAll('.select');

selectElements.forEach(activateCustomSelect)

function activateCustomSelect(selectWrapper){
  const realSelect = selectWrapper.querySelector('select'); 
  selectWrapper.querySelector('.select_value').innerText = realSelect.value;
  
  let labels = [];
  for (option of realSelect.options) labels.push(option.label);
  
  //Create HTML elements

  const selectList = selectWrapper.querySelector('.select_list');
  labels.forEach((label) => {
    const li = document.createElement('li');
    li.classList.add('select_list-item');
    li.innerText = label;

    if (realSelect.value === label)
      li.classList.add('select_list-item--active');
    li.addEventListener('click', selectElement);

    selectList.append(li);
  });

  function selectElement(e) {
    console.log('Element CLICK!!');

    //Select active element
    selectList
      .querySelector('.select_list-item--active')
      .classList.remove('select_list-item--active');
    e.target.classList.add('select_list-item--active');

    //Set value
    selectWrapper.querySelector('.select_value').innerText = e.target.innerText;

    //Set real Select value
    realSelect.value = e.target.innerText;
  }

  selectWrapper.addEventListener('click', function () {
    selectList.classList.toggle('select_list--visible');
  });
}
