<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="funciones.js" type="text/javascript"></script>
</head>
<body onload="saludar()">
    <form id="form1" runat="server">
    <div>
        <asp:Panel runat="server" ID="pnlEmpresas" Visible ="true">
            <asp:GridView ID="gdListaEmpresa" runat="server" AutoGenerateColumns="False" OnRowCommand="gdListaEmpresa_RowCommand">
                <Columns>
                    <asp:BoundField DataField="nombreEmpresa" HeaderText="empresa"/>
               
                    <asp:BoundField DataField="descripcionEmpresa" HeaderText="Descripcion"/>
                     <asp:TemplateField>
                        <ItemTemplate>
                            <asp:LinkButton ID="lnkEmpresa" runat="server" CommandArgument='<%# Bind("nombreEmpresa") %>' CommandName="verEmpresa">Ver Datos</asp:LinkButton>
                        </ItemTemplate>
                    </asp:TemplateField>
                </Columns>
            </asp:GridView>
        </asp:Panel>
    
        <asp:Panel ID="pnlDatosEmpresa" runat="server" Visible="false">
            Selecciona el punto de equilibrio que deseas calcular<br />
            <asp:Label ID="lblempresa" runat="server" Text=""></asp:Label><br />
            <asp:Button ID="btnEqNormal" runat="server" Text="Punto de Equilibro Normal" OnClick="btnEqNormal_Click"/><br />
            <asp:Button ID="btnEqEfectivo" runat="server" Text="Punto de Equilibro en Efectivo" /><br />
            <asp:Button ID="btnMezclado" runat="server" Text="Punto de Equilibrio Mezaclado" /><br />

            <div>
                <asp:Button ID="Button1" runat="server" Text="Punto de Equilibrio Mezaclado" /><br />
            </div>

            
        </asp:Panel>

    </div>
    </form>
</body>
</html>
