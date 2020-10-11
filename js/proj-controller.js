'use strict';

$(document).ready(initPage);

function initPage() {
    var projs = getGProjs();
    renderProjs(projs);
}

function renderProjs(projs) {
    var strHTML = '';
    for (var i = 0; i < projs.length; i++) {
        strHTML += `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${projs[i].id}')" href="#portfolioModal">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid portfolio-pic" src="${projs[i].imgUrl}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${projs[i].name}</h4>
          <p class="text-muted">${projs[i].title}</p>
        </div>
      </div>`;
    }
    document.querySelector('.portfolio-items').innerHTML = strHTML;
}

function renderModal(projId) {
    var proj = getProjById(projId);
    var elProjName = document.querySelector('.proj-name');
    elProjName.innerText = proj.name;

    var elProjTitle = document.querySelector('.proj-title');
    elProjTitle.innerText = proj.title;

    var elProjDesc = document.querySelector('.proj-description');
    elProjDesc.innerText = proj.desc;

    var elProjImg = document.querySelector('.proj-img');
    elProjImg.src = proj.imgUrl;

    var elProjCreated = document.querySelector('.proj-created');
    var publishedAt = new Date(proj.publishedAt);
    elProjCreated.innerText = 'Published on ' + publishedAt.toDateString();

    renderLabels(proj);
    renderCheckOutBtn(proj);
}

function renderLabels(proj) {
    var elLabels = document.querySelector('.labels');
    var strHTML = 'Labels:';
    for (var i = 0; i < proj.labels.length; i++) {
        strHTML += ` <li>${proj.labels[i]}</li> `
    }
    elLabels.innerHTML = strHTML;
}

function renderCheckOutBtn(proj){
    var elBtn = document.querySelector('.check-out');
    var strHTML = `<button class="btn btn-primary" onClick = checkOutProj('${proj.id}') type="button">
    Check it out</button>`
    elBtn.innerHTML = strHTML;
}

function checkOutProj(projId){
    var proj = getProjById(projId);
    window.location = proj.url;
}

function submitMessage(){
    var elEmail = document.querySelector('.emailInput');
    var elSubject = document.querySelector('.subjectInput');
    var elBody = document.querySelector('.message');
    
    var email = elEmail.value;
    var subject = elSubject.value;
    var body = elBody.value;

    var mailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}&bcc=someone.else@example.com&tf=1`;
    window.open(mailUrl);

    elEmail.value = '';
    elSubject.value = '';
    elBody.value = '';
}
