<%@ Page Language="C#" AutoEventWireup="true" CodeFile="index.aspx.cs" Inherits="index" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="funciones.js" type="text/javascript"></script>
</head>
<body>
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
            <asp:Label ID="lblempresa" runat="server" Text=""></asp:Label><br /><br />

            <asp:Button ID="btnEqNormal" runat="server" Text="Punto de Equilibro Normal" OnClick="btnEqNormal_Click"/><br />

            <asp:Button ID="btnEqEfectivo" runat="server" Text="Punto de Equilibro en Efectivo" OnClick="btnEqEfectivo_Click"/><br />

            <asp:Button ID="btnMezclado" runat="server" Text="Punto de Equilibrio Mezclado" OnClick="btnMezclado_Click" /><br />

            <br />
            <div>
                Punto de Equilibrio con utilidad<br />
                <asp:Button ID="btnEqNormalU" runat="server" Text="Punto de Equilibrio con utilidad deseada" OnClick="btnEqNormalU_Click"/><br />
                <asp:Button ID="btnMeszcladoU" runat="server" Text="Punto de Equilibrio Mezclado con utilidad deseada" OnClick="btnMeszcladoU_Click"/><br />
            </div>
            <br /><br />
            <asp:Button ID="btnRegresar" runat="server" Text="Regresar" OnClick="btnRegresar_Click" />
            
        </asp:Panel>
        
    </div>
    </form>
</body>
</html>
