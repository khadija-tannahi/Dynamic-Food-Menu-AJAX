

//Sandwich

document.getElementById('sandwiches').addEventListener('mouseover', function() {
	
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'Sandwiches.csv', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
          var rows = xhr.responseText.split('\n');
          var list = document.getElementById('sandwich-menu');
    list.style.listStyleType = "none";
          list.innerHTML = ''; // Clear the list before adding new items

        
    
          rows.forEach(function(row) {
              var listItem = document.createElement('li');
              listItem.textContent = row;
    
      
              list.appendChild(listItem);
      
      
      //alert(list);
          });
      } else {
          console.error('Failed to load CSV file');
      }
  };
  xhr.send();
});

///////////////////////////////////////////////////////////////

// Salad

document.getElementById('salads').addEventListener('mouseover', function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'Salads.csv', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
          var rows = xhr.responseText.split('\n');
          var list = document.getElementById('salad-menu');
    list.style.listStyleType = "none";
          list.innerHTML = ''; // Clear the list before adding new items

        
    
          rows.forEach(function(row) {
              var listItem = document.createElement('li');
              listItem.textContent = row;
    
      
              list.appendChild(listItem);
      
      
      //alert(list);
          });
      } else {
          console.error('Failed to load CSV file');
      }
  };
  xhr.send();
});

///////////////////////////////////////////////////////////////////
//Pizza
document.getElementById('pizzas').addEventListener('mouseover', function() {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'Pizzas.csv', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
          var rows = xhr.responseText.split('\n');
          var list = document.getElementById('pizza-menu');
    list.style.listStyleType = "none";
          list.innerHTML = ''; // Clear the list before adding new items

        
    
          rows.forEach(function(row) {
              var listItem = document.createElement('li');
              listItem.textContent = row;
    
      
              list.appendChild(listItem);
      
      
      //alert(list);
          });
      } else {
          console.error('Failed to load CSV file');
      }
  };
  xhr.send();
});



/////////////////////////////////////////////////////////////////

//Soup

document.getElementById('soups').addEventListener('mouseout', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'Soups.csv', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
          var rows = xhr.responseText.split('\n');
          var list = document.getElementById('soup-menu');
    list.style.listStyleType = "none";
          list.innerHTML = ''; // Clear the list before adding new items


    
          rows.forEach(function(row) {
              var listItem = document.createElement('li');
              listItem.textContent = row;
    
      
              list.appendChild(listItem);
      
      
      //alert(list);
          });
      } else {
          console.error('Failed to load CSV file');
      }
  

  };
  xhr.send();
});

////////////////////////////////////////////////////


//Dessert
document.getElementById('desserts').addEventListener('mouseout', function() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'Desserts.csv', true);
  xhr.onload = function() {
      if (xhr.status === 200) {
          var rows = xhr.responseText.split('\n');
          var list = document.getElementById('dessert-menu');
    list.style.listStyleType = "none";
          list.innerHTML = ''; // Clear the list before adding new items


    
          rows.forEach(function(row) {
              var listItem = document.createElement('li');
              listItem.textContent = row;
    
      
              list.appendChild(listItem);
      
      
      //alert(list);
          });
      } else {
          console.error('Failed to load CSV file');
      }
  

  };
  xhr.send();
});

