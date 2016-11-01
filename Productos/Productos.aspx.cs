using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class Productos_Productos : System.Web.UI.Page
{
    cBD cbase = new cBD();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            DataTable dt = cbase.consulta("spDatosEmpresa");

            foreach (DataRow dr in dt.Rows)
            {

                listaEmpresas.Items.Add(dr["nombreEmpresa"].ToString());

            }

        }


    }

    protected void btnAceptar_Click(object sender, EventArgs e)
    {
        DataTable dt = cbase.consulta("spAltaProductos",listaEmpresas.SelectedValue,txtNombreP.Text,txtPventa.Text,txtCventa.Text,txtProduccion.Text);

        Response.Write("<script>alert(\""+dt.Rows[0]["resultado"].ToString()+" \");</script>");

    }
}