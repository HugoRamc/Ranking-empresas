<%@ Page Language="C#" AutoEventWireup="true" CodeFile="utilidadMezclado.aspx.cs" Inherits="utilidadMezclado" %>

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
            <asp:Label ID="lblutilidadEsperada" runat="server" Text=""></asp:Label>

            <br /><br />

            <asp:GridView ID="gdProductos" runat="server" AutoGenerateColumns="False">
                <Columns>
                    <asp:BoundField DataField="nombreProducto" HeaderText="Producto" />
                    <asp:BoundField DataField="precioVenta" HeaderText="Precio" />
                    <asp:BoundField DataField="costoVariable" HeaderText="Costo" />
                    <asp:BoundField DataField="produccion" HeaderText="Proporción de Producción" />
                    <asp:BoundField DataField="CostoFijo" HeaderText="Costos Fijos" />
                </Columns>

            </asp:GridView>

            <br /><br />

            <asp:GridView ID="gdContribuciones" runat="server" AutoGenerateColumns="false">
                <Columns>
                    <asp:BoundField DataField="Producto" HeaderText="Producto"/>
                    <asp:BoundField DataField="Contribucion" HeaderText="Contribucion Marginal"/>
                    <asp:BoundField DataField="ContribucionPonde" HeaderText="Contribucion Marginal Ponderada"/>
                </Columns>
            </asp:GridView>

            <br /><br />
            <asp:Label ID="lblContribucion" runat="server" Text=""></asp:Label>
              <br /><br />

            <asp:Label ID="lblPuntoEquilibrio" runat="server" Text=""></asp:Label>

             <br /><br />
            Comprobación<br />

            <br /><br />
            <asp:GridView ID="gdIngresos" runat="server" AutoGenerateColumns="false">
                <Columns>
                    <asp:BoundField DataField="Producto" HeaderText="Producto"/>
                    <asp:BoundField DataField="cantidad" HeaderText="Cantidad"/>
                    <asp:BoundField DataField="ingresoVenta" HeaderText="Ingreso por venta"/>
                    <asp:BoundField DataField="costosVariables" HeaderText="Costos varaibles totales"/>
                    <asp:BoundField DataField="margenContribucion" HeaderText="Margen de contribución"/>
                    <asp:BoundField DataField="costosFijos" HeaderText="CostosFijos"/>

                </Columns>

            </asp:GridView>
            <br />
            <asp:Label ID="lblSuma" runat="server" Text=""></asp:Label>
            <br />
            <asp:Label ID="lblCostoFijo" runat="server" Text=""></asp:Label>
            <br />
            <asp:Label ID="lblutilidad" runat="server" Text=""></asp:Label>


            <br /><br />

            <asp:Button ID="btnRegresar" runat="server" Text="Regresar" OnClick="btnRegresar_Click"/>


        </div>
    </form>
</body>
</html>
