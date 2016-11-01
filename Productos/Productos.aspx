<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Productos.aspx.cs" Inherits="Productos_Productos" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            Registro de Productos<br />
            <br />
            Ingresa el nombre del producto: 
            <asp:TextBox ID="txtNombreP" runat="server"></asp:TextBox><br />
            <br />
            Ingresa el precio de venta
            <asp:TextBox ID="txtPventa" runat="server"></asp:TextBox><br />
            <br />
            Ingresa el costo variable del producto
            <asp:TextBox ID="txtCventa" runat="server"></asp:TextBox><br />
            <br />
            Ingresa la proporcion de produccion en la empresa
            <asp:TextBox ID="txtProduccion" runat="server"></asp:TextBox><br />
            <br />
            Selecciona la empresa a la que pertenece
            <asp:DropDownList ID="listaEmpresas" runat="server"></asp:DropDownList>

            <br />
            <asp:Button ID="btnAceptar" runat="server" Text="Enviar" OnClick="btnAceptar_Click" />
        </div>
    </form>
</body>
</html>
