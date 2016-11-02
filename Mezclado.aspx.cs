using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class Mezclado : System.Web.UI.Page
{
    private Double PE;
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
                porcentajes porcen = new porcentajes(Session["empresa"].ToString(),true);

                if (porcen.checarPorcentajes())
                {
                    gdProductos.DataSource = porcen.getProductos();
                    gdProductos.DataBind();

                    porcen.contribuciones();

                    gdContribuciones.DataSource = porcen.getTablaContribuciones();
                    gdContribuciones.DataBind();

                    lblContribucion.Text = "La contribucion marginal ponderada promedio es: "+porcen.getContribucion();

                    PE = porcen.getPuntoEquilibrio();


                    lblPuntoEquilibrio.Text = "El punto de equilibrio es: "+PE;

                    porcen.comprobaciones(PE);

                    gdIngresos.DataSource = porcen.getTablaContribuciones();
                    gdIngresos.DataBind();

                    lblutilidad.Text = "La utilidad es:" + porcen.getUtilidad();

                    lblSuma.Text = "La suma del margen de contribución es: "+porcen.getSuma();
                    lblCostoFijo.Text = "Los costos fijos de la empresa son: " + porcen.getCostoFijo();


                    //Response.Write("<script>alert(\"si suman 100 el porcentaje de produccion\");</script>");
                }
                else
                {
                    Session.Add("mensaje", "no existen productos suficientes");
                    Response.Redirect("index.aspx");
                }
            }



        }


    }

    protected void btnRegresar_Click(object sender, EventArgs e)
    {
        Session.Clear();
        Response.Redirect("index.aspx");
    }
}