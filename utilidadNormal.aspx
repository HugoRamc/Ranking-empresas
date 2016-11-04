<%@ Page Language="C#" AutoEventWireup="true" CodeFile="utilidadNormal.aspx.cs" Inherits="utilidadNormal" %>

<%@ Register Assembly="System.Web.DataVisualization, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" Namespace="System.Web.UI.DataVisualization.Charting" TagPrefix="asp" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title>Punto de equilibrio con utilidad deseada</title>
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

            <asp:Chart ID="Chart1" runat="server">
        <Series>
            <asp:Series Name="Series1"></asp:Series>
        </Series>
        <ChartAreas>
            <asp:ChartArea Name="ChartArea1"></asp:ChartArea>
        </ChartAreas>
    </asp:Chart>

            <asp:Button ID="btnRegresar" runat="server" Text="Regresar" OnClick="btnRegresar_Click" />
        </div>
    </form>
</body>
</html>
