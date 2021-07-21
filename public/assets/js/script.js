

const loginForm = document.querySelector('.formcontainer');


const handleAnimalFormSubmit = event => {
  event.preventDefault();

  // get user data 
  const userName = loginForm.querySelector('[name="uname"]').value;
  const password = loginForm.querySelector('[name="psw"]').value;

  const userObject = { userName, password };



  fetch('/api/users/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userObject)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert(`Error: ${response.statusText}`);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding an animal!');
    });
};

const handleZookeeperFormSubmit = event => {
  event.preventDefault();

  // get zookeeper data and organize it
  const name = $zookeeperForm.querySelector('[name="zookeeper-name"]').value;
  const age = parseInt($zookeeperForm.querySelector('[name="age"]').value);
  const favoriteAnimal = $zookeeperForm.querySelector('[name="favorite-animal"]').value;

  const zookeeperObj = { name, age, favoriteAnimal };
  console.log(zookeeperObj);
  fetch('api/zookeepers', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(zookeeperObj)
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      alert('Error: ' + response.statusText);
    })
    .then(postResponse => {
      console.log(postResponse);
      alert('Thank you for adding a zookeeper!');
    });
};

$zookeeperForm.addEventListener('submit', handleZookeeperFormSubmit);
$animalForm.addEventListener('submit', handleAnimalFormSubmit);
