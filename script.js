document.addEventListener('DOMContentLoaded', cargarDatos);

function guardarDatos() {
    var cuenta = document.getElementById('cuenta').value;
    var comprador = document.getElementById('comprador').value;
    var fechaCompra = new Date();
    var fechaCompraFormateada = fechaCompra.toLocaleDateString() + ' ' + fechaCompra.toLocaleTimeString();
    var fechaVencimiento = new Date(fechaCompra);
    fechaVencimiento.setDate(fechaVencimiento.getDate() + 29);
    var fechaVencimientoFormateada = fechaVencimiento.toLocaleDateString() + ' ' + fechaVencimiento.toLocaleTimeString();
    var proveedor = "VENDE Y GANA";

    if (cuenta && comprador) {
        var registros = JSON.parse(localStorage.getItem('registros')) || [];
        
        var nuevoRegistro = {
            cuenta: cuenta,
            comprador: comprador,
            fechaCompra: fechaCompraFormateada,
            fechaVencimiento: fechaVencimientoFormateada,
            proveedor: proveedor
        };
        
        registros.push(nuevoRegistro);
        localStorage.setItem('registros', JSON.stringify(registros));
        
        agregarRegistroATabla(nuevoRegistro);

        document.getElementById('cuenta').value = '';
        document.getElementById('comprador').value = '';
    } else {
        alert('Por favor, ingrese todos los datos.');
    }
}

function cargarDatos() {
    var registros = JSON.parse(localStorage.getItem('registros')) || [];
    registros.forEach(agregarRegistroATabla);
}

function agregarRegistroATabla(registro) {
    var tableBody = document.getElementById('datos-body');
    var row = document.createElement('tr');

    var cellCuenta = document.createElement('td');
    var cellComprador = document.createElement('td');
    var cellFechaCompra = document.createElement('td');
    var cellFechaVencimiento = document.createElement('td');
    var cellProveedor = document.createElement('td');
    var cellCopiar = document.createElement('td');

    cellCuenta.textContent = registro.cuenta;
    cellComprador.textContent = registro.comprador;
    cellFechaCompra.textContent = registro.fechaCompra;
    cellFechaVencimiento.textContent = registro.fechaVencimiento;
    cellProveedor.textContent = registro.proveedor;
    cellCopiar.innerHTML = '<button onclick="copiarDatos(this)">Copiar</button>';

    row.appendChild(cellCuenta);
    row.appendChild(cellComprador);
    row.appendChild(cellFechaCompra);
    row.appendChild(cellFechaV