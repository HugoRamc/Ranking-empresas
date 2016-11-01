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
        if(!IsPostBack)
        {
            try
            {
                Response.Write("<script>alert('" + Session["mensaje"].ToString() + "');</script>");
            }
            catch (Exception)
            { }
            Session.Clear();
            
        }
        DataTable dt;

        dt = cbase.consulta("spDatosEmpresa");

        gdListaEmpresa.DataSource = dt;
        gdListaEmpresa.DataBind();



    }
    String comando;
    String valor;

    protected void gdListaEmpresa_RowCommand(object sender, GridViewCommandEventArgs e)
    {
        
        Session.Clear();
        valor = e.CommandArgument.ToString();
        comando = e.CommandName;


        if (comando == "verEmpresa")
        {
            pnlEmpresas.Visible = false;
            pnlDatosEmpresa.Visible = true;
            lblempresa.Text = "Escogiste la empresa: "+valor;
            Session.Add("empresa",valor);

        }

    }

    protected void btnEqNormal_Click(object sender, EventArgs e)
    {
        //calcular funcion del punto de equilibrio normal
        pnlDatosEmpresa.Visible = true;

        lblempresa.Text = Session["empresa"].ToString();
        Response.Redirect("normal.aspx");

    }

    protected void btnEqEfectivo_Click(object sender, EventArgs e)
    {
        Response.Redirect("efectivo.aspx");
    }

    protected void btnMezclado_Click(object sender, EventArgs e)
    {

    }

    protected void btnEqNormalU_Click(object sender, EventArgs e)
    {

    }

    protected void btnMeszcladoU_Click(object sender, EventArgs e)
    {

    }

    protected void btnRegresar_Click(object sender, EventArgs e)
    {
        pnlEmpresas.Visible = true;
        pnlDatosEmpresa.Visible = false;
        Session.Clear();

        //lbl1.Text = ("<script>alert('Data inserted successfully')</script>");

    }

}