const lista = document.getElementById('listaUsuarios');

fetch(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('La solicitud no fue exitosa');
      }
      return response.json();
    })
    .then((data) => {
        let usuarios = data;
        lista.innerHTML = '';
        usuarios = usuarios.map(usuario => ({...usuario,edad: Math.floor(Math.random() * (65 - 18 + 1)) + 18}));

        const elementos = usuarios.map(usuario => {
            return `
                <li>
                    <div class="usuario-info">
                        <div class="info-personal">
                            <p><span class="bold-text">Nombre:</span> ${usuario.name}</p>
                            <p><span class="bold-text">Edad:</span> ${usuario.edad}</p>
                            <p><span class="bold-text">Username:</span> ${usuario.username}</p>
                            <p><span class="bold-text">Teléfono:</span> ${usuario.phone}</p>
                            <p><span class="bold-text">Email:</span> ${usuario.email}</p>
                        </div>

                        <div class="foto">
                            <img src="./assets/img/${usuario.id}.jpeg" alt="${usuario.name}">
                        </div>
                     </div>

                    <div class="usuario-bottom">
                        <p><span class="bold-text">Company:</span> ${usuario.company.name}</p>
                        <p><span class="bold-text">Address:</span> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}</p>
                    </div>
                </li>
            `;
        });

        lista.innerHTML = elementos.join('');
    })
    .catch((error) => {
      lista.innerText = 'Error: No se pudieron cargar los usuarios.';
      console.error(error);
    });