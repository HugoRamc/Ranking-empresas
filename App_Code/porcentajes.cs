using System;
using System.Collections.Generic;
using System.Data;

/// <summary>
/// Esta clase es para establecer todas las tablas para la el punto de equilibrio mezclado
/// </summary>
public class porcentajes
{

    //declaramos las variables de instancia
    private cBD cbase;
    private String empresa;
    private DataTable dt;
    private DataTable dt2;
    private DataTable dt3;
    private double promedio;
    private double costoFijo;
    private double contrProm;
    private double utilidad;
    private double utilidadEsperada;
    private List<double> precio;
    private List<double> costo;
    private Boolean val;
    private int porcentajeUtilidad;

    //hacemos dos contructores uno para cuando es normal y el segundo para cuando existe utilidad 
    public porcentajes(String empresa,Boolean val)
    {
        this.val = val;

        utilidad = 0;
        precio = new List<double>();
        costo = new List<double>();
        this.empresa = empresa;
        contrProm = 0;
        cbase = new cBD();
        dt2 = new DataTable();
        dt2.Columns.Add("Contribucion",typeof(Double));
        dt2.Columns.Add("ContribucionPonde",typeof(Double));
        dt2.Columns.Add("Producto",typeof(String));
        dt2.Columns.Add("produccion",typeof(Double));
        dt2.Columns.Add("costosFijos", typeof(Double));
        

        dt2.Columns.Add("cantidad",typeof(Double));
        dt2.Columns.Add("ingresoventa",typeof(Double));
        dt2.Columns.Add("costosVariables",typeof(Double));
        dt2.Columns.Add("margenContribucion",typeof(Double));
        


    }



    //este metodo es para verificar que hay al menos dos productos y que la suma del porcentaje de produccion es 100
    //agregué un pequño automata para verificar que al menos existan dos productos registrados

    public Boolean checarPorcentajes()
    {
        dt = cbase.consulta("spProductos", empresa);
        double suma = 0;
        int flag = 0;
        double produc;
        double precioVenta, costoVariable;
        double margenContr;
        costoFijo = Convert.ToDouble(dt.Rows[0]["CostoFijo"]);

        if (val)
        {
            utilidadEsperada = 0;
        }
        else
        {
            utilidadEsperada = Convert.ToDouble(dt.Rows[0]["CostoFijo"]) * ((Convert.ToDouble(dt.Rows[0]["utilidad"])/100));
        }

        porcentajeUtilidad = Convert.ToInt32(dt.Rows[0]["utilidad"]);



        foreach (DataRow dr in dt.Rows)
        {
            switch (flag)
            {
                case 0:
                    flag = 1;
                break;
                case 1:
                    flag = 2;
                break;
            }
            suma = suma + Convert.ToDouble(dr["produccion"].ToString());

            produc = Convert.ToDouble(dr["produccion"].ToString())/100;
            precioVenta = Convert.ToDouble(dr["precioVenta"].ToString());
            costoVariable = Convert.ToDouble(dr["costoVariable"].ToString());

            precio.Add(precioVenta);
            costo.Add(costoVariable);

            margenContr = precioVenta - costoVariable;

            dt2.Rows.Add(margenContr, (margenContr * produc), dr["nombreProducto"].ToString(),(produc),costoFijo);


        }

        if (suma == 100 && flag == 2)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    //este metodo es para obtener la contribucion ponderada promedio

    public void contribuciones()
    {
        foreach (DataRow dr in dt2.Rows)
        {
            contrProm += Convert.ToDouble(dr["ContribucionPonde"]);
        }

    }

    //este metodo es para terminar de completar la tabla 

    public void comprobaciones(Double PE)
    {
        int i = 0;
        double cantidad;
        double m;
        foreach (DataRow dr in dt2.Rows)
        {
            
            cantidad = (PE * Convert.ToDouble(dr["produccion"]));
            
            utilidad = utilidad + (cantidad * (precio[i] - costo[i]));

            m = (cantidad * (precio[i] - costo[i]));

            dr["cantidad"] = (cantidad);
            dr["ingresoVenta"] = (cantidad * precio[i]);
            dr["costosVariables"] = (cantidad * costo[i]);
            dr["margenContribucion"] = m;


            i++;
        }
    }

    public Double getContribucion()
    {
        return contrProm;
    }

    public DataTable getProductos()
    {
        return dt;
    }

    public DataTable getTablaContribuciones()
    {
        return dt2;
    }

    public Double getPuntoEquilibrio()
    {
        
        return ((costoFijo + utilidad + utilidadEsperada) / contrProm);
        
    }

    public double getUtilidad()
    {
        return (utilidad-costoFijo);
    }

    public double getSuma()
    {
        return utilidad;
    }

    public double getCostoFijo()
    {
        return costoFijo;
    }

    public double getPorcentajeUtilidad()
    {
        return porcentajeUtilidad;
    }


}