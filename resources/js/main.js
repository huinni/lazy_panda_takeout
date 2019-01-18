document.getElementById('cart-food').addEventListener('submit', function(event){
  event.preventDefault()

  var   md1 = parseInt(document.getElementById('txt-q-kpc').value, 10) || 0,
        md2 = parseInt(document.getElementById('txt-q-bb').value, 10) || 0,
        md3 = parseInt(document.getElementById('txt-q-mt').value, 10) || 0,
        md4 = parseInt(document.getElementById('txt-q-ssf').value, 10) || 0,
        md5 = parseInt(document.getElementById('txt-q-gb').value, 10) || 0,
        md6 = parseInt(document.getElementById('txt-q-ccm').value, 10) || 0,
        sd1 = parseInt(document.getElementById('txt-q-pwr').value, 10) || 0,
        sd2 = parseInt(document.getElementById('txt-q-hbr').value, 10) || 0,
        sd3 = parseInt(document.getElementById('txt-q-kc').value, 10) || 0;


  var totalMain = (md1 * 9.95) + (md2 * 10.95) + (md3 * 9.95) + (md4 * 14.95) + (md5 * 10.95) + (md6 * 10.95);

  var totalSide = (sd1 * 2) + (sd2 * 3) + (sd3 * 3);

  var subtotal = totalMain + totalSide;

  var tax = subtotal * .10;

  var total = "$" + (subtotal + tax).toFixed(2);

  document.getElementById('txt-total').value = total;

  document.getElementById('main_order').innerHTML = '$' + totalMain.toFixed(2);

  document.getElementById('side_order').innerHTML = '$' + totalSide.toFixed(2);

  document.getElementById('subtotal').innerHTML = '$' + subtotal.toFixed(2);

  document.getElementById('tax').innerHTML = '$' + tax.toFixed(2);

});

document.getElementById('cart-payment').addEventListener('submit', function(event){
  event.preventDefault();
  alert("Your order will be ready in 30 mins!");

});
