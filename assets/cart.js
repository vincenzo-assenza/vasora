document.addEventListener('click', function(e){
  if(e.target && e.target.matches('[data-action="add-to-cart"]')){
    var id = e.target.getAttribute('data-product-id');
    fetch('/cart/add.js', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({id: id, quantity:1})}).then(r=>r.json()).then(function(){ document.querySelector('[data-open-cart]').click(); });
  }
});
