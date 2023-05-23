/* 1/ Tout d'abord, nous utilisons document.getElementById('task-form') pour sélectionner le formulaire d'ajout de tâches dans le DOM. 
Nous ajoutons un écouteur d'événements 'submit' à ce formulaire.
L'écouteur d'événements 'submit' est ajouté au formulaire d'ajout de tâches (document.getElementById('task-form')). 
Cela nous permet de capturer l'événement lorsque l'utilisateur soumet le formulaire en appuyant sur le bouton "Ajouter" ou en appuyant sur la touche Entrée.

2/ L'écouteur d'événements 'submit' est une fonction qui prend un événement e en argument. 
Nous utilisons e.preventDefault() pour empêcher l'envoi du formulaire et le rechargement de la page. Pourquoi ? 
Parce que nous voulons ajouter une tâche à la liste sans recharger la page et que dans un formulaire html classique, l'envoi du formulaire recharge la page.

3/ Maintenant dans la fonction de l'écouteur d'événements 'submit', nous pouvons récupérer la valeur de l'input en utilisant document.getElementById('task-input').value 
ainsi que la liste de tâches en utilisant document.getElementById('task-list') en la stockant dans des variables.
Une fois que c'est fait nous créeons une variable qui va stocker la valeur de l'input. Puis nous vérifions que la valeur de l'input n'est pas vide avec une condition. 
Si ce n'est pas le cas, nous créons une variable qui va contenir un élément li avec la méthode createElement et nous lui ajoutons la valeur de l'input.
Ensuite nous créons un bouton de suppression avec la méthode createElement et nous lui ajoutons le texte "Supprimer".
Nous ajoutons le bouton de suppression à l'élément li avec la méthode appendChild. 
Enfin nous ajoutons l'élément li à la liste de tâches ( qui est stocké dans une varibale ) avec la méthode appendChild et nous réinitialisons la valeur de l'input avec taskInput.value = ''.

4/ On sort de notre fonction de l'écouteur d'événements 'submit' et on ajoute un écouteur d'événements 'click' à la liste de tâches (document.getElementById('task-list')). 
La syntaxe est la même que pour l'écouteur d'événements 'submit'. 
L'écouteur d'événements 'click' est une fonction qui prend un événement e en argument. Puis comme plus haut dans cette fonction 'click' on met une condition pour vérifier que l'élément sur lequel l'utilisateur a cliqué est un bouton pour cela 
nous utilisons e.target pour récupérer l'élément sur lequel l'utilisateur a cliqué. 
Nous utilisons la propriété tagName pour récupérer le nom de la balise de l'élément sur lequel l'utilisateur a cliqué et qui porte le nom de la balise de l'élément sur lequel l'utilisateur a cliqué.
Si le nom de la balise est 'BUTTON' alors nous créons une variable qui va stocker l'élément li parent de l'élément sur lequel l'utilisateur a cliqué avec la propriété parentNode.
Puis nous créons une variable ul qui va stocker l'élément ul parent de l'élément li avec la propriété parentNode, ce qui donnerait let ul = li.parentNode;
Enfin nous supprimons l'élément li de l'élément ul avec la méthode removeChild.

ET VOILA ! Vous avez fait une todo list en javascript !
*/












































































































//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------- SOLUTION --------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------------------------------------------------------------------------------------//






/*

document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche l'envoi du formulaire
  
    let taskInput = document.getElementById('task-input');
    let taskList = document.getElementById('task-list');
  
    let taskText = taskInput.value; // Récupère la valeur de l'input
  
    if (taskText !== '') {
      let li = document.createElement('li');
      li.textContent = taskText;
  
      let deleteButton = document.createElement('button');
      deleteButton.textContent = 'Supprimer';
  
      li.appendChild(deleteButton);
      taskList.appendChild(li);
  
      taskInput.value = ''; // Réinitialise la valeur de l'input
    }
  });
  
  document.getElementById('task-list').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      let li = e.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
  });
  
    */