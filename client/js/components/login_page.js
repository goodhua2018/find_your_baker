function renderLoginPage () {
  if (state.loggedInUsertype === 'baker') {
    document.querySelector('#page').innerHTML = `
    <div class = "row">
      <section class="col-md-8 col-sm-1 col-lg-8 card-group m-3">${renderBakers()}</section> 
      <aside class = "col-md-4 col-sm-1 col-lg-4">
        <header class = "row d-block">
          <h3>${state.loggedInName}</h3>
          <a onClick = "renderAddBaker()" class="card-link">Add Baker</a>
        </header>
        <div class="baker-list card-group m-3">${renderSweetTooth()}</div>
      </aside>
    </div>
    `
  } else {
    document.querySelector('#page').innerHTML = `
    <div class = "row">
      <section class="col-md-8 col-sm-1 col-lg-8 card-group m-3">${renderBakers()}</section> 
      <aside class = "col-md-4 col-sm-1 col-lg-4">
        <header class = "row d-block">
          <h3>${state.loggedInName}</h3>
        <div class="baker-list card-group m-3">${renderSweetTooth()}</div>
      </aside>
    </div>
    `
  }
}