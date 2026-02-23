(function(){
  // Lightweight cart drawer logic with focus trap and ESC handling
  var drawer=document.getElementById('cart-drawer-vasora');
  var close=document.getElementById('cart-drawer-close-vasora');
  var previouslyFocused=null;

  function trapFocus(container){
    var focusable = container.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])');
    if(focusable.length===0) return function(){};
    var first = focusable[0];
    var last = focusable[focusable.length-1];
    function handle(e){
      if(e.key==='Tab'){
        if(e.shiftKey && document.activeElement===first){ e.preventDefault(); last.focus(); }
        else if(!e.shiftKey && document.activeElement===last){ e.preventDefault(); first.focus(); }
      }
      if(e.key==='Escape'){ closeDrawer(); }
    }
    document.addEventListener('keydown', handle);
    return function(){ document.removeEventListener('keydown', handle); };
  }

  function openDrawer(){
    previouslyFocused = document.activeElement;
    if(drawer){
      drawer.setAttribute('aria-hidden','false');
      drawer.classList.add('open');
      var removeTrap = trapFocus(drawer);
      drawer._removeTrap = removeTrap;
      var first = drawer.querySelector('button, a, [tabindex]:not([tabindex="-1"])');
      if(first) first.focus();
    }
  }
  function closeDrawer(){
    if(!drawer) return;
    drawer.setAttribute('aria-hidden','true');
    drawer.classList.remove('open');
    if(drawer._removeTrap) drawer._removeTrap();
    if(previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
  }

  function updateDrawerCount(cart){
    var el = document.querySelector('.cart-drawer .cart-count') || document.querySelector('#cart-count-vasora');
    if(el) el.textContent = cart.item_count;
  }

  function showMessage(msg){
    var status = document.getElementById('cart-status-vasora') || document.getElementById('cart-status');
    if(status){ status.textContent = msg; }
  }

  document.addEventListener('click',function(e){
    if(e.target && e.target.matches('[data-action="add-to-cart"]')){
      e.preventDefault();
      var variant = e.target.getAttribute('data-variant-id') || e.target.closest('[data-variant-id]') && e.target.closest('[data-variant-id]').getAttribute('data-variant-id');
      var quantity = 1;
      if(!variant){ showMessage('Variant not found'); return; }
      fetch('/cart/add.js', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({id: variant, quantity: quantity})})
        .then(function(res){ if(!res.ok) throw res; return res.json(); })
        .then(function(data){
          openDrawer();
          fetch('/cart.js').then(function(r){ return r.json(); }).then(function(cart){ updateDrawerCount(cart); showMessage('Added to cart'); });
        })
        .catch(function(err){
          if(err.json){ err.json().then(function(e){ showMessage(e.description || 'Add to cart failed'); }); }
          else showMessage('Add to cart failed');
        });
    }
    if(e.target===close) closeDrawer();
  });

  // Global ESC listener for safety
  document.addEventListener('keydown', function(e){ if(e.key==='Escape' && drawer && drawer.classList.contains('open')) closeDrawer(); });

})();