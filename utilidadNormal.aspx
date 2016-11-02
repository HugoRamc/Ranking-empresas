<%@ Page Language="C#" AutoEventWireup="true" CodeFile="utilidadNormal.aspx.cs" Inherits="utilidadNormal" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Punto de equilibrio con utilidad deseada</title>
</head>
<body>
    <form id="form1" runat="server">
        Punto de equilirbio con utllidad deseada<br />
        <div>
            <asp:Label ID="lblUtilidad" runat="server" Text=""></asp:Label><br /><br />

            <asp:DropDownList ID="listaProductos" runat="server" OnSelectedIndexChanged="listaProductos_SelectedIndexChanged" AutoPostBack="true"></asp:DropDownList>
            <br /><br />
            <asp:Label ID="lblProducto" runat="server" Text=""></asp:Label><br /><br />
            <asp:Label ID="lblCostoFijo" runat="server" Text=""></asp:Label><br />
            <asp:Label ID="lblCostoVariable" runat="server" Text=""></asp:Label><br />
            <asp:Label ID="lblprecioVenta" runat="server" Text=""></asp:Label><br /><br />
            <asp:Label ID="lblPE" runat="server" Text=""></asp:Label><br /><br />

            <asp:Button ID="btnRegresar" runat="server" Text="Regresar" OnClick="btnRegresar_Click" />
        </div>
    </form>
</body>
</html>
