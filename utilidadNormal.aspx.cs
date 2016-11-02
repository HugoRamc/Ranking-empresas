using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class utilidadNormal : System.Web.UI.Page
{
    cBD cbase = new cBD();
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Session["empresa"] == null)
        {
            Session.Add("mensaje", "no has seleccionado alguna empresa");
            Response.Redirect("index.aspx");
        }
        else
        {
            

            if (!IsPostBack)
            {
                int flag = 0;
                DataTable dt = cbase.consulta("spProductos", Session["empresa"].ToString());
                listaProductos.Items.Add("selecciona un producto");

                foreach (DataRow dr in dt.Rows)
                {
                    flag = 1;
                    listaProductos.Items.Add(dr["nombreProducto"].ToString());
                }

                if (flag == 0)
                {
                    Session.Add("mensaje","la empresa no tiene productos registrados");
                    Response.Redirect("index.aspx");
                }
            }
        }



    }

    protected void listaProductos_SelectedIndexChanged(object sender, EventArgs e)
    {
        DataTable dt = cbase.consulta("spDetalleProducto",Session["empresa"].ToString(), listaProductos.SelectedValue);

        double precioVenta = Convert.ToDouble(dt.Rows[0]["precioVenta"].ToString());
        double costoVariable = Convert.ToDouble(dt.Rows[0]["costoVariable"].ToString());
        double costoFijo = Convert.ToDouble(dt.Rows[0]["costosFijos"].ToString());
        double utilidad = Convert.ToDouble(dt.Rows[0]["utilidad"].ToString());

        double puntoEq = (costoFijo*(1+(utilidad/100)))/(precioVenta - costoVariable);

        lblUtilidad.Text = "La utilidad encontrada es de: " + utilidad + "%";

        lblProducto.Text = "Producto elegido: " + listaProductos.SelectedValue;
        lblCostoFijo.Text = "Los costos fijos de la empresa son de: "+costoFijo;
        lblCostoVariable.Text = "El costo variable unitario es de: "+costoVariable;
        lblprecioVenta.Text = "El precio de venta unitario es: "+precioVenta;

        lblPE.Text = "El punto de equilibrio con utilidad deseada es de: "+puntoEq;

    }

    protected void btnRegresar_Click(object sender, EventArgs e)
    {
        Session.Clear();
        Response.Redirect("index.aspx");
    }
}