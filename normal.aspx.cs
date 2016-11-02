using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Threading;

public partial class normal : System.Web.UI.Page
{
    cBD cbase = new cBD();
    protected void Page_Load(object sender, EventArgs e)
    {

        if (Session["empresa"] == null)
        {
            Response.Redirect("index.aspx");
        }
        else
        {
            
            if (!IsPostBack)
            {
                int flag = 0;
                String empresa = Session["empresa"].ToString();
                lblempresa.Text = empresa;
                listaProductos.Items.Clear();
                listaProductos.Items.Add("Selecciona un producto para calcular su punto de equilibrio");
                DataTable dt = cbase.consulta("spProductos", empresa);

                foreach (DataRow dr in dt.Rows)
                {
                    flag = 1;
                    listaProductos.Items.Add(dr["nombreProducto"].ToString());
                }

                if (flag == 0)
                {
                    Session.Add("mensaje", "la empresa no tiene productos registrados");
                    Response.Redirect("index.aspx");
                }
            }
        }
    }

    protected void listaProductos_SelectedIndexChanged(object sender, EventArgs e)
    {
        DataTable dt = cbase.consulta("spDetalleProducto", Session["empresa"].ToString(), listaProductos.SelectedValue);

        double costoFijo = Convert.ToDouble(dt.Rows[0]["costosFijos"].ToString());
        double precioVenta = Convert.ToDouble(dt.Rows[0]["precioVenta"].ToString());
        double costoVariable = Convert.ToDouble(dt.Rows[0]["costoVariable"].ToString());

        double PEC = costoFijo / (precioVenta - costoVariable);

        double PED = costoFijo / (1 - (costoVariable / precioVenta));


        lblPECantidad.Text = "la cantidad necesaria que se neceista para el punto de equilibrio es: \n" + PEC;

        lblPEDinero.Text = "Punto de Equilibrio Dinero" + PED;
        lblanotaciones.Text = "Precio de venta unitario: " + precioVenta + "<br/> Costo variable unitario: " + costoVariable;

        lblUnidadesVendidas.Text = (PEC).ToString();
        lblIngresoxVenta.Text = (PEC * precioVenta).ToString();
        lblCostosVariables.Text = (PEC * costoVariable).ToString();
        lblMargen.Text = (PEC * (precioVenta - costoVariable)).ToString();
        lblCostosFijos.Text = costoFijo.ToString();
        lblIngreso.Text = ((PEC * (precioVenta - costoVariable)) - costoFijo).ToString(); ;

    }

    protected void btnRegresar_Click(object sender, EventArgs e)
    {
        Session.Clear();
        Response.Redirect("index.aspx");
    }
}