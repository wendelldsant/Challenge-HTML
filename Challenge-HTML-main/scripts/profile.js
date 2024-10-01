// ################################## EVENT PAGE #######################################
//pegar informações do localStorage
const lista_users = JSON.parse(localStorage.getItem('lista_users'));
var login_check = JSON.parse(localStorage.getItem('login_check'));
let userType = '';

//função para verificar se o Login foi feito
function verifyUser(){
    let user_dados = ''
    if (lista_users) {
        lista_users.forEach(user => {
            if (login_check.username === user.username) {
                user_dados = user;
            }
        });
    }
    if(login_check===false || login_check===null || login_check === ''){
        document.getElementById('container').innerHTML = ''
        document.getElementById('container').innerHTML = `
        <h3>Faça seu login ou cadastre-se!</h3>
        <div id="buttons">
        <div class="button-container">
            <button type="submit" id="btn-login">Login</button>
        </div>
        `
        document.getElementById('btn-login').addEventListener('click', function(event){ //solicitação de login
            event.preventDefault
            window.location.href = "register-page.html";
            user_dados = false;
        })
    }
    return user_dados
}


//ao carregar a pagina carrega informações do usuario logado
window.onload = function(event) {
    event.preventDefault();
    const user_dados = verifyUser()
    if(user_dados!=false){
        const profileData = document.querySelector('.container')
        container.innerHTML = `
        <section class="row text-startgap-lg-1">
            <div class="col-md-12 col-lg-4 profile-pic my-3">
                <div class="d-flex align-items-center justify-content-center">
                    <img src="${user_dados.foto} || Indefinido" alt="Sua Foto de Perfil"
                        class="img-fluid rounded-pill">
                </div>
            </div>
            <div class="col-md-12 col-lg-7 rounded bg-light p-3 my-2">
                <h4>DADOS PESSOAIS</h4>
                <hr class="my-2">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label for="nome" class="form-label fs-4 my-0">Nome Completo</label>
                        <p id="nome" class="fs-5">${user_dados.name}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label for="data-nascimento" class="form-label fs-4 my-0">Data de Nascimento</label>
                        <p id="data-nascimento" class="fs-5">${user_dados.birthday}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                        <label for="equipe" class="form-label fs-4 my-0">Equipe Favorita</label>
                        <p id="equipe" class="fs-5">Tech-Mahindra</p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-4 rounded bg-light p-3 my-2">
                <h4>BIOGRAFIA</h4>
                <hr class="my-2">
                <p>Do kart a fórmula E, automobilismo na veia</p>
            </div>
            <div class="accordion col-lg-3 mx-0 mt-1 p-1" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Pontuação
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div class="accordion-body fs-5 text-center">
                      <strong>1400 EXPS</strong> 
                    </div>
                  </div>
                </div>
            </div>
            <div class="accordion col-lg-3 mx-0 mt-1 p-1" id="accordionExample2">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Lugar no Ranking
                      </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                      <div class="fs-5 text-center accordion-body">
                        <strong>#25</strong>
                      </div>
                    </div>
                  </div>
            </div>
        </section>
        `
        const btnSair = document.querySelector("#btnSair");
        btnSair.addEventListener('click', function(event){
            event.preventDefault();
            var login_check = false
            localStorage.setItem('login_check', JSON.stringify(login_check));
            window.location.href = "register-page.html";
    })
    }

}


