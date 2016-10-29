using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class index : System.Web.UI.Page
{
    cBD cbase = new cBD();
    protected void Page_Load(object sender, EventArgs e)
    {
        
        DataTable dt;

        dt = cbase.consulta("spDatosEmpresa");

        gdListaEmpresa.DataSource = dt;
        gdListaEmpresa.DataBind();



    }
    String comando;
    String valor;

    protected void gdListaEmpresa_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        valor = e.CommandArgument.ToString();
        comando = e.CommandName;


        if (comando == "verEmpresa")
        {
            //pnlEmpresas.Visible = false;
            pnlDatosEmpresa.Visible = true;
            lblempresa.Text = "Escogiste la empresa: "+valor;
        }

    }

    protected void btnEqNormal_Click(object sender, EventArgs e)
    {
        lblempresa.Text = "Hola, me apretaste :D";
    }
}