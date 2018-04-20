var articulo, precio, cantidad, total;

var x = "",  row, col, ela;
var a1 = "btn-", a2 = 1;
var arr = new Array(new Array(0));
var i = 1;
var id = 1;
var almacen = new Array(new Array("1001", "Arroz", "3.5", "100"), new Array("1002", "Azucar", "2", "50"),new Array("1003", "Fideos", "2.5", "50"),new Array("1004", "Harina", "3", "60"),new Array("1005", "Papa", "1.5", "50"),new Array("1006", "Platano", "2.5", "100"),new Array("1007", "Agua Cielo", "1", "150"));

var sx = document.getElementById('secundario');
var  px= document.getElementById('primario');
function mostrar1(){
sx.style.display = 'block'; 
px.style.display = 'none';
}
function ocultar(){
px.style.display = 'block'; 
    sx.style.display = 'none';
}

function alumno(art, pre, can, tot) {
  this.articulo = art;
  this.precio = pre;
  this.cantidad = can;
  this.total = tot;
}
var codigo="0";
var almac = "";
var au=0;
function ShowSelected() {

var cod = document.getElementById("prodd").value;

for (row = 0; row < almacen.length; row++) {

  if (almacen[row][0] == cod && almacen[row][3] >  0) {

  	document.getElementById("art").value = almacen[row][1];
  	document.getElementById("pre").value = almacen[row][2];
  	document.getElementById("alm").value = almacen[row][3];
codigo = cod
almac = almacen[row][3];
  } else {
}

}

}


function registro() {
  var art = document.getElementById("art").value;
   var pre = document.getElementById("pre").value;
  var can = document.getElementById("can").value;
  var tot = pre*can;
  alumno(art, pre, can, tot);

	if(this.articulo=="" || this.articulo== null || this.precio == "" || this.precio == null || this.cantidad=="" || this.cantidad== null)
  {
		alert("Falta Llenar Campos");
	}
	else {
    if(update(codigo,almac,this.cantidad ))
    {
		arr.push([codigo, this.articulo , this.precio, this.cantidad, this.total])
  }
  else {
    alert("Stock No Disponible");
  }
}

  document.getElementById("art").value = "";
  document.getElementById("pre").value = "";
  document.getElementById("alm").value = "";
  document.getElementById("can").value = "";
  mostrar();
}

var subtotal = 0;
var subtotal1 = 1.4;
var totalfinal = 0.0;
function mostrar() {
  ela = 1; x = "";

  for (row = 1; row < arr.length; row++) {
    x = x + "<tr>";

    for (col = 0; col < arr[row].length; col++) {
      x = x + "<td>" + arr[row][col] + "</td>";
    }
    if (arr[row][1] == "" || arr[row][1] == null) {} else {
      x = x + "<td><input type='button' class='btn-1' onclick='obtener(" + ela + ")' id='" + a1 + a2 + "'>";
      x = x + "<input type='button' class='btn-2' onclick='eliminar(" + ela + ")' id='" + a1 + a2 + "'></td>";
      ela++;
    }
    x = x + "</tr>";

  }
  document.getElementById("tb").innerHTML = x;
}


function eliminar(index) {

	document.getElementById("art").value = "";
	document.getElementById("pre").value = "";
	document.getElementById("alm").value = "";
	document.getElementById("can").value = "";
  for (row = 0; row < almacen.length; row++) {

    for (col = 0; col < almacen[row].length; col++) {

    if (almacen[row][0] == arr[index][0]) {

    	can1 = parseInt(almacen[row][3]);
    indx2=row;
    } else {

    }

}
}
var can2 = 0;
can2=parseInt(arr[index][3]);
var total1 = can1+can2;
almacen[indx2][3] = total1;
arr.splice(index, 1);
  mostrar();
  ocultar();
}

function modificar() {
  art = document.getElementById("art").value;
  pre = document.getElementById("pre").value;
  can = document.getElementById("can").value;
  tot = pre*can;
  arr[indx][1] = art;
  arr[indx][2] = pre;
  arr[indx][3] = can;
  update(arr[indx][0],almacen[indx2][3],can);
  arr[indx][4] = tot;
	document.getElementById("art").value = "";
	document.getElementById("pre").value = "";
	document.getElementById("alm").value = "";
	document.getElementById("can").value = "";
  mostrar();
  var btn = document.getElementById("boton");
  btn.style.display = "block";
  ocultar();
}

function mostrarbtn() {
  var btn = document.getElementById("btn-mod");
  btn.style.display = "block";

    var btn = document.getElementById("boton");
    btn.style.display = "none";
}
var indx = 0;
var indx2="";
function obtener(index) {
  indx = index;
  mostrarbtn();
  document.getElementById("art").value = arr[index][1];
  document.getElementById("pre").value = arr[index][2];
var can1=0;

  for (row = 0; row < almacen.length; row++) {

    for (col = 0; col < almacen[row].length; col++) {

    if (almacen[row][0] == arr[index][0]) {

    	can1 = parseInt(almacen[row][3]);
    indx2=row;
    } else {

    }

}
}
var can2 = 0;
can2=parseInt(arr[index][3]);
var total1 = can1+can2;
almacen[indx2][3] = total1;
document.getElementById("alm").value  = almacen[indx2][3];
document.getElementById("can").value  = arr[index][3];
}
function update(id,alm,can)
{
  for (row = 0; row < almacen.length; row++) {
    for (col = 0; col < almacen[row].length; col++) {

    if (almacen[row][0] == id) {
      subtotal = alm-can;
      if(subtotal > 0 )
    {
      almacen[row][3] = alm - can;
      return true;
    }else {
      return false;
    }

    } else {
    }
  }
  }
}
function totalF()
{
  for (row = 1; row < arr.length; row++) {
    subtotal1 = parseFloat(arr[row][4]);
    totalfinal = totalfinal + subtotal1;
      }
      
  document.getElementById("rp").value = totalfinal;
  totalfinal = 0;
}
