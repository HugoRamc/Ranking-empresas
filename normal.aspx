<%@ Page Language="C#" AutoEventWireup="true" CodeFile="normal.aspx.cs" Inherits="normal" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link rel="stylesheet" href="style.css" type="text/css" media="screen"/> 
</head>
<body>
    <form id="form1" runat="server">
         <nav>
        <!-- Listado de Navegación -->
        <ul class="menu">  
            <li><a href="Inicio.aspx">Inicio</a></li>  
   
            <li><a href="index.aspx">Empresas registradas</a></li>
            <!--<li><a href="index.aspx">Registrar Empresas</a></li>-->
        </ul>    
     </nav><br /><br />
        <div>
            <asp:Label ID="lblempresa" runat="server" Text=""></asp:Label>
            <br />
            <br />
             Selecciona el producto para calcular su punto de equilibrio<br />
            <asp:DropDownList ID="listaProductos" runat="server" OnSelectedIndexChanged="listaProductos_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList><br /><br />

            <asp:Label ID="lblPECantidad" runat="server" Text=""></asp:Label><br />
            <asp:Label ID="lblPEDinero" runat="server" Text=""></asp:Label><br />
            <asp:Label ID="lblanotaciones" runat="server" Text=""></asp:Label>
            <asp:Table ID="tblPE" runat="server">
                <asp:TableRow>
                    <asp:TableCell>Unidades Vendidas</asp:TableCell>
                    <asp:TableCell><asp:Label ID="lblUnidadesVendidas" runat="server" Text=""></asp:Label></asp:TableCell>
                </asp:TableRow>
                
                <asp:TableRow>
                    <asp:TableCell><asp:TableCell>Ingreso por venta</asp:TableCell></asp:TableCell>
                    <asp:TableCell>
                        <asp:Label ID="lblIngresoxVenta" runat="server" Text=""></asp:Label></asp:TableCell>
                    
                </asp:TableRow>
                <asp:TableRow>
                     <asp:TableCell>Costos variables totales</asp:TableCell>
                    <asp:TableCell>
                        <asp:Label ID="lblCostosVariables" runat="server" Text=""></asp:Label></asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>Margen de Contribución</asp:TableCell>
                    <asp:TableCell>
                        <asp:Label ID="lblMargen" runat="server" Text=""></asp:Label></asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    <asp:TableCell>Costos Fijos de la empresa</asp:TableCell>
                    <asp:TableCell>
                        <asp:Label ID="lblCostosFijos" runat="server" Text=""></asp:Label></asp:TableCell>
                </asp:TableRow>
                <asp:TableRow>
                    
                    <asp:TableCell>Ingreso neto</asp:TableCell>
                    <asp:TableCell>
                        <asp:Label ID="lblIngreso" runat="server" Text=""></asp:Label></asp:TableCell>

                </asp:TableRow>
            </asp:Table>
            <br />
            <asp:Button ID="btnRegresar" runat="server" Text="Regresar" OnClick="btnRegresar_Click"/><br />

        </div>
    </form>
</body>
</html>
