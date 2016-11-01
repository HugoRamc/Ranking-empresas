using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

public partial class efectivo : System.Web.UI.Page
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
                lblempresa.Text = "Empresa Seleccionada: " + Session["empresa"];
                listaArticulos.Items.Add("Selecciona un producto");
                DataTable dt = cbase.consulta("spProductos", Session["empresa"].ToString());

                foreach (DataRow dr in dt.Rows)
                {
                    flag = 1;
                    listaArticulos.Items.Add(dr["nombreProducto"].ToString());

                }

                if (flag == 0)
                {
                    Session.Add("mensaje","la empresa not tiene productos registrados");
                    Response.Redirect("index.aspx");
                }

            }

        }
        


    }

    protected void listaArticulos_SelectedIndexChanged(object sender, EventArgs e)
    {
        DataTable dt = cbase.consulta("spDetalleProducto", Session["empresa"].ToString(), listaArticulos.SelectedValue);

        double costoFijo = Convert.ToDouble(dt.Rows[0]["costosFijos"].ToString());
        double precioVenta = Convert.ToDouble(dt.Rows[0]["precioVenta"].ToString());
        double costoVariable = Convert.ToDouble(dt.Rows[0]["costoVariable"].ToString());
        double depreciacion = Convert.ToDouble(dt.Rows[0]["depreciacion"]);
        double puntoEq = (costoFijo-depreciacion)/(precioVenta-costoVariable);

        lblCostoFijo.Text = "Los costos fijos de la empresa son: " + costoFijo;
        lblDepreciacion.Text = "La depreciación del producto es: " + depreciacion;
        lblPrecioVenta.Text = "El precio de venta es: " + precioVenta;
        lblCostoVariable.Text = "el costo variable es: " + costoVariable;

        lblPuntoEquilibrio.Text = "El punto de equilibrio en efectivo es: " + puntoEq;

    }

    protected void btnRegresar_Click(object sender, EventArgs e)
    {
        Session.Clear();
        Response.Redirect("index.aspx");
    }
}