
const studentList = document.querySelectorAll('.student-item'); //variable to hold list of students
const numPerPage = 10; // number of items listed per page

/*The `showPage` function hides all of the items in the list except for the ten you want to show.*/
const showPage = (list, page) => {
  const start = (page * numPerPage) - numPerPage;
  const end = page * numPerPage;
  for (let i = 0; i < list.length; i += 1)
    if (i >= start && i < end){
      list[i].style.display = '';
    } else {
      list[i].style.display = 'none';
    }
}

/*The `appendPageLinks function` creates all the pagination buttons,
adds them to the DOM, and adds their functionality.*/
const appendPageLinks = (list) => {
  const pgsNeeded = studentList.length/numPerPage;
  const pagesDiv = document.createElement('div');
  const parent = document.querySelector('.page');
  const ul = document.createElement('ul');
  pagesDiv.className = 'pagination';
  parent.appendChild(pagesDiv);
  pagesDiv.appendChild(ul);
//adds the a tag and page number to each li
  for (let i = 0; i < pgsNeeded; i += 1) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    a.href = '#';
    a.text = i + 1;
//sets the first page to be active
      if (i == 0){
        a.className = 'active';
      }
      //'eventListener' sets the clicked link to active and shows the li items for that page.
        a.addEventListener('click', (event) => {
          let activeA = document.querySelector('a.active');
          activeA.className = '';
          event.target.className = 'active';
          showPage(studentList, event.target.textContent);
        });
  }
}
showPage(studentList, 1); //calls the 'showPage' function to show page 1 when loaded,
appendPageLinks(studentList); //calls the 'appendPageLinks' function to create pagination for studentList
