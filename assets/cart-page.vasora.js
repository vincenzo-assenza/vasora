(function(){
  // Cart page behaviours: render, update qty, remove, empty state, aria-live
  function render(cart){
    var list=document.getElementById('cart-items-list');
    var empty=document.getElementById('cart-empty');
    list.innerHTML='';
    if(cart.items.length===0){ empty.style.display='block'; document.getElementById('cart-status').textContent='Cart is empty'; document.getElementById('cart-empty').focus(); return; }
    empty.style.display='none';
    cart.items.forEach(function(i){
      var row=document.createElement('div'); row.className='cp-item';
      row.innerHTML = '<div class="cp-title">'+i.title+'</div>'+
        '<input class="cp-qty" data-line="'+i.key+'" value="'+i.quantity+'" type="number" min="0" />'+
        '<button class="cp-remove" data-line="'+i.key+'">Remove</button>';
      list.appendChild(row);
    });
  }
  function fetchCart(){ fetch('/cart.js').then(r=>r.json()).then(render); }
  document.addEventListener('click', function(e){
    if(e.target && e.target.matches('.cp-remove')){
      var key=e.target.getAttribute('data-line');
      fetch('/cart/change.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:key,quantity:0})}).then(fetchCart);
    }
  });
  document.addEventListener('change', function(e){
    if(e.target && e.target.matches('.cp-qty')){
      var key=e.target.getAttribute('data-line');
      var q=parseInt(e.target.value,10)||0;
      if(q<0){ document.getElementById('cart-status').textContent='Invalid quantity'; e.target.focus(); return; }
      fetch('/cart/change.js',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:key,quantity:q})}).then(fetchCart);
    }
  });
  // init
  fetchCart();
})();
